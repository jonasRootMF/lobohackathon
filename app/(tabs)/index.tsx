import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
// import { Text, View } from '@/components/Themed';

// Importation of dependencies
import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { BarCodeEvent, BarCodeScannerResult } from 'expo-barcode-scanner';
import { CameraView, Camera } from 'expo-camera/next'
import axios from 'axios';
import * as Notifications from 'expo-notifications';

async function registerForPushNotificationsAsync(): Promise<string | undefined> {
  await Notifications.requestPermissionsAsync({
    ios: {
      allowAlert: true,
      allowSound: true,
      allowAnnouncements: true,
    },
  });

  // Only get the token if user has granted permission
  const { status } = await Notifications.getPermissionsAsync();
  if (status !== 'granted') {
    alert('Failed to get push token for push notification!');
    return undefined;
  }

  const token = (await Notifications.getExpoPushTokenAsync()).data;
  console.log("Push token:", token);
  return token;
}


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});


export function useNotificationResponse() {
  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(notification => {
      console.log('Notification Received:', notification);
    });

    const responseSubscription = Notifications.addNotificationResponseReceivedListener(response => {
      console.log('Notification Clicked:', response);
    });

    return () => {
      subscription.remove();
      responseSubscription.remove();
    };
  }, []);
}


export default function TabOneScreen() {

  // Implement scan QR code
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState<boolean>(false);
  const [QRData, setQRData] = useState<{
    parkingLot: string;
    userId: string;
    event: 'checkIn' | 'checkOut'
  } | null>(null);

  registerForPushNotificationsAsync()
  useNotificationResponse()

  // Variables to send to backend
  const urlBackend = 'http://172.28.150.153:3000/api/kigo/v1/';

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  // Send the JSON to backend only when the data change
  useEffect(() => {
    if (QRData !== null) {
      const postUrl = QRData?.event === 'checkIn' ? 'checkin' : 'checkout'
      axios.post(`${urlBackend}/${postUrl}`, QRData)
        .then(response => {
          console.log('Data posted successfully:', response.data);
        })
        .catch(error => {
          console.error('Error posting data:', JSON.stringify(error));
        });
    }
  }, [QRData]);


  const handleBarCodeScanned = ({ type, data }: BarCodeScannerResult) => {
    setScanned(true);
    setQRData(JSON.parse(data));
    console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
      <View style={styles.container}>
      {/* <BarCodeScanner
        style={styles.scanner}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      /> */}
      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ["qr", "pdf417"],
        }}
        style={StyleSheet.absoluteFillObject}
      />

      <Text style={styles.titleScreen}>Scan QR Code</Text>

      <View style={styles.overlay}>
        <Image
          source={require('../../assets/images/cuadrado.png')}
          style={styles.overlayImage}
        />
      </View>

      {scanned && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setScanned(false)}
          >
            <Text style={styles.buttonText}>Scan Again</Text>
          </TouchableOpacity>
        </View>
      )}


    </View>
    
    
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: 'white',
    flex: 1, // Usar todo el espacio disponible
    flexDirection: 'column', // Elementos apilados verticalmente
    justifyContent: 'center', // Centrar contenido verticalmente
    alignItems: 'center', // Centrar contenido horizontalmente
  },
  scanner: {
    flex: 0.8, // Toma la mayor parte de la pantalla
    width: '100%', // Asegura que ocupe todo el ancho disponible
  },
  buttonContainer: {
    flex: 0.1, // Toma una pequeña parte de la pantalla
    width: '100%', // Asegura que el botón ocupe todo el ancho disponible
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 25, // Posiciona 20 píxeles arriba del borde inferior de la vista contenedora
    alignSelf: 'center' // Centra horizontalmente dentro del contenedor
  },
  titleScreen: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    position: 'absolute',
    top: 25, // Posiciona 20 píxeles arriba del borde inferior de la vista contenedora
    alignSelf: 'center' // Centra horizontalmente dentro del contenedor
  },
  button: {
    padding: 10,
    backgroundColor: '#27AE29',
    borderRadius: 5,
    marginTop: 30,
    paddingHorizontal: 60
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  overlay: {
    position: 'absolute',
    padding: 16,
    right: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    bottom: 0
  },
  overlayImage: {
    width: 200,  // Set the width and height as needed
    height: 200,
    resizeMode: 'contain'  // Ensure the entire image is fit within the bounds without clipping
  }
});

import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
// import { Text, View } from '@/components/Themed';

// Importation of dependencies
import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { BarCodeEvent, BarCodeScannerResult } from 'expo-barcode-scanner';

export default function TabOneScreen() {

  // Implement scan QR code
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState<boolean>(false);
  const [text, setText] = useState<string>('Scan QR Code');

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }: BarCodeScannerResult) => {
    setScanned(true);
    setText(data);
    console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }



  return (
    // <View style={styles.container}>
    //   <Text style={styles.title}>Tab One</Text>
    //   <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    //   <EditScreenInfo path="app/(tabs)/index.tsx" />
    // </View>

    <View style={styles.container}>
      <BarCodeScanner
        style={styles.scanner}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      />

      {/* <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      /> */}
      <Text style={styles.maintext}>{text}</Text>

      {scanned && (
        <View style={styles.buttonContainer}>
        <TouchableOpacity
        style={styles.button}
        onPress={() => setScanned(false)}
        >
          <Text style={styles.buttonText}>Tap to Scan Again</Text>
        </TouchableOpacity>
        </View>
      )}
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // title: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  // },
  // separator: {
  //   marginVertical: 30,
  //   height: 1,
  //   width: '80%',
  // },

  // container: {
  //   flex: 1,
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: 'black',
  // },
  // buttonContainer: {
  // },
  // button: {
  //   padding: 10,
  //   backgroundColor: '#007BFF',
  //   borderRadius: 5,
  //   marginTop: 30
  // },
  // buttonText: {
  //   color: 'white',
  //   textAlign: 'center',
  // },
  // maintext: {
  //   fontSize: 18,
  //   margin: 20,
  //   color: 'white'
  // }

  container: {
    flex: 1, // Usar todo el espacio disponible
    flexDirection: 'column', // Elementos apilados verticalmente
    justifyContent: 'center', // Centrar contenido verticalmente
    alignItems: 'center', // Centrar contenido horizontalmente
  },
  scanner: {
    flex: 0.9, // Toma la mayor parte de la pantalla
    width: '100%', // Asegura que ocupe todo el ancho disponible
  },
  buttonContainer: {
    flex: 0.1, // Toma una pequeña parte de la pantalla
    width: '100%', // Asegura que el botón ocupe todo el ancho disponible
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 80, // Posiciona 20 píxeles arriba del borde inferior de la vista contenedora
    alignSelf: 'center' // Centra horizontalmente dentro del contenedor
  },
  maintext: {
      fontSize: 25,
      fontWeight: 'bold',
      margin: 50,
      color: 'white',
      position: 'absolute',
      top: 20, // Posiciona 20 píxeles arriba del borde inferior de la vista contenedora
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
  imageStyle: {

  }
});

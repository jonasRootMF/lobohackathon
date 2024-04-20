import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView, { Overlay, Polygon } from "react-native-maps";

const ParkingLotAvailabilityMap = () => {
  const angeCoordinates = [
    { latitude: 19.03306865362903, longitude: -98.23365440182525 },
    { latitude: 19.03304229674923, longitude: -98.23230681419683 },
    { latitude: 19.03103916164693, longitude: -98.23223246453458 },
    { latitude: 19.03098413382186, longitude: -98.23361614489895 },
    { latitude: 19.03306865362903, longitude: -98.23365440182525 },
  ];

  const solestaCoordinates = [
    { latitude: 19.034459349370458, longitude: -98.23050711163663 },
    { latitude: 19.03514575839404, longitude: -98.22978099928473 },
    { latitude: 19.034730896136548, longitude: -98.22931820240107 },
    { latitude: 19.03413500126239, longitude: -98.23005229400961 },
    { latitude: 19.034459349370458, longitude: -98.23050711163663 },
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 19.034207,
          longitude: -98.232367,
          latitudeDelta: 0.00009,
          longitudeDelta: 0.011,
        }}
      >
        <Polygon
          coordinates={angeCoordinates}
          strokeColor="#FF0000" // Outline color
          fillColor="rgba(255, 0, 0, 0.5)" // Fill color with opacity
          strokeWidth={1}
        />
        <Polygon
          coordinates={solestaCoordinates}
          strokeColor="##65cf30" // Outline color
          fillColor="rgba(101, 207, 48, 0.5)" // Fill color with opacity
          strokeWidth={1}
        />
      </MapView>
      <View style={styles.infoContainer}>
        <Text style={styles.locationName}>Angelopolis</Text>
        <TouchableOpacity style={[styles.button, styles.highCapacity]}>
          <Text style={styles.highCapacity}>Aforo Alto</Text>
        </TouchableOpacity>
        <Text style={styles.locationName}>Solesta</Text>
        <TouchableOpacity style={[styles.button, styles.lowCapacity]}>
          <Text style={styles.lowCapacity}>Aforo Bajo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: "65%",
  },
  infoContainer: {
    backgroundColor: '#FFFFFF',
    paddingBottom: 100,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  locationName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  highCapacity: {
    backgroundColor: 'white',
    color: 'red',
    fontWeight: 'bold',
  },
  lowCapacity: {
    backgroundColor: 'white',
    color: 'green',
    fontWeight: 'bold',
  },
  buttonText: {
    
  },
});

export default ParkingLotAvailabilityMap;

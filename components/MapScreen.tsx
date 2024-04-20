import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
  // Dummy coordinates for the marker
  const markerCoordinate = { latitude: 19.0051844, longitude: -98.2059513 };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: markerCoordinate.latitude,
          longitude: markerCoordinate.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={markerCoordinate} />
      </MapView>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Automóvil 1</Text>
        <View style={styles.statusContainer}>
          <Text style={styles.statusTitle}>Oficina</Text>
          <Text style={styles.statusText}>Tu auto ha llegado a la oficina</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Registrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: '60%', // Adjust as needed
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  statusContainer: {
    backgroundColor: '#E8E8E8', // Replace with the correct color
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  statusTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statusText: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  addButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D8D8D8', // Replace with the correct color
    borderRadius: 25,
  },
  addButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  registerButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FF6D00', // Replace with the correct color
    borderRadius: 20,
  },
  registerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default MapScreen;

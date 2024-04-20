import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { Audio } from 'expo-av';
import Icon from 'react-native-vector-icons/FontAwesome';  // Using FontAwesome icons
import { FontAwesome } from '@expo/vector-icons';


const MapScreen = () => {
  // Dummy coordinates for the marker
  const markerCoordinate = { latitude: 19.0051844, longitude: -98.2059513 };

  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    loadSound();
    return () => {
      // Unload the sound when the component is unmounted
      sound?.unloadAsync();
    };
  }, []);

  async function loadSound() {
    const { sound: newSound } = await Audio.Sound.createAsync(
      require('../assets/sound/alarma.mp3'), // Ensure this path is correct
      { shouldPlay: false }
    );
    setSound(newSound);
  }

  const handlePlayPause = async () => {
    if (!sound) {
      return;
    }

    // if (isPlaying) {
    //   await sound.pauseAsync();
    // } else {
    //   await sound.playAsync();
    // }

    if (isPlaying) {
      console.log('Pausing Sound');
      await sound.pauseAsync();
      setIsPlaying(false);
    } else {
      console.log('Playing or Replaying Sound');
      await sound.setPositionAsync(0);  // This line sets the playback position to the start
      await sound.playAsync();
      setIsPlaying(true);
    }
    setIsPlaying(!isPlaying);
  };

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

          <TouchableOpacity style={styles.soundBtn} onPress={handlePlayPause}>
            <FontAwesome 
              name={isPlaying ? 'pause' : 'play'}
              size={50}
              color="white"
            />
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
  soundBtn: {
    backgroundColor: '#FF6D00',
    padding: 10,
    borderRadius: 5,
    // Flexbox properties for centering content
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    width: 80, // Define width for consistency
    height: 80, // Define height for consistency
  }
});

export default MapScreen;

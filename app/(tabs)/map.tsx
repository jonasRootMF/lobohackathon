import MapScreen from '@/components/MapScreen'
import React from 'react'
import { View, StyleSheet } from 'react-native'

const map = () => {
  return (
    <View style={styles.container}>
      <MapScreen/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff5a00",
  },
});

export default map
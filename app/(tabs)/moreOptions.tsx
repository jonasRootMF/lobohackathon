import MapScreen from '@/components/MapScreen'
import ParkingLotAvailabilityMap from '@/components/ParkingLotAvailabilityMap'
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const moreOptions = () => {
  return (
    <View style={styles.container}>
      <ParkingLotAvailabilityMap/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff5a00",
  },
});

export default moreOptions
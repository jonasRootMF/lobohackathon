import CarSelectionScreen from '@/components/CarSelectionScreen'
import React from 'react'
import { View, StyleSheet } from 'react-native'

const status = () => {
  return (
    <View style={styles.container}>
      <CarSelectionScreen/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff5a00",
  },
});

export default status
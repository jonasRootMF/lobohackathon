import CarSelectionScreen from '@/components/CarSelectionScreen'
import React from 'react'
import { View } from 'react-native'

const carsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
        <CarSelectionScreen/>
    </View>
  )
}

export default carsScreen
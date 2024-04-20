import CarSelectionScreen from '@/components/CarSelectionScreen'
import DriverSelectionScreen from '@/components/DriverSelectionScreen';
import React from 'react'
import { View } from 'react-native'

const driver = () => {
  return (
    <View style={{ flex: 1 }}>
        <DriverSelectionScreen/>
    </View>
  )
};

export default driver
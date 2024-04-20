import ElevateServicesScreen from '@/components/ElevateServices'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const elevateServices = () => {
  return (
    <View style={styles.container}>
        <ElevateServicesScreen/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default elevateServices
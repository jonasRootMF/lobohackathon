import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const status = () => {
  return (
    <View style={styles.container}>
      <Text>Under Construction...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'black',
    backgroundColor: "white",
  },
});

export default status
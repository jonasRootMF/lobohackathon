import { View } from "@/components/Themed";
import { FlatList, StyleSheet, Text } from "react-native";
import React from "react";
import DriverSelectionScreen from "@/components/DriverSelectionScreen";

const geosek = () => {
  return (
    <View style={styles.container}>
      <Text>Under Construction...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff5a00",
  },
});

export default geosek;

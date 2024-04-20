import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import CardsList from "./CardsList";

const CarSelectionScreen = () => {
  const cars = [
    {
      id: 1,
      name: "Automóvil",
      iconName: "car",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      name: "Automóvil",
      iconName: "car",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      name: "Automóvil",
      iconName: "car",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    // ... more drivers
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Selecciona tu Automóvil</Text>
      <CardsList data={cars} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff5a00", // Replace with the appropriate color
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000", // Replace with the appropriate color
    textAlign: "center",
    marginVertical: 20,
  },
});

export default CarSelectionScreen;

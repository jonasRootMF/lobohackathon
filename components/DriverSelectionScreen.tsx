import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import CardsList from "./CardsList";

const DriverSelectionScreen = () => {
  // This data could come from your state or props
  const drivers = [
    {
      id: 1,
      name: "Conductor",
      iconName: 'user-o',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      name: "Conductor",
      iconName: 'user-o',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      name: "Conductor",
      iconName: 'user-o',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    // ... more drivers
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Selecciona tu conductor</Text>
      <CardsList data={drivers}/>
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

export default DriverSelectionScreen;

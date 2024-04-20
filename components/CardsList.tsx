import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

interface CardListProps {
    data: {
        id: number;
        iconName: string;
        name: string;
        description: string;
    }[];
}


const CardsList = ({ data } : CardListProps) => {
  return (
    <>
      {data.map((item) => (
        <View key={item.id} style={styles.card}>
          <View style={styles.cardContentContainer}>
            <View style={styles.avatarContainer}>
              { /* @ts-ignore */ }
              <FontAwesome size={80} color="black" name={item.iconName} />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Contratar</Text>
                </TouchableOpacity>
                <View style={styles.indicatorContainer}>
                  <View style={styles.indicator} />
                  <View style={styles.indicator} />
                  <View style={styles.indicator} />
                </View>
              </View>
            </View>
          </View>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
    card: {
      backgroundColor: "#FFFFFF", // Replace with the appropriate color
      borderRadius: 10,
      paddingRight: 20,
      paddingLeft: 20,
      paddingTop: 10,
      paddingBottom: 10,
      marginHorizontal: 16,
      marginBottom: 16,
      shadowColor: "#000", // For iOS
      shadowOffset: { width: 0, height: 2 }, // For iOS
      shadowOpacity: 0.1, // For iOS
      shadowRadius: 2, // For iOS
      elevation: 5, // For Android
    },
    cardContentContainer: {
      display: "flex",
      flexDirection: "row",
    },
    cardContent: {
      flex: 2,
    },
    avatarContainer: {
      justifyContent: "center",
      display: "flex",
      flex: 1,
    },
    avatar: {
      borderRadius: 40,
      backgroundColor: "#D8D8D8", // Replace with the appropriate color
      marginBottom: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 5,
    },
    description: {
      fontSize: 14,
      color: "#585858", // Replace with the appropriate color
      marginBottom: 10,
    },
    buttonsContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'baseline',
      marginTop: 20,
      gap: 30
    },
    button: {
      backgroundColor: "#FF6D00", // Replace with the appropriate color
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 20,
      alignItems: "center",
      marginBottom: 10,
    },
    buttonText: {
      fontSize: 16,
      color: "#FFFFFF", // Replace with the appropriate color
      fontWeight: "bold",
    },
    indicatorContainer: {
      flexDirection: "row",
      justifyContent: "center",
    },
    indicator: {
      height: 10,
      width: 10,
      backgroundColor: "#FF6D00", // Replace with the appropriate color
      marginHorizontal: 5,
      borderRadius: 5,
    },
  });

export default CardsList;

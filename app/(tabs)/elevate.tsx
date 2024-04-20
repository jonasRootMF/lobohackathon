import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const ElevateView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          source={require("@/assets/images/KigoLogo.png")} // Replace with your logo image URL
          style={styles.logo}
        />
        <Text style={styles.description}>Aprovecha grandes beneficios</Text>
        <View style={styles.listContainer}>
          {/* List of benefits */}
          <Text style={styles.listItem}>• Cashback</Text>
          <Text style={styles.listItem}>• Renta de autos</Text>
          <Text style={styles.listItem}>• Aparta tu taxi</Text>
          <Text style={styles.listItem}>• TAG de seguridad</Text>
          <Text style={styles.listItem}>• Asistencia personalizada</Text>
        </View>
        <TouchableOpacity style={styles.subscribeButton}>
          <Text style={styles.subscribeButtonText}>Suscribirme</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff5a00'
  },
  contentContainer: {
    margin: 20,
    padding: 20,
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    color: "black",
  },
  logo: {
    width: "100%",
    height: "20%", // Replace with the size of your choice
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000000",
  },
  subtitle: {
    fontSize: 18,
    color: "#000000",
    marginBottom: 10,
  },
  description: {
    marginTop: 20,
    fontSize: 16,
    color: "#000000",
    marginBottom: 20,
  },
  listContainer: {
    alignItems: "flex-start",
    width: "80%",
  },
  listItem: {
    fontSize: 24,
    color: "#000000",
    paddingVertical: 5,
    fontWeight: "bold",
  },
  subscribeButton: {
    backgroundColor: "#ff5a00", // Replace with the color of your choice
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 50,
    marginBottom: 50, // Adjust as needed for your content
  },
  subscribeButtonText: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default ElevateView;

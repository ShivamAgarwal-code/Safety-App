import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  PressableProps,
} from "react-native";
import {Link} from "expo-router";
import ScreenTemplate from "../../components/ScreenTemplate";
import {Feather} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

export default function Index() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.openDrawer()}>
          <Feather name="menu" size={24} color="#000" />
        </Pressable>
        <Image
          source={require("../../assets/images/Logo.png")}
          style={styles.logoImage}
          resizeMode="contain"
        />
        <Pressable>
          <Feather name="search" size={24} color="#000" />
        </Pressable>
      </View>

      <View style={styles.content}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.title}>Welcome to NOODHUB! 🎉</Text>
          <Text style={styles.subtitle}>
            Evaluate your preparedness for emergencies and get personalized tips
            to improve.
          </Text>
        </View>

        <Pressable
          onPress={() => navigation.navigate("SelfAssestment/issues")}
          style={({pressed}) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>Start Self-Assessment</Text>
        </Pressable>

        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/gear-helmet.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  logoImage: {
    width: 120,
    height: 40,
  },
  content: {
    // flex: 1,
    padding: 20,
    elevation: 2,
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 20,
  },
  welcomeContainer: {
    marginVertical: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
  },
  button: {
    backgroundColor: "#003366",
    paddingVertical: 4,
    paddingHorizontal: 4,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#003366",
    width: "70%",
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
  },
  image: {
    width: 200,
    height: 200,
  },
});

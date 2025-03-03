import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Feather} from "@expo/vector-icons";
const issues = [
  {
    title: "Crime-related issues",
    icon: require("../../assets/images/crime.png"),
  },
  {
    title: "Health emergencies",
    icon: require("../../assets/images/health.png"),
  },
  {
    title: "Household risks",
    icon: require("../../assets/images/household.png"),
  },
  {
    title: "Natural disasters",
    icon: require("../../assets/images/natural.png"),
  },
  {
    title: "Cybersecurity risks",
    icon: require("../../assets/images/cybersecurity.png"),
  },
  {
    title: "Weather-related events",
    icon: require("../../assets/images/weather.png"),
  },
  {
    title: "Regional or community-specific risks",
    icon: require("../../assets/images/community.png"),
  },
];

export default function Issues() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.mainheader}>
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
      {/* <Text style={styles.header}>Issues</Text> */}
      <View style={styles.grid}>
        {issues.map((issue, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => navigation.navigate("SelfAssestment/Questions")}
          >
            <Image source={issue.icon} style={styles.icon} />
            <Text style={styles.title}>{issue.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
    backgroundColor: "#f9f9f9",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  mainheader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    marginBottom: 16,
  },
  logoImage: {
    width: 120,
    height: 40,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 16,
  },
  card: {
    width: "48%",
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    textAlign: "center",
  },
});

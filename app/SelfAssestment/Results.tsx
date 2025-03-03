import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

const Results = () => {
  const navigation = useNavigation();
  const score = 75;

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
      <ScrollView style={styles.Scrollcontainer}>
        <Text style={styles.congratsText}>Congratulations!🎉</Text>
        <Text style={styles.subText}>
          Your overall preparedness percentage is {score}%
        </Text>

        <View style={styles.progressCircleContainer}>
          <View style={styles.progressCircle}>
            <Text style={styles.progressPercentage}>{score}%</Text>
            <Text style={styles.scoreLabel}>Score in Hold{"\n"}Category</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Retake Assessment</Text>
          </TouchableOpacity>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.secondaryButton}>
              <Text style={styles.secondaryButtonText}>E-learning</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryButton}>
              <Text style={styles.secondaryButtonText}>Task Management</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Risk Map</Text>
          </TouchableOpacity>
        </View>
        <PersonalizedRecommendations />
        <PersonalizedRecommendations />
        <PersonalizedRecommendations />
        <PersonalizedRecommendations />
        <PersonalizedRecommendations />
        <PersonalizedRecommendations />
      </ScrollView>
    </View>
  );
};
const PersonalizedRecommendations = () => {
  return (
    <View style={styles.subContainer}>
      <View style={styles.recommendationCard}>
        <View style={styles.headerRow}>
          <Text style={styles.categoryTitle}>Weather-related events</Text>
          <MaterialIcons name="check-circle" size={20} color="#4CAF50" />
        </View>

        <Text style={styles.recommendationTitle}>Buy a fire extinguisher</Text>
        <Text style={styles.description}>
          This will help you manage small fires in your home.
        </Text>

        <View style={styles.dateContainer}>
          <MaterialCommunityIcons name="calendar" size={20} color="#666" />
          <View style={styles.dateTextContainer}>
            <Text style={styles.dueDateLabel}>Due Date</Text>
            <Text style={styles.date}>Due Till: February 15</Text>
          </View>
        </View>

        <View style={styles.SubbuttonContainer}>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.buttonText}>Add to Tasks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.resourcesButton}>
            <Text style={styles.resourcesButtonText}>View Resources</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  Scrollcontainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
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
  subContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  congratsText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#333",
  },
  subText: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    marginBottom: 30,
  },
  progressCircleContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  progressCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 15,
    borderColor: "#4CAF50",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  progressPercentage: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  scoreLabel: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  buttonContainer: {
    gap: 15,
    marginBottom: 16,
  },
  buttonRow: {
    flexDirection: "row",
    gap: 10,
  },
  primaryButton: {
    backgroundColor: "rgba(0, 51, 102, 1)",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  primaryButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(0, 51, 102, 1)",
  },
  secondaryButtonText: {
    color: "rgba(0, 51, 102, 1)",
    fontSize: 14,
    fontWeight: "600",
  },
  recommendationCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    gap: 12,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  categoryTitle: {
    fontSize: 14,
    color: "rgba(0, 51, 102, 1)",
    fontWeight: "500",
  },
  recommendationTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  dateTextContainer: {
    gap: 2,
  },
  dueDateLabel: {
    fontSize: 12,
    color: "#666",
  },
  date: {
    fontSize: 12,
    color: "#666",
  },
  SubbuttonContainer: {
    flexDirection: "row",
    gap: 8,
    marginTop: 4,
  },
  addButton: {
    flex: 1,
    backgroundColor: "rgba(0, 51, 102, 1)",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
  resourcesButton: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(0, 51, 102, 1)",
  },
  resourcesButtonText: {
    color: "rgba(0, 51, 102, 1)",
    fontSize: 14,
    fontWeight: "500",
  },
});

export default Results;

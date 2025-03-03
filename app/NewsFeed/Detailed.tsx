import {Feather} from "@expo/vector-icons";
import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {useNavigation} from "@react-navigation/native";

const DetailedUpdateView = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
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
      <ScrollView style={styles.scrollView}>
        <View style={styles.mainCard}>
          <Text style={styles.title}>Severe Storm Warning in Your Area</Text>
          <View style={styles.metaInfo}>
            <Text style={styles.sourceText}>Source: KNMI</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.timeText}>Updated 10 minutes ago</Text>
          </View>

          <Text style={styles.content}>
            A severe flood warning has been issued for Region X following an
            extended period of heavy rainfall that has significantly increased
            the risk of flooding. Rising river levels and swollen streams are
            expected to continue their upward trajectory over the next 24 hours,
            leading to potential overflow in several areas. Local authorities
            are advising all residents to prepare for possible evacuation,
            especially those living near flood-prone zones, and to remain in
            constant contact with emergency services for the latest updates.
          </Text>

          <Text style={styles.content}>
            The situation is dynamic, with rainfall expected to intensify
            throughout the day. As of now, river levels in multiple locations
            have exceeded critical thresholds, causing flooding in several
            low-lying areas. Emergency response teams have been deployed to
            assess the damage, provide support, and implement flood control
            measures, such as sandbagging and rerouting of floodwaters.
          </Text>

          <View style={styles.recommendedSection}>
            <Text style={styles.recommendedTitle}>Recommended Actions:</Text>
            <View style={styles.recommendedCard}>
              {[
                {
                  title: "Stay Indoors:",
                  content: "Avoid unnecessary travel and stay off the roads.",
                },
                {
                  title: "Prepare Emergency Kit:",
                  content:
                    "Gather essentials such as water, non-perishable food, flashlight, and batteries.",
                },
                {
                  title: "Monitor Local News:",
                  content:
                    "Keep an eye on official announcements for evacuation orders or road closures.",
                },
                {
                  title: "Follow Social Media Updates:",
                  content:
                    "Follow local emergency services for real-time alerts.",
                },
              ].map((item, index) => (
                <View key={index} style={styles.recommendedItem}>
                  <Text style={styles.recommendedItemTitle}>{item.title}</Text>
                  <Text style={styles.recommendedItemContent}>
                    {item.content}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          <Pressable style={styles.resourcesButton}>
            <Text style={styles.resourcesButtonText}>
              View Related Resources
            </Text>
            <Feather name="arrow-right" size={20} color="#fff" />
          </Pressable>

          <View style={styles.relatedSection}>
            <Text style={styles.relatedTitle}>Related Alerts:</Text>
            <Text style={styles.relatedAlert}>
              <Text style={styles.relatedAlertTitle}>Flood Warning: </Text>
              <Text style={styles.relatedAlertContent}>
                Region Y – Expected Impact Level: Moderate
              </Text>
            </Text>
            <Text style={styles.relatedAlert}>
              <Text style={styles.relatedAlertTitle}>
                Heavy Rainfall Advisory:{" "}
              </Text>
              <Text style={styles.relatedAlertContent}>
                Region Z – Watch for Flash Flooding
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailedUpdateView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  scrollView: {
    flex: 1,
  },
  subHeader: {
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
  mainCard: {
    backgroundColor: "#fff",
    margin: 16,
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 8,
  },
  metaInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  sourceText: {
    fontSize: 14,
    color: "#666",
  },
  dot: {
    marginHorizontal: 8,
    color: "#666",
  },
  timeText: {
    fontSize: 14,
    color: "#666",
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    marginBottom: 16,
  },
  recommendedSection: {
    marginTop: 24,
    marginBottom: 24,
  },
  recommendedTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FF3B30",
    marginBottom: 12,
  },
  recommendedCard: {
    backgroundColor: "#F0F7FF",
    padding: 16,
    borderRadius: 8,
  },
  recommendedItem: {
    marginBottom: 16,
  },
  recommendedItemTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    marginBottom: 4,
  },
  recommendedItemContent: {
    fontSize: 16,
    color: "#666",
    lineHeight: 22,
  },
  resourcesButton: {
    backgroundColor: "#003366",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 8,
    marginBottom: 24,
    gap: 8,
  },
  resourcesButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  relatedSection: {
    marginBottom: 16,
  },
  relatedTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 12,
  },
  relatedAlert: {
    marginBottom: 8,
  },
  relatedAlertTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007AFF",
  },
  relatedAlertContent: {
    fontSize: 16,
    color: "#333",
  },
});

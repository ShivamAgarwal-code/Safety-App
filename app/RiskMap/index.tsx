import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  Modal,
  Animated,
} from "react-native";
import {Feather} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

export default function RiskMap() {
  const [isFilterVisible, setIsFilterVisible] = React.useState(false);
  const slideAnim = React.useRef(new Animated.Value(-300)).current;
  const [isDetailsVisible, setIsDetailsVisible] = React.useState(false);
  const detailsSlideAnim = React.useRef(new Animated.Value(300)).current;
  const navigation = useNavigation();

  const toggleFilter = () => {
    if (isFilterVisible) {
      Animated.timing(slideAnim, {
        toValue: -300,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setIsFilterVisible(false));
    } else {
      setIsFilterVisible(true);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  const toggleDetails = () => {
    if (isDetailsVisible) {
      Animated.timing(detailsSlideAnim, {
        toValue: 300,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setIsDetailsVisible(false));
    } else {
      setIsDetailsVisible(true);
      Animated.timing(detailsSlideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
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

      {/* Risk Map Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Risk Map</Text>
        <Text style={styles.subtitle}>
          View potential risks and available resources in your area to stay
          prepared and safe.
        </Text>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Feather
            name="search"
            size={20}
            color="#666"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search location (e.g., New York, NY)"
            placeholderTextColor="#666"
          />
          <Pressable style={styles.filterButton} onPress={toggleFilter}>
            <Feather name="sliders" size={20} color="#666" />
          </Pressable>
        </View>

        {/* Warning Banner */}
        <Pressable style={styles.warningBanner}>
          <Feather name="alert-triangle" size={20} color="#FF3B30" />
          <Text style={styles.warningText}>
            Severe Storm Warning in Your Area
          </Text>
          <Feather name="chevron-right" size={20} color="#FF3B30" />
        </Pressable>

        {/* Map Placeholder - Replace with actual map component */}
        <View style={styles.mapContainer}>
          <Image
            source={require("../../assets/images/Map.png")}
            style={styles.mapImage}
            resizeMode="cover"
          />

          {/* Hospital Info Card */}
          {/* <Pressable style={styles.hospitalCard} onPress={toggleDetails}>
            <Text style={styles.hospitalName}>Central Hospital</Text>
            <Text style={styles.hospitalDistance}>1.2 km away</Text>
            <Text style={styles.hospitalPhone}>090078601</Text>
            <Text style={styles.hospitalWebsite}>www.hospital.com</Text>
            <Pressable style={styles.viewMoreButton}>
              <Text style={styles.viewMoreText}>View More</Text>
            </Pressable>
          </Pressable> */}
        </View>

        <View style={styles.sidebarToggleContainer}>
          <Pressable style={styles.sidebarToggleButton} onPress={toggleDetails}>
            <Feather
              name={isDetailsVisible ? "chevron-right" : "chevron-left"}
              size={24}
              color="#fff"
            />
          </Pressable>
        </View>
      </View>

      {/* Filter Modal */}
      <Modal
        visible={isFilterVisible}
        transparent={true}
        onRequestClose={toggleFilter}
        animationType="none"
      >
        <View style={styles.modalOverlay}>
          <Animated.View
            style={[
              styles.filterContainer,
              {
                transform: [{translateX: slideAnim}],
              },
            ]}
          >
            <View style={styles.filterHeader}>
              <Text style={styles.filterTitle}>Filters</Text>
              <Pressable onPress={toggleFilter}>
                <Feather name="x" size={24} color="#000" />
              </Pressable>
            </View>

            {/* Risk Type Section */}
            <View style={styles.filterSection}>
              <Text style={styles.sectionTitle}>Risk Type</Text>
              <View style={styles.chipContainer}>
                {[
                  "Earthquake",
                  "Storm",
                  "Volcano",
                  "Fire",
                  "Tornado",
                  "Thunderstorm",
                ].map((risk) => (
                  <Pressable
                    key={risk}
                    style={[
                      styles.chip,
                      risk === "Storm" ||
                      risk === "Volcano" ||
                      risk === "Tornado"
                        ? styles.chipSelected
                        : null,
                    ]}
                  >
                    <Text
                      style={[
                        styles.chipText,
                        risk === "Storm" ||
                        risk === "Volcano" ||
                        risk === "Tornado"
                          ? styles.chipTextSelected
                          : null,
                      ]}
                    >
                      {risk}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>

            {/* Risk Level Section */}
            <View style={styles.filterSection}>
              <Text style={styles.sectionTitle}>Risk Type</Text>
              {["Critical", "Moderate", "Low"].map((level) => (
                <View key={level} style={styles.checkboxRow}>
                  <View style={styles.checkbox} />
                  <Text style={styles.checkboxLabel}>{level}</Text>
                </View>
              ))}
            </View>

            {/* Resource Type Section */}
            <View style={styles.filterSection}>
              <Text style={styles.sectionTitle}>Resource Type</Text>
              {[
                "Hospitals",
                "Pharmacies",
                "Shelters",
                "Emergency Contacts",
              ].map((resource) => (
                <View key={resource} style={styles.checkboxRow}>
                  <View style={styles.checkbox} />
                  <Text style={styles.checkboxLabel}>{resource}</Text>
                </View>
              ))}
            </View>

            {/* Distance Range Section */}
            <View style={styles.filterSection}>
              <Text style={styles.sectionTitle}>Distance Range</Text>
              <View style={styles.rangeContainer}>
                <Text>0km</Text>
                <View style={styles.rangeSlider}>
                  <View style={styles.rangeProgress} />
                </View>
                <Text>50km</Text>
              </View>
            </View>

            {/* Availability Toggle */}
            <View style={styles.filterSection}>
              <Text style={styles.sectionTitle}>Availability</Text>
              <View style={styles.toggleSwitch}>
                <View style={styles.toggleButton} />
              </View>
            </View>

            {/* Apply Button */}
            <Pressable style={styles.applyButton}>
              <Text style={styles.applyButtonText}>Apply</Text>
            </Pressable>
          </Animated.View>
        </View>
      </Modal>

      {/* Details Sidebar */}
      <Modal
        visible={isDetailsVisible}
        transparent={true}
        onRequestClose={toggleDetails}
        animationType="none"
      >
        <View style={styles.modalOverlay}>
          <Animated.View
            style={[
              styles.detailsContainer,
              {
                transform: [{translateX: detailsSlideAnim}],
              },
            ]}
          >
            <View style={styles.detailsHeader}>
              <Text style={styles.detailsTitle}>Nearby Risks & Resources</Text>
              <Pressable onPress={toggleDetails}>
                <Feather name="chevron-right" size={24} color="#000" />
              </Pressable>
            </View>

            {/* Risk Alerts */}
            <View style={styles.alertCard}>
              <Text style={styles.alertTitle}>Flood Alert</Text>
              <View style={styles.alertLevelContainer}>
                <Feather name="alert-circle" size={20} color="#FF3B30" />
                <Text style={styles.alertLevel}>Critical</Text>
              </View>
              <Text style={styles.alertDescription}>
                Heavy rainfall expected in the next 24 hours. Prepare sandbags
                and avoid driving in low-lying areas.
              </Text>
              <Text style={styles.recommendedAction}>
                Recommended Action: Prepare sandbags and avoid driving in
                low-lying areas.
              </Text>
            </View>

            {/* Hospital Information */}
            <View style={styles.resourceCard}>
              <Text style={styles.resourceTitle}>Central Hospital</Text>
              <View style={styles.resourceInfo}>
                <Feather name="map-pin" size={16} color="#666" />
                <Text style={styles.resourceText}>1.2 km away</Text>
              </View>
              <View style={styles.resourceInfo}>
                <Feather name="phone" size={16} color="#666" />
                <Text style={styles.resourceText}>090078601</Text>
              </View>
              <View style={styles.resourceInfo}>
                <Feather name="globe" size={16} color="#666" />
                <Text style={styles.resourceText}>www.hospital.com</Text>
              </View>
              <Pressable style={styles.directionsButton}>
                <Text style={styles.directionsButtonText}>Get Directions</Text>
              </Pressable>
            </View>

            <View style={[styles.sidebarToggleContainer, {left: -40}]}>
              <Pressable
                style={[styles.sidebarToggleButton, {left: 0}]}
                onPress={toggleDetails}
              >
                <Feather
                  name={isDetailsVisible ? "chevron-right" : "chevron-left"}
                  size={24}
                  color="#fff"
                />
              </Pressable>
            </View>
          </Animated.View>
        </View>
      </Modal>
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
    padding: 16,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 24,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  filterButton: {
    padding: 4,
  },
  warningBanner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFE5E5",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  warningText: {
    flex: 1,
    color: "#FF3B30",
    marginLeft: 8,
    fontSize: 16,
  },
  mapContainer: {
    flex: 1,
    position: "relative",
  },
  mapImage: {
    width: "100%",
    height: "100%",
  },
  hospitalCard: {
    position: "absolute",
    backgroundColor: "#003366",
    padding: 16,
    borderRadius: 8,
    width: 200,
    left: "50%",
    top: "50%",
    transform: [{translateX: -100}, {translateY: -80}],
  },
  hospitalName: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  hospitalDistance: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 4,
  },
  hospitalPhone: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 4,
  },
  hospitalWebsite: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 12,
  },
  viewMoreButton: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 4,
    alignItems: "center",
  },
  viewMoreText: {
    color: "#003366",
    fontWeight: "500",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  filterContainer: {
    backgroundColor: "#fff",
    width: "80%",
    height: "100%",
    padding: 20,
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
  },
  filterHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  filterTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  filterSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 12,
  },
  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  chipSelected: {
    backgroundColor: "#003366",
    borderColor: "#003366",
  },
  chipText: {
    color: "#000",
  },
  chipTextSelected: {
    color: "#fff",
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    marginRight: 12,
  },
  checkboxLabel: {
    fontSize: 16,
  },
  rangeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rangeSlider: {
    flex: 1,
    height: 4,
    backgroundColor: "#ddd",
    marginHorizontal: 12,
  },
  rangeProgress: {
    width: "60%",
    height: "100%",
    backgroundColor: "#003366",
  },
  toggleSwitch: {
    width: 50,
    height: 30,
    backgroundColor: "#003366",
    borderRadius: 15,
    padding: 2,
  },
  toggleButton: {
    width: 26,
    height: 26,
    backgroundColor: "#fff",
    borderRadius: 13,
  },
  applyButton: {
    backgroundColor: "#003366",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: "auto",
  },
  applyButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  detailsContainer: {
    backgroundColor: "#fff",
    width: "80%",
    height: "100%",
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    padding: 20,
  },
  detailsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  detailsTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  alertCard: {
    backgroundColor: "#F8F9FA",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  alertTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  alertLevelContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  alertLevel: {
    color: "#FF3B30",
    marginLeft: 8,
    fontWeight: "500",
  },
  alertDescription: {
    color: "#666",
    marginBottom: 8,
  },
  recommendedAction: {
    color: "#007AFF",
  },
  resourceCard: {
    backgroundColor: "#F8F9FA",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  resourceTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },
  resourceInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  resourceText: {
    marginLeft: 8,
    color: "#666",
  },
  directionsButton: {
    backgroundColor: "#003366",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  directionsButtonText: {
    color: "#fff",
    fontWeight: "500",
  },
  sidebarToggleContainer: {
    position: "absolute",
    right: 0,
    top: "50%",
    transform: [{translateY: -25}],
    zIndex: 1000,
  },
  sidebarToggleButton: {
    backgroundColor: "#003366",
    width: 40,
    height: 50,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

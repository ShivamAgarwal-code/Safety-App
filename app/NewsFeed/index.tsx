import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  Modal,
  Animated,
  ScrollView,
  Image,
} from "react-native";
import {Feather} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

export default function EmergencyUpdates() {
  const [isFilterVisible, setIsFilterVisible] = React.useState(false);
  const slideAnim = React.useRef(new Animated.Value(-300)).current;
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

  const WarningBanner = () => (
    <Pressable style={styles.warningBanner}>
      <Feather name="alert-triangle" size={20} color="#FF3B30" />
      <Text style={styles.warningText}>Severe Storm Warning in Your Area</Text>
      <View style={styles.learnMoreContainer}>
        <Text style={styles.learnMore}>Learn More</Text>
        <Feather name="arrow-right" size={16} color="#FF3B30" />
      </View>
    </Pressable>
  );

  const UpdateCard = () => {
    return (
      <Pressable
        style={styles.updateCard}
        onPress={() => navigation.navigate("NewsFeed/Detailed")}
      >
        <View style={styles.updateHeader}>
          <View style={styles.sourceInfo}>
            <Text style={styles.sourceText}>Source: KNMI</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.timeText}>Updated 10 minutes ago</Text>
          </View>
          <View style={styles.criticalBadge}>
            <Feather name="alert-circle" size={16} color="#FF3B30" />
            <Text style={styles.criticalText}>Critical</Text>
          </View>
        </View>
        <Text style={styles.updateTitle}>
          Severe Storm Warning in Your Area
        </Text>
        <Text style={styles.updateDescription}>
          Heavy rainfall expected in the next 24 hours. Prepare sandbags and
          avoid driving in low-lying areas.
        </Text>
        <Text style={styles.readMore}>Read More</Text>
      </Pressable>
    );
  };

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

      {/* First card with title and search */}
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.mainCard}>
          <Text style={styles.title}>Emergency Updates</Text>
          <Text style={styles.subtitle}>
            Stay informed with real-time updates from trusted sources like KNMI
            and RIVM. Filter updates based on location and type to stay
            prepared.
          </Text>

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
            <Pressable onPress={toggleFilter}>
              <Feather name="chevron-down" size={20} color="#666" />
            </Pressable>
            <Pressable style={styles.filterButton} onPress={toggleFilter}>
              <Feather name="sliders" size={20} color="#666" />
            </Pressable>
          </View>

          {/* Warning Banners */}
          <WarningBanner />
          <WarningBanner />
        </View>

        {/* Updates List */}
        <View style={styles.updatesContainer}>
          <UpdateCard />
          <UpdateCard />
          <UpdateCard />
        </View>
      </ScrollView>

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
                  {name: "Earthquake", selected: false},
                  {name: "Storm", selected: true},
                  {name: "Volcano", selected: true},
                  {name: "Fire", selected: false},
                  {name: "Torando", selected: true},
                  {name: "Thunderstorm", selected: false},
                ].map((risk) => (
                  <Pressable
                    key={risk.name}
                    style={[styles.chip, risk.selected && styles.chipSelected]}
                  >
                    <Text
                      style={[
                        styles.chipText,
                        risk.selected && styles.chipTextSelected,
                      ]}
                    >
                      {risk.name}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>

            {/* Urgency Section */}
            <View style={styles.filterSection}>
              <Text style={styles.sectionTitle}>Urgency</Text>
              {["Critical", "Moderate", "Low"].map((level) => (
                <View key={level} style={styles.checkboxRow}>
                  <Pressable style={styles.checkbox}>
                    {/* Add checkmark icon if selected */}
                  </Pressable>
                  <Text style={styles.checkboxLabel}>{level}</Text>
                </View>
              ))}
            </View>

            {/* Location Section */}
            <View style={styles.filterSection}>
              <Text style={styles.sectionTitle}>Location</Text>
              {["My Area", "National Updates"].map((option) => (
                <View key={option} style={styles.checkboxRow}>
                  <Pressable style={styles.checkbox}>
                    {/* Add checkmark icon if selected */}
                  </Pressable>
                  <Text style={styles.checkboxLabel}>{option}</Text>
                </View>
              ))}
            </View>

            {/* Apply Button */}
            <Pressable style={styles.applyButton}>
              <Text style={styles.applyButtonText}>Apply</Text>
            </Pressable>
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
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
  scrollContainer: {
    flex: 1,
  },
  mainCard: {
    backgroundColor: "#fff",
    padding: 16,
    margin: 16,
    marginBottom: 8,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#000",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 24,
    lineHeight: 24,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#666",
  },
  filterButton: {
    marginLeft: 8,
  },
  warningBanner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF1F0",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#FFE5E5",
  },
  warningText: {
    flex: 1,
    color: "#FF3B30",
    fontSize: 16,
    marginLeft: 8,
  },
  learnMoreContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  learnMore: {
    color: "#FF3B30",
    fontSize: 16,
  },
  updatesContainer: {
    padding: 16,
    paddingTop: 0,
  },
  updateCard: {
    backgroundColor: "#F0F7FF",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  updateHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  sourceInfo: {
    flexDirection: "row",
    alignItems: "center",
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
  criticalBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF1F0",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  criticalText: {
    color: "#FF3B30",
    marginLeft: 4,
    fontSize: 14,
    fontWeight: "500",
  },
  updateTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#000",
  },
  updateDescription: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
    marginBottom: 8,
  },
  readMore: {
    color: "#007AFF",
    fontSize: 16,
    textDecorationLine: "underline",
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
    marginBottom: 24,
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
    marginBottom: 16,
    color: "#333",
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
    marginBottom: 8,
    marginRight: 8,
  },
  chipSelected: {
    backgroundColor: "#003366",
    borderColor: "#003366",
  },
  chipText: {
    color: "#333",
    fontSize: 14,
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
    borderRadius: 4,
    marginRight: 12,
  },
  checkboxLabel: {
    fontSize: 16,
    color: "#333",
  },
  applyButton: {
    backgroundColor: "#003366",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  },
  applyButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  detailContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  detailScroll: {
    flex: 1,
    padding: 16,
  },
  detailTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 8,
  },
  detailMeta: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  detailSource: {
    fontSize: 14,
    color: "#666",
  },
  detailTime: {
    fontSize: 14,
    color: "#666",
  },
  detailContent: {
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
    marginBottom: 16,
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
  relatedSection: {
    marginBottom: 24,
  },
  relatedTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 16,
  },
  relatedAlert: {
    backgroundColor: "#F0F7FF",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  relatedAlertTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#007AFF",
    marginBottom: 4,
  },
  relatedAlertContent: {
    fontSize: 14,
    color: "#666",
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
});

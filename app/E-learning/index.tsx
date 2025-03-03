import React, {useState} from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
} from "react-native";
import {Feather} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

export default function ELearning() {
  const navigation = useNavigation();
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const categories = ["First Aid", "Fire", "Emergency", "House help"];
  const difficultyLevels = ["Easy", "Medium", "Difficult"];
  const durations = ["Short", "Medium", "Long"];
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);

  return (
    <View style={styles.container}>
      {/* Header */}
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

      <ScrollView style={styles.container}>
        {/* Featured Course Card */}
        <View style={styles.featuredCard}>
          <Text style={styles.cardTitle}>Learn Emergency Skills</Text>
          <Text style={styles.cardDescription}>
            Enhance your preparedness with expert-led courses covering first
            aid, emergency planning, and safety essentials.
          </Text>
          <Pressable style={styles.exploreButton}>
            <Text style={styles.exploreButtonText}>Explore all</Text>
            <Feather name="arrow-right" size={20} color="#003366" />
          </Pressable>
        </View>

        {/* Progress Circle */}
        <View style={styles.progressContainer}>
          <View style={styles.progressCircle}>
            <Text style={styles.progressText}>80%</Text>
          </View>
          <Text style={styles.progressLabel}>You've completed</Text>
          <Text style={styles.progressSubLabel}>3 of 5 courses</Text>
        </View>

        {/* Search and Filter */}
        <View style={styles.searchSection}>
          <View style={styles.searchContainer}>
            <Feather name="search" size={20} color="#666" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search courses..."
              placeholderTextColor="#666"
            />
          </View>
          <Pressable
            style={styles.filterButton}
            onPress={() => setIsFilterVisible(!isFilterVisible)}
          >
            <Text style={styles.filterButtonText}>Filters</Text>
            <Feather name="sliders" size={20} color="#666" />
          </Pressable>
        </View>

        {/* Filter Panel */}
        {isFilterVisible && (
          <View style={styles.filterPanel}>
            {/* Categories */}
            <View style={styles.filterSection}>
              <Text style={styles.filterSectionTitle}>Category</Text>
              <View style={styles.categoryContainer}>
                {categories.map((category) => (
                  <Pressable
                    key={category}
                    style={[
                      styles.categoryChip,
                      selectedCategory === category &&
                        styles.categoryChipSelected,
                    ]}
                    onPress={() => setSelectedCategory(category)}
                  >
                    <Text
                      style={[
                        styles.categoryChipText,
                        selectedCategory === category &&
                          styles.categoryChipTextSelected,
                      ]}
                    >
                      {category}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>

            {/* Difficulty Level */}
            <View style={styles.filterSection}>
              <Text style={styles.filterSectionTitle}>Difficulty Level</Text>
              {difficultyLevels.map((level) => (
                <Pressable
                  key={level}
                  style={styles.radioOption}
                  onPress={() => setSelectedDifficulty(level)}
                >
                  <View style={styles.radioButton}>
                    {selectedDifficulty === level && (
                      <View style={styles.radioButtonSelected} />
                    )}
                  </View>
                  <Text style={styles.radioText}>{level}</Text>
                </Pressable>
              ))}
            </View>

            {/* Duration */}
            <View style={styles.filterSection}>
              <Text style={styles.filterSectionTitle}>Duration</Text>
              {durations.map((duration) => (
                <Pressable
                  key={duration}
                  style={styles.checkboxOption}
                  onPress={() => {
                    setSelectedDurations((prev) =>
                      prev.includes(duration)
                        ? prev.filter((d) => d !== duration)
                        : [...prev, duration]
                    );
                  }}
                >
                  <View style={styles.checkbox}>
                    {selectedDurations.includes(duration) && (
                      <Feather name="check" size={14} color="#003366" />
                    )}
                  </View>
                  <Text style={styles.checkboxText}>{duration}</Text>
                </Pressable>
              ))}
            </View>
          </View>
        )}

        {/* Course List */}
        {[1, 2, 3, 4, 5].map((item) => (
          <View key={item} style={styles.courseCard}>
            <View style={styles.courseHeader}>
              <Text style={styles.courseTime}>15 minutes</Text>
            </View>
            <Text style={styles.courseTitle}>Basic First Aid</Text>
            <Text style={styles.courseDescription}>
              Learn essential techniques to handle common injuries and
              emergencies safely. Learn essential techniques to handle common
              injuri...
            </Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, {width: "60%"}]} />
            </View>
            <View style={styles.courseFooter}>
              <Text style={styles.completionText}>60% completed</Text>
              <Pressable
                style={styles.continueButton}
                onPress={() => navigation.navigate("E-learning/CourseDetail")}
              >
                <Text style={styles.continueButtonText}>Continue Course</Text>
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>
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
    backgroundColor: "#fff",
  },
  logoImage: {
    width: 120,
    height: 40,
  },
  featuredCard: {
    margin: 16,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#000",
  },
  cardDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 16,
    lineHeight: 20,
  },
  exploreButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  exploreButtonText: {
    color: "#003366",
    fontSize: 16,
    fontWeight: "500",
    marginRight: 8,
  },
  progressContainer: {
    alignItems: "center",
    padding: 24,
  },
  progressCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 12,
    borderColor: "#4CAF50",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  progressText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  progressLabel: {
    fontSize: 16,
    color: "#000",
  },
  progressSubLabel: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  searchSection: {
    flexDirection: "row",
    padding: 16,
    gap: 12,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    gap: 8,
  },
  filterButtonText: {
    color: "#666",
  },
  courseCard: {
    margin: 16,
    marginTop: 0,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  courseHeader: {
    marginBottom: 8,
  },
  courseTime: {
    fontSize: 14,
    color: "#666",
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#000",
  },
  courseDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 16,
    lineHeight: 20,
  },
  progressBar: {
    height: 4,
    backgroundColor: "#E5E5E5",
    borderRadius: 2,
    marginBottom: 12,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#4CAF50",
    borderRadius: 2,
  },
  courseFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  completionText: {
    fontSize: 14,
    color: "#666",
  },
  continueButton: {
    backgroundColor: "#003366",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  continueButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
  filterPanel: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginTop: 8,
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 30,
  },
  filterSection: {
    marginBottom: 20,
  },
  filterSectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginBottom: 12,
  },
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#F8F9FA",
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  categoryChipSelected: {
    backgroundColor: "#003366",
    borderColor: "#003366",
  },
  categoryChipText: {
    color: "#666",
    fontSize: 14,
  },
  categoryChipTextSelected: {
    color: "#fff",
  },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#003366",
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonSelected: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#003366",
  },
  radioText: {
    fontSize: 14,
    color: "#333",
  },
  checkboxOption: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#003366",
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxText: {
    fontSize: 14,
    color: "#333",
  },
});

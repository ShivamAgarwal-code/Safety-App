import React, {useState} from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Feather} from "@expo/vector-icons";

const Questions = () => {
  const navigation = useNavigation();
  const questions = [
    "How confident are you in your first aid skills?",
    "How often do you practice first aid?",
    "Have you ever taken a first aid course?",
    "Do you feel prepared to handle emergencies?",
    "How would you rate your knowledge of CPR?",
    "Have you ever used first aid skills in real life?",
    "Do you know how to use an AED?",
    "How comfortable are you with bandaging wounds?",
    "Do you know the steps for choking relief?",
    "Would you like to take a first aid course?",
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSaveAndContinue = () => {
    // Implement save functionality
    console.log("Saving progress...");
    navigation.navigate("SelfAssestment/Results");
  };

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
        <Text style={styles.title}>Questionnaire</Text>
        <Text style={styles.subtitle}>Good Luck!</Text>

        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleSaveAndContinue}
        >
          <Text style={styles.saveButtonText}>Save and Continue Later</Text>
        </TouchableOpacity>

        <View style={styles.content}>
          {/* Progress Line */}
          <View style={styles.progressLine}>
            {questions.map((_, index) => (
              <View key={index} style={styles.progressItem}>
                <View
                  style={[
                    styles.circle,
                    index === currentQuestion && styles.activeCircle,
                  ]}
                >
                  <Text
                    style={[
                      styles.circleText,
                      index === currentQuestion && styles.activeCircleText,
                    ]}
                  >
                    {index + 1}
                  </Text>
                </View>
                {index !== questions.length - 1 && <View style={styles.line} />}
              </View>
            ))}
          </View>

          {/* Question Content */}
          <View style={styles.questionContainer}>
            <Text style={styles.question}>{questions[currentQuestion]}</Text>
            <Text style={styles.inputLabel}>
              Please write in a below field:
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Type here"
              multiline
              value={answers[currentQuestion]}
              onChangeText={(text) => {
                const newAnswers = [...answers];
                newAnswers[currentQuestion] = text;
                setAnswers(newAnswers);
              }}
            />

            <View style={styles.navigation}>
              <TouchableOpacity
                style={[styles.navButton, styles.backButton]}
                onPress={handleBack}
                disabled={currentQuestion === 0}
              >
                <Text style={styles.navBackButtonText}>Back</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.navButton, styles.nextButton]}
                onPress={handleNext}
              >
                <Text style={styles.navButtonText}>
                  {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  Scrollcontainer: {
    padding: 20,
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: "#0066cc",
    padding: 15,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  saveButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  content: {
    flexDirection: "row",
    marginBottom: 30,
  },
  progressLine: {
    width: 40,
    alignItems: "center",
  },
  progressItem: {
    alignItems: "center",
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  activeCircle: {
    backgroundColor: "#003366",
    borderColor: "#003366",
  },
  circleText: {
    color: "#666",
  },
  activeCircleText: {
    color: "#fff",
  },
  line: {
    width: 2,
    height: 40,
    backgroundColor: "#ccc",
  },
  questionContainer: {
    flex: 1,
    marginLeft: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 15,
  },
  inputLabel: {
    color: "#666",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    height: 100,
    marginBottom: 20,
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  navButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
  },
  backButton: {
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },
  nextButton: {
    borderColor: "#003366",
    backgroundColor: "#003366",
  },
  navButtonText: {
    color: "#fff",
    fontWeight: "500",
  },
  navBackButtonText: {
    color: "#003366",
    fontWeight: "500",
  },
});

export default Questions;

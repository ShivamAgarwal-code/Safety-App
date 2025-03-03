import React, { useState } from "react";
import {
    View,
    Text,
    ScrollView,
    Pressable,
    StyleSheet,
    Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function CourseDetail() {
    const navigation = useNavigation();
    const [selectedAnswer, setSelectedAnswer] = useState("");

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Feather name="arrow-left" size={24} color="#000" />
                </Pressable>
            </View>

            <ScrollView style={styles.content}>
                {/* Course Title and Progress */}
                <View style={styles.courseHeader}>
                    <Text style={styles.courseTitle}>Basic First Aid</Text>
                    <Text style={styles.courseDescription}>
                        Learn essential first aid techniques for emergencies. Learn essential first aid techniques
                        for emergencies. Learn essential first aid techniques for emergencies.
                    </Text>
                    <View style={styles.progressBar}>
                        <View style={[styles.progressFill, { width: "60%" }]} />
                    </View>
                    <Text style={styles.progressText}>60% completed</Text>
                </View>

                {/* Video Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionDescription}>
                        Watch this introductory video to understand the basics of first aid response.
                    </Text>
                    <Pressable style={styles.videoContainer}>
                        <Image
                            source={require("../../assets/images/first-aid-kit.png")}
                            style={styles.videoThumbnail}
                        />
                        <View style={styles.playButton}>
                            <Feather name="play" size={40} color="#fff" />
                        </View>
                    </Pressable>
                </View>

                {/* Steps Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Steps to perform CPR:</Text>
                    <View style={styles.stepsList}>
                        {[
                            "Check the person's breathing.",
                            "Call emergency services.",
                            "Start chest compressions.",
                        ].map((step, index) => (
                            <View key={index} style={styles.stepItem}>
                                <Text style={styles.stepNumber}>{index + 1}.</Text>
                                <Text style={styles.stepText}>{step}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Quiz Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Quiz</Text>
                    <Text style={styles.quizQuestion}>
                        What is the recommended depth of chest compressions for an adult during CPR?
                    </Text>
                    {["1-2 cm", "3-4 cm", "5-6 cm", "7-8 cm"].map((option) => (
                        <Pressable
                            key={option}
                            style={[
                                styles.quizOption,
                                selectedAnswer === option && styles.quizOptionSelected,
                            ]}
                            onPress={() => setSelectedAnswer(option)}
                        >
                            <View style={styles.radioButton}>
                                {selectedAnswer === option && <View style={styles.radioButtonSelected} />}
                            </View>
                            <Text style={styles.quizOptionText}>{option}</Text>
                        </Pressable>
                    ))}
                </View>

                {/* Certificate Section */}
                <View style={styles.certificateSection}>
                    <Text style={styles.certificateTitle}>
                        Complete this Course and Earn Your Certificate!
                    </Text>
                    <Text style={styles.certificateDescription}>
                        Stay motivated! Once you finish, you'll unlock a certificate and badges to show off your
                        skills.
                    </Text>
                    <View style={styles.certificatePreview}>
                        <Image
                            source={require("../../assets/images/certificate.png")}
                            style={styles.certificateImage}
                        />
                        <View style={styles.certificateLock}>
                            <Feather name="lock" size={24} color="#fff" />
                            <Text style={styles.certificateLockText}>Unlock after completing all lessons</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            {/* Navigation Buttons */}
            <View style={styles.navigationButtons}>
                <Pressable style={styles.navButton}>
                    <Text style={styles.navButtonText}>Previous</Text>
                </Pressable>
                <Pressable style={[styles.navButton, styles.navButtonPrimary]}>
                    <Text style={styles.navButtonTextPrimary}>Next</Text>
                </Pressable>
            </View>

            {/* Download Button */}
            <Pressable style={styles.downloadButton}>
                <Text style={styles.downloadButtonText}>Download</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
    content: {
        flex: 1,
    },
    courseHeader: {
        padding: 16,
    },
    courseTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 8,
    },
    courseDescription: {
        fontSize: 14,
        color: "#666",
        lineHeight: 20,
        marginBottom: 16,
    },
    progressBar: {
        height: 4,
        backgroundColor: "#E5E5E5",
        borderRadius: 2,
        marginBottom: 8,
    },
    progressFill: {
        height: "100%",
        backgroundColor: "#4CAF50",
        borderRadius: 2,
    },
    progressText: {
        fontSize: 14,
        color: "#666",
    },
    section: {
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: "#eee",
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 12,
    },
    sectionDescription: {
        fontSize: 14,
        color: "#666",
        marginBottom: 16,
    },
    videoContainer: {
        height: 200,
        backgroundColor: "#000",
        borderRadius: 12,
        overflow: "hidden",
        position: "relative",
    },
    videoThumbnail: {
        width: "100%",
        height: "100%",
        opacity: 0.7,
    },
    playButton: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: [{ translateX: -20 }, { translateY: -20 }],
    },
    stepsList: {
        gap: 12,
    },
    stepItem: {
        flexDirection: "row",
        gap: 8,
    },
    stepNumber: {
        color: "#666",
    },
    stepText: {
        flex: 1,
        color: "#333",
    },
    quizQuestion: {
        fontSize: 16,
        color: "#333",
        marginBottom: 16,
    },
    quizOption: {
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        marginBottom: 8,
        borderWidth: 1,
        borderColor: "#E5E5E5",
        borderRadius: 8,
    },
    quizOptionSelected: {
        borderColor: "#003366",
        backgroundColor: "#F8F9FA",
    },
    radioButton: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#003366",
        marginRight: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    radioButtonSelected: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#003366",
    },
    quizOptionText: {
        fontSize: 14,
        color: "#333",
    },
    certificateSection: {
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: "#eee",
    },
    certificateTitle: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 8,
    },
    certificateDescription: {
        fontSize: 14,
        color: "#666",
        marginBottom: 16,
    },
    certificatePreview: {
        height: 200,
        backgroundColor: "#000",
        borderRadius: 12,
        overflow: "hidden",
        position: "relative",
    },
    certificateImage: {
        width: "100%",
        height: "100%",
        opacity: 0.5,
    },
    certificateLock: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: [{ translateX: -75 }, { translateY: -20 }],
        alignItems: "center",
    },
    certificateLockText: {
        color: "#fff",
        marginTop: 8,
        fontSize: 12,
    },
    navigationButtons: {
        flexDirection: "row",
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: "#eee",
        gap: 12,
    },
    navButton: {
        flex: 1,
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        backgroundColor: "#F8F9FA",
        borderWidth: 1,
        borderColor: "#E5E5E5",
    },
    navButtonPrimary: {
        backgroundColor: "#003366",
        borderColor: "#003366",
    },
    navButtonText: {
        color: "#666",
        fontSize: 16,
    },
    navButtonTextPrimary: {
        color: "#fff",
        fontSize: 16,
    },
    downloadButton: {
        margin: 16,
        marginTop: 0,
        padding: 12,
        backgroundColor: "#003366",
        borderRadius: 8,
        alignItems: "center",
    },
    downloadButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "500",
    },
}); 
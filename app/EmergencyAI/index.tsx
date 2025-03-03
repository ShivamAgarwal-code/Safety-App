import React, {useState} from "react";
import {
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import ScreenTemplate from "../../components/ScreenTemplate";
import {Feather} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

interface Message {
  text: string;
  isAI: boolean;
  isBulletList?: boolean;
}

interface Alert {
  type: string;
  severity: string;
  description: string;
  recommendation: string;
}

export default function EmergencyAI() {
  const [question, setQuestion] = useState("");
  const navigation = useNavigation();
  const messages: Message[] = [
    {
      text: "How can I prepare for a flood?",
      isAI: false,
    },
    {
      text: "Preparing for a flood is crucial to ensure your safety. Here are some key steps you can take:",
      isAI: true,
    },
    {
      text: `1. Create an Emergency Kit:
  • Include essentials such as water, non-perishable food, medications, a flashlight, and important documents.

2. Know Your Evacuation Routes:
  • Plan safe evacuation routes and keep a list of emergency contacts handy.

3. Protect Your Property:
  • Use sandbags to block entry points and elevate electrical appliances.

4. Stay Informed:
  • Monitor weather alerts through Nood AI or local authorities for real-time updates.`,
      isAI: true,
      isBulletList: true,
    },
  ];

  const quickActions = [
    {icon: "🏛️", text: "I need guidance on natural disasters"},
    {icon: "🏛️", text: "Guidance on natural disasters"},
    {icon: "🏛️", text: "Fire Safety Measures"},
    {icon: "🌧️", text: "Heavy rainfall"},
  ];

  const alerts: Alert[] = [
    {
      type: "Flood Alert",
      severity: "Critical",
      description: "Heavy rainfall expected in the next 24 hours.",
      recommendation: "Prepare sandbags and avoid driving in low-lying areas.",
    },
    {
      type: "Fire Alert",
      severity: "High",
      description: "Extreme heat conditions forecasted.",
      recommendation: "Keep emergency supplies ready and stay hydrated.",
    },
  ];

  const renderMessage = (message: Message) => (
    <View
      style={[
        styles.messageContainer,
        message.isAI ? styles.aiMessage : styles.userMessage,
      ]}
    >
      {message.isAI && (
        <View
          style={{backgroundColor: "#0047AB", borderRadius: 12, padding: 8}}
        >
          <Image
            source={require("../../assets/images/ChatAILogo.png")}
            style={{width: 24, height: 24}}
          />
        </View>
      )}
      <Text
        style={[styles.messageText, message.isBulletList && styles.bulletList]}
      >
        {message.text}
      </Text>
    </View>
  );

  const renderAlert = ({item}: {item: Alert}) => (
    <View style={styles.alertCard}>
      <View style={styles.alertHeader}>
        <Text style={styles.alertType}>{item.type}</Text>
        <View style={styles.severityContainer}>
          <Feather name="alert-circle" size={16} color="#FF4444" />
          <Text style={styles.severityTag}>{item.severity}</Text>
        </View>
      </View>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.recommendationLabel}>Recommended Action:</Text>
      <Text style={styles.recommendation}>{item.recommendation}</Text>
      <TouchableOpacity style={styles.viewMapButton}>
        <Text style={styles.viewMapText}>View Risk Map</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
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
        <View style={styles.header}>
          <Text style={styles.title}>Your Emergency Assistant.</Text>
          <TouchableOpacity style={styles.upgradeButton}>
            <Text style={styles.upgradeText}>Upgrade</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.subtitle}>
          Get personalized recommendations and alerts to improve your safety.
        </Text>

        <Text style={styles.sectionTitle}>Alerts</Text>
        <FlatList
          data={alerts}
          renderItem={renderAlert}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.alertsContainer}
          keyExtractor={(item) => item.type}
        />

        <View style={styles.aiSection}>
          <View style={styles.aiTitleContainer}>
            <View
              style={{backgroundColor: "#0047AB", borderRadius: 12, padding: 8}}
            >
              <Image
                source={require("../../assets/images/ChatAILogo.png")}
                style={{width: 24, height: 24}}
              />
            </View>
            <Text style={styles.aiTitle}>Nood AI</Text>
          </View>
          <View style={styles.chatContainer}>
            {messages.map((msg, index) => renderMessage(msg))}
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.quickActions}
          >
            {quickActions.map((action, index) => (
              <TouchableOpacity key={index} style={styles.quickActionButton}>
                <Text>
                  {action.icon} {action.text}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View style={styles.inputContainer}>
            <Feather
              name="plus-circle"
              size={24}
              color="#666"
              style={styles.plusIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Type your question here..."
              value={question}
              onChangeText={setQuestion}
              placeholderTextColor="#666"
            />
            <TouchableOpacity style={styles.sendButton}>
              <Feather name="send" size={24} color="#0047AB" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  headerContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  logo: {
    height: 32,
    width: 120,
    resizeMode: "contain",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    flex: 1,
  },
  upgradeButton: {
    backgroundColor: "#0047AB",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  upgradeText: {
    color: "white",
    fontWeight: "600",
  },
  subtitle: {
    color: "#666",
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  alertCard: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    width: 300,
    marginRight: 16,
  },
  alertHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  severityContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  alertType: {
    fontSize: 18,
    fontWeight: "600",
  },
  severityTag: {
    color: "#FF4444",
    fontSize: 14,
    fontWeight: "500",
  },
  description: {
    color: "#444",
    marginBottom: 12,
  },
  recommendationLabel: {
    color: "#0047AB",
    fontWeight: "600",
    marginBottom: 4,
  },
  recommendation: {
    color: "#444",
    marginBottom: 16,
  },
  viewMapButton: {
    backgroundColor: "#0047AB",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  viewMapText: {
    color: "white",
    fontWeight: "600",
  },
  aiSection: {
    flex: 1,
    padding: 16,
  },
  aiTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
  },
  aiTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  chatContainer: {
    gap: 16,
    marginBottom: 16,
  },
  messageContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "flex-start",
  },
  aiMessage: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 12,
  },
  userMessage: {
    backgroundColor: "#E8F0FE",
    padding: 16,
    borderRadius: 12,
    alignSelf: "flex-end",
  },
  messageText: {
    flex: 1,
    color: "#444",
  },
  bulletList: {
    lineHeight: 24,
  },
  quickActions: {
    marginBottom: 16,
  },
  quickActionButton: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 20,
    marginRight: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  plusIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  sendButton: {
    padding: 8,
  },
  aiIcon: {
    marginTop: 4,
  },
  alertsContainer: {
    paddingHorizontal: 16,
  },
});

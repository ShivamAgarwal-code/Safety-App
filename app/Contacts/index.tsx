import React, {useState} from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Modal,
  TextInput,
} from "react-native";
import {Feather} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

export default function Contacts() {
  const navigation = useNavigation();

  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Muhammad Ali",
      category: "Family and Household",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
      email: "hello@noodhub.com",
      phone: "hello@noodhub.com",
      isActive: true,
    },
    {
      id: 2,
      name: "Muhammad Ali",
      category: "Family and Household",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
      email: "hello@noodhub.com",
      isActive: false,
    },
    {
      id: 3,
      name: "Muhammad Ali",
      category: "Family and Household",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
      email: "hello@noodhub.com",
      isActive: false,
    },
  ]);

  const [isAssignTaskVisible, setIsAssignTaskVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [editingContact, setEditingContact] = useState(null);

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

      <ScrollView style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Emergency Contacts</Text>
          <Text style={styles.subtitle}>Feel Free to Contact!</Text>
        </View>

        <Pressable style={styles.newContactButton}>
          <Text style={styles.newContactText}>New Contact</Text>
        </Pressable>

        {contacts.map((contact) => (
          <View key={contact.id} style={styles.contactCard}>
            <View style={styles.cardHeader}>
              <Switch
                onValueChange={() => {
                  let newContacts = contacts.map((activeContact) => {
                    if (activeContact.id === contact.id) {
                      activeContact.isActive = !contact.isActive;
                    }
                    return activeContact;
                  });
                  setContacts(newContacts);
                }}
                value={contact.isActive}
              />
              <View style={styles.actionIcons}>
                <Pressable
                  onPress={() => {
                    setEditingContact(contact);
                    setIsEditModalVisible(true);
                  }}
                >
                  <Feather name="edit-2" size={20} color="#4CAF50" />
                </Pressable>
                <Feather name="plus" size={20} color="#4CAF50" />
              </View>
            </View>

            <View style={styles.profileSection}>
              <Image
                source={require("../../assets/images/profile-placeholder.png")}
                style={styles.profileImage}
              />
              <View style={styles.profileInfo}>
                <Text style={styles.name}>{contact.name}</Text>
                <View style={styles.categoryContainer}>
                  <Image
                    source={require("../../assets/images/family-icon.png")}
                    style={styles.categoryIcon}
                  />
                  <Text style={styles.categoryText}>{contact.category}</Text>
                </View>
              </View>
            </View>

            <Text style={styles.description}>{contact.description}</Text>

            <View style={styles.contactInfo}>
              <View style={styles.infoRow}>
                <Feather name="mail" size={20} color="#666" />
                <Text style={styles.infoText}>{contact.email}</Text>
              </View>
              <View style={styles.infoRow}>
                <Feather name="phone" size={20} color="#666" />
                <Text style={styles.infoText}>{contact.phone}</Text>
              </View>
            </View>

            <View style={styles.actionButtons}>
              <Pressable
                style={styles.assignButton}
                onPress={() => setIsAssignTaskVisible(true)}
              >
                <Feather name="clipboard" size={20} color="#fff" />
                <Text style={styles.buttonText}>Assign Task</Text>
              </Pressable>
              <Pressable style={styles.callButton}>
                <Feather name="phone" size={20} color="#fff" />
                <Text style={styles.buttonText}>Call</Text>
              </Pressable>
            </View>

            <Pressable style={styles.messageButton}>
              <Feather name="message-square" size={20} color="#003366" />
              <Text style={styles.messageButtonText}>Message</Text>
            </Pressable>
          </View>
        ))}

        <View style={styles.footer}>
          <Text style={styles.footerTitle}>
            Stay Connected With Your Emergency Team!
          </Text>
          <Text style={styles.footerSubtitle}>
            We are always here to help people.
          </Text>
          <Pressable style={styles.contactHereButton}>
            <Text style={styles.contactHereText}>Contact here</Text>
          </Pressable>
        </View>
      </ScrollView>

      {/* Add Modal for Assign Task */}
      <Modal
        visible={isAssignTaskVisible}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Pressable
                style={styles.backButton}
                onPress={() => setIsAssignTaskVisible(false)}
              >
                <Feather name="arrow-left" size={24} color="#000" />
              </Pressable>
              <Text style={styles.modalTitle}>Assign Task</Text>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Select a task *</Text>
              <Pressable style={styles.selectInput}>
                <Text style={styles.selectPlaceholder}>
                  Select a task from existing tasks
                </Text>
                <Feather name="chevron-down" size={20} color="#666" />
              </Pressable>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Due Date *</Text>
              <Pressable style={styles.dateInput}>
                <Text style={styles.inputPlaceholder}>Add due date</Text>
                <Feather name="calendar" size={20} color="#666" />
              </Pressable>
            </View>

            <Pressable style={styles.confirmButton}>
              <Text style={styles.confirmButtonText}>Confirm Assignment</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Edit Contact Modal */}
      <Modal
        visible={isEditModalVisible}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.editModalOverlay}>
          <View style={styles.editModalContent}>
            <View style={styles.editModalHeader}>
              <Pressable
                style={styles.backButton}
                onPress={() => setIsEditModalVisible(false)}
              >
                <Feather name="arrow-left" size={24} color="#000" />
              </Pressable>
              <Text style={styles.editModalTitle}>Edit Contact</Text>
            </View>

            <ScrollView style={styles.editForm}>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Full Name *</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter Full Name"
                  value={editingContact?.name}
                  placeholderTextColor="#666"
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Phone Number *</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Add due date"
                  value={editingContact?.phone}
                  placeholderTextColor="#666"
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Email *</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter Email"
                  value={editingContact?.email}
                  placeholderTextColor="#666"
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Category *</Text>
                <Pressable style={styles.selectInput}>
                  <Text style={styles.selectPlaceholder}>Select Category</Text>
                  <Feather name="chevron-down" size={20} color="#666" />
                </Pressable>
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Description *</Text>
                <TextInput
                  style={[styles.textInput, styles.descriptionInput]}
                  placeholder="Lorem Ipsum...."
                  value={editingContact?.description}
                  multiline
                  numberOfLines={4}
                  placeholderTextColor="#666"
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Profile Picture</Text>
                <Pressable style={styles.profileUploadContainer}>
                  <Feather name="camera" size={24} color="#666" />
                  <Text style={styles.profileUploadText}>Profile Picture</Text>
                  <Text style={styles.profileUploadSubtext}>
                    PEG, JPEG, PNG, limit: Max 5 MB
                  </Text>
                </Pressable>
              </View>

              <View style={styles.editActionButtons}>
                <Pressable
                  style={styles.cancelButton}
                  onPress={() => setIsEditModalVisible(false)}
                >
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </Pressable>
                <Pressable style={styles.saveButton}>
                  <Text style={styles.saveButtonText}>Save</Text>
                </Pressable>
              </View>
            </ScrollView>
          </View>
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
    backgroundColor: "#fff",
  },
  logoImage: {
    width: 120,
    height: 40,
  },
  content: {
    flex: 1,
  },
  titleContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  newContactButton: {
    backgroundColor: "#003366",
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 16,
    alignItems: "center",
  },
  newContactText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  contactCard: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  actionIcons: {
    flexDirection: "row",
    gap: 12,
  },
  profileSection: {
    flexDirection: "row",
    marginBottom: 16,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    marginBottom: 4,
  },
  categoryContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  categoryIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  categoryText: {
    color: "#666",
    fontSize: 14,
  },
  description: {
    color: "#666",
    fontSize: 14,
    marginBottom: 16,
    lineHeight: 20,
  },
  contactInfo: {
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  infoText: {
    marginLeft: 8,
    color: "#666",
    fontSize: 14,
  },
  actionButtons: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 12,
  },
  assignButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#003366",
    padding: 12,
    borderRadius: 8,
    gap: 8,
  },
  callButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 8,
    gap: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
  messageButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#003366",
    gap: 8,
  },
  messageButtonText: {
    color: "#003366",
    fontSize: 14,
    fontWeight: "500",
  },
  footer: {
    alignItems: "center",
    padding: 24,
  },
  footerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    marginBottom: 4,
  },
  footerSubtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 16,
  },
  contactHereButton: {
    backgroundColor: "#003366",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  contactHereText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    maxHeight: "80%",
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  backButton: {
    marginRight: 16,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    color: "#000",
    marginBottom: 8,
  },
  selectInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#fff",
  },
  selectPlaceholder: {
    color: "#666",
    fontSize: 16,
  },
  dateInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#fff",
  },
  inputPlaceholder: {
    color: "#666",
    fontSize: 16,
  },
  confirmButton: {
    backgroundColor: "#003366",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 24,
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  editModalOverlay: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  editModalContent: {
    flex: 1,
    backgroundColor: "#fff",
  },
  editModalHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  editModalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginLeft: 16,
  },
  editForm: {
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    color: "#000",
    backgroundColor: "#fff",
  },
  descriptionInput: {
    height: 120,
    textAlignVertical: "top",
  },
  profileUploadContainer: {
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#666",
    borderRadius: 8,
    padding: 24,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  profileUploadText: {
    color: "#4CAF50",
    fontSize: 16,
    fontWeight: "500",
    marginTop: 8,
  },
  profileUploadSubtext: {
    color: "#666",
    fontSize: 14,
    marginTop: 4,
  },
  editActionButtons: {
    flexDirection: "row",
    gap: 12,
    marginTop: 24,
    marginBottom: 32,
  },
  cancelButton: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#003366",
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#003366",
    fontSize: 16,
    fontWeight: "500",
  },
  saveButton: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#003366",
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});

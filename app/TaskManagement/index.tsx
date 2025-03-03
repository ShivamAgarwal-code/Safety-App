import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
  Modal
} from "react-native";
import { Feather } from "@expo/vector-icons";
import ScreenTemplate from "../../components/ScreenTemplate";
import { useNavigation } from "@react-navigation/native";

export default function TaskManagement() {
  const navigation = useNavigation();
  const [isEditModalVisible, setEditModalVisible] = useState(false);

  const EditTaskModal = () => (
    <Modal
      isVisible={isEditModalVisible}
      onBackdropPress={() => setEditModalVisible(false)}
      style={styles.modal}
    >
      <View style={styles.modalContent}>
        <View style={styles.modalHeader}>
          <Pressable onPress={() => setEditModalVisible(false)}>
            <Feather name="arrow-left" size={24} color="#000" />
          </Pressable>
          <Text style={styles.modalTitle}>Edit Task</Text>
          <View style={{ width: 24 }} /> {/* Spacer for alignment */}
        </View>

        <ScrollView style={styles.modalForm}>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Task Name <Text style={styles.required}>*</Text></Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Task Name"
              placeholderTextColor="#666"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Category <Text style={styles.required}>*</Text></Text>
            <Pressable style={styles.selectInput}>
              <Text style={styles.selectText}>Select Category</Text>
              <Feather name="chevron-down" size={20} color="#666" />
            </Pressable>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Assign to <Text style={styles.required}>*</Text></Text>
            <Pressable style={styles.selectInput}>
              <Text style={styles.selectText}>Select Assignee</Text>
              <Feather name="chevron-down" size={20} color="#666" />
            </Pressable>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Due Date <Text style={styles.required}>*</Text></Text>
            <Pressable style={styles.selectInput}>
              <Text style={styles.selectText}>Select Due Date</Text>
              <Feather name="calendar" size={20} color="#666" />
            </Pressable>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Priority <Text style={styles.required}>*</Text></Text>
            <Pressable style={styles.selectInput}>
              <Text style={styles.selectText}>Select Task Priority Status</Text>
              <Feather name="chevron-down" size={20} color="#666" />
            </Pressable>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Description <Text style={styles.required}>*</Text></Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Lorem Ipsum...."
              placeholderTextColor="#666"
              multiline
              numberOfLines={4}
            />
          </View>

          <View style={styles.reminderContainer}>
            <View style={styles.checkboxContainer}>
              <Pressable style={styles.checkbox}>
                {/* Add checkbox state handling */}
              </Pressable>
              <Text style={styles.checkboxLabel}>Enable Reminders</Text>
            </View>
            <Text style={styles.reminderText}>
              Check this box to set a reminder for this task.
            </Text>
          </View>
        </ScrollView>

        <View style={styles.modalActions}>
          <Pressable
            style={[styles.modalButton, styles.cancelButton]}
            onPress={() => setEditModalVisible(false)}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </Pressable>
          <Pressable style={[styles.modalButton, styles.saveButton]}>
            <Text style={styles.saveButtonText}>Save Changes</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );

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
      <ScrollView style={styles.container}>
        {/* Header Actions */}
        <View style={styles.headerActions}>
          <Pressable style={styles.sortButton}>
            <Text style={styles.sortButtonText}>Sort</Text>
            <Feather name="chevron-down" size={20} color="#666" />
          </Pressable>

          <Pressable style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Filters</Text>
            <Feather name="sliders" size={20} color="#666" />
          </Pressable>

          <Pressable style={styles.newTaskButton}>
            <Text style={styles.newTaskButtonText}>New Task</Text>
          </Pressable>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Feather name="search" size={20} color="#666" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Tasks..."
            placeholderTextColor="#666"
          />
        </View>

        {/* Task Metrics */}
        <View style={styles.metricsSection}>
          <Text style={styles.sectionTitle}>Task Metrics</Text>

          <View style={styles.metricCard}>
            <View style={styles.metricRow}>
              <Text style={styles.metricLabel}>Total Tasks</Text>
              <Text style={styles.metricValue}>21,459</Text>
              <Feather name="list" size={20} color="#666" />
            </View>
          </View>

          <View style={styles.metricCard}>
            <View style={styles.metricRow}>
              <Text style={styles.metricLabel}>Completed Tasks</Text>
              <Text style={styles.metricValue}>21,459</Text>
              <Feather name="check-square" size={20} color="#4CAF50" />
            </View>
          </View>

          <View style={styles.metricCard}>
            <View style={styles.metricRow}>
              <Text style={styles.metricLabel}>Overdue Tasks</Text>
              <Text style={styles.metricValue}>21,459</Text>
              <Feather name="alert-circle" size={20} color="#FF3B30" />
            </View>
          </View>

          {/* Progress Bars */}
          <View style={styles.progressSection}>
            <Text style={styles.progressLabel}>Completed Tasks</Text>
            <View style={styles.progressBar}>
              <View
                style={[
                  styles.progressFill,
                  { width: "50%", backgroundColor: "#4CAF50" },
                ]}
              />
            </View>
          </View>

          <View style={styles.progressSection}>
            <Text style={styles.progressLabel}>Pending Tasks</Text>
            <View style={styles.progressBar}>
              <View
                style={[
                  styles.progressFill,
                  { width: "50%", backgroundColor: "#FFA000" },
                ]}
              />
            </View>
          </View>
        </View>

        {/* Task List */}
        <View style={styles.taskListSection}>
          <Text style={styles.sectionTitle}>Task List</Text>

          {/* Task Card */}
          {["Pending", "Completed", "In Progress", "Recommended Task"].map(
            (status, index) => (
              <View key={index} style={styles.taskCard}>
                <Text style={styles.taskTitle}>Buy a Fire Extinguisher</Text>

                <View style={styles.taskStatus}>
                  <Text
                    style={[
                      styles.statusText,
                      {
                        color:
                          status === "Completed"
                            ? "#4CAF50"
                            : status === "In Progress"
                              ? "#007AFF"
                              : status === "Recommended Task"
                                ? "#FFA000"
                                : "#FF3B30",
                      },
                    ]}
                  >
                    {status}
                  </Text>
                </View>

                <View style={styles.assigneeRow}>
                  <Text style={styles.assigneeLabel}>Assigned to:</Text>
                  <Image
                    source={require("../../assets/images/avatar.png")}
                    style={styles.avatarImage}
                  />
                  <Text style={styles.assigneeName}>John Doe</Text>
                </View>

                <Text style={styles.taskDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt.
                </Text>

                <View style={styles.dueDateRow}>
                  <Feather name="calendar" size={16} color="#666" />
                  <Text style={styles.dueDate}>Due Date</Text>
                  <Text style={styles.dateValue}>12-02-2025</Text>
                </View>

                <View style={styles.taskActions}>
                  <Pressable
                    style={styles.editButton}
                    onPress={() => setEditModalVisible(true)}
                  >
                    <Feather name="edit" size={16} color="#007AFF" />
                    <Text style={styles.editButtonText}>Edit Task</Text>
                  </Pressable>

                  <View style={styles.actionButtons}>
                    <Pressable style={styles.completeButton}>
                      <Feather name="check-circle" size={16} color="#4CAF50" />
                      <Text style={styles.completeButtonText}>
                        Mark as Completed
                      </Text>
                    </Pressable>

                    <Pressable style={styles.deleteButton}>
                      <Feather name="trash-2" size={16} color="#666" />
                      <Text style={styles.deleteButtonText}>Delete Task</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            )
          )}

          {/* Congratulations Card */}
          <View style={styles.congratsCard}>
            <Text style={styles.congratsTitle}>Congratulations!</Text>
            <Text style={styles.congratsText}>
              You've completed 70% of your tasks for this week!
            </Text>
          </View>
        </View>
      </ScrollView>
      {isEditModalVisible && <EditTaskModal />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  headerActions: {
    flexDirection: "row",
    padding: 16,
    gap: 8,
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
  sortButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  newTaskButton: {
    marginLeft: "auto",
    backgroundColor: "#003366",
    padding: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  newTaskButtonText: {
    color: "#fff",
    fontWeight: "500",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 16,
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
  metricsSection: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  metricCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  metricRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  metricLabel: {
    fontSize: 16,
    color: "#666",
  },
  metricValue: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 8,
  },
  progressSection: {
    marginTop: 16,
  },
  progressLabel: {
    fontSize: 14,
    marginBottom: 8,
  },
  progressBar: {
    height: 8,
    backgroundColor: "#E5E5E5",
    borderRadius: 4,
    marginBottom: 16,
  },
  progressFill: {
    height: "100%",
    borderRadius: 4,
  },
  taskListSection: {
    padding: 16,
  },
  taskCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  taskStatus: {
    marginBottom: 12,
  },
  statusText: {
    fontSize: 14,
    fontWeight: "500",
  },
  assigneeRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  assigneeLabel: {
    fontSize: 14,
    color: "#666",
    marginRight: 8,
  },
  avatarImage: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
  },
  assigneeName: {
    fontSize: 14,
    color: "#333",
  },
  taskDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 12,
    lineHeight: 20,
  },
  dueDateRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    gap: 8,
  },
  dueDate: {
    fontSize: 14,
    color: "#666",
  },
  dateValue: {
    fontSize: 14,
    color: "#333",
  },
  taskActions: {
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
    paddingTop: 16,
  },
  editButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 8,
  },
  editButtonText: {
    color: "#007AFF",
    fontSize: 14,
  },
  actionButtons: {
    flexDirection: "row",
    gap: 12,
  },
  completeButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    backgroundColor: "#E8F5E9",
    borderRadius: 8,
    gap: 8,
  },
  completeButtonText: {
    color: "#4CAF50",
    fontSize: 14,
  },
  deleteButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    gap: 8,
  },
  deleteButtonText: {
    color: "#666",
    fontSize: 14,
  },
  congratsCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  congratsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  congratsText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  sortButtonText: {
    color: "#666",
    marginRight: 8,
  },
  filterButtonText: {
    color: "#666",
    marginRight: 8,
  },
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '90%',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalForm: {
    padding: 16,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  required: {
    color: 'red',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#f8f9fa',
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  selectInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#f8f9fa',
  },
  selectText: {
    fontSize: 16,
    color: '#666',
  },
  reminderContainer: {
    marginTop: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#003366',
    borderRadius: 4,
    marginRight: 8,
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#333',
  },
  reminderText: {
    color: '#666',
    fontSize: 14,
  },
  modalActions: {
    flexDirection: 'row',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    gap: 12,
  },
  modalButton: {
    flex: 1,
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  saveButton: {
    backgroundColor: '#003366',
  },
  cancelButtonText: {
    color: '#666',
    fontSize: 16,
    fontWeight: '500',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

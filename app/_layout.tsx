import React from "react";
import {View, Text, ScrollView, ScrollViewProps} from "react-native";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {Drawer} from "expo-router/drawer";
import {MaterialIcons, MaterialCommunityIcons} from "@expo/vector-icons";
import CustomDrawer from "../components/CustomDrawer";
import {DrawerNavigationState, ParamListBase} from "@react-navigation/native";
import {Feather} from "@expo/vector-icons";

export default function _layout() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Drawer
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "#ffffff",
          },
          headerTintColor: "#000000",
          drawerStyle: {
            backgroundColor: "#1C1C2E",
            width: 280,
          },
          drawerActiveTintColor: "#FFFFFF",
          drawerInactiveTintColor: "#FFFFFF",
          drawerActiveBackgroundColor: "rgba(255, 255, 255, 0.1)",
          drawerInactiveBackgroundColor: "transparent",
          drawerLabelStyle: {
            marginLeft: -20,
            fontSize: 16,
            fontWeight: "400",
          },
          drawerItemStyle: {
            borderRadius: 0,
            paddingLeft: 16,
            marginVertical: 4,
          },
        }}
      >
        <Drawer.Screen
          name="index"
          options={{drawerItemStyle: {display: "none"}}}
        />
        <Drawer.Screen
          name="SelfAssestment/index"
          options={{drawerItemStyle: {display: "none"}}}
        />
        <Drawer.Screen
          name="RiskMap/index"
          options={{drawerItemStyle: {display: "none"}}}
        />
        <Drawer.Screen
          name="NewsFeed/index"
          options={{drawerItemStyle: {display: "none"}}}
        />
        <Drawer.Screen
          name="TaskManagement/index"
          options={{drawerItemStyle: {display: "none"}}}
        />
        <Drawer.Screen
          name="E-learning/index"
          options={{drawerItemStyle: {display: "none"}}}
        />
        <Drawer.Screen
          name="Contacts/index"
          options={{drawerItemStyle: {display: "none"}}}
        />
        <Drawer.Screen
          name="EmergencyAI/index"
          options={{drawerItemStyle: {display: "none"}}}
        />
        <Drawer.Screen
          name="Household/index"
          options={{drawerItemStyle: {display: "none"}}}
        />
        <Drawer.Screen
          name="Business/index"
          options={{drawerItemStyle: {display: "none"}}}
        />
        <Drawer.Screen
          name="Settings/index"
          options={{drawerItemStyle: {display: "none"}}}
        />
        <Drawer.Screen
          name="Logout/index"
          options={{drawerItemStyle: {display: "none"}}}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

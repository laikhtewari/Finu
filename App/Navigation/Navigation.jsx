import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import InvitesScreen from "../Screens/InvitesScreen";
import NewProject from "../Screens/NewProject";
import SelectedDoc from "../Screens/SelectedDoc"

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Invites"
          component={InvitesScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="NewProject"
          component={NewProject}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SelectedDoc"
          component={SelectedDoc}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    // fontFamily: "DM Sans",
    textAlign: "center",
    fontSize: 32,
    fontWeight: "600",
  },
});

import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../Screens/SplashScreen";
import HomeScreen from "../Screens/HomeScreen";
import InvitesScreen from "../Screens/InvitesScreen";
import ProjectScreen from "../Screens/ProjectScreen";
import GroupScreen from "../Screens/GroupScreen";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
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
          name="Project"
          component={ProjectScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Group"
          component={GroupScreen}
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

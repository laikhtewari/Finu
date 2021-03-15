import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import InvitesScreen from "../Screens/InvitesScreen";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: () => <Text style={styles.header}>Home</Text>,
          }}
        />
        <Stack.Screen
          name="Invites"
          component={InvitesScreen}
          options={{
            headerTitle: () => <Text style={styles.header}>Invites</Text>,
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

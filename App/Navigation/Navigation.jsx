import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import InvitationsScreen from "../Screens/InvitationsScreen";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerTitle: () => <Text>Home</Text>,
          }}
        />
        <Stack.Screen
          name="InvitationsScreen"
          component={InvitationsScreen}
          options={{
            headerTitle: () => <Text>Invitations</Text>,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontSize: 50,
  },
});

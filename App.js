import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Navigator from "./App/Navigation/Navigation.jsx";

export default function App(props) {
  return <Navigator />;
}

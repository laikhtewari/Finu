import React, { useState, Fragment } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import HomeButton from "./../Components/HomeButton";
import GroupButton from "../Components/GroupButton";
// fonts
import AppLoading from "expo-app-loading";
import { useFonts, DMSans_700Bold } from "@expo-google-fonts/dm-sans";
// sample text project
import SampleDoc from "../../assets/sample_doc.svg";

export default function App({ navigation }) {
  // load fonts
  let [fontsLoaded] = useFonts({
    DMSans_700Bold,
  });
  // state stuff here
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <HomeButton />
        <Text style={styles.title}>Julia's Mortgage Agreement</Text>

        <View style={styles.project}>
          <SampleDoc />
        </View>

        <View style={styles.group}>
          <GroupButton />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  title: {
    fontFamily: "DMSans_700Bold",
    fontSize: 24,
    textAlign: "center",
    margin: 20,
  },
  project: {
    alignSelf: "center",
    margin: 30,
    borderColor: "#5551FF",
    borderWidth: 2,
    borderRadius: 8,
    width: "90%",
    height: "70%",
    alignItems: "center",
    padding: 10,
  },
  group: {
    flex: 1,
    justifyContent: "flex-end",
    // marginBottom: 36,
  },
});

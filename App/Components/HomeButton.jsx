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
  Pressable,
} from "react-native";

export default function App({ navigation }) {
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("Home")}
    >
      <Image
        style={styles.icon}
        source={require("../../assets/mail_icon.png")}
        // source={require("../../assets/search.png")}
      />
      <Text style={styles.text}>Home</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignSelf: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
    marginLeft: 20,
  },
  icon: {
    marginRight: 5,
    height: "100%",
  },
  text: {
    // fontFamily: "DM Sans",
    fontSize: 17,
    color: "#5551FF",
    textAlign: "left",
    alignSelf: "stretch",
    // marginLeft: 20,
    // margin: 10,
  },
});

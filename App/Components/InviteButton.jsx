import React from "react";
import { Text, StyleSheet, Image, Pressable } from "react-native";

export default function App({ navigation }) {
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("Invites")}
    >
      <Image
        style={styles.icon}
        source={require("../../assets/mail_icon.png")}
      />
      <Text style={styles.text}>Invites</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-end",
    justifyContent: "center",
    margin: 10,
    marginRight: 20,
  },
  text: {
    // fontFamily: "DM Sans",
    fontSize: 13,
    fontWeight: "bold",
  },
});

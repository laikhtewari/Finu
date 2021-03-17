import React from "react";
import { Text, StyleSheet, Image, Pressable } from "react-native";
// fonts
import AppLoading from "expo-app-loading";
import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";

export default function App({ navigation }) {
  // load fonts
  let [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
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
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-end",
    justifyContent: "center",
    margin: 10,
    marginRight: 20,
  },
  icon: {
    resizeMode: "contain",
  },
  text: {
    fontFamily: "DMSans_700Bold",
    fontSize: 13,
  },
});

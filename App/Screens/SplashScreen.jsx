import React from "react";
import { Text, View, StyleSheet, SafeAreaView, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Finu from "../../assets/finu.svg";
import SpeechBubbles from "../../assets/speech_bubbles.svg";
// fonts
import AppLoading from "expo-app-loading";
import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";

export default function App() {
  // load fonts
  let [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });

  // state stuff here

  const navigation = useNavigation();

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <View style={[styles.logo, { flex: 1 }]}>
          <Finu />
        </View>

        <View style={[styles.logo, { flex: 2 }]}>
          <Text style={styles.tagline}>
            Financially {"\n"}
            unified families.
          </Text>
        </View>

        <View style={[styles.bubbles, { flex: 6 }]}>
          <SpeechBubbles />
        </View>

        <View>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.buttonText}>Log In</Text>
          </Pressable>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={styles.subText}>New to Finu? </Text>
            <Pressable onPress={() => navigation.navigate("Home")}>
              <Text style={[styles.subText, styles.registration]}>
                {" "}
                Sign up!
              </Text>
            </Pressable>
          </View>
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
    justifyContent: "flex-start",
  },
  logo: {
    width: "100%",
    alignItems: "flex-start",
    marginLeft: 80,
    marginTop: 75,
  },
  tagline: {
    fontFamily: "DMSans_400Regular",
    fontSize: 36,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    paddingLeft: 100,
    paddingRight: 100,
    marginLeft: 30,
    marginRight: 30,
    elevation: 2,
    backgroundColor: "#5551FF",
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontFamily: "DMSans_500Medium",
    fontSize: 24,
    textAlign: "center",
  },
  subText: {
    fontFamily: "DMSans_400Regular",
    fontSize: 14,
    textAlign: "center",
  },
  registration: {
    fontFamily: "DMSans_700Bold",
    color: "#5551FF",
  },
});

import React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HomeLogo from "../../assets/home.svg";
// fonts
import AppLoading from "expo-app-loading";
import { useFonts, DMSans_400Regular } from "@expo-google-fonts/dm-sans";

export default function App() {
  const navigation = useNavigation();
  // load fonts
  let [fontsLoaded] = useFonts({
    DMSans_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate("Home")}
      >
        {/* <Image style={styles.icon} source={require("../../assets/home.png")} /> */}
        <View style={styles.icon}>
          <HomeLogo />
        </View>

        <Text style={styles.text}>Home</Text>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignSelf: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 20,
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "DMSans_400Regular",
    fontSize: 17,
    color: "#5551FF",
    textAlign: "left",
    alignSelf: "stretch",
    margin: 5,
    marginLeft: 7,
  },
});

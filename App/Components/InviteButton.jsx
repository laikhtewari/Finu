import React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MailLogo from "../../assets/mail_icon.svg";
// fonts
import AppLoading from "expo-app-loading";
import { useFonts, DMSans_700Bold } from "@expo-google-fonts/dm-sans";

export default function App() {
  const navigation = useNavigation();
  // load fonts
  let [fontsLoaded] = useFonts({
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
        <View style={styles.icon}>
          <MailLogo />
        </View>
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
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "DMSans_700Bold",
    fontSize: 13,
  },
});

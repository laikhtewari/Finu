import React from "react";
import { StyleSheet, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GroupLogo from "../../assets/group_icon.svg";

export default function App() {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("Group")} // group
    >
      <View style={styles.icon}>
        <GroupLogo />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 20,
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
  },
});

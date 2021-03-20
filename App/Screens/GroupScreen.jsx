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
import { SearchBar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import HomeButton from "./../Components/HomeButton";
import RedX from "../../assets/red_x.svg";
import PurplePlus from "../../assets/purple_plus.svg";
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

  // states
  const [search, setSearch] = useState("");
  const [members, setMembers] = useState(["Angela", "Bob", "Martin"]);

  const navigation = useNavigation();

  const renderMembers = ({ index, item }) => {
    return (
      <View style={styles.box}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../../assets/icon.png")}
            style={styles.icon}
          />

          <View>
            <Text style={styles.name}>{item}</Text>
            <Text style={styles.subtext}>mobile</Text>
          </View>
        </View>
        {/* make X bigger, fix removing member functionality */}
        <Pressable
          onPress={() => {
            members.splice(index, 1);
            // setMembers(members);
          }}
        >
          <RedX style={styles.icon} />
        </Pressable>
      </View>
    );
  };

  const keyExtractor = (index) => {
    return index.toString();
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <HomeButton />

        <Text style={styles.title}>Current Group</Text>

        <View style={styles.search}>
          <SearchBar
            placeholder="Search"
            onChangeText={setSearch}
            value={search}
            platform="ios"
          />
        </View>

        <View style={styles.flatlist}>
          <FlatList
            data={members}
            renderItem={renderMembers}
            keyExtractor={(name, index) => keyExtractor(index)}
          />
          <Pressable
            style={[styles.add]}
            // onPress={() => navigation.navigate("Contacts")}
          >
            <View style={styles.icon}>
              <PurplePlus />
            </View>
            <Text style={styles.name}>Add new collaborator from contacts</Text>
          </Pressable>
        </View>

        <View style={styles.buttonView}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("Project")}
          >
            <Text style={styles.buttonText}>Done</Text>
          </Pressable>
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
  title: {
    fontFamily: "DMSans_700Bold",
    fontSize: 34,
    textAlign: "center",
    margin: 10,
  },
  search: {
    width: "100%",
    padding: 12,
    paddingTop: 0,
  },
  flatlist: {
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
  },
  box: {
    borderColor: "#5551FF",
    borderWidth: 2,
    borderRadius: 13,
    padding: 15,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    height: 42,
    width: 42,
    marginRight: 15,
    borderRadius: 21,
  },
  name: {
    // SF Pro Text - Semibold
    fontFamily: "DMSans_500Medium",
    fontSize: 17,
    paddingBottom: 2,
  },
  subtext: {
    // SF Pro Text - Regular
    fontFamily: "DMSans_400Regular",
    fontSize: 13,
  },
  add: {
    borderColor: "#5551FF",
    borderWidth: 2,
    borderRadius: 13,
    borderStyle: "dashed",
    // height: 76,
    padding: 15,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonView: {
    alignSelf: "flex-end",
    // flex: 1,
    position: "absolute",
    bottom: 0,
    marginBottom: 55,
  },
  button: {
    borderRadius: 5,
    padding: 5,
    paddingLeft: 30,
    paddingRight: 30,
    marginLeft: 30,
    marginRight: 30,
    elevation: 2,
    backgroundColor: "#5551FF",
  },
  buttonText: {
    color: "white",
    fontFamily: "DMSans_700Bold",
    fontSize: 16,
    textAlign: "center",
  },
});

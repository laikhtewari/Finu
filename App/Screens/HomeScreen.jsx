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
import InviteButton from "./../Components/InviteButton";
import { useNavigation } from "@react-navigation/native";
import PurplePlus from "../../assets/purple_plus.svg";
import FolderIcon from "../../assets/folder.svg";
import NewFolderIcon from "../../assets/new_folder.svg";
// fonts
import AppLoading from "expo-app-loading";
import { useFonts, DMSans_400Regular } from "@expo-google-fonts/dm-sans";

global.doc_margin = 11;

export default function App({ navigation }) {
  // load fonts
  let [fontsLoaded] = useFonts({
    DMSans_400Regular,
  });
  // state stuff here
  const [value, onChangeText] = React.useState("Search Projects");
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
        <InviteButton />

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Searchbar search_bar_height={40} default_text="Search Projects" />
        </KeyboardAvoidingView>

        <FilterScrollable />

        <Text
          style={{
            marginLeft: 50,
            fontFamily: "DMSans_400Regular",
            fontSize: 16,
          }}
        >
          Folders:
        </Text>
        <ScrollView
          style={{
            flexDirection: "row",
            marginLeft: 50,
            marginRight: 50,
            marginTop: 18,
            marginBottom: 10,
            minHeight: 125,
          }}
          horizontal={true}
          // showsHorizontalScrollIndicator={false}
        >
          <View style={{ marginRight: 20 }}>
            <NewFolderIcon />
            <Text
              style={[styles.text, { color: "#5551FF", textAlign: "center" }]}
            >
              New Folder
            </Text>
          </View>
          <View style={{ marginRight: 20 }}>
            <FolderIcon />
            <Text style={[styles.text, { textAlign: "center" }]}>Folder A</Text>
          </View>
          <View style={{ marginRight: 20 }}>
            <FolderIcon />
            <Text style={[styles.text, { textAlign: "center" }]}>Folder B</Text>
          </View>
          <View style={{ marginRight: 20 }}>
            <FolderIcon />
            <Text style={[styles.text, { textAlign: "center" }]}>Folder C</Text>
          </View>
        </ScrollView>
        {/* <Text>example</Text>
        <View
          style={{
            flexDirection: "row",
            marginLeft: 50,
            marginRight: 50,
            marginTop: 18,
            marginBottom: 18,
          }}
        >
          <View style={{ marginRight: 20 }}>
            <NewFolderIcon />
          </View>
          <View>
            <FolderIcon />
          </View>
        </View> */}

        <Text
          style={{
            marginLeft: 50,
            fontFamily: "DMSans_400Regular",
            fontSize: 16,
          }}
        >
          Projects:
        </Text>
        <DocumentGrid />
      </SafeAreaView>
    );
  }
}

function Searchbar(props) {
  return (
    <View
      style={{
        height: props.search_bar_height,
        underlineColor: "black",
        borderBottomWidth: 2,
        marginRight: 50,
        marginLeft: 50,
        bottom: 0,
      }}
    >
      <TextInput
        style={{
          height: props.search_bar_height,
          color: "black",
          fontFamily: "DMSans_400Regular",
          fontSize: 22,
        }}
        // onChangeText={(event.target.text) => updateTextStateFunc()}
        placeholder={props.default_text}
        placeholderTextColor="grey"
      />

      <TouchableOpacity
        // onPress={() => searchFunc()}
        style={{
          position: "absolute",
          right: 0,
          height: props.search_bar_height,
          width: props.search_bar_height,
          padding: 7,
        }}
      >
        <Image
          style={{
            height: "100%",
            width: "100%",
          }}
          source={require("../../assets/search.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

function ColoredCircle(props) {
  return (
    <View
      style={{
        width: 10,
        height: 10,
        backgroundColor: props.color,
        borderRadius: 10,
        marginLeft: 3,
      }}
    />
  );
}

function Document(props) {
  const navigation = useNavigation();
  return (
    <Pressable
      style={{
        // width: 100,
        alignItems: "center",
        justifyContent: "center",
        margin: global.doc_margin,
      }}
      onPress={() => navigation.navigate("Project")}
    >
      <View style={styles.box}>
        <View
          style={{
            backgroundColor: "black",
            width: "100%",
            height: 13,
            position: "absolute",
            bottom: 0,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 14, fontFamily: "DMSans_400Regular" }}>
          {props.document_title}
        </Text>
        <ColoredCircle color="powderblue" />
      </View>
    </Pressable>
  );
}

function AddDocument(props) {
  const navigation = useNavigation();
  return (
    <Pressable
      style={{
        // width: 100,
        alignItems: "center",
        justifyContent: "center",
        margin: global.doc_margin,
      }}
      onPress={() => navigation.navigate("NewProject")}
    >
      <View style={[styles.box, styles.add]}>
        <PurplePlus />
      </View>
      <Text style={{ textAlign: "center" }}>New Project</Text>
    </Pressable>
  );
}

function DocumentGrid(props) {
  //loop to gen n Document components in const

  return (
    <ScrollView
      style={{ marginTop: 12, marginLeft: 30, marginRight: 30, height: "50%" }}
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <DocumentRow include_add="true" />
      <DocumentRow />
      <DocumentRow />
      <DocumentRow />
    </ScrollView>
  );
}

function DocumentRow(props) {
  const comp = props.include_add ? (
    <AddDocument />
  ) : (
    <Document document_title={"Document 0"} />
  );
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      {comp}
      <Document document_title={"Document 1"} />
      <Document document_title={"Document 2"} />
    </View>
  );
}

function FilterScrollable(props) {
  return (
    <View style={{ margin: 20 }}>
      <Text
        style={{
          fontSize: 16,
          fontFamily: "DMSans_400Regular",
          marginBottom: 13,
        }}
      >
        Sort by:
      </Text>
      <ScrollView
        style={{ width: "100%" }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <Filter filter_name="Family" color="green" />
        <Filter filter_name="Friends" color="yellow" />
        <Filter filter_name="School" color="magenta" />
        <Filter filter_name="Taxes" color="orange" />
        <Filter filter_name="Rent" color="blue" />
        <Filter filter_name="Lease" color="brown" />
        <Filter filter_name=" + Add Filter" on="true" />
      </ScrollView>
    </View>
  );
}

function Filter(props) {
  let outline = props.on ? "#000" : "#C4C4C4";

  return (
    <Pressable
      style={{
        borderWidth: 1,
        borderRadius: 20,
        borderColor: outline,
        alignSelf: "flex-start",
        flexDirection: "row",
        alignItems: "center",
        padding: 6,
        marginRight: 10,
      }}
      onPress={() => (outline = !outline)} // doesn't work
    >
      {props.color && <ColoredCircle color={props.color} />}
      <Text
        style={{
          fontSize: 16,
          fontFamily: "DMSans_400Regular",
          color: outline,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        {props.filter_name}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "DMSans_400Regular",
    fontSize: 14,
  },
  box: {
    borderWidth: 2,
    borderRadius: 8,
    height: 123,
    width: 90,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  add: {
    borderColor: "#5551FF",
    borderStyle: "dashed",
  },
});

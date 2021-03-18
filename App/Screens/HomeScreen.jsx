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
import InviteButton from "./../Components/InviteButton";
// fonts
import AppLoading from "expo-app-loading";
import { useFonts, DMSans_400Regular } from "@expo-google-fonts/dm-sans";

global.doc_margin = 5;

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
      <SafeAreaView style={{ backgroundColor: "#fff" }}>
        <InviteButton navigation={navigation} />

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Searchbar search_bar_height={40} default_text="Search Projects" />
        </KeyboardAvoidingView>

        <FilterScrollable />

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
        marginTop: 3,
        marginLeft: 3,
        backgroundColor: props.color,
        borderRadius: 10,
      }}
    />
  );
}

function Document(props) {
  return (
    <View
      style={{ width: 100, alignItems: "center", margin: global.doc_margin }}
    >
      <Image
        style={{ marginBottom: 10 }}
        source={require("../../assets/document_outline.png")}
      />
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 14, fontFamily: "DMSans_400Regular" }}>
          {props.document_title}
        </Text>
        <ColoredCircle color="powderblue" />
      </View>
    </View>
  );
}

function AddDocument(props) {
  return (
    <View
      style={{ width: 100, alignItems: "center", margin: global.doc_margin }}
    >
      <Image
        style={{ marginBottom: 10 }}
        source={require("../../assets/add_document.png")}
      />
      <Text style={{ textAlign: "center" }}>New Project</Text>
    </View>
  );
}

function DocumentGrid(props) {
  //loop to gen n Document components in const

  return (
    <ScrollView
      contentContainerStyle={{
        margin: 30,
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <DocumentRow include_add="true" />
      <DocumentRow />
      <DocumentRow />
      <DocumentRow />
      <DocumentRow />
      <DocumentRow />
      <View style={{ height: 200 }}></View>
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
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {comp}
      <Document document_title={"Document 1"} />
      <Document document_title={"Document 2"} />
    </View>
  );
}

function FilterScrollable(props) {
  return (
    <View style={{ margin: 20 }}>
      <Text style={{ fontSize: 16, fontFamily: "DMSans_400Regular" }}>
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
        <Filter filter_name=" + Add Filter" />
      </ScrollView>
    </View>
  );
}

function Filter(props) {
  return (
    <View
      style={{
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "grey",
        alignSelf: "flex-start",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        marginRight: 10,
        marginTop: 10,
      }}
    >
      {props.color && <ColoredCircle color={props.color} />}
      <Text
        style={{
          fontSize: 16,
          fontFamily: "DMSans_400Regular",
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        {props.filter_name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

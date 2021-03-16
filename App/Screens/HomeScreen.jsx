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

global.doc_margin = 5;

export default function App({ navigation }) {
  // state stuff here
  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Invites")}
        style={{
          alignItems: "flex-end",
          marginTop: 10,
          marginRight: 20,
          marginBottom: 10,
        }}
      >
        <Mail />
      </TouchableOpacity>

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

function Mail(props) {
  return (
    <View style={{ alignItems: "center" }}>
      <Image source={require("../../assets/mail_icon.png")} />
      <Text style={styles.mailText}>Invites</Text>
    </View>
  );
}

function Searchbar(props) {
  return (
    <View
      style={{
        height: props.search_bar_height,
        underlineColor: "black",
        borderBottomWidth: 2,
        marginRight: 20,
        marginLeft: 20,
        bottom: 0,
      }}
    >
      <TextInput
        style={{
          height: props.search_bar_height,
          color: "black",
          fontSize: 24,
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
        <Text style={{}}>{props.document_title}</Text>
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
      <Text style={{ fontSize: 18 }}>Sort by:</Text>
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
      <Text style={{ paddingLeft: 10, paddingRight: 10 }}>
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
  mailText: {
    fontSize: 13,
    fontWeight: "bold",
  },
});

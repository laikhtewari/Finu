import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, Button } from "react-native";

export default function App({ navigation }) {
  return (
    <SafeAreaView style={{ display: "flex", marginTop: 20 }}>
      <Mail />

      <Searchbar search_bar_height={40} default_text="Search Documents" />

      <AddDocument />
    </SafeAreaView>
  );
}

function Mail(props) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("InvitationsScreen")}
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-end",
        marginTop: 20,
        marginRight: 20,
        marginBottom: 50,
      }}
    >
      <Image source={require("../../assets/mail_icon.png")} />
      <Text style={{ marginTop: 10, color: "black" }}>Invites</Text>
    </TouchableOpacity>
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
        // onChangeText={}
        placeholder={props.default_text}
        placeholderTextColor="grey"
      />
      <View
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
          source={require("./assets/search.png")}
        />
      </View>
    </View>
  );
}

function Document(props) {
  return (
    <View style={{ flex: 1, borderWidth: 1 }}>
      <Image
        style={{ marginBottom: 10 }}
        source={require("./assets/document_outline.png")}
      />
      <View style={{ flex: 1, flexDirection: "row", borderWidth: 1 }}>
        <Text style={{ flex: 2 }}>{props.document_title}</Text>
        <View
          style={{
            flex: 1,
            width: 10,
            height: 10,
            backgroundColor: "powderblue",
            borderRadius: 10,
          }}
        />
      </View>
    </View>
  );
}

function AddDocument(props) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        height: 500,
        width: 150,
        margin: 50,
      }}
    >
      <Image source={require("./assets/add_document.png")} />
      <Text style={{ textAlign: "center" }}>New File</Text>
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   text: {
//     fontSize: 50,
//     textAlign: "center",
//   },
// });

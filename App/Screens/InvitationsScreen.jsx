import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

export default function App(navigation, route, props) {
  const [sent, setSent] = useState([
    [0, "Bob"],
    [1, "Alice"],
  ]);
  const [recieved, setRecieved] = useState([
    [0, "Julia"],
    [1, "Angela"],
  ]);
  const [text, setText] = useState("");

  const renderSent = ({ index, name }) => {
    return (
      <TouchableOpacity
      // onPress={() =>
      //   some popup function
      // }
      >
        <Image source={require("../../assets/mail_icon.png")} />
        <Text style={{ marginTop: 10, color: "black" }}>
          You sent {name} an invite!
        </Text>
      </TouchableOpacity>
    );
  };

  const renderRecieved = ({ index, name }) => {
    return (
      <TouchableOpacity
      // onPress={() =>
      //   some popup function
      // }
      >
        <Image source={require("../../assets/mail_icon.png")} />
        <Text style={{ marginTop: 10, color: "black" }}>
          {name} sent you an invite!
        </Text>
      </TouchableOpacity>
    );
  };

  const keyExtractor = (index) => {
    return index.toString();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flatlist}>
        <Text style={styles.subtitle}>Sent Invitations</Text>
        <FlatList
          data={sent}
          renderItem={renderSent}
          keyExtractor={(name, index) => keyExtractor(index)}
        />
      </View>
      <View style={styles.flatlist}>
        <Text style={styles.subtitle}>Recieved Invitations</Text>
        <FlatList
          data={recieved}
          renderItem={renderRecieved}
          keyExtractor={(name, index) => keyExtractor(index)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  flatlist: {
    flex: 1,
    width: "100%",
  },
  subtitle: {
    fontSize: 18,
    margin: 10,
  },
  textinputrow: {
    flexDirection: "row",
    marginBottom: 10,
  },
  textinput: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
  },
});

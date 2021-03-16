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
  Alert,
  Modal,
  Pressable,
} from "react-native";
import HomeButton from "../Components/HomeButton";

export default function App({ navigation }, route, props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [sent, setSent] = useState([]);
  const [recieved, setRecieved] = useState([
    [0, "Julia"],
    [1, "Angela"],
  ]);
  const [text, setText] = useState("");

  const renderSent = ({ index, name }) => {
    return (
      <TouchableOpacity
        // onPress={() => some popup function }
        style={styles.invite}
      >
        <Image
          source={require("../../assets/mail_icon.png")}
          style={styles.icon}
        />
        <View style={styles.invitetextwrapper}>
          <Text style={styles.invitetext}>You sent {name} an invite!</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderRecieved = ({ index, name }) => {
    return (
      <TouchableOpacity
        // onPress={() => some popup function }
        style={styles.invite}
      >
        <Image
          source={require("../../assets/mail_icon.png")}
          style={styles.icon}
        />
        <View style={styles.invitetextwrapper}>
          <Text style={styles.invitetext}>{name} sent you an invite!</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const keyExtractor = (index) => {
    return index.toString();
  };

  return (
    <SafeAreaView style={styles.container}>
      <HomeButton navigation={navigation} />
      <Text style={styles.title}>Invites</Text>
      <View style={styles.flatlist}>
        <Text style={styles.subtitle}>Sent</Text>
        {sent.length === 0 ? (
          <Text style={styles.emptytext}>No pending requests.</Text>
        ) : (
          <FlatList
            data={sent}
            renderItem={renderSent}
            keyExtractor={(name, index) => keyExtractor(index)}
          />
        )}
      </View>
      <View style={styles.flatlist}>
        <Text style={styles.subtitle}>Recieved</Text>
        {recieved.length === 0 ? (
          <Text style={styles.emptytext}>No new invites.</Text>
        ) : (
          <FlatList
            data={recieved}
            renderItem={renderRecieved}
            keyExtractor={(name, index) => keyExtractor(index)}
          />
        )}
      </View>

      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          // onRequestClose={() => {
          //   Alert.alert("Modal has been closed.");
          //   setModalVisible(!modalVisible);
          // }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Julia sent you an invitation to collaborate on their
                PLACEHOLDER_NAME project
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Decline</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Accept</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
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
    // flex: 1,
    width: "100%",
    marginTop: 15,
    marginBottom: 15,
  },
  invite: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: 9,
    marginLeft: 20,
    marginRight: 20,
  },
  icon: {
    marginLeft: 10,
    marginRight: 15,
  },
  invitetext: {
    // fontFamily: "DM Sans",
    fontSize: 22,
    marginLeft: 3,
    margin: 5,
  },
  invitetextwrapper: {
    // marginRight: 20,
    // width: "100%",
    width: "80%", // hacky fix, above 2 lines doesn't work for some reason
    borderColor: "black",
    borderBottomWidth: 3,
  },
  title: {
    // fontFamily: "DM Sans",
    fontSize: 34,
    fontWeight: "600",
    textAlign: "left",
    alignSelf: "stretch",
    marginLeft: 20,
    margin: 10,
  },
  subtitle: {
    // fontFamily: "DM Sans",
    fontSize: 22,
    fontWeight: "600",
    marginLeft: 20,
    margin: 10,
  },
  emptytext: {
    // fontFamily: "DM Sans",
    fontSize: 22,
    color: "#5551FF",
    marginLeft: 20,
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

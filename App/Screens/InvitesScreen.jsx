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
// fonts
import AppLoading from "expo-app-loading";
import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";
// blur
import { BlurView } from "expo-blur";

export default function App({ navigation }, props) {
  // load fonts
  let [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });
  // states
  const [modalVisible, setModalVisible] = useState(false);
  const [sent, setSent] = useState([]);
  const [recieved, setRecieved] = useState([
    "Julia",
    "Angela",
    "Bob",
    "Martin",
  ]);
  const [text, setText] = useState("");

  const renderSent = ({ index, item }) => {
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
          <Text style={styles.invitetext}>
            {item} has a pending invite from you
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderRecieved = ({ index, item }) => {
    return (
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          // onRequestClose={() => {
          //   Alert.alert("Modal has been closed.");
          //   setModalVisible(!modalVisible);
          // }}
        >
          <BlurView style={styles.blurView} intensity={80}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                {item} sent you an invitation to collaborate on their
                PLACEHOLDER_NAME project
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Pressable
                  style={[styles.button, styles.buttonDecline]}
                  onPress={() => {
                    recieved.splice(index, 1);
                    // setRecieved(recieved);
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={styles.buttonText}>Decline</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonAccept]}
                  onPress={() => {
                    recieved.splice(index, 1);
                    // setRecieved(recieved);
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={styles.buttonText}>Accept</Text>
                </Pressable>
              </View>
            </View>
          </BlurView>
        </Modal>
        <Pressable style={styles.invite} onPress={() => setModalVisible(true)}>
          <Image
            source={require("../../assets/mail_icon.png")}
            style={styles.icon}
          />
          <View style={styles.invitetextwrapper}>
            <Text style={styles.invitetext}>{item} sent you an invite!</Text>
          </View>
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
  flatlist: {
    // flex: 1,
    width: "100%",
    marginTop: 10,
    marginBottom: 20,
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
    fontFamily: "DMSans_400Regular",
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
    fontFamily: "DMSans_700Bold",
    fontSize: 34,
    textAlign: "left",
    alignSelf: "stretch",
    marginLeft: 20,
    margin: 10,
  },
  subtitle: {
    fontFamily: "DMSans_500Medium",
    fontSize: 22,
    marginLeft: 20,
    margin: 10,
  },
  emptytext: {
    fontFamily: "DMSans_400Regular",
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
  blurView: {
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
    borderRadius: 5,
    padding: 5,
    paddingLeft: 30,
    paddingRight: 30,
    marginLeft: 30,
    marginRight: 30,
    elevation: 2,
  },
  buttonAccept: {
    backgroundColor: "#5551FF",
  },
  buttonDecline: {
    backgroundColor: "#F24E1E",
  },
  buttonText: {
    color: "white",
    fontFamily: "DMSans_700Bold",
    fontSize: 16,
    textAlign: "center",
  },
  modalText: {
    fontSize: 14,
    fontFamily: "DMSans_400Regular",
    marginBottom: 15,
    textAlign: "center",
  },
});

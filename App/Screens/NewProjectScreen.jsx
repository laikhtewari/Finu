import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import TextFileIcon from "../../assets/textfile.svg";
import SoundFileIcon from "../../assets/soundfile.svg";
import VisualFileIcon from "../../assets/visualfile.svg";

// fonts
import AppLoading from "expo-app-loading";
import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";

global.FINU_GRAY = "#D9D9D9";
global.FINU_PURPLE = "#5551FF";

export default function App() {
  // load fonts
  let [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });

  // states
  const [confirmColor, setConfirmColor] = useState(global.FINU_GRAY);
  const [textBorderWidth, settextBorderWidth] = useState(2);
  const [soundBorderWidth, setSoundBorderWidth] = useState(2);
  const [visualBorderWidth, setVisualBorderWidth] = useState(2);
  const [selected, setSelected] = useState(null);

  const textClicked = () => {
    setConfirmColor(global.FINU_PURPLE);
    settextBorderWidth(8);
    setSoundBorderWidth(2);
    setVisualBorderWidth(2);
    setSelected("Text");
  };

  const soundClicked = () => {
    setConfirmColor(global.FINU_PURPLE);
    settextBorderWidth(2);
    setSoundBorderWidth(8);
    setVisualBorderWidth(2);
    setSelected("Sound");
  };

  const visualClicked = () => {
    setConfirmColor(global.FINU_PURPLE);
    settextBorderWidth(2);
    setSoundBorderWidth(2);
    setVisualBorderWidth(8);
    setSelected("Visual");
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>New Document</Text>
        <TextInput
          style={styles.nameInput}
          // onChangeText={(event.target.text) => updateTextStateFunc()}
          placeholder={"Document Name"}
          placeholderTextColor="grey"
        />
        <View
          style={[
            styles.container,
            { justifyContent: "space-between", marginBottom: "15%" },
          ]}
        >
          <DocType
            name="Text"
            description="Best for written agreements, contracts, and leases."
            svg={<TextFileIcon />}
            handleClick={textClicked}
            borderWidth={textBorderWidth}
          />
          <DocType
            name="Sound"
            description="Best for spoken agreements, meetings, and quick thoughts."
            svg={<SoundFileIcon />}
            handleClick={soundClicked}
            borderWidth={soundBorderWidth}
          />
          <DocType
            name="Visual"
            description="Best for graphs, photos, and diagrams."
            svg={<VisualFileIcon />}
            handleClick={visualClicked}
            borderWidth={visualBorderWidth}
          />
        </View>
        <BottomNavigation backgroundColor={confirmColor} />
      </SafeAreaView>
    );
  }
}

function DocType(props) {
  const name = props.name;
  return (
    <Pressable
      style={[{ borderWidth: props.borderWidth }, styles.docType]}
      onPress={(name) => props.handleClick(name)}
    >
      {props.svg}
      <View style={styles.docInfo}>
        <Text style={styles.docTitle}>{props.name}</Text>
        <Text style={styles.docText}>{props.description}</Text>
      </View>
    </Pressable>
  );
}

function BottomNavigation(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.bottom}>
      <Pressable style={styles.cancel} onPress={navigation.goBack}>
        <Image source={require("../../assets/backarrow.png")} />
        <Text
          style={{
            color: "#5551FF",
            marginLeft: 5,
            fontFamily: "DMSans_400Regular",
            fontSize: 17,
          }}
        >
          Cancel
        </Text>
      </Pressable>
      <Pressable
        style={[{ backgroundColor: props.backgroundColor }, styles.confirm]}
        onPress={navigation.goBack}
      >
        <Text style={styles.buttonText}>Confirm</Text>
      </Pressable>
    </View>
  );
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
    marginLeft: 20,
    margin: 10,
    marginTop: 60,
    marginBottom: 30,
  },
  option: {
    borderWidth: 1,
    width: "90%",
    height: 100,
    margin: 10,
  },
  nameInput: {
    height: 50,
    color: "black",
    fontSize: 16,
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 5,
    textAlign: "left",
    width: "90%",
    padding: 5,
    paddingLeft: 15,
    marginBottom: 25,
  },
  docType: {
    borderRadius: 18,
    borderColor: "#5551FF",
    padding: 10,
    width: "90%",
    margin: 15,
    flexDirection: "row",
  },
  docText: {
    fontFamily: "DMSans_400Regular",
    fontSize: 14,
  },
  docImage: {
    aspectRatio: 1,
  },
  docInfo: {
    alignItems: "center",
    width: "65%",
  },
  docTitle: {
    fontFamily: "DMSans_500Medium",
    fontSize: 25,
    marginBottom: 10,
  },
  cancel: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },
  bottom: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 40,
  },
  confirm: {
    marginRight: 20,
    padding: 7,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontFamily: "DMSans_700Bold",
    fontSize: 16,
    textAlign: "center",
  },
});

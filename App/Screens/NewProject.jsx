import React from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  StyleSheet
} from "react-native";

export default function App({ navigation }) {
  return(
    <View style={{alignItems: 'center', flex: 1}}>
      <Text style={styles.title}>New Document</Text>
      <TextInput
        style={styles.nameInput}
        // onChangeText={(event.target.text) => updateTextStateFunc()}
        placeholder={'Document Name'}
        placeholderTextColor='grey'
      />
      <DocType
        name='Text'
        description='Best for written agreements, contracts, and leases.'
        image={require('../../assets/textfile.png')}
      />
      <DocType
        name='Sound'
        description='Best for spoken agreements, meetings, and quick thoughts.'
        image={require('../../assets/soundfile.png')}
      />
      <DocType
        name='Visual'
        description='Best for graphs, photos, and diagrams.'
        image={require('../../assets/visualfile.png')}
      />
      <BottomNavigation navigation={navigation}/>
    </View>
  );
}

function DocType(props) {
  return(
    <View style={styles.docType}>
      <Image
        style={styles.docImage}
        source={props.image}
      />

        <View style={styles.docInfo}>
          <Text style={styles.docTitle}>{props.name}</Text>
          <Text>{props.description}</Text>
        </View>
    </View>
  );
}

function BottomNavigation({navigation}) {
  return(
    <View style={styles.bottom}>
      <Pressable
        style={styles.cancel}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require("../../assets/backarrow.png")}
        />
        <Text style={{color: '#5551FF', marginLeft: 5}}>Cancel</Text>
      </Pressable>
      <Pressable
        style={styles.confirm}
        onPress={() => navigation.navigate("Invites")}
      >
        <Text style={{color: 'white'}}>Confirm</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "DMSans_700Bold",
    fontSize: 34,
    marginLeft: 20,
    margin: 10,
    marginTop: 60,
    marginBottom: 30
  },
  option: {
    borderWidth: 1,
    width: '90%',
    height: 100,
    margin: 10
  },
  nameInput: {
    height: 50,
    color: 'black',
    fontSize: 16,
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 5,
    textAlign: 'left',
    width: '90%',
    padding: 5,
    paddingLeft: 15,
    marginBottom: 25
  },
  docType: {
    borderWidth: 2,
    borderRadius: 18,
    borderColor: '#5551FF',
    padding: 10,
    width: '90%',
    margin: 15,
    flexDirection: 'row'
  },
  docImage: {
    aspectRatio: 1,
  },
  docInfo: {
    alignItems: 'center',
    width: '65%'
  },
  docTitle: {
    fontFamily: "DMSans_700",
    fontSize: 25,
    marginBottom: 10
  },
  cancel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20
  },
  confirm: {
    marginRight: 20,
    backgroundColor: '#D9D9D9',
    padding: 10,
    borderRadius: 5
  },
  bottom: {
    flexDirection: 'row', 
    width: '100%',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 35
  }
});
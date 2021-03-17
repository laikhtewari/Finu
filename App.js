<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Image, Keyboard, TouchableWithoutFeedback} from 'react-native';

global.doc_margin = 5

export default function App(props) {
	const [value, onChangeText] = React.useState('Search Documents');
	const search_bar_height = 40;

	return (
		<View style={{}}>
			<Mail/>

			<Searchbar 
				search_bar_height={40}
				default_text='Search Documents'
			/>

			<FilterScrollable/>

			<DocumentGrid/>
			
		</View>
	);
}

function Mail(props) {
	return(
		<View style={{
			flex: 1,
			alignItems: "flex-end",
			marginTop: 20,
			marginRight: 20,
			marginBottom: 50
		}}>
			<Image source={require('./assets/mail_icon.png')}/>
			<Text style={{marginTop: 10, color: 'black'}}>Invites</Text>
		</View>
	);
}

function Searchbar(props) {
	return(
		<View 
			style={{
				height: props.search_bar_height,
				underlineColor: 'black',
				borderBottomWidth: 2,
				marginRight: 50,
				marginLeft: 50,
				bottom: 0
		}}>

			<TextInput
				style={{ 
					height: props.search_bar_height,
					color: 'black',
					fontSize: 24
				}}
				// onChangeText={}
				placeholder={props.default_text}
				placeholderTextColor='grey'
			/>
			
			<View style={{
				position: 'absolute',
				right: 0,
				height: props.search_bar_height,
				width: props.search_bar_height,
				padding: 7,
			}}>
				<Image 
					style={{
						height: '100%',
						width: '100%'
					}}
					source={require('./assets/search.png')}
				/>
			</View>
		</View>
	);
}

function ColoredCircle(props) {
	return(
		<View style={{width: 10, height: 10, marginTop: 3, marginLeft: 3, backgroundColor: props.color, borderRadius: 10}}/>
	);
}

function Document(props) {
	return(
		<View style={{width: 100, alignItems:'center', margin: global.doc_margin}}>
			<Image 
				style={{marginBottom: 10}}
				source={require('./assets/document_outline.png')}
			/>
			<View style={{flexDirection: 'row'}}>
				<Text style={{}}>{props.document_title}</Text>
				<ColoredCircle color='powderblue'/>
			</View>
		</View>
	);
}

function AddDocument(props) {
	return(
		<View style={{width: 100, alignItems:'center', margin: global.doc_margin}}>
			<Image 
				style={{marginBottom: 10}}
				source={require('./assets/add_document.png')}
			/>
			<Text style={{textAlign: 'center'}}>New File</Text>
		</View>
	);
}

function DocumentGrid(props) {
	//loop to gen n Document components in const

	return(
			<ScrollView contentContainerStyle={{margin:30, flexDirection:'column', alignItems:'center'}}>
				<DocumentRow include_add='true'/>
				<DocumentRow/>
				<DocumentRow/>
				<DocumentRow/>
				<DocumentRow/>
				<DocumentRow/>
				<View style={{height:200}}></View>
			</ScrollView>

	);
}

function DocumentRow(props) {
	const comp = props.include_add ? <AddDocument/> : <Document document_title={'Document 0'}/>;
	return(
		<View style={{flexDirection: 'row', alignItems:'center'}}>
			{comp}
			<Document
				document_title={'Document 1'}
			/>
			<Document
				document_title={'Document 2'}
			/>
		</View>
	);
}

function FilterScrollable(props) {
	return(
		<View style={{marginLeft: 50, marginTop: 30}}>
			<Text style={{fontSize: 16}}>Sort by:</Text>
			<ScrollView horizontal='true' contentContainerStyle={{flexDirection: 'row'}}>
				<Filter filter_name='Family' color='green'/>
				<Filter filter_name='Friends' color='yellow'/>
				<Filter filter_name='School' color='magenta'/>
				<Filter filter_name='Taxes' color='orange'/>
			</ScrollView>
		</View>
	);
}

function Filter(props) {
	return(
		<View 
			style={{
				borderWidth: 1, 
				borderRadius: 20, 
				borderColor: 'grey', 
				alignSelf: 'flex-start', 
				flexDirection: 'row', 
				alignItems: 'center',
				padding: 10,
				marginRight: 10,
				marginTop: 10
			}}>
			<ColoredCircle color={props.color} />
			<Text style={{paddingLeft: 10, paddingRight: 10}}>{props.filter_name}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
=======
import React, { useState } from "react";
import Navigator from "./App/Navigation/Navigation.jsx";

export default function App(props) {
  return <Navigator />;
}
>>>>>>> peng-navigation

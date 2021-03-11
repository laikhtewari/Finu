import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image} from 'react-native';

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
				marginRight: 20,
				marginLeft: 20,
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
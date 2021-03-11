import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

export default function App() {
	const [value, onChangeText] = React.useState('Useless Placeholder');
	return (
		<View style={{}}>
			<View style={{
				flex: 1,
				alignItems: "flex-end",
				marginTop: 20,
				marginRight: 20,
				marginBottom: 30
			}}>
				<Image source={require('./assets/mail_icon.png')}/>
			</View>
			<View style={{
				height: 40,
				underlineColor: 'black',
				borderBottomWidth: 1,
				marginRight: 20,
				marginLeft: 20,
				bottom: 0
			}}>
				<TextInput
					style={{ 
						height: 40
					}}
					onChangeText={text => onChangeText(text)}
					value={value}
				/>
				<View style={{
					position: 'absolute',
					right: 0,
					height: 40,
					width: 40,
				}}>
					<Image style={{
						height: '100%',
						width: '100%'
					}}
					source={require('./assets/search.png')}/>
				</View>
			</View>
			{/*	
				<View style={{width: 50, height: 50, top: 25, left: 50, backgroundColor: 'powderblue'}} />
				<View style={{width: 50, height: 50, top: 25, backgroundColor: 'skyblue'}} />
				<View style={{width: 50, height: 50, top: 25, right: 50, backgroundColor: 'steelblue'}} /> */}
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
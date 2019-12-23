import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export default class Home extends Component {
	render() {
		return (
			<View>
				<TouchableOpacity
					onPress={() => this.props.navigation.openDrawer()}
					style={{ height: 20, width: 100, backgroundColor: 'red' }}>
					<Text> textInComponent pp</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

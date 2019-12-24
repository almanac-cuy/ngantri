import React, { Component } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { Icon } from 'native-base'

export default class Searchbar extends Component {
	render() {
		return (
			<View style={styles.wrapper}>
				<View style={styles.searchContainer}>
					<Icon type='Ionicons' name='ios-search' style={styles.searchIcon} />

					<TextInput placeholder='Test "Sleman"' style={styles.textInput} />
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	wrapper: {
		position: 'absolute',
		top: 0,
		left: 0,
		backgroundColor: 'rgba(255,255,255,0.1)',
		width: '100%',
		height: 80,
		// zIndex: 1,
	},
	searchContainer: {
		display: 'flex',
		borderWidth: 1,
		borderColor: '#919191',
		backgroundColor: '#ffffff',
		shadowColor: '#30C1DD',
		shadowRadius: 10,
		shadowOpacity: 0.6,
		elevation: 8,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		borderRadius: 100,
		height: 40,
		marginTop: 28,
		marginLeft: 21,
		marginRight: 21,
	},
	searchIcon: {
		position: 'absolute',
		left: 14,
		top: 7,
		color: '#919191',
		fontSize: 22,
	},
	textInput: {
		display: 'flex',
		// marginTop: 11,
		marginLeft: 44,
		color: '#919191',
	},
})

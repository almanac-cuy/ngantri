import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { Item, Input, Icon } from 'native-base'
export default class Form extends Component {
	constructor() {
		super()
		this.state = {
			showPass: true,
			press: false,
		}
	}
	showPass = () => {
		if (this.state.press == false) {
			this.setState({
				showPass: false,
				press: true,
			})
		} else {
			this.setState({
				showPass: true,
				press: false,
			})
		}
	}
	render() {
		return (
			<View style={styles.header}>
				<Text style={styles.welcome}>Login</Text>
				<Item style={{ marginBottom: 10 }}>
					<Input placeholder='Email' />
				</Item>

				<Item>
					<Input secureTextEntry={this.state.showPass} placeholder='Password' />
					<TouchableOpacity onPress={this.showPass.bind(this)}>
						<Icon
							type='Entypo'
							name={this.state.press == false ? 'eye-with-line' : 'eye'}
						/>
					</TouchableOpacity>
				</Item>
				<TouchableOpacity style={styles.button}>
					<Text
						style={{
							color: '#FFF',
							paddingBottom: '5%',
							fontSize: 20,
						}}>
						Login
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					// onPress={() => this.props.navigation.replace('Register')}
					onPress={() =>
						this.props.navigation.replace('Register', {
							itemId: 2,
							name: 'siska eee',
						})
					}
					style={{ alignSelf: 'center' }}>
					<Text style={{ color: '#403E57', fontSize: 13, marginTop: '5%' }}>
						You don't have have an account?{' '}
						<Text
							style={{
								color: '#0f234e',
								fontWeight: '500',
								fontFamily: 'bold',
							}}>
							Register Now
						</Text>
					</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	header: {
		marginTop: '50%',
	},
	welcome: {
		fontSize: 30,
		// fontWeight: '400',
		textAlign: 'center',
		color: '#0f234e',
		marginTop: '5%',
		// marginBottom: 120,
	},
	button: {
		marginTop: '10%',
		marginHorizontal: 30,
		backgroundColor: '#0f234e',
		borderRadius: 10,
		height: 52,
		width: 300,
		alignItems: 'center',
		justifyContent: 'center',
	},
})

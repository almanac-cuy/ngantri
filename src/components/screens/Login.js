import React, { Component } from 'react'
import {
	View,
	TouchableOpacity,
	StyleSheet,
	Text,
	ToastAndroid,
} from 'react-native'
import { Item, Input, Icon } from 'native-base'
import Axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
export default class Form extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showPass: true,
			press: false,
			visible: false,
			toastMsg: '',
		}
	}

	showToast = msg => {
		this.setState(
			{
				visible: true,
				toastMsg: msg,
			},
			() => {
				this.hideToast()
			}
		)
	}

	hideToast = () => {
		this.setState({
			visible: false,
		})
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

	handleLogin = async () => {
		// this.showToast('Login')
		const email = this.state.email
		const password = this.state.password
		// console.log('email:', email, '\n', 'password:', password)
		const formData = new FormData()
		formData.append('email', email)
		formData.append('password', password)
		Axios.post('http://192.168.100.149:9400/api/user/login', formData)
			.then(async response => {
				this.showToast('Login Succes')
				console.log(response.data)
				await AsyncStorage.setItem('user_token', response.data)
				this.props.navigation.navigate('Home')
			})
			.catch(error => {
				this.showToast('Login Failed')
				console.log(error)
			})
	}

	render() {
		if (this.state.visible) {
			ToastAndroid.showWithGravityAndOffset(
				this.state.toastMsg,
				ToastAndroid.LONG,
				ToastAndroid.BOTTOM,
				25,
				50
			)
			return null
		}

		return (
			<View style={styles.header}>
				<Text style={styles.welcome}>Login</Text>
				<Item style={{ marginBottom: 10 }}>
					<Input
						placeholder={'Email'}
						keyboardType={'email-address'}
						autoCapitalize={'none'}
						onChangeText={email => this.setState({ email: email })}
					/>
				</Item>

				<Item>
					<Input
						placeholder={'Password'}
						onChangeText={password => this.setState({ password: password })}
						secureTextEntry={this.state.showPass}
						autoCapitalize='none'
					/>
					<TouchableOpacity onPress={this.showPass.bind(this)}>
						<Icon
							type='Entypo'
							name={this.state.press == false ? 'eye-with-line' : 'eye'}
						/>
					</TouchableOpacity>
				</Item>
				<TouchableOpacity style={styles.button} onPress={this.handleLogin}>
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
		// marginRight: '5%',
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

// import React, { Component } from 'react'
// import { View, TouchableOpacity, Text } from 'react-native'
// import Form from '../Components/Form'

// export default class Login extends Component {
// 	render() {
// 		return (
// 			<View>
// 				<Form

// 				/>
// 			</View>
// 		)
// 	}
// }

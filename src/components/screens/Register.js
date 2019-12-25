import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Image,
	ImageBackground,
	StatusBar,
	ToastAndroid,
} from 'react-native'
import { Form, Item, Label, Icon, Input } from 'native-base'
import Axios from 'axios'

class Register extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: '',
			email: '',
			password: '',
			phone: '',
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

	handleRegister = () => {
		const name = this.state.name
		const email = this.state.email
		const phone = this.state.phone
		const password = this.state.password

		if (email === '') {
			this.showToast("email can't be empty")
		} else if (name === '') {
			this.showToast("name can't be empty")
		} else if (password === '') {
			this.showToast("password can't be empty")
		} else if (phone === '') {
			this.showToast("password can't be empty")
		} else if (password.length < 6) {
			this.showToast('password minimum 6 characters ')
		} else {
			const formData = new FormData()
			formData.append('name', name)
			formData.append('email', email)
			formData.append('phone', phone)
			formData.append('password', password)
			// Axios.post("http://192.168.100.149:9400/api/user/register")
			Axios.post('http://192.168.100.149:9400/api/user/register', formData)
				.then(response => {
					this.showToast('Succes Register')
					// console.log('succes===>', response.data)
					this.props.navigation.navigate('Login')
				})
				.catch(error => {
					this.showToast('Failed Register')
					console.log(error)
				})
		}
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
			<View>
				<Text style={styles.welcome}>Register</Text>

				<Form style={styles.form}>
					<Item floatingLabel>
						<Label>Email</Label>
						<Input
							keyboardType={'email-address'}
							autoCapitalize={'none'}
							onChangeText={email => this.setState({ email: email })}
						/>
					</Item>
					<Item floatingLabel>
						<Label>Name</Label>
						<Input
							autoCapitalize={'words'}
							onChangeText={name => this.setState({ name: name })}
						/>
					</Item>
					<Item floatingLabel>
						<Label>No. Telepon</Label>
						<Input
							keyboardType={'phone-pad'}
							onChangeText={phone => this.setState({ phone: phone })}
						/>
					</Item>
					<Item floatingLabel>
						<Label>Password</Label>
						<Input
							onChangeText={password => this.setState({ password: password })}
							secureTextEntry={this.state.showPass}
							autoCapitalize='none'
						/>
						<Icon
							onPress={this.showPass.bind(this)}
							type='FontAwesome5'
							name={this.state.press == false ? 'eye-slash' : 'eye'}
							// name={this.state.isSecure ? 'eye-slash' : 'eye'}
							style={{ fontSize: 18, color: '#4B4C72' }}
						/>
					</Item>
				</Form>

				{/*READY BUTTON SUBMIT*/}
				<View></View>

				<TouchableOpacity style={styles.button} onPress={this.handleRegister}>
					<Text
						style={{
							color: '#FFF',
							marginTop: '5%',

							fontSize: 25,
						}}>
						Create Account
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => this.props.navigation.navigate('Login')}
					style={{ alignSelf: 'center' }}>
					<Text style={{ color: '#403E57', fontSize: 13, marginTop: '5%' }}>
						Already Have a Account?{' '}
						<Text
							style={{
								color: '#0f234e',
								fontWeight: '500',
								fontFamily: 'bold',
							}}>
							Login Now
						</Text>
					</Text>
				</TouchableOpacity>
				<View style={styles.service}>
					<Text style={{ fontWeight: '500', textAlign: 'center' }}>
						By creating an account, you are aggreing To our
					</Text>
					<TouchableOpacity>
						<Text
							style={{ color: '#403E57', fontSize: 15, textAlign: 'center' }}>
							Terms of Service
						</Text>
					</TouchableOpacity>
				</View>

				{/* </ImageBackground> */}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	welcome: {
		fontSize: 30,
		textAlign: 'center',
		color: '#0f234e',
		marginTop: '5%',
	},
	form: {
		marginRight: '5%',
	},
	service: {
		textAlign: 'center',
		marginTop: '16%',
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

export default Register

import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ToastAndroid,
	ActivityIndicator,
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
			errors: null,
			loadingBtn: false,
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
		this.setState({
			loadingBtn: true,
		})
		const name = this.state.name
		const email = this.state.email
		const phone = this.state.phone
		const password = this.state.password

		const formData = new FormData()
		formData.append('name', name)
		formData.append('email', email)
		formData.append('phone', phone)
		formData.append('password', password)
		Axios.post('http://192.168.100.149:9400/api/user/register', formData)
			.then(response => {
				this.showToast('Succes Register, please login')
				this.props.navigation.replace('Login')
				this.setState({
					loadingBtn: false,
				})
			})
			.catch(error => {
				if (error.response.data.message === 'User already exists') {
					this.showToast(error.response.data.message)
				}

				this.setState({
					errors: error.response.data.message,
					loadingBtn: false,
				})
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
					{this.state.errors && (
						<Text
							style={{
								marginLeft: 16,
								marginTop: 3,
								color: 'red',
								marginBottom: -20,
							}}>
							{this.state.errors.email}
						</Text>
					)}

					<Item floatingLabel>
						<Label>Name</Label>
						<Input
							autoCapitalize={'words'}
							onChangeText={name => this.setState({ name: name })}
						/>
					</Item>
					{this.state.errors && (
						<Text
							style={{
								marginLeft: 16,
								marginTop: 3,
								color: 'red',
								marginBottom: -20,
							}}>
							{this.state.errors.name}
						</Text>
					)}
					<Item floatingLabel>
						<Label>Phone</Label>
						<Input
							keyboardType={'phone-pad'}
							onChangeText={phone => this.setState({ phone: phone })}
						/>
					</Item>
					{this.state.errors && (
						<Text
							style={{
								marginLeft: 16,
								marginTop: 3,
								color: 'red',
								marginBottom: -20,
							}}>
							{this.state.errors.phone}
						</Text>
					)}
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
							style={{ fontSize: 18, color: '#4B4C72' }}
						/>
					</Item>
					{this.state.errors && (
						<Text
							style={{
								marginLeft: 16,
								marginTop: 3,
								color: 'red',
								marginBottom: -20,
							}}>
							{this.state.errors.password}
						</Text>
					)}
				</Form>

				{this.state.loadingBtn ? (
					<TouchableOpacity
						style={[styles.button, { backgroundColor: 'grey' }]}>
						<ActivityIndicator
							size='small'
							color='white'
							style={{ marginTop: 17 }}
						/>
					</TouchableOpacity>
				) : (
					<TouchableOpacity style={styles.button} onPress={this.handleRegister}>
						<Text
							style={{
								color: '#FFF',
								fontSize: 16,
								marginTop: 18,
								fontWeight: 'bold',
							}}>
							Create Account
						</Text>
					</TouchableOpacity>
				)}

				<TouchableOpacity
					onPress={() => this.props.navigation.replace('Login')}
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
		marginTop: '15%',
		fontWeight: 'bold',
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
		backgroundColor: '#6d63ff',
		borderRadius: 5,
		height: 42,
		width: 300,
		alignItems: 'center',
		justifyContent: 'center',
	},
})

export default Register

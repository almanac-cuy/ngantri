import React, { Component } from 'react'
import {
	View,
	TouchableOpacity,
	StyleSheet,
	Text,
	ToastAndroid,
	ActivityIndicator,
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
			email: '',
			password: '',
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

	handleLogin = async () => {
		this.setState({
			loadingBtn: true,
		})
		const email = this.state.email
		const password = this.state.password
		const formData = new FormData()
		formData.append('email', email)
		formData.append('password', password)
		Axios.post('http://192.168.100.149:9400/api/user/login', formData)
			.then(async response => {
				this.showToast('Login Succes')
				await AsyncStorage.setItem('user_token', response.data)
				this.props.navigation.navigate('Home')
			})
			.catch(error => {
				this.setState({
					loadingBtn: false,
				})
				this.setState({
					errors: error.response.data.message,
				})
				console.log(error.response.data.message)
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
				<Text style={styles.welcome}>Hi, Welcome Back !</Text>
				<View style={{ paddingHorizontal: 10, marginHorizontal: 10 }}>
					<Item style={{ marginBottom: 10 }}>
						<Input
							placeholder={'Email'}
							keyboardType={'email-address'}
							autoCapitalize={'none'}
							onChangeText={email => this.setState({ email: email })}
						/>
					</Item>
					{this.state.errors && (
						<Text
							style={{
								marginLeft: 5,
								fontSize: 14,
								color: 'red',
								marginBottom: 10,
							}}>
							{this.state.errors.email}
						</Text>
					)}

					<Item>
						<Input
							placeholder={'Password'}
							onChangeText={password => this.setState({ password: password })}
							secureTextEntry={this.state.showPass}
							autoCapitalize='none'
						/>
						<TouchableOpacity onPress={this.showPass.bind(this)}>
							<Icon
								style={{ fontSize: 18 }}
								type='Entypo'
								name={this.state.press == false ? 'eye-with-line' : 'eye'}
							/>
						</TouchableOpacity>
					</Item>
					{this.state.errors && (
						<Text
							style={{
								marginLeft: 5,
								fontSize: 14,
								color: 'red',
								marginBottom: 10,
							}}>
							{this.state.errors.password}
						</Text>
					)}
				</View>

				{this.state.loadingBtn ? (
					<TouchableOpacity
						style={[styles.button, { backgroundColor: 'grey' }]}>
						<ActivityIndicator
							size='small'
							color='white'
							style={{ marginBottom: 12 }}
						/>
					</TouchableOpacity>
				) : (
					<TouchableOpacity style={styles.button} onPress={this.handleLogin}>
						<Text
							style={{
								color: '#FFF',
								fontSize: 16,
								marginBottom: 23,
								fontWeight: 'bold',
							}}>
							Login
						</Text>
					</TouchableOpacity>
				)}

				<TouchableOpacity
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
		textAlign: 'center',
		color: '#0f234e',
		marginTop: 0,
		fontWeight: 'bold',
		marginBottom: 30,
	},
	button: {
		marginTop: '10%',
		marginHorizontal: 30,
		backgroundColor: '#0f234e',
		borderRadius: 5,
		height: 42,
		width: 300,
		alignItems: 'center',
		justifyContent: 'center',
	},
})

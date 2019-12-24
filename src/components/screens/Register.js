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
} from 'react-native'
import { Form, Item, Label, Icon, Input } from 'native-base'

class Register extends Component {
	constructor(props) {
		super(props)

		this.state = {
			username: '',
			email: '',
			password: '',
			isSecure: true,
		}
	}
	render() {
		return (
			<View>
				{/* <StatusBar backgroundColor="white" /> */}

				{/* <ImageBackground> */}
				{/* <Image /> */}
				{/*READY lOGIN*/}

				{/*READY FORM INPUT*/}
				{/* <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form> */}
				<Text style={styles.welcome}>Please register at Almanac</Text>

				<Form style={styles.form}>
					<Item floatingLabel>
						<Label>Email</Label>
						<Input />
					</Item>
					<Item floatingLabel>
						<Label>Username</Label>
						<Input />
					</Item>
					<Item floatingLabel>
						<Label>No. Telepon</Label>
						<Input />
					</Item>
					<Item floatingLabel>
						<Label>Password</Label>
						<Input secureTextEntry autoCapitalize='none' />
						<Icon
							onPress={() => this.setState({ isSecure: !this.state.isSecure })}
							type='FontAwesome5'
							name={this.state.isSecure ? 'eye-slash' : 'eye'}
							style={{ fontSize: 18, color: '#4B4C72' }}
						/>
					</Item>
					<Item floatingLabel>
						<Label>Confirm Password</Label>
						<Input secureTextEntry autoCapitalize='none' />
						<Icon
							onPress={() => this.setState({ isSecure: !this.state.isSecure })}
							type='FontAwesome5'
							name={this.state.isSecure ? 'eye-slash' : 'eye'}
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
						{' '}
						Create Account{' '}
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
	//   backgroundContainer: {
	//     flex: 1,
	//     width: null,
	//     height: null,
	//     justifyContent: 'center',
	//     alignItems: 'center',
	//   },
	welcome: {
		fontSize: 30,
		// fontWeight: '400',
		textAlign: 'center',
		color: '#0f234e',
		marginTop: '5%',
		// marginBottom: 120,
	},
	form: {
		// marginTop: '5%',
		// marginHorizontal: 80,
		marginRight: '5%',
	},
	service: {
		textAlign: 'center',
		marginTop: '16%',
	},
	//   errorMessage: {
	//     height: 72,
	//     alignItems: 'center',
	//     justifyContent: 'center',
	//     marginHorizontal: 30,
	//   },
	//   error: {
	//     color: '#E9446A',
	//     fontSize: 13,
	//     fontWeight: '600',
	//     textAlign: 'center',
	//   },
	//   form: {
	//     marginHorizontal: 30,
	//     marginTop: '150%',
	//   },
	//   inputTitle: {
	//     // color: '#8A8F9E',
	//     fontSize: 15,
	//     // marginTop: '10%',
	//     // textTransform: 'uppercase',
	//   },
	//   input: {
	//     // borderBottomColor: '#694be2',
	//     borderBottomWidth: StyleSheet.hairlineWidth,
	//     height: 40,
	//     width: 300,
	//     fontSize: 15,
	//     // color: '#694be2',
	//   },
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

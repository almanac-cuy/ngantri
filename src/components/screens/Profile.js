import React, { Component } from 'react'
import {
	Text,
	View,
	TouchableOpacity,
	StyleSheet,
	Image,
	StatusBar,
	Alert,
	ToastAndroid,
} from 'react-native'
import {
	Container,
	Header,
	Left,
	Button,
	Icon,
	Right,
	Body,
	Title,
	H1,
	H3,
} from 'native-base'
import jwt_decode from 'jwt-decode'
import AsyncStorage from '@react-native-community/async-storage'

export default class Profile extends Component {
	constructor(props) {
		super(props)
		this.state = {
			profile: {},
			toastMsg: '',
			visible: false,
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
	alertHandler = () => {
		//function to make two option alert
		Alert.alert(
			//title
			`Hello ${this.state.profile.name}`,
			//body
			'Are you sure you want to logout from your Ngantri account ?',
			[
				{
					text: 'Yes',
					onPress: async () => {
						this.showToast('Logout Succes')
						await AsyncStorage.clear()
						this.props.navigation.navigate('Auth')
					},
				},

				{
					text: 'No',
					onPress: () => console.log('No Pressed'),
					style: 'cancel',
				},
			],
			{ cancelable: false }
			//clicking out side of alert will not cancel
		)
	}

	componentDidMount() {
		this.getProfile()
	}

	async getProfile() {
		const data = await AsyncStorage.getItem('user_token')
		this.setState({
			profile: jwt_decode(data),
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

		console.log(this.state.profile)

		return (
			<Container>
				<StatusBar backgroundColor='#6d63ff' />
				<View
					style={{
						flex: 1,
						backgroundColor: 'rgba(192,192,192,0.3)',
					}}>
					<View style={styles.header}>
						<TouchableOpacity
							onPress={() => this.props.navigation.goBack()}
							style={{ paddingTop: 10, paddingLeft: 10 }}>
							<Icon
								type='FontAwesome'
								style={{ color: 'white', fontSize: 20 }}
								name='arrow-left'
							/>
						</TouchableOpacity>
					</View>
					<Image
						style={styles.avatar}
						source={{
							uri: `http:${this.state.profile.avatar}`,
						}}
					/>
					<View style={styles.wrapperBody}>
						<View style={styles.body}>
							<View style={styles.bodyContent}>
								<Text style={styles.name}>{this.state.profile.name}</Text>
								<Text style={styles.email}>{this.state.profile.email}</Text>
								<View style={styles.line}></View>

								<View style={styles.menuinner}>
									<Icon
										type='FontAwesome5'
										name='user'
										style={styles.iconMenuLeft}
									/>
									<Text style={styles.menuText}>Account</Text>
									<Icon
										type='Entypo'
										name='chevron-thin-right'
										style={styles.iconMenuRight}
									/>
								</View>
								<TouchableOpacity
									style={styles.menuinner}
									onPress={() =>
										this.props.navigation.navigate('History', {
											id_user: this.state.profile._id,
										})
									}>
									<Icon
										type='FontAwesome'
										name='history'
										style={styles.iconMenuLeft}
									/>
									<Text style={styles.menuText}>History</Text>
									<Icon
										type='Entypo'
										name='chevron-thin-right'
										style={styles.iconMenuRight}
									/>
								</TouchableOpacity>

								<TouchableOpacity
									style={styles.menuinner}
									onPress={this.alertHandler}>
									<Icon
										type='AntDesign'
										name='logout'
										style={styles.iconMenuLeft}
									/>
									<Text style={styles.menuText}>Logout</Text>
									<Icon
										type='Entypo'
										name='chevron-thin-right'
										style={styles.iconMenuRight}
									/>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			</Container>
		)
	}
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: '#6d63ff',
		height: 250,
		borderBottomRightRadius: 50,
		borderBottomLeftRadius: 50,
	},
	profiletag: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 30,
		position: 'absolute',
		marginLeft: 10,
		marginTop: 100,
	},
	avatar: {
		width: 130,
		height: 130,
		borderRadius: 10,
		borderWidth: 4,
		borderColor: '#919191',
		marginBottom: 10,
		alignSelf: 'center',
		position: 'absolute',
		marginTop: 150,
		backgroundColor: 'grey',
		zIndex: 1,
	},
	wrapperBody: {
		backgroundColor: 'white',
		// height: '50,
		position: 'absolute',
		marginTop: 230,
		height: 400,
		width: '90%',
		alignSelf: 'center',
		borderRadius: 20,
	},

	body: {
		marginTop: 60,
	},
	bodyContent: {
		flex: 1,
		alignItems: 'center',
	},
	name: {
		fontSize: 22,
		color: 'black',
		fontWeight: '600',
	},
	email: {
		fontSize: 16,
		color: '#919191',
		marginTop: 0,
		marginBottom: 10,
	},
	line: {
		borderWidth: 1,
		borderColor: 'rgba(255, 244, 244, 0.62)',
		width: '100%',
	},
	menuinner: {
		flexDirection: 'row',
		height: 50,
		width: '100%',
		marginBottom: -10,
		marginLeft: 10,
		marginTop: 10,
		alignSelf: 'flex-start',
	},
	iconMenuRight: {
		fontSize: 20,
		position: 'absolute',
		right: 10,
		color: 'grey',
	},
	iconMenuLeft: {
		fontSize: 20,
		color: 'grey',
	},
	menuText: {
		fontSize: 15,
		// padding: 5,
		marginLeft: 5,
		fontWeight: 'bold',
		color: 'grey',
	},
})

import React, { Component } from 'react'
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	StatusBar,
	ScrollView,
	ActivityIndicator,
} from 'react-native'
import jwt_decode from 'jwt-decode'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import {
	Container,
	Header,
	Content,
	Card,
	CardItem,
	Thumbnail,
	Button,
	Icon,
	Left,
	Right,
	Body,
	Title,
} from 'native-base'

export default class Current extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: [],
			history: [],
			loading: true,
		}
	}
	componentDidMount() {
		// this.getUser()
		this.getHistory()
	}
	// async getUser() {
	// 	const data = await AsyncStorage.getItem('user_token')
	// 	const user = jwt_decode(data)
	// 	const userid = user._id

	// 	this.setState({
	// 		user: jwt_decode(data),
	// 	})
	// }
	getHistory = async () => {
		const data = await AsyncStorage.getItem('user_token')
		const user = jwt_decode(data)
		const userid = user._id

		this.setState({
			user: jwt_decode(data),
		})
		axios
			.get(`http://192.168.100.149:9400/api/history/on-going/${userid}`)
			.then(response => {
				setTimeout(() => {
					this.setState({
						loading: false,
						history: response.data.history,
					})
					console.log('ini status orang dengan history', response.data.history)
				}, 1000)
			})
			.catch(error => {
				console.log(error)
				setTimeout(() => {
					this.setState({
						loading: false,
					})
				}, 1000)
			})
	}
	render() {
		// console.log('ini token', this.state.user)
		// console.log('ini user dengan id', this.state.user._id)

		return (
			<>
				<Header style={styles.header}>
					<StatusBar backgroundColor='#6d63ff' />
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon
								type='FontAwesome5'
								style={{ color: '#f3f5f7', fontSize: 20 }}
								name='arrow-left'
							/>
						</Button>
					</Left>
					<Body>
						<Title>Current</Title>
					</Body>

					<Right>
						<TouchableOpacity></TouchableOpacity>
					</Right>
				</Header>
				<ScrollView>
					{/* {this.state.loading} */}

					{this.state.loading ? (
						<View style={styles.loading}>
							<ActivityIndicator size='large' color='#0000ff' />
						</View>
					) : this.state.history.length > 0 ? (
						<Content>
							{this.state.history.map((history, index) => (
								<Card
									style={{
										flex: 1,
										marginLeft: '5%',
										marginRight: '5%',
										marginTop: '5%',
										borderRadius: 0,
									}}>
									<CardItem>
										<Body>
											<Text
												style={{
													fontSize: 15,
													fontWeight: 'bold',
												}}>
												{history.instance_name}
											</Text>
											<Text>{history.service}</Text>
											<Text>Tanggal : {history.date}</Text>
											<Text
												style={{
													alignSelf: 'center',
													fontSize: 20,
													fontWeight: 'bold',
													color: 'red',
												}}>
												{history.status}
											</Text>
										</Body>
									</CardItem>
								</Card>
							))}
						</Content>
					) : (
						<View style={styles.history}>
							<Icon
								type='FontAwesome'
								name='send-o'
								style={styles.iconhistory}
							/>
							<Text style={styles.texthistory}>
								Kamu Tidak memiliki "History"
							</Text>
						</View>
					)}
				</ScrollView>
			</>
		)
	}
}
const styles = StyleSheet.create({
	header: {
		backgroundColor: '#6d63ff',
		elevation: 0,
	},
	history: {
		alignItems: 'center',
		marginTop: '65%',
	},
	texthistory: {
		color: '#919191',
		fontSize: 15,
	},
	iconhistory: {
		fontSize: 40,
		color: '#919191',
		marginBottom: '5%',
	},
	loading: {
		// flex: 1,
		// alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
		paddingVertical: '80%',
	},
})

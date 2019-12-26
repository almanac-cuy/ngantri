import React, { Component } from 'react'
import { View, Text, H1, H3, Thumbnail } from 'native-base'
import axios from 'axios'

import {
	TouchableOpacity,
	StatusBar,
	StyleSheet,
	Image,
	ImageBackground,
} from 'react-native'
import {
	Container,
	Header,
	Left,
	Body,
	Right,
	Button,
	Icon,
	Title,
	Content,
} from 'native-base'
import AsyncStorage from '@react-native-community/async-storage'
import jwt_decode from 'jwt-decode'
class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			profile: [],
			categories: [],
		}
	}

	getCategory() {
		axios
			.get('http://192.168.100.149:9400/api/category')
			.then(res => {
				this.setState({
					categories: res.data.categories,
				})
			})
			.catch(err => {
				console.log(err)
			})
	}

	componentDidMount() {
		this.getProfile()
		this.getCategory()
	}

	async getProfile() {
		const data = await AsyncStorage.getItem('user_token')
		this.setState({
			profile: jwt_decode(data),
		})
	}

	render() {
		const { categories } = this.state
		const CAT = JSON.parse(JSON.stringify(categories))
		console.log(CAT)

		return (
			<>
				<Container>
					<Header style={style.header}>
						<StatusBar backgroundColor='#6d63ff' />
						<Left>
							<Button
								transparent
								onPress={() => this.props.navigation.openDrawer()}>
								<Icon
									type='FontAwesome5'
									style={{ color: '#f3f5f7', fontsize: 12 }}
									name='bars'
								/>
							</Button>
						</Left>
						<Right>
							<TouchableOpacity>
								<Image
									style={{ height: 32, width: 32, borderRadius: 32 / 2 }}
									source={{
										uri: `http:${this.state.profile.avatar}`,
									}}
								/>
							</TouchableOpacity>
						</Right>
					</Header>
					<View>
						<ImageBackground
							source={require('../../assets/bgImage.png')}
							style={{
								height: 350,
								width: null,
							}}
						/>
						<View
							style={{
								paddingHorizontal: 20,
								paddingVertical: 10,
								marginTop: -350,
							}}>
							<H1
								onPress={() => this.props.navigation.navigate('Profile')}
								style={{ fontWeight: 'bold', fontSize: 32, color: '#f3f5f7' }}>
								Hai {this.state.profile.name}
							</H1>
							<H3 style={{ color: '#f3f5f7' }}>Mau antri dimana?</H3>
						</View>
						<View style={style.ContainerMenu}>
							<View style={style.ContentMenu2}>
								<View style={style.ContentMenu}>
									<TouchableOpacity
										onPress={() => {
											this.props.navigation.navigate('ListPuskesmas', {
												category: CAT[1],
											})
										}}>
										<Thumbnail
											square
											source={{
												uri:
													'https://image.flaticon.com/icons/png/512/619/619051.png',
											}}
										/>
									</TouchableOpacity>
								</View>
								<Text>Kesehatan</Text>
							</View>
							<View style={style.ContentMenu2}>
								<View style={style.ContentMenu}>
									<TouchableOpacity
										onPress={() =>
											this.props.navigation.navigate('ListPuskesmas', {
												category: CAT[2],
											})
										}>
										<Thumbnail
											square
											source={{
												uri:
													'https://image.flaticon.com/icons/png/512/1728/1728386.png',
											}}
										/>
									</TouchableOpacity>
								</View>
								<Text>Kependudukan</Text>
							</View>
							<View style={style.ContentMenu2}>
								<View style={style.ContentMenu}>
									<Thumbnail
										square
										source={{
											uri:
												'https://image.flaticon.com/icons/png/512/2398/2398947.png',
										}}
									/>
								</View>
								<Text>Bank</Text>
							</View>
							<View style={style.ContentMenu2}>
								<View style={style.ContentMenu}>
									<Thumbnail
										square
										source={{
											uri:
												'https://image.flaticon.com/icons/png/512/2399/2399341.png',
										}}
									/>
								</View>
								<Text>Samsat</Text>
							</View>
						</View>
					</View>
				</Container>
			</>
		)
	}
}

export default Home

const style = StyleSheet.create({
	ContainerMenu: {
		paddingHorizontal: 20,
		paddingVertical: '50%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		flexWrap: 'wrap',
	},
	ContentMenu: {
		marginHorizontal: 10,
		marginVertical: 10,
		backgroundColor: '#f3f5f7',
		borderRadius: 50,
		width: 100,
		height: 100,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
	},
	ContentMenu2: {
		marginHorizontal: 10,
		marginVertical: 20,
		borderRadius: 50,
		width: 100,
		height: 100,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
	},
	header: {
		backgroundColor: '#6d63ff',
		elevation: 0,
	},
})

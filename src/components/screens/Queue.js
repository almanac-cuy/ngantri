import React, { Component } from 'react'
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
	View,
	Text,
} from 'native-base'
import {
	StyleSheet,
	StatusBar,
	TouchableOpacity,
	ScrollView,
	PermissionsAndroid,
	Platform,
} from 'react-native'
import Maps from '../Components/Maps'
import axios from 'axios'
import { mapboxApi } from '../../configs/key'
import Geolocation from 'react-native-geolocation-service'
import { instanceObjRef } from '../../configs/firebase'
import AsyncStorage from '@react-native-community/async-storage'
import jwt_decode from 'jwt-decode'

class Queue extends Component {
	state = {
		instance: this.props.navigation.getParam('instance'),
		service: this.props.navigation.getParam('service'),
		duration: 0,
		latitude: 0,
		longitude: 0,
		latitudeDelta: 0,
		longitudeDelta: 0,
		user: {},
		direction: {},
	}

	hasLocationPermission = async () => {
		if (
			Platform.OS === 'ios' ||
			(Platform.OS === 'android' && Platform.Version < 23)
		) {
			return true
		}
		const hasPermission = await PermissionsAndroid.check(
			PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
		)
		if (hasPermission) {
			return true
		}
		const status = await PermissionsAndroid.request(
			PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
		)
		if (status === PermissionsAndroid.RESULTS.GRANTED) {
			return true
		}
		if (status === PermissionsAndroid.RESULTS.DENIED) {
			ToastAndroid.show(
				'Location Permission Denied By User.',
				ToastAndroid.LONG
			)
		} else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
			ToastAndroid.show(
				'Location Permission Revoked By User.',
				ToastAndroid.LONG
			)
		}
		return false
	}

	getLocation = async () => {
		const hasLocationPermission = await this.hasLocationPermission()
		const { instance, service, latitude, longitude } = this.state

		if (!hasLocationPermission) {
			return
		}

		this.setState({ loading: true }, () => {
			Geolocation.getCurrentPosition(
				position => {
					let region = {
						latitude: position.coords.latitude,
						longitude: position.coords.longitude,
						latitudeDelta: 0.00922,
						longitudeDelta: 0.00421 * 1.5,
					}
					console.log(region)
					this.getDirections(
						region.latitude,
						region.longitude,
						instance.latitude,
						instance.longitude
					)

					this.setState({
						mapRegion: region,
						latitude: position.coords.latitude,
						longitude: position.coords.longitude,
					})
				},
				error => {
					this.setState({ errorMessage: error })
				},
				{
					enableHighAccuracy: true,
					timeout: 15000,
					maximumAge: 10000,
					distanceFilter: 50,
					forceRequestLocation: true,
				}
			)
		})
	}

	getDirections = async (originLat, originLon, desLat, desLon) => {
		try {
			const response = await axios.get(
				`https://api.mapbox.com/directions/v5/mapbox/driving/${originLon},${originLat};${desLon},${desLat}?access_token=${mapboxApi}`
			)
			console.log(response.data.routes[0].duration)
			this.setState({
				duration: response.data.routes[0].duration,
				direction: response.data,
			})
		} catch (error) {
			console.log(error.response.data)
		}
	}

	async componentDidMount() {
		this.getLocation()

		const user = await AsyncStorage.getItem('user_token')
		const decoded = await jwt_decode(user)
		this.setState({
			user: decoded,
		})
	}

	setQueue = async () => {
		const instanceID = instanceObjRef.child(this.state.instance._id)
		const serviceRef = instanceID.child('service')
		const serviceId = serviceRef.child(this.state.service._id)
		const userId = serviceId.child(this.state.user._id)

		await userId.set({
			username: this.state.user.name,
			user_id: this.state.user._id,
			user_avatar: this.state.user.avatar,
			service_name: this.state.service.name,
			duration: this.state.service.duration,
			date: Date.now(),
		})
	}

	render() {
		const { instance, service, latitude, longitude, user } = this.state
		console.log(user)
		return (
			<>
				<Header style={{ backgroundColor: '#6d63ff' }}>
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
						<Title>Overview</Title>
					</Body>

					<Right>
						<TouchableOpacity></TouchableOpacity>
					</Right>
				</Header>
				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={style.container}>
						<Text>Tujuan</Text>
						<View style={style.card}>
							<Icon
								type='FontAwesome5'
								name='map-marker-alt'
								style={{ fontSize: 20 }}
							/>
							<View style={{ paddingHorizontal: 10 }}>
								<Text style={{ marginLeft: 20 }}>{instance.name}</Text>
								<Text
									numberOfLines={2}
									style={{
										marginLeft: 20,
										fontSize: 13,
										color: 'grey',
									}}>
									{instance.address}
								</Text>
							</View>
						</View>
						<Text>Layanan</Text>
						<View style={[style.card, { height: 80 }]}>
							<Icon type='FontAwesome5' name='atom' style={{ fontSize: 20 }} />
							<View>
								<Text style={{ marginLeft: 20 }}>{service.name}</Text>
								<Text style={{ marginLeft: 20, fontSize: 13, color: 'grey' }}>
									Estimasi Layanan: {service.duration / 60} menit
								</Text>
							</View>
						</View>
						<Text>Detail</Text>
						<View
							style={[
								style.card,
								{
									height: 100,
									justifyContent: 'center',
									flexDirection: 'column',
								},
							]}>
							<Text style={{ marginLeft: 20 }}>Waktu Datang</Text>
							<Text style={{ marginLeft: 20, fontSize: 13, color: 'grey' }}>
								{Date()}
							</Text>
							<Text style={{ marginLeft: 20, marginTop: 5 }}>
								Estimasi Perjalanan
							</Text>
							<Text style={{ marginLeft: 20, fontSize: 13, color: 'grey' }}>
								{this.state.duration
									? Math.round((this.state.duration + service.duration) / 60)
									: '-'}{' '}
								menit
							</Text>
						</View>

						<Button
							onPress={() => {
								this.props.navigation.replace('Done', {
									estimatedDuration: Math.round(
										(this.state.duration + service.duration) / 60
									),
									region: {
										originLat: latitude,
										originLon: longitude,
										desLat: instance.latitude,
										desLon: instance.longitude,
									},
									direction: this.state.direction,
								})

								this.setQueue()
							}}
							style={{
								marginTop: 10,
								elevation: 0,
								borderRadius: 5,
								backgroundColor: '#6d63ff',
								alignItems: 'center',
								justifyContent: 'center',
							}}>
							<Text>Setuju</Text>
						</Button>
					</View>

					<View style={{ height: 40 }}></View>
				</ScrollView>
			</>
		)
	}
}

export default Queue

const style = StyleSheet.create({
	container: {
		marginHorizontal: 20,
		marginVertical: 20,
	},
	card: {
		height: 100,
		width: '100%',
		backgroundColor: '#f3f5f7',
		borderRadius: 5,
		padding: 10,
		alignContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		marginVertical: 10,
	},
})

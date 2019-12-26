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
import getDirections from 'react-native-google-maps-directions'

class Done extends Component {
	state = {
		estimatedDuration: this.props.navigation.getParam('estimatedDuration', 0),
		region: this.props.navigation.getParam('region', {}),
		direction: this.props.navigation.getParam('direction', {}),
	}

	handleGetDirections = () => {
		const region = this.state.region
		const { originLat, originLon, desLat, desLon } = region
		const data = {
			source: {
				latitude: originLat,
				longitude: originLon,
			},
			destination: {
				latitude: desLat,
				longitude: desLon,
			},
			params: [
				{
					key: 'travelmode',
					value: 'driving', // may be "walking", "bicycling" or "transit" as well
				},
			],
		}

		getDirections(data)
	}

	render() {
		const { estimatedDuration, region } = this.state
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
						<Title></Title>
					</Body>

					<Right>
						<TouchableOpacity></TouchableOpacity>
					</Right>
				</Header>
				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={style.container}>
						<Text style={{ fontWeight: 'bold', fontSize: 22 }}>
							Your queue is already registered
						</Text>

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
								{estimatedDuration ? estimatedDuration : '-'} menit
							</Text>
						</View>
					</View>
					<Maps originLat={region.desLat} originLon={region.desLon} />

					<Button
						onPress={this.handleGetDirections}
						style={{
							marginTop: 10,
							elevation: 0,
							borderRadius: 5,
							backgroundColor: '#6d63ff',
							alignItems: 'center',
							justifyContent: 'center',
							marginHorizontal: 20,
						}}>
						<Text>Get Direction</Text>
					</Button>
					<View style={{ height: 40 }}></View>
				</ScrollView>
			</>
		)
	}
}

export default Done

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

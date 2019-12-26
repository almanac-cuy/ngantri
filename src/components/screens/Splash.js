import React, { Component } from 'react'
import { ImageBackground, ActivityIndicator } from 'react-native'
import { Container, View, Text } from 'native-base'
import AsyncStorage from '@react-native-community/async-storage'

export default class Splash extends Component {
	async componentDidMount() {
		const token = await AsyncStorage.getItem('user_token')
		if (token) {
			this.props.navigation.navigate('Home')
		} else {
			this.props.navigation.navigate('Auth')
		}
	}

	render() {
		return (
			<Container>
				<View>
					<ImageBackground
						style={{
							// alignItems: 'center',
							// justifyContent: 'space-evenly',
							width: '100%',
							height: '100%',
						}}
						source={require('../../assets/bgImage.png')}>
						<View
							style={{
								top: 150,
								alignItems: 'center',
								justifyContent: 'center',
							}}>
							<Text
								style={{ fontSize: 60, color: '#f3f5f7', fontWeight: 'bold' }}>
								NGANTRI
							</Text>
							<Text style={{ color: '#f3f5f7', fontWeight: '100' }}>
								by Almanac Team
							</Text>
							<ActivityIndicator size='large' color='white' />
						</View>
					</ImageBackground>
				</View>
			</Container>
		)
	}
}

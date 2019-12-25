import React, { Component } from 'react'
import { ImageBackground, ActivityIndicator } from 'react-native'
import { Container, View } from 'native-base'
import AsyncStorage from '@react-native-community/async-storage'

export default class Splash extends Component {
	async componentDidMount() {
		const token = await AsyncStorage.getItem('user_token')

		if (token) {
			// this.props.getUser(user.uid);
			// if (this.props.user != null) {
			setTimeout(() => {
				// go to Home page
				this.props.navigation.navigate('Home')
			}, 1500)
			// }
		} else {
			setTimeout(() => {
				this.props.navigation.navigate('Auth')
			}, 2000)
		}
	}

	render() {
		return (
			<Container>
				<View>
					{/* <Content> */}

					{/* </Content> */}
					<ImageBackground
						style={{
							alignItems: 'center',
							justifyContent: 'space-evenly',
							width: '100%',
							height: '100%',
						}}
						source={{
							uri:
								'https://forums.crackberry.com/attachments/blackberry-10-wallpapers-f308/182934d1373923251t-blackberry-10-loading-wallpaper-fullback.jpg',
						}}>
						<View
							style={{
								top: 150,
								alignItems: 'center',
								justifyContent: 'center',
							}}>
							<ActivityIndicator size='large' color='white' />
						</View>
					</ImageBackground>
				</View>
			</Container>
		)
	}
}

import React, { Component } from 'react'
import { Image, ScrollView } from 'react-native'
import {
	Container,
	Header,
	Content,
	Card,
	CardItem,
	Thumbnail,
	Text,
	Button,
	Icon,
	Left,
	Body,
	Right,
	View,
} from 'native-base'

export default class CardDukcapil extends Component {
	render() {
		return (
			<ScrollView>
				<Container style={{ marginTop: 100 }}>
					<Content>
						<View>
							<Card style={{ flex: 0 }}>
								<CardItem
									style={{
										alignItems: 'flex-start',
										justifyContent: 'space-between',
									}}>
									<View
										style={
											{
												// borderWidth: 1,
												// marginRight: 120,
											}
										}>
										<Image
											source={{
												uri:
													'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Coat_of_arms_of_Yogyakarta.svg/1200px-Coat_of_arms_of_Yogyakarta.svg.png',
											}}
											style={{
												height: 150,
												width: 150,
												resizeMode: 'contain',
											}}
										/>
									</View>

									<View
										style={{
											// left: 150,
											// bottom: 40,

											marginLeft: 10,
											width: 170,
											paddingRight: 40,
											// borderWidth: 1,
										}}>
										<View>
											<Text numberOfLines={1}>
												Dukkkkkkkkkkkkkkcasssssssssssssssssssssssssssspil sleman
											</Text>
											<Text numberOfLines={1}>Alamat :</Text>
										</View>
									</View>
								</CardItem>
							</Card>
						</View>
					</Content>
				</Container>
			</ScrollView>
		)
	}
}

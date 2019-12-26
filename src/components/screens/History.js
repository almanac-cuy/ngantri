import React, { Component } from 'react'
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	StatusBar,
	ScrollView,
} from 'react-native'
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

export default class History extends Component {
	render() {
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
						<Title>History</Title>
					</Body>

					<Right>
						<TouchableOpacity></TouchableOpacity>
					</Right>
				</Header>
				<ScrollView>
					<Content>
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
									<Text>Kantor Kelurahan Pogung</Text>
									<Text>Pembuatan Ktp</Text>
									<Text>Tanggal :</Text>
									<Text>Done</Text>
								</Body>
							</CardItem>
						</Card>
					</Content>
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
})

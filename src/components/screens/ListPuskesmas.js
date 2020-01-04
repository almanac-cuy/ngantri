import React, { Component } from 'react'
import axios from 'axios'
import {
	Image,
	ScrollView,
	View,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	StatusBar,
} from 'react-native'
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
	Right,
	Body,
	Title,
} from 'native-base'
// import ServicePuskesmas from './ServicePuskesmas'

export default class ListPuskesmas extends Component {
	constructor(props) {
		super(props)
		this.state = {
			category: this.props.navigation.getParam('category', ''),
			listInstances: [],
		}
	}

	componentDidMount() {
		const { category } = this.state
		console.log(category)
		axios
			.get(
				`http://192.168.100.149:9400/api/instances/search?cat_id=${category._id}`
			)
			.then(response => {
				this.setState({
					listInstances: response.data.instance,
				})
			})
			.catch(err => {
				console.log(err)
			})
	}

	render() {
		const { listInstances, category } = this.state
		console.log(category)
		return (
			<View>
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
						<Title>{category.name}</Title>
					</Body>

					<Right>
						<TouchableOpacity></TouchableOpacity>
					</Right>
				</Header>
				<ScrollView>
					<Container style={{ marginTop: '5%' }}>
						<Content>
							<View>
								{listInstances.map(instance => (
									<TouchableOpacity
										key={instance._id}
										onPress={() =>
											this.props.navigation.navigate('ServicePuskesmas', {
												idInstance: instance._id,
												instance,
											})
										}>
										<Card
											style={{
												flex: 1,
												marginLeft: '5%',
												marginRight: '5%',
												borderRadius: 0,
											}}>
											<CardItem
												style={{
													alignItems: 'flex-start',
													justifyContent: 'space-between',
												}}>
												<View>
													<Image
														source={{
															uri: instance.image,
														}}
														style={{
															height: 100,
															width: 100,
															resizeMode: 'cover',
														}}
													/>
												</View>

												<View
													style={{
														marginLeft: 10,
														width: 170,
														paddingRight: 40,
													}}>
													<View>
														<Text
															numberOfLines={2}
															style={{
																fontSize: 16,
																width: 150,
															}}>
															{instance.name}
														</Text>
														<Text
															numberOfLines={3}
															style={{
																fontSize: 13,
																width: 150,
																marginTop: 3,
																textAlign: 'justify',
																color: 'grey',
															}}>
															{instance.address}
														</Text>
													</View>
												</View>
											</CardItem>
										</Card>
									</TouchableOpacity>
								))}
							</View>
						</Content>
					</Container>
				</ScrollView>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	header: {
		backgroundColor: '#6d63ff',
		elevation: 0,
	},
	wrapper: {
		position: 'relative',
		top: '-5%',
		left: 0,
		backgroundColor: 'rgba(255,255,255,0.1)',
		width: '80%',
		height: 80,
		marginLeft: '20%',
	},
	searchContainer: {
		display: 'flex',
		borderWidth: 1,
		borderColor: '#919191',
		backgroundColor: '#ffffff',
		shadowColor: '#30C1DD',
		shadowRadius: 10,
		shadowOpacity: 0.6,
		elevation: 8,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		borderRadius: 100,
		height: 40,
		// marginTop: '5%',
		marginLeft: 21,
		marginRight: 21,
	},
	searchIcon: {
		position: 'absolute',
		left: 14,
		top: 7,
		color: '#919191',
		fontSize: 22,
	},
	textInput: {
		display: 'flex',
		// marginTop: 11,
		marginLeft: 44,
		color: '#919191',
	},
})

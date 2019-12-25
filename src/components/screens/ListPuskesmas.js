import React, { Component } from 'react'
import axios from 'axios'
import {
	Image,
	ScrollView,
	View,
	StyleSheet,
	TextInput,
	TouchableOpacity,
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
} from 'native-base'
// import ServicePuskesmas from './ServicePuskesmas'

export default class ListPuskesmas extends Component {
	state = {
		idCategory: this.props.navigation.getParam('idItem'),
		listInstances: [],
	}

	componentDidMount() {
		const { idCategory } = this.state
		axios
			.get(
				`http://192.168.100.149:9400/api/instances/search?cat_id=${idCategory}`
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
		const { listInstances } = this.state
		console.log(listInstances)
		return (
			<View>
				<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
					<Icon
						style={{
							width: 23,
							fontSize: 35,
							marginLeft: '6%',
							marginTop: '10%',
							color: '#0f234e',
						}}
						name='arrow-back'
					/>
				</TouchableOpacity>
				<View style={styles.wrapper}>
					<View style={styles.searchContainer}>
						<Icon type='Ionicons' name='ios-search' style={styles.searchIcon} />

						<TextInput placeholder='Test "Sleman"' style={styles.textInput} />
					</View>
				</View>
				<View style={{ marginTop: '-12%', marginLeft: '5%' }}>
					<Text style={{ fontFamily: 'bold', color: '#0f234e', fontSize: 20 }}>
						List Puskesmas
					</Text>
				</View>
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
											})
										}>
										<Card
											style={{
												flex: 0,
												marginLeft: '5%',
												marginRight: '5%',
												borderRadius: 20,
											}}>
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
															uri: instance.image,
														}}
														style={{
															height: 100,
															width: 100,
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
														<Text numberOfLines={1}>{instance.name}</Text>
														<Text numberOfLines={3}>
															Alamat : {instance.address}
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
	wrapper: {
		position: 'relative',
		top: '-5%',
		left: 0,
		backgroundColor: 'rgba(255,255,255,0.1)',
		width: '80%',
		height: 80,
		marginLeft: '20%',
		// zIndex: 1,
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

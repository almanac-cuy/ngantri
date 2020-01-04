import React, { Component } from 'react'
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	StatusBar,
	ScrollView,
	ActivityIndicator,
} from 'react-native'
import axios from 'axios'
import {
	Icon,
	Button,
	Container,
	Content,
	Header,
	Card,
	CardItem,
	Right,
	Left,
	Body,
	Title,
} from 'native-base'

class ServicePuskesmas extends Component {
	state = {
		idInstance: this.props.navigation.getParam('idInstance'),
		listServices: [],
		instance: this.props.navigation.getParam('instance'),
		isLoading: true,
	}
	componentDidMount() {
		const { idInstance } = this.state

		axios
			.get(`http://192.168.100.149:9400/api/instances/services/${idInstance}`)
			.then(response => {
				this.setState({
					listServices: response.data.services,
					isLoading: false,
				})
			})
			.catch(err => console.log(err))
	}
	render() {
		const { instance, listServices, isLoading } = this.state

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
						<Title>Pilih Layanan</Title>
					</Body>

					<Right>
						<TouchableOpacity></TouchableOpacity>
					</Right>
				</Header>

				<ScrollView>
					{isLoading ? (
						<View
							style={{
								alignContent: 'center',
								alignItems: 'center',
								justifyContent: 'center',
								height: 200,
							}}>
							<ActivityIndicator size='large' color='#6d63ff' />
						</View>
					) : (
						listServices.map(service => (
							<TouchableOpacity
								key={service._id}
								style={styles.list}
								onPress={() =>
									this.props.navigation.navigate('Queue', { instance, service })
								}>
								<Card style={{ borderRadius: 0, elevation: 0 }}>
									<CardItem>
										<Left>
											<Icon type='FontAwesome5' name='atom' />
										</Left>
										<Text numberOfLines={2} style={{ width: '70%' }}>
											{service.name}
										</Text>
										<Right>
											<Icon name='arrow-forward' />
										</Right>
									</CardItem>
								</Card>
							</TouchableOpacity>
						))
					)}

					<View
						style={{
							marginHorizontal: 20,
							marginTop: 20,
						}}></View>
				</ScrollView>
			</>
		)
	}
}

const styles = StyleSheet.create({
	service: {
		marginTop: '-8%',
		marginLeft: '38%',
		marginBottom: 30,
		fontFamily: 'bold',
		fontSize: 20,
		color: '#0f234e',
	},
	list: {
		width: '90%',
		marginLeft: '5%',
		marginTop: 8,
		// color: 'red',
		// borderRadius: 20,
	},
})
export default ServicePuskesmas

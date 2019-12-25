import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
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
} from 'native-base'

class ServicePuskesmas extends Component {
	state = {
		idInstance: this.props.navigation.getParam('idInstance'),
		listServices: [],
	}
	componentDidMount() {
		const { idInstance } = this.state

		axios
			.get(`http://192.168.100.149:9400/api/instances/services/${idInstance}`)
			.then(response => {
				this.setState({
					listServices: response.data.services,
				})
			})
			.catch(err => console.log(err))
	}
	render() {
		const { idInstance, listServices } = this.state
		console.log(idInstance)
		return (
			<View>
				<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
					<Icon
						style={{
							width: 23,
							fontSize: 25,
							marginLeft: '6%',
							marginTop: '5%',
							color: '#0f234e',
						}}
						name='arrow-back'
					/>
				</TouchableOpacity>
				<View>
					<Text style={styles.service}>Pilih Layanan</Text>
				</View>
				{listServices.map(service => (
					<TouchableOpacity
						key={service._id}
						style={styles.list}
						onPress={() => this.props.navigation.navigate('Queue')}>
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
				))}
			</View>
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

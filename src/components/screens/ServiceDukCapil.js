import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import {
	Icon,
	Button,
	Container,
	Content,
	Header,
	Card,
	CardItem,
	Right,
} from 'native-base'

class ServiceDukCapil extends Component {
	render() {
		return (
			<View>
				<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
					<Icon
						style={{
							width: 23,
							fontSize: 35,
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
				<TouchableOpacity
					style={styles.list}
					onPress={() => this.props.navigation.navigate('Queue')}>
					<Card style={{ borderRadius: 10 }}>
						<CardItem>
							<Icon active name='logo-googleplus' />
							<Text>Buat KTP (Kartu Tanda Penduduk)</Text>
							<Right>
								<Icon name='arrow-forward' />
							</Right>
						</CardItem>
					</Card>
				</TouchableOpacity>
				<TouchableOpacity style={styles.list}>
					<Card>
						<CardItem>
							<Icon active name='logo-googleplus' />
							<Text>Buat KK (Kartu Keluarga)</Text>
							<Right>
								<Icon name='arrow-forward' />
							</Right>
						</CardItem>
					</Card>
				</TouchableOpacity>
				<TouchableOpacity style={styles.list}>
					<Card>
						<CardItem>
							<Icon active name='logo-googleplus' />
							<Text>Buat KK (Kartu Keluarga)</Text>
							<Right>
								<Icon name='arrow-forward' />
							</Right>
						</CardItem>
					</Card>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	service: {
		marginTop: '-8%',
		marginLeft: '38%',
		fontFamily: 'bold',
		fontSize: 20,
		color: '#0f234e',
	},
	list: {
		width: '90%',
		marginLeft: '5%',
		marginTop: '10%',
		color: 'red',
		borderRadius: 20,
	},
})
export default ServiceDukCapil

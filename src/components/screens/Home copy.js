import React, { Component } from 'react'
import { View, Text, H1, H3, Thumbnail } from 'native-base'
import { TouchableOpacity, StatusBar, StyleSheet } from 'react-native'
import {
	Container,
	Header,
	Left,
	Body,
	Right,
	Button,
	Icon,
	Title,
	Content,
} from 'native-base'
class Home extends Component {
	render() {
		return (
			//   <View>
			<Container>
				<Header style={style.header}>
					<Left>
						<Button
							transparent
							onPress={() => this.props.navigation.openDrawer()}>
							<Icon
								type='FontAwesome5'
								style={{ color: 'black' }}
								name='ellipsis-h'
							/>
						</Button>
					</Left>
					{/* <Body><Title>Header</Title></Body> */}
					<Right>
						<Button
							transparent
							onPress={() => this.props.navigation.navigate('Profile')}>
							<Icon
								type='FontAwesome5'
								style={{ color: 'black' }}
								name='user-circle'
							/>
						</Button>
					</Right>
				</Header>
				<View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
					<H1 onPress={() => this.props.navigation.navigate('Profile')}>
						Hai Arul
					</H1>
					<H3>Mau antri dimana?</H3>
				</View>
				<View style={style.ContainerMenu}>
					<TouchableOpacity
						onPress={() => this.props.navigation.navigate('ListPuskesmas')}>
						<View style={style.ContentMenu2}>
							<View style={style.ContentMenu}>
								<Thumbnail
									square
									source={{
										uri:
											'https://image.flaticon.com/icons/png/512/619/619051.png',
									}}
								/>
							</View>
							<Text>Kesehatan</Text>
						</View>
					</TouchableOpacity>
					{/* <View> */}
					{/* <TouchableOpacity
							onPress={() => this.props.navigation.navigate('ServiceDukCapil')}> */}
					<View style={style.ContentMenu2}>
						<View style={style.ContentMenu}>
							<TouchableOpacity
								onPress={() => this.props.navigation.navigate('ListDukCapil')}>
								<Thumbnail
									square
									source={{
										uri:
											'https://image.flaticon.com/icons/png/512/1728/1728386.png',
									}}
								/>
							</TouchableOpacity>
						</View>
						<Text>Dukcapil</Text>
					</View>
					{/* </TouchableOpacity> */}
					{/* </View> */}
					<View style={style.ContentMenu2}>
						<View style={style.ContentMenu}>
							<Thumbnail
								square
								source={{
									uri:
										'https://image.flaticon.com/icons/png/512/2398/2398947.png',
								}}
							/>
						</View>
						<Text>Bank</Text>
					</View>
					<View style={style.ContentMenu2}>
						<View style={style.ContentMenu}>
							<Thumbnail
								square
								source={{
									uri:
										'https://image.flaticon.com/icons/png/512/2399/2399341.png',
								}}
							/>
						</View>
						<Text>Samsat</Text>
					</View>
				</View>
			</Container>
			//   </View>
		)
	}
}

export default Home

const style = StyleSheet.create({
	ContainerMenu: {
		paddingHorizontal: 20,
		paddingVertical: '50%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		flexWrap: 'wrap',
	},
	ContentMenu: {
		marginHorizontal: 10,
		marginVertical: 10,
		backgroundColor: '#f3f5f7',
		borderRadius: 50,
		width: 100,
		height: 100,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
	},
	ContentMenu2: {
		marginHorizontal: 10,
		marginVertical: 20,
		// backgroundColor: '#f3f5f7',
		borderRadius: 50,
		width: 100,
		height: 100,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
	},
	header: {
		backgroundColor: 'white',
		elevation: 0,
		borderBottomWidth: 1,
		borderBottomColor: 'black',
	},
})

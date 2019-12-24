import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	StatusBar,
} from 'react-native'
import { Icon } from 'native-base'

export default class Profile extends Component {
	render() {
		return (
			<>
				<StatusBar backgroundColor='black' />
				<View style={{ flex: 1, backgroundColor: 'rgba(192,192,192,0.3)' }}>
					<View style={styles.header}>
						<Text style={styles.profiletag}>Profile</Text>
					</View>
					<Image
						style={styles.avatar}
						source={{
							uri:
								'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh6iD4NmOaeFexRWXdkckExxeLGUbRniiyCwQ6duX3Xw047r_q&s',
						}}
					/>
					<View style={styles.wrapperBody}>
						<View style={styles.body}>
							<View style={styles.bodyContent}>
								<Text style={styles.name}>Afshori Project Manager</Text>
								<Text style={styles.email}>afshori@gmail.com</Text>
								<View style={styles.line}></View>
								<View style={styles.menuinner}>
									<Icon
										type='FontAwesome'
										name='folder-open-o'
										style={styles.iconMenuLeft}
									/>
									<Text style={styles.menuText}>My Projects</Text>
									<Icon
										type='Entypo'
										name='chevron-thin-right'
										style={styles.iconMenuRight}
									/>
								</View>
								<View style={styles.menuinner}>
									<Icon
										type='FontAwesome5'
										name='user'
										style={styles.iconMenuLeft}
									/>
									<Text style={styles.menuText}>Account</Text>
									<Icon
										type='Entypo'
										name='chevron-thin-right'
										style={styles.iconMenuRight}
									/>
								</View>
								<View style={styles.menuinner}>
									<Icon
										type='Foundation'
										name='megaphone'
										style={styles.iconMenuLeft}
									/>
									<Text style={styles.menuText}>Share with friends</Text>
									<Icon
										type='Entypo'
										name='chevron-thin-right'
										style={styles.iconMenuRight}
									/>
								</View>
								<View style={styles.menuinner}>
									<Icon
										type='Ionicons'
										name='md-chatbubbles'
										style={styles.iconMenuLeft}
									/>
									<Text style={styles.menuText}>Review</Text>
									<Icon
										type='Entypo'
										name='chevron-thin-right'
										style={styles.iconMenuRight}
									/>
								</View>
								<View style={styles.menuinner}>
									<Icon
										type='Foundation'
										name='info'
										style={styles.iconMenuLeft}
									/>
									<Text style={styles.menuText}>Info</Text>
									<Icon
										type='Entypo'
										name='chevron-thin-right'
										style={styles.iconMenuRight}
									/>
								</View>
							</View>
						</View>
					</View>
				</View>
			</>
		)
	}
}
const styles = StyleSheet.create({
	header: {
		backgroundColor: 'black',
		height: 270,
		borderBottomRightRadius: 50,
		borderBottomLeftRadius: 50,
	},
	profiletag: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 30,
		position: 'absolute',
		marginLeft: 10,
		marginTop: 100,
	},
	avatar: {
		width: 130,
		height: 130,
		borderRadius: 63,
		borderWidth: 4,
		borderColor: '#919191',
		marginBottom: 10,
		alignSelf: 'center',
		position: 'absolute',
		marginTop: 150,
		backgroundColor: 'grey',
		zIndex: 1,
	},
	wrapperBody: {
		backgroundColor: 'white',
		// height: '50,
		position: 'absolute',
		marginTop: 230,
		height: 400,
		width: '90%',
		alignSelf: 'center',
		borderRadius: 20,
	},

	body: {
		marginTop: 60,
	},
	bodyContent: {
		flex: 1,
		alignItems: 'center',
	},
	name: {
		fontSize: 22,
		color: 'black',
		fontWeight: '600',
	},
	email: {
		fontSize: 16,
		color: '#919191',
		marginTop: 0,
		marginBottom: 10,
	},
	line: {
		borderWidth: 1,
		borderColor: 'rgba(255, 244, 244, 0.62)',
		width: '100%',
	},
	menuinner: {
		flexDirection: 'row',
		height: 50,
		width: '100%',
		marginBottom: -10,
		marginLeft: 10,
		marginTop: 10,
		alignSelf: 'flex-start',
	},
	iconMenuRight: {
		fontSize: 20,
		position: 'absolute',
		right: 10,
		color: 'grey',
	},
	iconMenuLeft: {
		fontSize: 20,
		color: 'grey',
	},
	menuText: {
		fontSize: 15,
		// padding: 5,
		marginLeft: 5,
		fontWeight: 'bold',
		color: 'grey',
	},
})
{
	/* <TouchableOpacity
	onPress={() => this.props.navigation.openDrawer()}
	style={{ height: 20, width: 100, backgroundColor: 'red' }}> */
}
{
	/* </TouchableOpacity> */
}

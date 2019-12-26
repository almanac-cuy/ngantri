import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
const { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = 0.2
export class Maps extends Component {
	render() {
		return (
			<View style={styles.container}>
				<MapView
					liteMode
					provider={PROVIDER_GOOGLE} // remove if not using Google Maps
					style={styles.map}
					initialRegion={this.props.initialRegion}
					region={{
						latitude: this.props.originLat,
						longitude: this.props.originLon,
						latitudeDelta: LATITUDE_DELTA,
						longitudeDelta: LONGITUDE_DELTA,
					}}>
					<Marker
						coordinate={{
							latitude: this.props.originLat,
							longitude: this.props.originLon,
						}}
					/>
				</MapView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		height: 200,
		width: '89%',
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 20,
	},
	map: {
		height: 200,
		width: '100%',
		marginHorizontal: 20,
	},
})

export default Maps

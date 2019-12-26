import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapboxGL from '@react-native-mapbox-gl/maps'
import { mapboxApi } from '../../configs/key'

MapboxGL.setAccessToken(mapboxApi)

export class MapDirections extends Component {
	state = {
		region: this.props.navigation.getParam('region', {}),
		direction: this.props.navigation.getParam('direction', {}),
		route: {},
	}

	componentDidMount() {
		const directions = this.props.navigation.getParam('direction', {})

		let coor = []
		const waypoints = directions.waypoints
		console.log(waypoints)

		for (let i = 0; i < waypoints.length; i++) {
			coor.push(waypoints[i].location)
		}
		this.setState({
			route: {
				type: 'FeatureCollection',
				features: [
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'LineString',
							coordinates: [...coor],
						},
					},
				],
			},
		})
	}

	render() {
		const { region, direction, route } = this.state
		const geometry = direction.routes[0].geometry

		console.log(route)
		return (
			<View style={styles.container}>
				<MapboxGL.MapView style={styles.map} rotateEnabled={true}>
					<MapboxGL.Camera
						zoomLevel={17}
						centerCoordinate={[region.originLon, region.originLat]}
					/>
					<MapboxGL.ShapeSource id='mapbox-directions-source' shape={route}>
						<MapboxGL.LineLayer
							id='mapbox-directions-line'
							// belowLayerID={Places.UnselectedSymbolID}
							style={{ lineColor: 'red', lineOffset: 10 }}
						/>
					</MapboxGL.ShapeSource>
				</MapboxGL.MapView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	page: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	container: {
		height: '100%',
		width: '100%',
		backgroundColor: 'transparent',
	},
	map: {
		flex: 1,
	},
	annotationContainer: {
		width: 120,
		height: 120,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'transparent',
		borderRadius: 25,
	},
	annotationFill: {
		width: 30,
		height: 30,
		borderRadius: 15,
		backgroundColor: 'red',
		transform: [{ scale: 0.6 }],
	},
})

export default MapDirections

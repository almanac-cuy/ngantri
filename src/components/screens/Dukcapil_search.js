import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import Searchbar from '../Components/Searchbar'
import CardDukcapil from '../Components/CardDukcapil'

export default class DukcapilSearch extends Component {
	render() {
		return (
			<>
				<ScrollView>
					<Searchbar />
					<CardDukcapil />
				</ScrollView>
			</>
		)
	}
}

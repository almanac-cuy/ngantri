import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Searchbar from '../Components/Searchbar'
import CardDukcapil from '../Components/CardDukcapil'

export default class DukcapilSearch extends Component {
	render() {
		return (
			<>
				<Searchbar />
				<CardDukcapil />
			</>
		)
	}
}

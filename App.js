import React, { Component } from 'react'

import { StatusBar } from 'react-native'

import Main from './src/components/navigations/Main'

class App extends Component {
	render() {
		return (
			<>
				<StatusBar backgroundColor='#6d63ff' />
				<Main />
			</>
		)

import { View, Text } from 'react-native'
// import MainNav from './src/components/navigations/Main'
// import Login from './src/components/screens/Login'
// import Searchbar from './src/components/Components/Searchbar'
// import DukcapilSearch from './src/components/screens/Dukcapil_search'
import Profile from './src/components/screens/Profile'

class App extends Component {
	render() {
		return <Profile />

	}
}

export default App

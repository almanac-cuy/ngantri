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
	}
}
export default App

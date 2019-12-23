import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Register from '../screens/Register'
import Login from '../screens/Login'
import Home from '../screens/Home'
import DrawerNavigator from './Drawer'
// const MainNav = createAppContainer(DrawerNavigator)

const AuthStack = createStackNavigator(
	{
		Login: Login,
		Register: Register,
	},
	{
		initialRouteName: 'Login',
		headerMode: 'none',
	}
)

const AppStack = createStackNavigator(
	{
		DrawerNavigator: DrawerNavigator,
		Home: Home,
	},
	{
		initialRouteName: 'DrawerNavigator',
		headerMode: 'none',
	}
)

const Router = createSwitchNavigator(
	{
		//   Loading: LoadingScreen,
		DrawerNavigator: AppStack,
		Auth: AuthStack,
	},
	{
		initialRouteName: 'Auth',
		headerMode: 'none',
	}
)

export default createAppContainer(Router)
// export default MainNav

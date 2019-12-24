// import {createAppContainer, createSwitchNavigator} from 'react-navigation';
// import DrawerNavigator from './Drawer';
// import Queue from './../screens/Queue';
// import {createStackNavigator} from 'react-navigation-stack';
// const Navigation = createStackNavigator(
//   {
//     // Login: Auth,
//     Home: DrawerNavigator,
//     Queue: {
//       screen: Queue,
//     },
//   },
//   {
//     headerMode: 'none',
//     initialRouteKey: 'Home',
//   },
// );

// const switchScreen = createSwitchNavigator({
//   //   Splash: Splash,
//   //   AuthScreen: Auth,
//   App: Navigation,
// });

// const MainNav = createAppContainer(switchScreen);

// export default MainNav;

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Register from '../screens/Register'
import Login from '../screens/Login'
import Home from '../screens/Home'
import DrawerNavigator from './Drawer'
import Queue from '../screens/Queue'
import ServiceDukCapil from '../screens/ServiceDukCapil'
import ServicePuskesmas from '../screens/ServicePuskesmas'
import ListDukCapil from '../screens/ListDukCapil'
import ListPuskesmas from '../screens/ListPuskesmas'
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
		ListDukCapil: ListDukCapil,

		ServiceDukCapil: ServiceDukCapil,
		ListPuskesmas: ListPuskesmas,
		ServicePuskesmas: ServicePuskesmas,
		Queue: Queue,
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

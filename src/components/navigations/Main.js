import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { fromRight } from 'react-navigation-transitions'
import Register from '../screens/Register'
import Login from '../screens/Login'
import Home from '../screens/Home'
import DrawerNavigator from './Drawer'
import Queue from '../screens/Queue'
import ServiceDukCapil from '../screens/ServiceDukCapil'
import ServicePuskesmas from '../screens/ServicePuskesmas'
import ListDukCapil from '../screens/ListDukCapil'
import ListPuskesmas from '../screens/ListPuskesmas'
import Splash from './../screens/Splash'
import Done from '../screens/Done'
import MapDirections from '../screens/MapDirections'
import History from '../screens/History'
import Profile from '../screens/Profile'

const AuthStack = createStackNavigator(
	{
		Login: Login,
		Register: Register,
	},
	{
		initialRouteName: 'Login',
		headerMode: 'none',
		transitionConfig: () => fromRight(),
	}
)

const AppStack = createStackNavigator(
	{
		DrawerNavigator: DrawerNavigator,
		Home: Home,
		ProfilePage: Profile,
		ListDukCapil: ListDukCapil,
		ServiceDukCapil: ServiceDukCapil,
		ListPuskesmas: ListPuskesmas,
		ServicePuskesmas: ServicePuskesmas,
		Queue: Queue,
		History: History,
		Done,
		MapDirections,
	},
	{
		initialRouteName: 'DrawerNavigator',
		headerMode: 'none',
		transitionConfig: () => fromRight(),
	}
)

const Router = createSwitchNavigator(
	{
		Splash: Splash,
		DrawerNavigator: AppStack,
		Auth: AuthStack,
	},
	{
		initialRouteName: 'Splash',
		headerMode: 'none',
		transitionConfig: () => fromRight(),
	}
)

export default createAppContainer(Router)

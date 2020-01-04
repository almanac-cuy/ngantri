import { createDrawerNavigator } from 'react-navigation-drawer'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Current from '../screens/Current'

const DrawerNavigator = createDrawerNavigator({
	Home,
	Profile,
	Current,
})

export default DrawerNavigator

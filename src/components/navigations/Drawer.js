import { createDrawerNavigator } from 'react-navigation-drawer'
import Home from '../screens/Home'
import Profile from '../screens/Profile'

const DrawerNavigator = createDrawerNavigator({
	Home,
	Profile,
})

export default DrawerNavigator

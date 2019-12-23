import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import DrawerNavigator from './Drawer';
import Queue from './../screens/Queue';
import {createStackNavigator} from 'react-navigation-stack';
const Navigation = createStackNavigator(
  {
    // Login: Auth,
    Home: DrawerNavigator,
    Queue: {
      screen: Queue,
    },
  },
  {
    headerMode: 'none',
    initialRouteKey: 'Home',
  },
);

const switchScreen = createSwitchNavigator({
  //   Splash: Splash,
  //   AuthScreen: Auth,
  App: Navigation,
});

const MainNav = createAppContainer(switchScreen);

export default MainNav;

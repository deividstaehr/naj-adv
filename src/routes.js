import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

// pages
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';
import Notification from './pages/Notifications/Notification';

import BottomTabNavigatorOptions from './config/BottomTabNavigator';

const defaultHeaderStyles = {
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#263484',
  },
};

const navigationOptionsNotificationGroup = ({navigation}) => {
  const routeName = navigation.state.routes[navigation.state.index].routeName;

  let tabBarVisible = true;

  if (routeName === 'Notification') {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
        }),
        App: createBottomTabNavigator(
          {
            NotificationsGroup: {
              screen: createStackNavigator(
                {
                  Notifications,
                  Notification,
                },
                {
                  defaultNavigationOptions: defaultHeaderStyles,
                  navigationOptions: navigationOptionsNotificationGroup,
                },
              ),
              navigationOptions: {
                title: 'Notificações',
              },
            },
            Dashboard,
            ProfileGroup: {
              screen: createStackNavigator(
                {
                  Profile,
                },
                {
                  defaultNavigationOptions: defaultHeaderStyles,
                },
              ),
              navigationOptions: {
                title: 'Perfil',
              },
            },
          },
          BottomTabNavigatorOptions,
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      },
    ),
  );

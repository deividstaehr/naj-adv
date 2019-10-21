import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {colors} from '~/config/styles';

export default {
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: ({focused}) => {
      const {routeName} = navigation.state;

      const color = focused ? colors.primary : '#666';

      let iconName = 'home';

      switch (routeName) {
        case 'Dashboard': {
          iconName = 'home';
          break;
        }
        case 'ProfileGroup': {
          iconName = 'person';
          break;
        }
        case 'NotificationsGroup': {
          iconName = 'notifications';
          break;
        }
      }

      return <Icon name={iconName} size={23} color={color} />;
    },
  }),
  initialRouteName: 'Dashboard',
  tabBarOptions: {
    keyboardHidesTabBar: true,
    activeTintColor: colors.primary,
    style: {
      borderTopColor: colors.light,
      borderTopWidth: 1,
    },
    labelStyle: {
      fontFamily: 'Quicksand-Bold',
    },
  },
};

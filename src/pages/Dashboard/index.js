import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationActions, withNavigationFocus} from 'react-navigation';

//import {Container, Text, Button, ButtonText} from './styles';
import {Container, Text} from './styles';

function Dashboard({navigation, isFocused}) {
  async function loadNotificationIfExists() {
    const storeItem = await AsyncStorage.getItem('@NAJ_ADV/notification');

    if (storeItem) {
      await AsyncStorage.removeItem('@NAJ_ADV/notification');

      navigation.navigate(
        'NotificationsGroup',
        {},
        NavigationActions.navigate({
          routeName: 'Notification',
          params: {
            notification: JSON.parse(storeItem),
          },
        }),
      );
    }
  }

  if (isFocused) {
    loadNotificationIfExists();
  }

  return (
    <Container>
      <Text>Dashboard</Text>
    </Container>
  );
}

Dashboard.navigationOptions = {
  title: 'Início',
};

export default withNavigationFocus(Dashboard);

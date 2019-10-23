import React, {Component} from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import OneSignal from 'react-native-onesignal';
import AsyncStorage from '@react-native-community/async-storage';

import './config/ReactotronConfig';

import {store, persistor} from './store';
import App from './App';

export default class Index extends Component {
  constructor(props) {
    super(props);

    OneSignal.init('73e62ec2-57a2-46d7-8e62-eec0da3188b3');

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived = data => {
    console.tron.log('****** onReceived ******');
    console.tron.log(data);
    console.tron.log('****** /onReceived ******');
  };

  onOpened = openResult => {
    const {additionalData} = openResult.notification.payload;

    async function setNotification(notification) {
      await AsyncStorage.setItem(
        '@NAJ_ADV/notification',
        JSON.stringify(notification),
      );
    }

    setNotification(additionalData.item);
  };

  onIds = id => {
    console.tron.log('****** onIds ******');
    console.tron.log(id);
    console.tron.log('****** /onIds ******');
  };

  render() {
    if (__DEV__) {
      console.tron.log('running debug...');
    }

    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar backgroundColor="#172368" barStyle="light-content" />
          <App />
        </PersistGate>
      </Provider>
    );
  }
}

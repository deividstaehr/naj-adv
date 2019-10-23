/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NavigationEvents} from 'react-navigation';

import api from '~/services/api';

import {
  Container,
  List,
  RefreshButton,
  RefreshText,
  EmptyNotification,
  EmptyNotificationText,
} from './styles';
import NotificationItem from '~/components/NotificationItem';
import HeaderTitle from '~/components/HeaderTitle';
import Separator from '~/components/Separator';
import Loader from '~/components/Loader';

export default function Notifications({navigation}) {
  const [notifications, setNotifications] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [modalVisibility, setModalVisibility] = useState(false);
  const user = useSelector(state => state.user.profile);

  async function loadNotifications() {
    setModalVisibility(true);

    const {data} = await api.get(`usuarios/${user.id}/notificacoes?classify=1`);

    setNotifications(data.response);
    setRefreshing(false);

    setTimeout(() => setModalVisibility(false), 500);
  }

  function refreshNotifications() {
    setRefreshing(true);
    loadNotifications();
  }

  useEffect(() => {
    loadNotifications();
  }, []);

  return (
    <Container>
      <Loader visible={modalVisibility} />
      <NavigationEvents onWillFocus={loadNotifications} />
      <RefreshButton onPress={loadNotifications}>
        <Icon name="cached" size={20} />
        <RefreshText>Atualizar</RefreshText>
      </RefreshButton>
      <List
        sections={notifications}
        keyExtractor={(item, index) => String(item.id) + index}
        renderItem={({item}) =>
          (!item.empty && (
            <NotificationItem
              title={item.titulo}
              message={item.mensagem}
              dateTime={item.data_inclusao}
              viewed={item.visualizado}
              onPress={() =>
                navigation.navigate('Notification', {notification: item})
              }
            />
          )) || (
            <EmptyNotification>
              <EmptyNotificationText>
                Nenhuma notificação encontrada
              </EmptyNotificationText>
            </EmptyNotification>
          )
        }
        renderSectionHeader={({section: {title}}) => <Separator text={title} />}
        onRefresh={refreshNotifications}
        refreshing={refreshing}
      />
    </Container>
  );
}

Notifications.navigationOptions = {
  headerTitle: <HeaderTitle title="Notificações" />,
};

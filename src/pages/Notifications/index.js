import React, {useState, useEffect} from 'react';

import api from '~/services/api';

import {Container, List} from './styles';
import NotificationItem from '~/components/NotificationItem';
import HeaderTitle from '~/components/HeaderTitle';

export default function Notifications({navigation}) {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('notificacoes');

      setNotifications(response.data);
    }

    loadNotifications();
  }, []);

  return (
    <Container>
      <List
        data={notifications}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <NotificationItem
            title={item.title}
            message={item.message}
            onPress={() => navigation.navigate('Notification', {item})}
          />
        )}
      />
    </Container>
  );
}

Notifications.navigationOptions = {
  headerTitle: <HeaderTitle title="Notificações" />,
};

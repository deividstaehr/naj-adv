/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

import {Container, Box, Text} from './styles';
import HeaderTitle from '~/components/HeaderTitle';
import Loader from '~/components/Loader';
import api from '~/services/api';

export default function Notification({navigation}) {
  const [modalVisibility, setModalVisibility] = useState(false);
  const notification = navigation.getParam('notification');
  const user = useSelector(state => state.user.profile);

  useEffect(() => {
    setModalVisibility(true);

    navigation.setParams({
      headerTitle: notification.titulo,
    });

    async function setViewedNotification() {
      await api.put(
        `usuarios/${user.id}/notificacoes/${notification.id}/visualizado`,
      );
    }

    if (notification.visualizado === 0) {
      setViewedNotification();
    }

    setTimeout(() => setModalVisibility(false), 500);
  }, []);

  return (
    <Container>
      <Loader visible={modalVisibility} text="Carregando notificação" />
      <Box>
        <Text>{notification.mensagem}</Text>
      </Box>
    </Container>
  );
}

Notification.navigationOptions = ({navigation}) => {
  const title = navigation.getParam('headerTitle');

  return {
    headerTitle: <HeaderTitle title={title} back={true} />,
  };
};

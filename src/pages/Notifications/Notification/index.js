import React from 'react';

import {Container} from './styles';
import HeaderTitle from '~/components/HeaderTitle';

export default function Notification() {
  return <Container />;
}

Notification.navigationOptions = {
  headerTitle: <HeaderTitle title="Notificação" back={true} />,
};

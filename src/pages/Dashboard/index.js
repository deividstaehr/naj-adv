import React from 'react';

import {Container, Text} from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Text>Dashboard</Text>
    </Container>
  );
}

Dashboard.navigationOptions = {
  title: 'Início',
};

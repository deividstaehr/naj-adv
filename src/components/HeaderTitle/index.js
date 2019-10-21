import React from 'react';

import {Container, Title} from './styles';

export default function HeaderTitle({title, back = false}) {
  const stylesBack = !back
    ? {
        padding: 15,
      }
    : {};

  return (
    <Container style={stylesBack}>
      <Title>{title}</Title>
    </Container>
  );
}

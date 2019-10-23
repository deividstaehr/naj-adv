import React from 'react';

import {Container, WrapperContent, WrapperText, Wrapper} from './styles';

export default function Loader({text, visible}) {
  return (
    <Container visible={visible} transparent>
      <Wrapper>
        <WrapperContent>
          <WrapperText>{(text && text) || 'Carregando'}...</WrapperText>
        </WrapperContent>
      </Wrapper>
    </Container>
  );
}

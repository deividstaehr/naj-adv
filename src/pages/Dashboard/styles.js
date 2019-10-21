import styled from 'styled-components/native';

import {fonts} from '~/config/styles';

export const Container = styled.View`
  background: #eee;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 20px;
  font-family: '${fonts.regular}';
`;

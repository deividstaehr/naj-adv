import styled from 'styled-components/native';
import {fonts} from '~/config/styles';

export const Container = styled.View`
  flex: 1;
  background: #eee;
`;

export const Box = styled.View`
  background: #fff;
  padding: 10px 15px;
`;

export const Text = styled.Text`
  padding: 10px 0;
  font-family: ${fonts.regular};
`;

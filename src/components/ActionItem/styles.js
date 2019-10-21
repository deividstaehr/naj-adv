import styled from 'styled-components/native';
import {fonts} from '~/config/styles';

export const Container = styled.TouchableWithoutFeedback``;

export const Text = styled.Text`
  font-family: ${fonts.regular};
`;

export const Box = styled.View`
  background: #fff;
  padding: 30px 15px;
  margin-bottom: 5px;
`;

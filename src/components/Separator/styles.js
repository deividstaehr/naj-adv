import styled from 'styled-components/native';

import {fonts} from '~/config/styles';

export const Container = styled.View`
  padding: 10px 15px;
  background: #eee;
`;

export const Text = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-family: ${fonts.bold};
  text-transform: uppercase;
`;

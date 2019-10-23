import styled from 'styled-components/native';

import {fonts} from '~/config/styles';

export const Container = styled.Modal`
  background: #eee;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.View`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const WrapperContent = styled.View`
  background: #fff;
  padding: 20px 35px;
  border-radius: 7px;
  position: absolute;
`;

export const WrapperText = styled.Text`
  font-family: ${fonts.bold};
`;

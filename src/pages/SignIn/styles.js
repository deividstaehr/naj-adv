import {Platform} from 'react-native';
import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Form = styled.KeyboardAvoidingView.attrs({
  enabled: Platform === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  padding: 15px;
  background: #263484;
  justify-content: center;
  align-items: center;
`;

export const Separator = styled.View`
  height: 10px;
`;

export const FormGroup = styled.View`
  width: 100%;
`;

export const Text = styled.Text`
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
  padding: 10px 0;
  font-family: 'Quicksand-Regular';
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #eee;
  font-weight: bold;
  text-align: center;
  padding-bottom: 10px;
  font-family: 'Quicksand-Regular';
`;

export const FormInput = styled(Input)``;

export const FormButton = styled(Button)`
  width: 100%;
`;

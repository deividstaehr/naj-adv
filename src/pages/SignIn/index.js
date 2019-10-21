import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {
  Form,
  Separator,
  Text,
  Title,
  FormGroup,
  FormInput,
  FormButton,
} from './styles';
import {signInRequest} from '~/store/modules/auth/actions';

export default function SignIn({navigation}) {
  const dispatch = useDispatch();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(login, password));
  }

  return (
    <Form>
      <Title>NajAdv</Title>

      <FormGroup>
        <Text>Usuário</Text>
        <FormInput
          icon="person"
          placeholder="Digite o seu usuário"
          autoCapitalize="none"
          autoCorrect={false}
          value={login}
          onChangeText={setLogin}
        />
      </FormGroup>

      <FormGroup>
        <Text>Senha</Text>
        <FormInput
          icon="lock"
          secureTextEntry
          placeholder="Digite a sua senha"
          value={password}
          onChangeText={setPassword}
        />
      </FormGroup>

      <Separator />

      <FormButton loading={loading} onPress={handleSubmit}>
        Entrar
      </FormButton>
    </Form>
  );
}

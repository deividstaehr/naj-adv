import React from 'react';

import {useSelector, useDispatch} from 'react-redux';

import {signOut} from '~/store/modules/auth/actions';
import {
  Container,
  Box,
  LogoutButton,
  Line,
  LineTitle,
  LineText,
} from './styles';
import Separator from '~/components/Separator';

import HeaderTitle from '~/components/HeaderTitle';

export default function Profile() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.profile);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Separator text="Meus dados" />

      <Box>
        <Line>
          <LineTitle>Nome</LineTitle>
          <LineText>{user.nome}</LineText>
        </Line>

        {user.apelido && (
          <Line>
            <LineTitle>Apelido</LineTitle>
            <LineText>{user.apelido}</LineText>
          </Line>
        )}

        <Line>
          <LineTitle>E-mail</LineTitle>
          <LineText>{user.email_recuperacao}</LineText>
        </Line>

        <Line>
          <LineTitle>Sexo</LineTitle>
          <LineText>
            {user.sexo.toUpperCase() === 'M' ? 'Masculino' : 'Feminino'}
          </LineText>
        </Line>

        <Line>
          <LineTitle>Data de Nascimento</LineTitle>
          <LineText>{user.data_nascimento}</LineText>
        </Line>

        <Line>
          <LineTitle>Data de Inclusão</LineTitle>
          <LineText>{user.data_inclusao}</LineText>
        </Line>
      </Box>

      <Separator text="Encerrar sessão" />

      <Box>
        <Line>
          <LogoutButton onPress={handleLogout}>Sair</LogoutButton>
        </Line>
      </Box>
    </Container>
  );
}

Profile.navigationOptions = {
  headerTitle: <HeaderTitle title="Perfil" />,
};

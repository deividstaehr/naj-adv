import {Alert} from 'react-native';
import {takeLatest, call, put, all} from 'redux-saga/effects';

import api from '~/services/api';
import {signInSuccess, signFailure} from './actions';

export function* signIn({payload}) {
  try {
    const {login, password} = payload;

    const request = {
      login: login,
      password: password,
      usuario_tipo_id: 2,
    };

    const res = yield call(api.post, 'auth/login', request);

    const {statusCode, response} = res.data;

    if (statusCode !== 200) {
      throw response.message;
    }

    api.defaults.headers.Authorization = `Bearer ${response.accessToken}`;

    yield put(signInSuccess(response.accessToken, response.user));
  } catch (err) {
    Alert.alert('Falha na autenticação', 'Verifique os seus dados!');

    yield put(signFailure());
  }
}

export function setToken({payload}) {
  if (!payload) {
    return;
  }

  const {token} = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);

import { takeLatest, call, put, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import axios from 'axios';
import api from '~/services/api';
import { signInSuccess, signFailure } from './actions';

import history from '~/services/history';

export function* signIn({ payload }) {
  const { email, password } = payload;

  try {
    /*    const response = yield axios.post('http://127.0.0.1:3333/authenticate', {
      email,
      password,
    }); */

    const response = yield call(api.post, 'authenticate', {
      email,
      password,
    });

    const { token, user } = response.data;

    console.log(token, user);

    if (user.profile < 1) {
      toast.error('Acesso não permitido com este usuário');
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados');
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;
  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);

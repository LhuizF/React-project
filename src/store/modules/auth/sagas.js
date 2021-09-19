import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import history from '../../../services/history';

function* loginRequest({ payload }) {
    try {
        const response = yield call(axios.post, '/tokens', payload);
        yield put(actions.loginSuccess({ ...response.data }));

        toast.success('Login realizado com sucesso');

        axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
        history.push(payload.prevPath);
    } catch (e) {
        toast.error('Usuário ou senha inválidos');
        yield put(actions.loginFailure());
    }
}

// eslint-disable-next-line
function* registerRequest({ payload }) {
    console.log(payload);
    const { id, nome, email, password } = payload;

    try {
        if (id) {
            yield call(axios.put, '/users', {
                nome,
                email,
                password: password || undefined
            });
            toast.success('Conta editaca com sucesso!');
            yield put(actions.registerUpdatedSuccess(payload));
        } else {
            yield call(axios.post, '/users', {
                nome,
                email,
                password
            });
            toast.success('Conta Criada com sucesso!');
            yield put(actions.registerCreatedSuccess(payload));
            history.push('/login');
        }
    } catch (e) {
        const status = get(e, 'response.status', false);
        const errors = get(e, 'response.data.errors', []);

        if (status === 401) {
            toast.warning('Vecê precisa fazer login novamente');
            yield put(actions.registerFailure());
            return history.push('/login');
        }

        if (errors.length > 0) {
            errors.map((error) => toast.error(error));
        } else {
            toast.error('Ocorreu um erro inesperado');
        }

        yield put(actions.registerFailure());
    }
}

function persistRehydrate({ payload }) {
    const token = get(payload, 'auth.token', '');
    if (!token) return;
    axios.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
    takeLatest(types.LOGIN_REQUEST, loginRequest),
    takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
    takeLatest(types.REGISTER_REQUEST, registerRequest)
]);

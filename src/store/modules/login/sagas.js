import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import * as actions from './actions';
import * as types from '../types';

const test = true;

const request = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (test) {
                resolve();
            } else {
                reject();
            }
        }, 2000);
    });

function* exampleRequest() {
    try {
        yield call(request);
        yield put(actions.loginSuccess());
        toast.success('Logado com sucesso!!');
    } catch {
        toast.error('Ocorreu um erro');
        put(actions.loginFailure());
    }
}

export default all([takeLatest(types.LOGIN_REQUEST, exampleRequest)]);

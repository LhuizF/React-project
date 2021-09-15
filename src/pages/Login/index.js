import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import * as examplesActions from '../../store/modules/carrinho/actions';
import * as loginActions from '../../store/modules/login/actions';

export default function Login() {
    const dispatch = useDispatch();

    function handleAdd(e) {
        e.preventDefault();

        dispatch(examplesActions.addOne());
    }

    function handleRemove(e) {
        e.preventDefault();

        dispatch(examplesActions.removeOne());
    }

    function handleClick(e) {
        e.preventDefault();
        dispatch(loginActions.loginRequest());
    }

    return (
        <Container>
            <h1>Login</h1>
            <p>Vlalvalcal</p>
            <input type="text" />
            <button type="button" onClick={handleAdd}>
                Adicionar
            </button>
            <button type="button" onClick={handleRemove}>
                remover
            </button>
            <button type="button" onClick={handleClick}>
                Login
            </button>
        </Container>
    );
}

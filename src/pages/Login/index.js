import React from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';

import { Title, MainContainer, Section } from '../../styles/GlobalStyles';
import uniLogo from '../../assets/img/uniLogo.png';
import { Form } from './styled';
import * as actions from '../../store/modules/auth/actions';

export default function Login(props) {
    const dispatch = useDispatch();

    const prevPath = get(props, 'location.state.prevPath', '/');

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let formErros = false;

        if (!isEmail(email)) {
            formErros = true;
            toast.error('Email inválido');
        }

        if (password.length < 6 || password.length > 25) {
            formErros = true;
            toast.error('Senha inválido');
        }

        if (formErros) return;

        dispatch(actions.loginRequest({ email, password, prevPath }));
    };

    return (
        <MainContainer>
            <Title>
                <h1>Login</h1>
            </Title>
            <Section>
                <img src={uniLogo} alt="" />

                <Form onSubmit={handleSubmit}>
                    <h3>Entre com seus dados</h3>
                    <label htmlFor="email">
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Seu email"
                        />
                    </label>

                    <label htmlFor="senha">
                        Senha:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Sua senha"
                        />
                    </label>
                    <button type="submit">Logar</button>
                </Form>
            </Section>
        </MainContainer>
    );
}

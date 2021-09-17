import React from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';

import { Title, MainContainer, Section } from '../../styles/GlobalStyles';
import uniLogo from '../../assets/img/uniLogo.png';
import { Form } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Register() {
    const [nome, setNome] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordConfirm, setPasswordConfirm] = React.useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        let formErros = false;

        if (nome.length < 3 || nome.length > 50) {
            formErros = true;
            toast.error('nome deve ter entre 3 e 50 caracteres');
        }

        if (!isEmail(email)) {
            formErros = true;
            toast.error('Email inválido');
        }

        if (password.length < 6 || password.length > 25) {
            formErros = true;
            toast.error('Senha precisa ter entre 6 e 25 caracteres');
        }

        if (password !== passwordConfirm) {
            formErros = true;
            toast.error('As senhas devem ser iquais');
        }

        if (formErros) return;

        try {
            await axios.post('/users', {
                nome,
                password,
                email
            });

            toast.success('Cadastro realizado com sucesso');
            history.push('/login');
        } catch (err) {
            // const status = get(err, 'response.status', 0);
            const errors = get(err, 'response.data.errors', []);

            errors.map((error) => toast.error(error));
        }
    };

    return (
        <MainContainer>
            <Title>
                <h1>Registre-se</h1>
            </Title>
            <Section>
                <img src={uniLogo} alt="" />

                <Form onSubmit={handleSubmit}>
                    <h3>Entre com seus dados</h3>
                    <label htmlFor="nome">
                        Nome:
                        <input
                            type="text"
                            placeholder="Seu nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </label>
                    <label htmlFor="nome">
                        Email:
                        <input
                            type="email"
                            placeholder="Seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label htmlFor="nome">
                        Senha:
                        <input
                            type="password"
                            placeholder="Sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <label htmlFor="nome">
                        Confirme a senha:
                        <input
                            type="password"
                            placeholder="Repita a senha"
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                        />
                    </label>

                    <button type="submit">Criar conta</button>
                </Form>
            </Section>
        </MainContainer>
    );
}

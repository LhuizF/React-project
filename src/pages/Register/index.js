import React from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
// import { get } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';

import { Title, MainContainer, Section } from '../../styles/GlobalStyles';
import uniLogo from '../../assets/img/uniLogo.png';
import { Form } from './styled';
// import axios from '../../services/axios';
// import history from '../../services/history';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions';

export default function Register() {
    const dispatch = useDispatch();

    const id = useSelector((state) => state.auth.user.id);
    const nomeStored = useSelector((state) => state.auth.user.nome);
    const emailStored = useSelector((state) => state.auth.user.email);
    const isLoading = useSelector((state) => state.auth.isLoading);

    const [nome, setNome] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordConfirm, setPasswordConfirm] = React.useState('');

    React.useEffect(() => {
        if (!id) return;

        setNome(nomeStored);
        setEmail(emailStored);
    }, [id, nomeStored, emailStored]);

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

        if (!id && (password.length < 6 || password.length > 25)) {
            formErros = true;
            toast.error('Senha precisa ter entre 6 e 25 caracteres');
        }

        if (password !== passwordConfirm) {
            formErros = true;
            toast.error('As senhas devem ser iquais');
        }

        if (formErros) return;

        dispatch(actions.registerRequest({ id, nome, email, password }));
    };

    return (
        <MainContainer>
            <Title>
                <h1>{id ? 'Editar Dados' : 'Registre-se'}</h1>
            </Title>
            <Section>
                <img src={uniLogo} alt="" />

                <Form onSubmit={handleSubmit}>
                    <h3>{id ? '' : 'Entre com seus dados'}</h3>
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

                    <button type="submit">
                        {id ? 'Salvar' : 'Criar conta'}
                    </button>
                </Form>
            </Section>
            <Loading isLoading={isLoading} />
        </MainContainer>
    );
}

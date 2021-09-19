import React from 'react';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { isEmail, isInt } from 'validator';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { FaUserCircle, FaUserEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { MainContainer } from '../../styles/GlobalStyles';
import { Form, ProfilePicture } from './styled';
import Loading from '../../components/Loading';
import axios from '../../services/axios';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';

// eslint-disable-next-line
export default function Aluno({ match }) {
    const dispatch = useDispatch();
    const id = get(match, 'params.id', '');
    const [nome, setNome] = React.useState('');
    const [sobrenome, setSobrenome] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [idade, setIdade] = React.useState('');
    const [curso, setCurso] = React.useState('');
    const [foto, setFoto] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        if (!id) return;

        async function getData() {
            setIsLoading(true);
            try {
                const { data } = await axios.get(`/alunos/${id}`);
                const Foto = get(data, 'Photos[0].url', false);

                setNome(data.nome);
                setSobrenome(data.sobrenome);
                setEmail(data.email);
                setIdade(data.idade);
                setCurso(data.curso);
                setFoto(Foto);

                setIsLoading(false);
            } catch (err) {
                setIsLoading(false);
                const status = get(err, 'response.status', false);
                const errors = get(err, 'response.data.errors', []);

                if (status === 400) {
                    errors.map((error) => toast.error(error));
                    history.push('/');
                }
            }
        }

        getData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let formErrors = false;

        if (nome.length < 3 || nome.length > 255) {
            formErrors = true;
            toast.error('Nome precisa ter entre 3 a 255 caracteres');
        }

        if (sobrenome.length < 3 || sobrenome.length > 255) {
            formErrors = true;
            toast.error('Sobrenome precisa ter entre 3 a 255 caracteres');
        }

        if (!isEmail(email)) {
            formErrors = true;
            toast.error('Email inválido');
        }

        if (!isInt(String(idade))) {
            formErrors = true;
            toast.error('Idade inválidas');
        }

        if (!curso) {
            formErrors = true;
            toast.error('Curso inválido');
        }

        if (formErrors) return;

        try {
            setIsLoading(true);
            if (id) {
                await axios.put(`/alunos/${id}`, {
                    nome,
                    sobrenome,
                    email,
                    idade,
                    curso
                });

                toast.success('Aluno editado com sucesso!');
            } else {
                const { data } = await axios.post(`/alunos/`, {
                    nome,
                    sobrenome,
                    email,
                    idade,
                    curso
                });

                toast.success('Aluno criado com sucesso!');

                history.push(`/aluno/${data.id}/edit`);
            }

            setIsLoading(false);
        } catch (err) {
            const status = get(err, 'response.status', false);
            const data = get(err, 'response.data', {});
            const errors = get(data, 'errors', []);

            if (errors.length > 0) {
                errors.map((error) => toast.error(error));
            }

            if (status === 401) {
                dispatch(actions.loginFailure());
            }

            setIsLoading(false);
        }
    };
    return (
        <MainContainer>
            <Loading isLoading={isLoading} />

            <h1>{id ? 'Editar aluno' : 'Novo aluno'}</h1>

            {id && (
                <ProfilePicture>
                    {foto ? (
                        <img src={foto} alt={nome} />
                    ) : (
                        <FaUserCircle size={180} />
                    )}
                    <Link to={`/photos/${id}`}>
                        <FaUserEdit size={20} />
                    </Link>
                </ProfilePicture>
            )}

            <Form onSubmit={handleSubmit}>
                <label htmlFor="nome">
                    <p>Nome</p>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Nome"
                    />
                </label>

                <label htmlFor="sobrenome">
                    <p>Sobrenome </p>
                    <input
                        type="text"
                        value={sobrenome}
                        onChange={(e) => setSobrenome(e.target.value)}
                        placeholder="Sobrenome"
                    />
                </label>
                <label htmlFor="email">
                    <p>Email</p>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                </label>
                <label htmlFor="idade">
                    <p>Idade</p>
                    <input
                        type="number"
                        value={idade}
                        onChange={(e) => setIdade(e.target.value)}
                        placeholder="Idade"
                    />
                </label>
                <label htmlFor="curso">
                    <p>Curso</p>
                    <input
                        type="text"
                        value={curso}
                        onChange={(e) => setCurso(e.target.value)}
                        placeholder="Curso"
                    />
                </label>

                <button type="submit">
                    {id ? 'Salvar' : 'Salvar novo aluno'}
                </button>
            </Form>
        </MainContainer>
    );
}

Aluno.prototype = {
    match: PropTypes.shape({})
};

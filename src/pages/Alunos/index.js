import React from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { FaUserCircle } from 'react-icons/fa';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { toast } from 'react-toastify';

import { Title, MainContainer } from '../../styles/GlobalStyles';
import { AlunoContainer, ProfilePicture } from './styled';
import axios from '../../services/axios';
import Loading from '../../components/Loading';
import Confirmation from '../../components/Confirmation';

export default function Alunos() {
    const [alunos, setAlunos] = React.useState([]);
    const [isLoading, setisLoading] = React.useState(false);
    const [isDisplay, setIsDisplay] = React.useState(false);
    const [alunoId, setAlunoId] = React.useState(0);

    React.useEffect(() => {
        async function getDate() {
            setisLoading(true);
            const response = await axios.get('/alunos');
            setAlunos(response.data);
            setisLoading(false);
        }

        getDate();
    }, []);

    const handleDeleteAsk = (e, id) => {
        e.preventDefault();
        setAlunoId(id);
        setIsDisplay(true);
    };

    const handleCancelDelete = () => {
        setIsDisplay(false);
    };

    const handleDelete = async (e, id) => {
        e.persist();
        try {
            setisLoading(true);
            await axios.delete(`alunos/${id}`);
            document.getElementById(id).remove();
            setisLoading(false);
        } catch (err) {
            const status = get(err, 'response.status', false);
            const errors = get(err, 'response.data,errors', []);
            errors.map((error) => toast.error(error));

            if (status === 401) {
                toast.error('Você Precisa fazer login');
            } else {
                toast.error('Ocorreu um erro ao excluir aluno');
            }

            setisLoading(false);
        }
        setIsDisplay(false);
    };
    return (
        <MainContainer>
            <Title>
                <h1>Alunos</h1>
            </Title>

            <Confirmation
                isDisplay={isDisplay}
                handleCancelDelete={handleCancelDelete}
                handleDelete={handleDelete}
                alunoId={alunoId}
            />
            {alunos.length !== 0 ? (
                <AlunoContainer>
                    {alunos.map((aluno) => (
                        <div key={String(aluno.id)} id={aluno.id}>
                            <ProfilePicture>
                                {get(aluno, 'Photos[0].url', false) ? (
                                    <img src={aluno.Photos[0].url} alt="" />
                                ) : (
                                    <FaUserCircle size={46} />
                                )}
                            </ProfilePicture>

                            <span>{aluno.nome}</span>
                            <span>{aluno.email}</span>

                            <div>
                                <Link to={`/aluno/${aluno.id}/edit`}>
                                    <AiFillEdit size={20} />
                                </Link>
                                <Link
                                    onClick={(e) =>
                                        handleDeleteAsk(e, aluno.id)
                                    }
                                    to={`/aluno/${aluno.id}/delete`}
                                >
                                    <AiFillDelete size={20} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </AlunoContainer>
            ) : null}
            <Loading isLoading={isLoading} />
        </MainContainer>
    );
}

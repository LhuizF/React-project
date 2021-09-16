import React from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { FaUserCircle } from 'react-icons/fa';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

import { Title, MainContainer } from '../../styles/GlobalStyles';
import { AlunoContainer, ProfilePicture } from './styled';
import axios from '../../services/axios';

export default function Alunos() {
    const [alunos, setAlunos] = React.useState([]);

    React.useEffect(() => {
        async function getDate() {
            const response = await axios.get('/alunos');
            setAlunos(response.data);
        }

        getDate();
    }, []);

    return (
        <MainContainer>
            <Title>
                <h1>Alunos</h1>
            </Title>
            <AlunoContainer>
                {alunos.map((aluno) => (
                    <div key={String(aluno.id)}>
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
                            <Link to={`/aluno/${aluno.id}/delete`}>
                                <AiFillDelete size={20} />
                            </Link>
                        </div>
                    </div>
                ))}
            </AlunoContainer>
        </MainContainer>
    );
}

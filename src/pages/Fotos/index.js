import React from 'react';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { MainContainer } from '../../styles/GlobalStyles';
import Loading from '../../components/Loading';
import { Form } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';

// eslint-disable-next-line
export default function Fotos({ match }) {
    const dispatch = useDispatch();
    const id = get(match, 'params.id', '');
    const [isLoading, setIsLoading] = React.useState(false);
    const [foto, setFoto] = React.useState('');

    React.useEffect(() => {
        async function getData() {
            try {
                setIsLoading(true);
                const { data } = await axios.get(`/alunos/${id}`);
                setFoto(get(data, 'Photos[0].url', false));
                setIsLoading(false);
            } catch (err) {
                toast.error('Erro ao obter imagem');
                history.push('/');
                setIsLoading(false);
            }
        }

        getData();
    }, [id]);

    const handleChange = async (e) => {
        const newfoto = e.target.files[0];
        const fotoURL = URL.createObjectURL(newfoto);
        setFoto(fotoURL);

        const formData = new FormData();
        formData.append('aluno_id', id);
        formData.append('foto', newfoto);

        try {
            setIsLoading(true);
            await axios.post('/photos', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            toast.success('Foto enviada com sucesso');
            setIsLoading(false);
        } catch (err) {
            const status = get(err, 'response.status', false);

            toast.error('Erro ao enviar foto');

            if (status === 401) {
                dispatch(actions.loginFailure());
                history.push('/');
            }
            setIsLoading(false);
        }
    };

    return (
        <MainContainer>
            <Loading isLoading={isLoading} />
            <h1>Fotos</h1>
            <Form>
                <label htmlFor="foto">
                    {foto ? <img src={foto} alt="foto" /> : 'Selecionar'}
                    <input type="file" id="foto" onChange={handleChange} />
                </label>
            </Form>
        </MainContainer>
    );
}

Fotos.prototype = {
    match: PropTypes.shape({}).isRequired
};

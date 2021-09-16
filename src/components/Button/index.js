import React from 'react';
import { Link } from 'react-router-dom';

import { ButtonDiv } from './styled';

export function ButtonContainer() {
    return (
        <ButtonDiv>
            <Link to="/login">Já tem cadastro</Link>
            <button type="button">Cadastrar-se</button>
        </ButtonDiv>
    );
}

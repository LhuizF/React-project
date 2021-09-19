import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../config/colors';

export const AlunoContainer = styled.div`
    padding: 10px 20px;
    border: 4px solid ${colors.main};
    background-color: ${colors.white};
    border-radius: 14px;
    width: 80%;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 4px 0;
    }

    div + div {
        border-top: 1px solid #bbb;
    }
`;

export const ProfilePicture = styled.div`
    img {
        width: 46px;
        height: 46px;
        border-radius: 50%;
        object-fit: cover;
    }
`;

export const NovoAluno = styled(Link)`
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 10px 5px;
`;

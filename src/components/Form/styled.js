import styled from 'styled-components';

import colors from '../../config/colors';

export const Form = styled.form`
    margin-top: 20px;
    padding: 20px 0;
    background-color: ${colors.white};
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 30px;

    div {
        padding: 10px;
        width: 90%;
    }

    input {
        margin-top: 5px;
        width: 100%;
        height: 26px;
    }
`;

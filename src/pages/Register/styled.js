import styled from 'styled-components';

import colors from '../../config/colors';

export const Form = styled.form`
    margin-top: 20px;
    padding: 20px 0;
    background-color: ${colors.white};
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;

    label {
        padding: 10px;
        width: 90%;
    }

    input {
        margin-top: 5px;
        width: 100%;
        height: 26px;
        font-size: 18px;
        border: 1px solid #ddd;
        padding: 0 5px;
        border-radius: 4px;

        &:focus {
            border: 1px solid ${colors.main};
        }
    }
`;

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

    p {
        padding: 0 1px;
    }
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

export const ProfilePicture = styled.div`
    background-color: ${colors.white};
    padding: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;

    img {
        width: 180px;
        height: 180px;
        object-fit: cover;
        border-radius: 50%;
        border: 4px solid ${colors.main};
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        position: absolute;
        bottom: 0;
        color: #fff;
        background-color: ${colors.main};
        width: 36px;
        height: 36px;
        border-radius: 50px;
    }
`;

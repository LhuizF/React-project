import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import colors from '../config/colors';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

    body{
        font-family: Arial, Helvetica, sans-serif;
        background: ${colors.mainDark};
    }

    html, body, #root{
        height: 100%;
    }

    button{
        cursor: pointer;
        background-color: ${colors.main};
        border: none;
        color: #fff;
        padding: 10px 20px;
        border-radius: 4px;
        font-weight: 600;
        transition: filter 300ms;
    }

    button:hover{
        filter: brightness(1.5);
    }

    button:active{
        transform: translateY(3px);
    }

    a{
        text-decoration: none;
        color:${colors.main} ;
    }

    a:hover{
        color: ${colors.mainLight};
    }

    body .Toastify .Toastify__toast-container .Toastify__toast--success {
        background: ${colors.success};
        color: #fff;
    }

    body .Toastify .Toastify__toast-container .Toastify__toast--error {
        background: ${colors.danger};
        color: #fff;
    }

    body .Toastify .Toastify__toast-container .Toastify__toast--warning {
        background: ${colors.warning};
        color: #fff;
    }
`;

export const MainContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fffffe;
    padding: 10px 20px;
    border-radius: 15px;

    h1 {
        margin-bottom: 10px;
    }
`;

export const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    img {
        width: 60%;
    }

    @media (max-width: 600px) {
        img {
            display: none;
        }
    }
`;

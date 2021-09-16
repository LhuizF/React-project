import styled, { createGlobalStyle } from 'styled-components';
import colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

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
        border-radius: 6px;
        font-weight: 700;
    }

    button:hover{
        background-color: ${colors.mainLight};
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

`;

export const MainContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.div`
    margin: 30px auto;
    width: 80%;
    background: ${colors.white};
    padding: 10px;
    text-align: center;
`;

export const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    img {
        width: 60%;
    }
`;

import styled, { createGlobalStyle } from 'styled-components';
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
        border-radius: 6px;
        font-weight: 700;
    }

    a{
        text-decoration: none;
        color:${colors.main} ;
    }
`;

export const Container = styled.section`
    margin: 30px auto;
    max-width: 360px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
`;

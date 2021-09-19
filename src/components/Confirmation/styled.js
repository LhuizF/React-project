import styled from 'styled-components';
import colors from '../../config/colors';

export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    color: #fff;
    font-size: 30px;

    .background {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .container {
        background-color: ${colors.white};
        width: 450px;
        padding: 20px;
        color: black;
        border-radius: 14px;
    }

    .btn-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

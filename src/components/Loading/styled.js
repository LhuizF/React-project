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

    div {
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

    span {
        width: 130px;
        height: 130px;
        border-radius: 50%;
        border: 10px solid ${colors.main};
        border-left: 10px solid ${colors.white};
        animation: gif 1.5s infinite linear;
    }

    @keyframes gif {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

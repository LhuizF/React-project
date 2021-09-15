import styled from 'styled-components';

import colors from '../../config/colors';

export const Nav = styled.nav`
    background-color: ${colors.main};
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;

    a {
        color: #fff;
        margin: 0 14px 0;
        font-weight: bold;
    }

    p {
        margin-left: 60px;
    }
`;

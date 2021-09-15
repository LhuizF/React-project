import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nav } from './styled';

export default function Header() {
    const botao = useSelector((state) => state);

    return (
        <Nav>
            <Link to="/">
                <FaHome size={24} />
            </Link>
            <Link to="/login">
                <FaUserAlt size={24} />
            </Link>
            <Link to="/aaaa">
                <FaSignInAlt size={24} />
            </Link>
            {botao.carrinho.contador}

            <p>{botao.login.isLogin ? 'Logado' : 'Fazer login'}</p>
        </Nav>
    );
}

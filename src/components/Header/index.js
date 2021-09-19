import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt, FaPowerOff } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { Nav } from './styled';
import * as actions from '../../store/modules/auth/actions';
import histoty from '../../services/history';

export default function Header() {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const { nome } = useSelector((state) => state.auth.user);

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(actions.loginFailure());

        toast.warning('Logoff realizado com sucesso');
        histoty.push('/');
    };

    return (
        <Nav>
            <Link to="/">
                <FaHome size={24} />
            </Link>
            {isLoggedIn ? (
                <>
                    <Link to="/register">{nome}</Link>
                    <Link onClick={handleLogout} to="/">
                        <FaPowerOff size={24} />
                    </Link>
                </>
            ) : (
                <>
                    <Link to="/register">
                        <FaUserAlt size={24} />
                    </Link>

                    <Link to="/login">
                        <FaSignInAlt size={24} />
                    </Link>
                </>
            )}
        </Nav>
    );
}

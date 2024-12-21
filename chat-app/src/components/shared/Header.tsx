import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/actions';
import '../../styles/Header.css';

const Header: React.FC = () => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const dispatch = useDispatch();

    return (
        <header className="main-header">
            <nav>
                <Link to="/" className="logo">تطبيق الدردشة</Link>
                <ul>
                    {isAuthenticated ? (
                        <>
                            <li><Link to="/chat">المحادثات</Link></li>
                            <li><button onClick={() => dispatch(logout())}>تسجيل الخروج</button></li>
                        </>
                    ) : (
                        <>
                            <li><Link to="/login">تسجيل الدخول</Link></li>
                            <li><Link to="/register">إنشاء حساب</Link></li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
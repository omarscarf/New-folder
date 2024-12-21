import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../services/auth';
import '../../styles/Auth.css';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await login(email, password);
            dispatch({ type: 'LOGIN_SUCCESS', payload: response });
            history.push('/chat');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div className="auth-container">
            <section className="auth-form">
                <h1>تسجيل الدخول</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">البريد الإلكتروني:</label>
                        <input 
                            type="email" 
                            id="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">كلمة المرور:</label>
                        <input 
                            type="password" 
                            id="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                    </div>
                    <button type="submit">دخول</button>
                    <p className="auth-links">
                        ليس لديك حساب؟ <Link to="/register">إنشاء حساب جديد</Link>
                    </p>
                </form>
            </section>
        </div>
    );
};

export default Login;
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../../services/auth';
import '../../styles/Auth.css';

const Register: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('كلمات المرور غير متطابقة');
            return;
        }
        try {
            const response = await register({ name, email, password });
            dispatch({ type: 'REGISTER_SUCCESS', payload: response });
            history.push('/chat');
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    return (
        <div className="auth-container"></div>
            <section className="auth-form">
                <h1>إنشاء حساب جديد</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">الاسم الكامل:</label>
                        <input 
                            type="text" 
                            id="name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required 
                        />
                    </div>
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
                    <div className="form-group">
                        <label htmlFor="confirm-password">تأكيد كلمة المرور:</label>
                        <input 
                            type="password" 
                            id="confirm-password" 
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required 
                        />
                    </div>
                    <button type="submit">إنشاء حساب</button>
                    <p className="auth-links">
                        لديك حساب بالفعل؟ <Link to="/login">تسجيل الدخول</Link>
                    </p>
                </form>
            </section>
        </div>
    );
};

export default Register;
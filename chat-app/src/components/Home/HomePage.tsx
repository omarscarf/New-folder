import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Home.css';

const HomePage: React.FC = () => {
    return (
        <div className="home-container">
            <section className="hero">
                <h1>مرحباً بك في تطبيق الدردشة</h1>
                <p>تواصل مع أصدقائك وعائلتك في أي وقت وأي مكان</p>
                <div className="cta-buttons">
                    <Link to="/login" className="btn btn-primary">تسجيل الدخول</Link>
                    <Link to="/register" className="btn btn-secondary">إنشاء حساب</Link>
                </div>
            </section>
            
            <section className="features">
                <h2>المميزات</h2>
                <ul>
                    <li>دردشة فورية</li>
                    <li>مشاركة الملفات والصور</li>
                    <li>محادثات جماعية</li>
                    <li>تصميم متجاوب</li>
                </ul>
            </section>
        </div>
    );
};

export default HomePage;

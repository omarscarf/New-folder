import { AuthResponse } from '../types';

const API_URL = 'http://localhost:3000/api';

export const login = async (email: string, password: string): Promise<AuthResponse> => {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        throw new Error('فشل تسجيل الدخول');
    }

    return response.json();
};

export const register = async (userData: { 
    name: string; 
    email: string; 
    password: string; 
}): Promise<AuthResponse> => {
    const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    if (!response.ok) {
        throw new Error('فشل إنشاء الحساب');
    }

    return response.json();
};

export const logout = async () => {
    // Implement logout functionality if needed
};
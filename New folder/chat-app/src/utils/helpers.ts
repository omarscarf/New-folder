// src/utils/helpers.ts

export const formatDate = (date: Date): string => {
    return date.toLocaleString();
};

export const generateUniqueId = (): string => {
    return Math.random().toString(36).substr(2, 9);
};

export const isValidEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};
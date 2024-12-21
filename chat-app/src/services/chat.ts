// src/services/chat.ts

import { Chat, Message } from '../types';

const API_URL = 'https://api.example.com/chat'; // Replace with your actual API URL

export const fetchChatList = async (): Promise<Chat[]> => {
    const response = await fetch(`${API_URL}/chats`);
    if (!response.ok) {
        throw new Error('Failed to fetch chat list');
    }
    return response.json();
};

export const fetchChats = () => {
    // Implement fetch chats logic here
};

export const sendMessage = (chatId: string, message: string) => {
    // Implement send message logic here
};

export const fetchMessages = async (chatId: string): Promise<Message[]> => {
    const response = await fetch(`${API_URL}/chats/${chatId}/messages`);
    if (!response.ok) {
        throw new Error('Failed to fetch messages');
    }
    return response.json();
};
// This file exports TypeScript types and interfaces used throughout the application.

export interface User {
    id: string;
    username: string;
    avatarUrl?: string;
}

export interface Message {
    id: string;
    content: string;
    senderId: string;
    timestamp: Date;
}

export interface Chat {
    id: string;
    participants: User[];
    messages: Message[];
}

export interface AuthResponse {
    user: User;
    token: string;
}
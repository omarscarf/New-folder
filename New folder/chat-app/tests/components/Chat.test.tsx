import React from 'react';
import { render, screen } from '@testing-library/react';
import ChatList from '../../src/components/Chat/ChatList';
import ChatWindow from '../../src/components/Chat/ChatWindow';
import Message from '../../src/components/Chat/Message';

describe('Chat Components', () => {
    test('renders ChatList component', () => {
        render(<ChatList />);
        const chatListElement = screen.getByText(/chat conversations/i);
        expect(chatListElement).toBeInTheDocument();
    });

    test('renders ChatWindow component', () => {
        render(<ChatWindow />);
        const chatWindowElement = screen.getByText(/messages/i);
        expect(chatWindowElement).toBeInTheDocument();
    });

    test('renders Message component', () => {
        const message = { content: 'Hello', sender: 'User1' };
        render(<Message message={message} />);
        const messageElement = screen.getByText(/Hello/i);
        expect(messageElement).toBeInTheDocument();
    });
});
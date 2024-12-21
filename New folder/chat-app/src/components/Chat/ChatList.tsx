import React, { useState } from 'react';

const ChatList: React.FC = ({ chats, onSelectChat }) => {
    const [selectedChatId, setSelectedChatId] = useState(null);

    const handleChatSelect = (chatId) => {
        setSelectedChatId(chatId);
        onSelectChat(chatId);
    };

    return (
        <div className="chat-list">
            <h2>Chats</h2>
            <ul>
                {chats.map(chat => (
                    <li
                        key={chat.id}
                        className={selectedChatId === chat.id ? 'active' : ''}
                        onClick={() => handleChatSelect(chat.id)}
                    >
                        {chat.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChatList;
chat-app
├── src
│   ├── components
│   │   ├── Chat
│   │   │   ├── ChatList.tsx
│   │   │   ├── ChatWindow.tsx
│   │   │   └── Message.tsx
│   │   ├── Auth
│   │   │   ├── Login.tsx
│   │   │   └── Register.tsx
│   │   └── shared
│   │       ├── Header.tsx
│   │       └── Sidebar.tsx
│   ├── services
│   │   ├── auth.ts
│   │   ├── chat.ts
│   │   └── websocket.ts
│   │       └── websocket.ts
│   ├── store
│   │   ├── actions.ts
│   │   ├── reducers.ts
│   │   └── index.ts
│   ├── types
│   │   └── index.ts
│   ├── utils
│   │   └── helpers.ts
│   └── App.tsx
├── tests
│   └── components
│       └── Chat.test.tsx
├── package.json
├── tsconfig.json
└── README.md
```

// src/services/websocket.ts
export const connectWebSocket = () => {
    // Implement WebSocket connection logic here
};

export const disconnectWebSocket = () => {
    // Implement WebSocket disconnection logic here
};
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const FETCH_CHATS_REQUEST = 'FETCH_CHATS_REQUEST';
export const FETCH_CHATS_SUCCESS = 'FETCH_CHATS_SUCCESS';
export const FETCH_CHATS_FAILURE = 'FETCH_CHATS_FAILURE';

export const SEND_MESSAGE_REQUEST = 'SEND_MESSAGE_REQUEST';
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';
export const SEND_MESSAGE_FAILURE = 'SEND_MESSAGE_FAILURE';

export const loginRequest = (credentials) => ({
    type: LOGIN_REQUEST,
    payload: credentials,
});

export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user,
});

export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error,
});

export const registerRequest = (userData) => ({
    type: REGISTER_REQUEST,
    payload: userData,
});

export const registerSuccess = (user) => ({
    type: REGISTER_SUCCESS,
    payload: user,
});

export const registerFailure = (error) => ({
    type: REGISTER_FAILURE,
    payload: error,
});

export const fetchChatsRequest = () => ({
    type: FETCH_CHATS_REQUEST,
});

export const fetchChatsSuccess = (chats) => ({
    type: FETCH_CHATS_SUCCESS,
    payload: chats,
});

export const fetchChatsFailure = (error) => ({
    type: FETCH_CHATS_FAILURE,
    payload: error,
});

export const sendMessageRequest = (message) => ({
    type: SEND_MESSAGE_REQUEST,
    payload: message,
});

export const sendMessageSuccess = (message) => ({
    type: SEND_MESSAGE_SUCCESS,
    payload: message,
});

export const sendMessageFailure = (error) => ({
    type: SEND_MESSAGE_FAILURE,
    payload: error,
});
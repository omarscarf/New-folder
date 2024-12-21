import { createStore, combineReducers } from 'redux';
import authReducer from './reducers';
import chatReducer from './reducers';

const rootReducer = combineReducers({
    auth: authReducer,
    chat: chatReducer,
});

const store = createStore(rootReducer);

export default store;
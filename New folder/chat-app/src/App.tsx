import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/shared/Header';
import Sidebar from './components/shared/Sidebar';
import ChatList from './components/Chat/ChatList';
import ChatWindow from './components/Chat/ChatWindow';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

const App: React.FC = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <div className="main-content">
                    <Sidebar />
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/chat" component={ChatWindow} />
                        <Route path="/" component={ChatList} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;
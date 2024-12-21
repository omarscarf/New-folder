import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import Header from './components/shared/Header';
import Sidebar from './components/shared/Sidebar';
import ChatList from './components/Chat/ChatList';
import ChatWindow from './components/Chat/ChatWindow';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import HomePage from './components/Home/HomePage';

const App: React.FC = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <div className="layout-container">
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <PrivateRoute path="/chat">
                            <div className="chat-layout">
                                <Sidebar />
                                <ChatWindow />
                            </div>
                        </PrivateRoute>
                        <Redirect to="/" />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

// PrivateRoute component for protected routes
const PrivateRoute: React.FC<{ path: string; children: React.ReactNode }> = ({ children, ...rest }) => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuthenticated ? (
                    children
                ) : (
                    <Redirect to={{ pathname: "/login", state: { from: location } }} />
                )
            }
        />
    );
};

export default App;
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import PrivateRoute from './Components/Routes/Private';

import Login from './Pages/Accounts/Authentication/Login';
import Register from './Pages/Accounts/Authentication/Register';
import Dashboard from './Pages/Dashboard';
import Account from './Pages/Accounts';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/login" element={<Login />}/>
                <Route exact path="/register" element={<Register /> }/>
                <Route exact path="/" element={<PrivateRoute> <Dashboard /> </PrivateRoute>}/>
                <Route exact path="/account" element={<PrivateRoute> <Account /> </PrivateRoute>}/>
            </Routes>
        </Router>
    )
}

export default App;
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import PrivateRoute from './Components/PrivateRoute';

import Login from './Pages/Login';
import Signup from './Pages/SignUp';
import Error from './Pages/Error';
import Dashboard from './Pages/Dashboard';
import Account from './Pages/Accounts';
import ChangePassword from './Pages/ChangePassword';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/login" element={<Login />}/>
                <Route exact path="/signup" element={<Signup /> }/>
                <Route exact path="/error" element={<Error /> }/>
                <Route exact path="/" element={<PrivateRoute> <Dashboard /> </PrivateRoute>}/>
                <Route exact path="/account" element={<PrivateRoute> <Account /> </PrivateRoute>}/>
                <Route exact path="/account/change-password" element={<PrivateRoute> <ChangePassword /> </PrivateRoute>}/>
            </Routes>
        </Router>
    )
}

export default App;
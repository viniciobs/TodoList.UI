import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import PrivateRoute from './Components/Routes/Private';

import Login from './Pages/Authentication/Login';
import Register from './Pages/Authentication/Register';
import Dashboard from './Pages/Dashboard';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/login" element={<Login />}/>
                <Route exact path="/register" element={<Register /> }/>
                <Route exact path="/"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }/>
            </Routes>
        </Router>
    )
}

export default App;
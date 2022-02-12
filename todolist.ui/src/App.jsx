import React from 'react';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Login from './Pages/Authentication/Login';
import Register from './Pages/Authentication/Register';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/login" element={<Login />}/>
                <Route exact path="/register" element={<Register /> }/>
            </Routes>
        </Router>
    )
}

export default App;
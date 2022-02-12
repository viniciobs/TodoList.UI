import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

import IsAuthenticated from '../../../Services/Authentication/IsAuthenticated';

const PrivateRoute = ({ children }) => {
    return IsAuthenticated() ? children : <Navigate to="/login"/>
}

export default PrivateRoute;
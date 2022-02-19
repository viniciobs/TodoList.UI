import React from 'react';
import {Navigate} from 'react-router-dom';

import {IsAuthenticated} from '../../Services/Authentication/AuthenticationDataHandler';

const PrivateRoute = ({ children }) => {
    return IsAuthenticated() ? children : <Navigate to="/login" />
}

export default PrivateRoute;
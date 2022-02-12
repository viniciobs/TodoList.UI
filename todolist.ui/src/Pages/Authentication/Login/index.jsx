import React from 'react';

import { Link } from "react-router-dom";

import Form from '../Components/Form';
import './style.css'

const Login = () => {
    return (
        <>
            <Form type="login" buttonText="Log in">
                <input type="text" className="form-control username" placeholder="Username" required autoFocus />
                <input type="password" className="form-control password" placeholder="Password" required />
            </Form>
            <Link to="/register" className='text-center link'>Create an account</Link>
        </>
    )
}

export default Login;
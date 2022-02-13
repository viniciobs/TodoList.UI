import React from 'react';
import { Link, useNavigate } from "react-router-dom";

import Form from '../Components/Form';
import './style.css'

import Authenticate from '../../../Services/Authentication/Authenticate';

const Login = () => {
    let navigate = useNavigate();

    const handleLoginAction = async (e) => {
        e.preventDefault();

        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        let loginResult = await Authenticate(username, password);

        if (loginResult.error == null)
            return navigate("/");
    }

    return (
        <>
            <Form type="login" buttonText="Log in" buttonClickAction={handleLoginAction}>
                <input id="username" type="text" className="form-control username" placeholder="Username" required autoFocus />
                <input id="password" type="password" className="form-control password" placeholder="Password" required />
            </Form>
            <Link to="/register" className='text-center link'>Create an account</Link>
        </>
    )
}

export default Login;
import React, {useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";

import Form from '../Components/Form';
import './style.css'

import {ValidateRequiredFields} from '../../../../Helpers/Validators';
import Authenticate from '../../../../Services/Authentication/Authenticate';
import {IsAuthenticated} from '../../../../Services/Authentication/AuthenticationDataHandler';

const Login = () => {
    let navigate = useNavigate();

    useEffect(() => {
        if (IsAuthenticated())
            return navigate("/");
    }, []);

    const handleLoginAction = async (e) => {
        e.preventDefault();

        let form = document.getElementById("form-login");
        if (!ValidateRequiredFields(form)) return false;

        let login = document.getElementById("login").value;
        let password = document.getElementById("password").value;

        if (login && password){
            let loginResult = await Authenticate(login, password);
            if (loginResult.error != null)
                return loginResult.error;

            return navigate("/");
        }
    }

    return (
        <>
            <Form id="form-login" buttonText="Log in" buttonClickAction={handleLoginAction}>
                <input id="login" type="text" className="form-control login" placeholder="Login" autoFocus required />
                <input id="password" type="password" className="form-control password" placeholder="Password" required />
            </Form>
            <Link to="/register" className='text-center link'>Create an account</Link>
        </>
    )
}

export default Login;
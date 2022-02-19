import React, {useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";
import Form from '../../Components/AuthenticationForm';
import './style.css';
import Create from '../../Services/Accounts/Create';
import {IsAuthenticated} from '../../Services/Authentication/AuthenticationDataHandler';
import {ValidateRequiredFields} from '../../Services/Validators';

const Register = () => {
    let navigate = useNavigate();

    useEffect(() => {
        if (IsAuthenticated())
            return navigate("/");
    }, []);

    const handleRegisterAction = async (e) => {
        e.preventDefault();

        let form = document.getElementById("form-signup");
        if (!ValidateRequiredFields(form)) return false;

        let name = document.getElementById("name").value;
        let login = document.getElementById("login").value;
        let password = document.getElementById("password").value;

        let loginResult = await Create(name, login, password);

        if (loginResult.error != null)
            return loginResult.error;

        return navigate("/account");
    }

    return (
        <>
            <Form id="form-signup" buttonText="Sign up" buttonClickAction={handleRegisterAction}>
                <input id="name" type="text" className="form-control" placeholder="Name" autoFocus required />
                <input id="login" type="text" className="form-control" placeholder="Login" required />
                <input id="password" type="password" className="form-control" placeholder="Password" required />
            </Form>
            <Link to="/login" className='text-center link'>Log in</Link>
        </>
    )
}

export default Register;
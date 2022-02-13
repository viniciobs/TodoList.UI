import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import Form from '../Components/Form';
import './style.css';
import Create from '../../../Services/Accounts/Create';

const Register = () => {
    let navigate = useNavigate();

    const handleRegisterAction = async (e) => {
        e.preventDefault();

        let name = document.getElementById("name").value;
        let login = document.getElementById("login").value;
        let password = document.getElementById("password").value;

        let loginResult = await Create(name, login, password);

        if (loginResult.error == null)
            return navigate("/");
    }

    return (
        <>
            <Form type="register" buttonText="Register" buttonClickAction={handleRegisterAction}>
                <input id="name" type="text" className="form-control name" placeholder="Name" required autoFocus />
                <input id="login" type="text" className="form-control login" placeholder="Login" required />
                <input id="password" type="password" className="form-control password" placeholder="Password" required />
            </Form>
            <Link to="/login" className='text-center link'>Log in</Link>
        </>
    )
}

export default Register;
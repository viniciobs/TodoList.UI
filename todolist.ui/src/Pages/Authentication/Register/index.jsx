import React from 'react';
import { Link } from "react-router-dom";
import Form from '../Components/Form';
import './style.css';

const Register = () => {
    return (
        <>
            <Form type="register" buttonText="Register">
                <input type="text" className="form-control username" placeholder="Username" required autoFocus />
                <input type="password" className="form-control password" placeholder="Password" required />
                <input type="password" className="form-control password-confirm" placeholder="Password confirm" required />
            </Form>
            <Link to="/login" className='text-center link'>Log in</Link>
        </>
    )
}

export default Register;
import React from 'react';

import { Link } from "react-router-dom";

import Icon from '../assets/Images/login.png';
import '../assets/css/style.css';
import './style.css';

const Register = () => {
    return (
        <section>
            <div className="row">
                <div className="col-8 offset-2 col-sm-8 offset-sm-2 col-md-4 offset-md-4">
                    <div className="account-wall">
                        <img className="profile-img" src={Icon} alt="user-icon"/>
                        <form className="form-signin register">
                            <input type="text" className="form-control username" placeholder="Username" required autoFocus />
                            <input type="password" className="form-control password" placeholder="Password" required />
                            <input type="password" className="form-control password-confirm" placeholder="Password confirm" required />
                            <div className="d-grid gap-2">
                                <button className="btn btn-primary" type="submit">Register</button>
                            </div>
                        </form>
                    </div>
                    <Link to="/login" className='text-center link'>Have a account already? Log in.</Link>
                </div>
            </div>
        </section>
    )
}

export default Register;
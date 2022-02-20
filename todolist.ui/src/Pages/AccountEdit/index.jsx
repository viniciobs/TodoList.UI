import React, {useEffect, useState} from 'react';

import Loading from '../../Components/LoadingSpinner';
import Template from '../Template';

import {ValidateRequiredFields} from '../../Services/Validators';
import Edit from '../../Services/Accounts/Edit.js';

import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import {GetUserLogin, GetUserName, UpdateUserLogin, UpdateUserName} from '../../Services/Authentication/AuthenticationDataHandler';

const AccountEdit = () => {
    const [name, setName] = useState('');
    const [login, setLogin] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [loginError, setLoginError] = useState("");

    let navigate = useNavigate();

    useEffect(async () => {
        setLogin(GetUserLogin());
        setName(GetUserName());
    },[]);

    const HandleEdit = async (event) => {
        event.preventDefault();

        let form = document.getElementById("form-account-edit");
        if (!ValidateRequiredFields(form)) return false;

        let inputName = document.getElementById('name').value;
        let inputLogin = document.getElementById('login').value;

        if (name == inputName && login == inputLogin)
            navigate('/account');

        let response = await Edit(inputName, inputLogin);

        if (response.error)
        {
            setLoginError(response.error);
            return false;
        }

        UpdateUserName(inputName);
        UpdateUserLogin(inputLogin);

        navigate("/account");
    }

    return (
        <Template title="Change password">
            { isLoading ? <Loading /> : "" }
            <div className="col-4">
                <form id="form-account-edit">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" autoFocus required defaultValue={name}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="login">Login</label>
                        <input type="text" className="form-control" id="login" required defaultValue={login}/>
                        <span className='invalid-login'>{loginError}</span>
                    </div>
                    <div className="form-group">
                        <button id='confirm-change' className='btn btn-primary' onClick={(e) => {HandleEdit(e)}}>Confirm</button>
                    </div>
                </form>
                <Link to="/account">back</Link>
            </div>
        </Template>
    )
}

export default AccountEdit;
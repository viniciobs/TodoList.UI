import React, { useEffect, useState } from 'react';
import Template from '../../Pages/Template';
import Image from '../../Images/login.png';
import './style.css';
import {GetUserLogin, GetUserName, GetIsUserActive, UpdateUserStatus} from '../../Services/Authentication/AuthenticationDataHandler';
import AlterStatus from '../../Services/Accounts/AlterStatus';
import { Link, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../Components/LoadingSpinner';

const Account = () => {
    const [login, setLogin] = useState('');
    const [name, setName] = useState('');
    const [isActive, setIsActive] = useState();
    const [alterStatusMessage, setAlterStatusMessage] = useState('');
    const [isLoading, setIsloading] = useState(false);

    let navigate = useNavigate();

    useEffect(async () => {
        setLogin(GetUserLogin());
        setName(GetUserName());
        setIsActive(GetIsUserActive());

        UpdateStatusLinkMessage();

    },[]);

    const UpdateStatusLinkMessage = () => {
        if (isActive)
            SetActivateLinkMessage();
        else
            SetDeactivateLinkMessage();
    }

    const SetActivateLinkMessage = () => {
        setAlterStatusMessage('Activate');
    }

    const SetDeactivateLinkMessage = () => {
        setAlterStatusMessage('Deactivate');
    }

    const HandleAlterStatusClick = async (event) => {
        event.preventDefault();
        setIsloading(true);

        let response = await AlterStatus(!isActive);
        if (response.error)
            return navigate('/error');

        setIsActive(!isActive);

        UpdateUserStatus(isActive);
        UpdateStatusLinkMessage();
        setIsloading(false);
    }

    return (
        <Template title="Account settings">
            {isLoading ? <LoadingSpinner /> : "" }
            <img className="profile-img" src={Image} alt="user-image"/>
            <div className="form-group row">
                <label htmlFor="name" className="col-sm-1 col-form-label field-title">Name</label>
                <div className="col-sm-11">
                    <span className="form-control-plaintext">{name}</span>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="login" className="col-sm-1 col-form-label field-title">Login</label>
                <div className="col-sm-11">
                    <span className="form-control-plaintext">{login}</span>
                </div>
            </div>
            <br />
            <div className="form-group row">
                <div className="btn-group btn-group-toggle status" data-toggle="buttons">
                    <label className={(isActive ? "active " : "") + "btn btn-secondary btn-sm"}>
                        {isActive ? 'Active' : 'Inactive'}
                    </label>
                </div>
            </div>
            <br/>
            <div className='form-group row'>
                <div className='col-12'>
                    <Link to="/account/edit" role="button" className="btn-link">Edit</Link>&nbsp;|&nbsp;
                    <Link to="/account/change-password" role="button" className="btn-link">Change password</Link>&nbsp;|&nbsp;
                    <Link to="#" role="button" className="btn-link" onClick={(e) => {HandleAlterStatusClick(e)}}>{alterStatusMessage}</Link>
                </div>
            </div>
        </Template>
    )
}

export default Account;
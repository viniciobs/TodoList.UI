import React, { useEffect, useState } from 'react';
import Template from '../../Pages/Template';
import Image from '../../Images/login.png';
import './style.css';
import LoadData from '../../Services/Accounts/LoadData.js';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../Components/LoadingSpinner';

const Account = () => {
    const [account, setAccount] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    let navigate = useNavigate();

    useEffect(async () => {
        let loadAccountDataResponse = await LoadData();
        if (loadAccountDataResponse.error)
            return navigate("/error");

        setAccount(loadAccountDataResponse.data);
        setIsLoading(false);
    },[]);

    return (
        <Template title="Account settings">
            { isLoading ? <Loading /> : "" }
            <img className="profile-img" src={Image} alt="user-image"/>
            <div className="form-group row">
                <label htmlFor="name" className="col-sm-1 col-form-label field-title">Name</label>
                <div className="col-sm-11">
                    <span className="form-control-plaintext">{account.name}</span>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="login" className="col-sm-1 col-form-label field-title">Login</label>
                <div className="col-sm-11">
                    <span className="form-control-plaintext">{account.login}</span>
                </div>
            </div>
            <br />
            <div className="form-group row">
                <div className="col-sm-2 btn-group btn-group-toggle status" data-toggle="buttons">
                    <label className={(account.isActive ? "active " : "") + "btn btn-secondary btn-sm"}>
                        {account.isActive ? 'Active' : 'Inactive'}</label>
                </div>
            </div>
            <br/>
            <div className='form-group row'>
                <div className='col-12'>
                    <Link to="#" id="edit-link" role="button" className="btn-link">Edit</Link> | <Link to="/account/change-password" id="change-password" role="button" className="btn-link">Change password</Link>
                </div>
            </div>
        </Template>
    )
}

export default Account;
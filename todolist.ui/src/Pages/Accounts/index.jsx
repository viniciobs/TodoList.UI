import React from 'react';
import Template from '../../Pages/Template';
import Image from '../../Images/login.png';
import './style.css';

const Account = () => {

    return (
        <Template title="Account settings">
            <form>
                <img className="profile-img" src={Image} alt="user-image"/>
                <div className="form-group row">
                    <label htmlFor="name" className="col-sm-2 col-form-label field-title">Name</label>
                    <div className="col-sm-10">
                        <input type="text" readOnly className="form-control-plaintext" id="name" value="email@example.com"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="login" className="col-sm-2 col-form-label field-title">Login</label>
                    <div className="col-sm-10">
                        <input type="text" readOnly className="form-control-plaintext" id="login" value="tetete"/>
                    </div>
                </div>
                <br />
                <div className="form-group row">
                    <div className="col-sm-2 btn-group btn-group-toggle status" data-toggle="buttons">
                        <label className="btn btn-secondary btn-sm active">
                            <input type="radio" name="options" id="status-active" autoComplete="off" checked /> Active
                        </label>
                        <label className="btn btn-secondary btn-sm">
                            <input type="radio" name="options" id="status-inactive" autoComplete="off" /> Inactive
                        </label>
                    </div>
                </div>
            </form>
            <br/>
            <div className='form-group row'>
                <div className='col-12'>
                    <a id="edit-link" role="button" className="btn-link">Edit</a> | <a id="change-password" role="button" className="btn-link">Change password</a>
                </div>
            </div>
        </Template>
    )
}

export default Account;
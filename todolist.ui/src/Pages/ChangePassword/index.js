import React, {useState} from 'react';

import Loading from '../../Components/LoadingSpinner';
import Template from '../../Pages/Template';

import {ValidateRequiredFields} from '../../Services/Validators';

import './style.css';

const ChangePassword = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const ValidateNewPasswordEquality = () => {
        let newPassword = document.getElementById("new-password");
        let confirmPassword = document.getElementById("new-password-confirm");

        let isValid = newPassword.value == confirmPassword.value;
        if (isValid)
        {
            confirmPassword.classList.remove('is-invalid');
            setConfirmPasswordError("");

            return true;
        }

        confirmPassword.classList.add('is-invalid');
        setConfirmPasswordError("Confirm password mismatch the new password");

        return false;
    }

    const ChangePassword = (event) => {
        event.preventDefault();

        let form = document.getElementById("form-change-password");
        if (!ValidateRequiredFields(form)) return false;
        if (!ValidateNewPasswordEquality()) return false;
    }

    return (
        <Template title="Change password">
            { isLoading ? <Loading /> : "" }
            <div className="col-4">
                <form id="form-change-password">
                    <div className="form-group">
                        <label htmlFor="current-password">Current password</label>
                        <input type="password" className="form-control" id="current-password" placeholder='******' autoFocus required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="new-password">New password</label>
                        <input type="password" className="form-control" id="new-password" placeholder='******' required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="new-password-confirm">Confirm new password</label>
                        <input type="password" className="form-control" id="new-password-confirm" placeholder='******' required />
                        <span className='password-mismatch'>{confirmPasswordError}</span>
                    </div>
                    <div className="form-group">
                        <button id='confirm-change' className='btn btn-primary' onClick={(e) => {ChangePassword(e)}}>Confirm</button>
                    </div>
                </form>
            </div>
        </Template>
    )
}

export default ChangePassword;
import React, { useState } from 'react';
import Section from '../Section';
import LoadingSpinner from '../LoadingSpinner';
import Icon from '../../Images/login.png';
import './style.css';

const Form = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState();

    const submit = (e) => {
        let btn = e.target;

        setIsLoading(true);
        btn.disabled = true;

        props.buttonClickAction(e)
        .then((result) => {
            setIsLoading(false);
            btn.disabled = false;
            setMessage(result);
        });
    }

   return(
       <Section>
            <div className="account-wall">
                <img className="profile-img" src={Icon} alt="user-icon"/>
                <form id={props.id} className="form-auth" noValidate>
                    {props.children}
                    <div className="d-grid gap-2">
                        <button className="btn btn-primary" type="submit" onClick={(e) => {submit(e)}} >{props.buttonText}</button>
                        { isLoading ? <LoadingSpinner /> : "" }
                        <span className='text-center error'>{message}</span>
                    </div>
                </form>
            </div>
       </Section>
   )
}

export default Form;
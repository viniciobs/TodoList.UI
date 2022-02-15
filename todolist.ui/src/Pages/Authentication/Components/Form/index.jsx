import React, { useState } from 'react';
import Section from '../Section';
import Icon from '../../assets/Images/login.png';
import '../../assets/css/style.css';
import LoadingSpinner from '../../../../Components/LoadingSpinner';

const Form = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    const submit = (e) => {
        e.target.disabled = true;

        setIsLoading(true);

        props.buttonClickAction(e)
        .then(() => {
            setIsLoading(false);
            e.target.disabled = false;
        });
    }

   return(
       <Section>
            <div className="account-wall">
                <img className="profile-img" src={Icon} alt="user-icon"/>
                <form id={props.id} className={"form-signin " + props.type} noValidate>
                    {props.children}
                    <div className="d-grid gap-2">
                        <button className="btn btn-primary" type="submit" onClick={(e) => {submit(e)}} >{props.buttonText}</button>
                        { isLoading ? <LoadingSpinner /> : "" }
                    </div>
                </form>
            </div>
       </Section>
   )
}

export default Form;
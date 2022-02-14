import React from 'react';
import Section from '../Section';
import Icon from '../../assets/Images/login.png';
import '../../assets/css/style.css';

const Form = (props) => {
   return(
       <Section>
            <div className="account-wall">
                <img className="profile-img" src={Icon} alt="user-icon"/>
                <form className={"form-signin " + props.type} noValidate>
                    {props.children}
                    <div className="d-grid gap-2">
                        <button className="btn btn-primary" type="submit" onClick={(e) => {props.buttonClickAction(e)}} >{props.buttonText}</button>
                    </div>
                </form>
            </div>
       </Section>
   )
}

export default Form;
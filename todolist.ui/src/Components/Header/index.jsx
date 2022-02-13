import React from 'react';
import Icon from './assets/img/todolist.png';
import {Link, useNavigate} from 'react-router-dom';

import {Clear, GetUsername} from '../../Services/Authentication/AuthenticationDataHandler';

import './style.css';

const Header = () => {
    let navigate = useNavigate();

    const Logout = (e) => {
        e.preventDefault();

        Clear();
        return navigate("/login");
    }

    return (
        <nav className="navbar navbar-light bg-light">
            <Link to="/" className="navbar-brand">
                <img src={Icon} width="30" height="30" className="d-inline-block align-top" alt="todo-list-icon" />
                {GetUsername()}
            </Link>
            <div className="nav navbar-nav navbar-right">
               <Link to="#" className="navbar-brand logout" onClick={(e) => {Logout(e)}}>
                   Log out
                </Link>
            </div>
        </nav>
    )
}

export default Header;
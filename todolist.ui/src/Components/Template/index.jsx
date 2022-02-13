import React, {useEffect} from 'react';
import Icon from './assets/img/todolist.png';
import {Link, useNavigate} from 'react-router-dom';

import {Clear, GetUsername} from '../../Services/Authentication/AuthenticationDataHandler';

import './style.css';
import ConfigureMenu from './assets/script/menu.js';

import {
    BiMenu as Menu,
    BiHome as Home,
    BiLogOut as Logout
} from "react-icons/bi";

const Header = (props) => {
    let navigate = useNavigate();

    useEffect(() => {
        ConfigureMenu();
    }, []);

    const Logout = (e) => {
        e.preventDefault();

        Clear();
        return navigate("/login");
    }

    return (
        <>
            <header className="header" id="header">
                <div className="header_toggle">
                    <Menu id="header-toggle" />
                </div>
                <Link to="#" onClick={(e) => {Logout(e)}}>Log out</Link>
            </header>
            <div className="l-navbar" id="nav-bar">
                <nav className="nav">
                    <div>
                        <img src={Icon} id="logo" alt="todo-list-icon" />
                        <div className="nav_list">
                            <Link to="/" className="nav_link active"> <Home /> <span className="nav_name">Home</span> </Link>
                        </div>
                    </div>
                </nav>
            </div>
            <div className='container'>
                {props.children}
            </div>
        </>
    )
}

export default Header;
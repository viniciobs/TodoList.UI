import React, {useEffect} from 'react';
import Icon from './assets/img/todolist.png';
import {Link, useNavigate} from 'react-router-dom';

import {Clear, GetUsername} from '../../Services/Authentication/AuthenticationDataHandler';

import './style.css';
import ConfigureMenu from './assets/script/menu.js';

import {
    BiMenu as Menu,
    BiHome as Home,
    BiUser as Account
} from "react-icons/bi";

const Header = (props) => {
    let navigate = useNavigate();

    useEffect(() => {
        ConfigureMenu();

        var element = document.getElementById("body-pd");
        element.classList.remove("body-pd");
    }, []);

    const GetNavLinkClass = (page) => {
        let classes = "nav_link";
        let isCurrentPage = window.location.pathname == page;

        if (isCurrentPage)
            classes += " active";

        return classes;
    }

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
                            <Link to="/" className={GetNavLinkClass("/")}> <Home /> <span className="nav_name">Home</span> </Link>
                            <Link to="/account" className={GetNavLinkClass("/account")}> <Account /> <span className="nav_name">Account</span> </Link>
                        </div>
                    </div>
                </nav>
            </div>
            <div className='container'>
                <h3>{props.title}</h3>
                {props.children}
            </div>
        </>
    )
}

export default Header;
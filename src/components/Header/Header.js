import React from "react";
import {Link, NavLink} from "react-router-dom";
import "./Header.scss"
import logo from "./../../assets/police.png";

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <Link to="/" className="navbar-brand">
                    <img src={logo} alt="Logo" />
                </Link>
                <input type="checkbox" id="nav" className="hidden"/>
                <label htmlFor="nav" className="nav-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <div className="wrapper">
                    <ul className="menu">
                        <li className="menu-item">
                            <NavLink to="/" exact activeClassName={"activeLink"} className="nav-link">User Profile</NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink to="/edit" activeClassName={"activeLink"} className="nav-link">Edit User</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;
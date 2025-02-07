import React from 'react';
import "../styles/Navigation.css";
import {NavLink} from "react-router-dom";

function Navigation(props) {
    return (
        <div className={"navigation"}>
            <ul>
                <NavLink to="/"
                className={(nav) => (nav.isActive ? "nav-active" : "nav")}>
                <li>Accueil</li>
                </NavLink>
                <NavLink to="/*"
                         className={(nav) => (nav.isActive ? "nav-active" : "nav")}>
                <li>A propos</li>
                </NavLink>
            </ul>
        </div>
    );
}

export default Navigation;
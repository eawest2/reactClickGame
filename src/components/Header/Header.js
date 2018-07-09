import React from "react";
import "./Header.css";

const Header = props =>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <p className="navbar-brand mt-2">Scientist Clicker Game</p>
        <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
            </ul>
            <span className="navbar-text mr-1 text-white">
                Current Score:
    </span>
            <span className="navbar-text scoreCurrent text-success">
                {props.clicked}
    </span>
            <span className="navbar-text mr-2 ml-2">
                ||
    </span>
            <span className="navbar-text mr-1 text-white">
                Top Score:
    </span>
            <span className="navbar-text scoreMax text-white">
                {props.maxClicked}
    </span>
        </div>
    </nav>

export default Header;

import React from "react"
import { Link } from "react-router-dom";
import "../styles/header.css"

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <Link className="navbar-brand" to="/">Bootcamp unit#20</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto text-right">
                    <li className="nav-item">
                        <Link className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"} to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"} to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"} to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
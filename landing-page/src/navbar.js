import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid">
            <nav className="navbar navbar-expand-lg container">
                <a className="navbar-brand" href="#">
                    Start Bootstrap
                </a>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
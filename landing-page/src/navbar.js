<<<<<<< HEAD
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export function Navbar() {
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
=======
import React from 'react'

export function Nav() {
    return (
        <>
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
        </>
    )
}
>>>>>>> c34e4e100ea90928fe5eb93ebdc6f104cb901ef7

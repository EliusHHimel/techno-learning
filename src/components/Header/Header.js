import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header-section d-flex justify-content-between px-4 py-2">
            <div>
                <h1 className="fw-bold">Techno <span className="text-danger">Learning</span></h1>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="m-2 btn text-light" activeStyle={{}} exact to="/"> Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="m-2 btn text-light" activeStyle={{}} to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="m-2 btn text-light" activeStyle={{}} to="/services">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="m-2 btn text-light" activeStyle={{}} to="/contact">Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
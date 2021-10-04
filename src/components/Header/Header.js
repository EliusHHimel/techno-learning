import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header-section d-flex justify-content-between mt-2 me-4 ms-4">
            <div>
                <h2 className="fw-bold">Techno <span className="text-danger">Learning</span></h2>
            </div>
            <nav>
                <NavLink className="m-2 btn" activeStyle={{}} exact to="/"> Home</NavLink>
                <NavLink className="m-2 btn" activeStyle={{}} to="/services">Services</NavLink>
                <NavLink className="m-2 btn" activeStyle={{}} to="/about">About</NavLink>
                <NavLink className="m-2 btn" activeStyle={{}} to="/testimonials">Testimonials</NavLink>
                <NavLink className="m-2 btn" activeStyle={{}} to="/contact">Contact Us</NavLink>
            </nav>
        </header>
    );
};

export default Header;
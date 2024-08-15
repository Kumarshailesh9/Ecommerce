import React from 'react';
import {NavLink} from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="py-3 my-4 bg-success ">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link px-2 text-white">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className="nav-link px-2 text-white">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/policy" className="nav-link px-2 text-white">Policy</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" className="nav-link px-2 text-white">Contact</NavLink>
                </li>
            </ul>
            <p className="text-center text-white">© 2021 Company, Inc</p>
        </footer>
    );
};

export default Footer;

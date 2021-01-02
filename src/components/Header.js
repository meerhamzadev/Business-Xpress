import React from 'react';
import Logo from './Logo.png';
import './Header.css';

function Header() {

    return (
        <header className="Header">
            <img src={Logo} alt="Logo" className="Header__logo" />
            <h1 className="Header__Title">Business Xpress</h1>

        </header>
    )
}

export default Header

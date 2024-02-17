import React, { useState } from 'react';
import CartWidget from '../Cartwidget/CartWidget';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav(!showNav);
    };

    return (
        <header>
            <Link to="/" style={{ color: '#f8f6f2', textDecoration: 'none' }}>
                <h1> Mia Tienda </h1>
            </Link>
            <div className="menu-btn" onClick={toggleNav}>
                <span className="menu-icon">&#9776;</span>
            </div>
            <nav className={showNav ? 'show' : ''}>
                <ul>
                    <li>
                        <NavLink to="/categoria/2" className="listas">
                            Camisetas
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/categoria/3" className="listas">
                            Pantalones
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/categoria/4" className="listas">
                            Camperas
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    );
};

export default NavBar;


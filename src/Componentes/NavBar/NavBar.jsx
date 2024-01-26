import CartWidget from './CartWidget/CartWidget';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <Link to="/" style={{ color: '#f8f6f2', textDecoration: 'none' }}>
                <h1> Mia Tienda </h1>
            </Link>
            <nav>
                <ul>

                    <li>
                        <NavLink to="/categoria/2">
                            Camisetas
                        </NavLink>
                    </li>


                    <li>
                        <NavLink to="/categoria/3">
                            Pantalones
                        </NavLink>
                    </li>


                    <li>
                        <NavLink to="/categoria/4">
                            Camperas
                        </NavLink>
                    </li>


                </ul>

            </nav>

            <CartWidget />
        </header>
    )
}

export default NavBar;

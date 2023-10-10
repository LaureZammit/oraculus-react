import { Link, NavLink } from 'react-router-dom';
import logo from '/img/logo-oraculus.png';
import '../styles/header.css';

function Header() {
    return (
        <header>
            <Link to="/">
                <img src={logo} alt="Logo Oraculus" />
            </Link>
            <nav>
                <ul>
                    <li>
                        <NavLink className="active" href="#">Horoscope</NavLink>
                    </li>
                    <li>
                        <NavLink href="/about">A propos</NavLink>
                    </li>
                    <li>
                        <NavLink href="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>

            <div className="arrow">
                <Link className="arrow-left" href="#">
                    <i className="fa-solid fa-chevron-left"></i>
                </Link>
                <Link className="arrow-right" href="#">
                    <i className="fa-solid fa-chevron-right"></i>
                </Link>
            </div>
        </header>
    )
}

export default Header
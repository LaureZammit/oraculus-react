import { Link, NavLink } from 'react-router-dom';
import { useHoroscopeContext } from '../components/horoscopecontext';
import logo from '/img/logo-oraculus.png';
import '../styles/header.css';

function Header() {
    const {
        horoscopeData,
        currentIndex,
        setCurrentIndex,
        setHoroscopeData,
        showHoroscope,
        changeTop,
        handleArrowClick
    } = useHoroscopeContext();

    // const handleArrowClick = (direction) => {
    //     // Gérer les clics sur les flèches className=arrow-left et arrow-right
    //     if (direction === '.arrow-left') {
    //         setCurrentIndex(currentIndex =>
    //             currentIndex === 0? horoscopeData.length - 1 : currentIndex - 1
    //         );
    //     } else if (direction === '.arrow-right') {
    //         setCurrentIndex(currentIndex =>
    //             currentIndex === horoscopeData.length - 1? 0 : currentIndex + 1
    //         );
    //     }
    // };

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
                <Link className="arrow-left" to="#" onClick={() => handleArrowClick('.arrow-right')}>
                    <i className="fa-solid fa-chevron-left"></i>
                </Link>
                <Link className="arrow-right" to="#" onClick={() => handleArrowClick('.arrow-right')}>
                    <i className="fa-solid fa-chevron-right"></i>
                </Link>
            </div>
        </header>
    )
}

export default Header
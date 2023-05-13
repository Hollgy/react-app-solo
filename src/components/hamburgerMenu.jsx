import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi"
import "../styles/products.css"




function HamburgerMenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className="hamburger-menu">
            <button onClick={toggleMenu}><GiHamburgerMenu /></button>
            {menuOpen && (
                <div className="menu-links">
                    <Link to="/">Home</Link>
                    <Link to="Products">Produkter</Link>
                    <Link to="Admin">Logga in</Link>
                </div>
            )}
        </div>
    );
}


export default HamburgerMenu

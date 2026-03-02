import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <span className="brand-icon">👑</span>
                <span className="brand-text">BSA TRIBE</span>
            </div>

            <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                <li>
                    <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/wedding-events" onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        Wedding/Events
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/products" onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/programs" onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        Programs
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

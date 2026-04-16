import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navbarClass = `navbar ${isScrolled ? 'scrolled' : 'top'}`

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <nav className={navbarClass} style={{height: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 2rem'}}>
            <div className="navbar-brand" style={{fontFamily: 'var(--font-headline)', color: 'var(--primary)', fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.05em'}}>
                BSA Tribe
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
                    <NavLink to="/programs" onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        Programs
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/products" onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        Products
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        Contact Us
                    </NavLink>
                </li>
            </ul>


            <div className="navbar-actions" style={{display: 'flex', alignItems: 'center', gap: '1.5rem'}}>
                <button className="social-icon" style={{background: 'none', border: 'none', color: 'var(--on-surface)', cursor: 'pointer'}}>
                    <span className="material-symbols-outlined">account_circle</span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar

import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <span className="brand-icon">👑</span>
                <span className="brand-text">BSA TRIBE</span>
            </div>
            <ul className="navbar-links">
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/wedding-events" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        Wedding/Events
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/products" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/programs" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        Programs
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

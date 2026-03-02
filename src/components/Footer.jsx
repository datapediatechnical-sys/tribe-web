import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer-main">
            <div className="footer-content">
                <div className="footer-brand">
                    <div className="footer-logo">
                        <span className="footer-logo-icon">🏯</span>
                        <span className="footer-logo-text">BSA Tribe</span>
                    </div>
                    <p className="footer-description">
                        Preserving and sharing the sacred traditions of the East for the conscious leaders of tomorrow.
                    </p>
                    <div className="footer-social">
                        <a href="#" aria-label="Website" className="social-icon">🌎</a>
                        <a href="#" aria-label="Email" className="social-icon">✉️</a>
                    </div>
                </div>

                <div className="footer-links-group">
                    <h4>Explore</h4>
                    <ul>
                        <li><Link to="/programs">All Programs</Link></li>
                        <li><Link to="#">Scholarships</Link></li>
                        <li><Link to="#">Retreat Centers</Link></li>
                        <li><Link to="#">Testimonials</Link></li>
                    </ul>
                </div>

                <div className="footer-links-group">
                    <h4>Support</h4>
                    <ul>
                        <li><Link to="#">Contact Us</Link></li>
                        <li><Link to="#">FAQ</Link></li>
                        <li><Link to="#">Privacy Policy</Link></li>
                        <li><Link to="#">Terms of Service</Link></li>
                    </ul>
                </div>

                <div className="footer-subscribe">
                    <h4>Subscribe</h4>
                    <p>Receive wisdom snippets and program updates weekly.</p>
                    <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Your email" required />
                        <button type="submit" className="btn-subscribe">Join</button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2023 BSA Tribe. All rights reserved. Elevate Your Consciousness.</p>
            </div>
        </footer>
    );
}

export default Footer;

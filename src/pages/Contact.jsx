import React from 'react';
import './Contact.css';
import contactHeroImg from '../assets/images/contact-hero.png';

function Contact() {
    return (
        <div className="contact-page">
            {/* ===== HERO SECTION ===== */}
            <section className="contact-hero">
                <div className="contact-hero-overlay"></div>
                <img src={contactHeroImg} alt="Contact Us" className="contact-hero-img" />
                <div className="contact-hero-content">
                    <h1 className="contact-hero-title">Connect with the Tribe</h1>
                    <p className="contact-hero-desc">
                        Reach out to us from wherever you are. Our heart is in the foothills of Rishikesh, open to your inquiry.
                    </p>
                </div>
            </section>

            {/* ===== CONTACT CONTENT ===== */}
            <section className="contact-main-section">
                <div className="contact-main-container">
                    <div className="contact-left-col">
                        <h2 className="section-title-small">Get in Touch</h2>
                        <div className="contact-info-grid">
                            <div className="info-card-v2">
                                <div className="info-card-icon">✉️</div>
                                <div className="info-card-details">
                                    <h3>Email</h3>
                                    <p>connect@bsatribe.com</p>
                                </div>
                            </div>
                            <div className="info-card-v2">
                                <div className="info-card-icon">📞</div>
                                <div className="info-card-details">
                                    <h3>Phone</h3>
                                    <p>+91 98765 43210</p>
                                </div>
                            </div>
                            <div className="info-card-v2">
                                <div className="info-card-icon">💬</div>
                                <div className="info-card-details">
                                    <h3>WhatsApp</h3>
                                    <p>+91 98765 43210</p>
                                </div>
                            </div>
                            <div className="info-card-v2">
                                <div className="info-card-icon">🔗</div>
                                <div className="info-card-details">
                                    <h3>Social Media</h3>
                                    <div className="social-icons-row">
                                        <span>🌐</span> <span>📸</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="spiritual-base-section">
                            <h2 className="section-title-small"><span className="location-icon">📍</span> Our Spiritual Base</h2>
                            <p className="location-desc">
                                Nestled in the foothills of the Himalayas, where the Ganges flows with ancient wisdom.
                            </p>
                            <div className="location-map-wrapper">
                                <img src="/src/assets/images/rishikesh-map.png" alt="Rishikesh, India Map" className="location-map-img" />
                                <div className="location-tag">Rishikesh, India</div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-right-col">
                        <div className="message-form-card">
                            <div className="form-header">
                                <h2>Send a Message</h2>
                                <p>Share your vision or inquiry with us. We respond with presence and care.</p>
                                <div className="header-flower-icon">🌸</div>
                            </div>
                            <form className="contact-form-v2" onSubmit={(e) => e.preventDefault()}>
                                <div className="form-group-v2">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="Your Name" required />
                                </div>
                                <div className="form-group-v2">
                                    <label>Email Address</label>
                                    <input type="email" placeholder="email@example.com" required />
                                </div>
                                <div className="form-group-v2">
                                    <label>Inquiry Type</label>
                                    <select required>
                                        <option value="">Select Inquiry Type</option>
                                        <option value="wedding">Sacred Wedding & Events</option>
                                        <option value="retreats">Spiritual Retreats</option>
                                        <option value="products">Conscious Products</option>
                                        <option value="general">General Inquiry</option>
                                    </select>
                                </div>
                                <div className="form-group-v2">
                                    <label>Your Message</label>
                                    <textarea rows="4" placeholder="Tell us how we can help..." required></textarea>
                                </div>
                                <button type="submit" className="btn-send-intention">
                                    <span className="sparkle-icon">✨</span> Send with Intention
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* ===== NEWSLETTER SECTION ===== */}
            <section className="contact-newsletter-section">
                <div className="newsletter-container">
                    <div className="newsletter-text">
                        <h2>Join the Tribe Newsletter</h2>
                        <p>Receive insights on conscious living and spiritual growth.</p>
                    </div>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="newsletter-input-group">
                            <input type="email" placeholder="Your email" required />
                            <button type="submit" className="btn-subscribe">Subscribe</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Contact;

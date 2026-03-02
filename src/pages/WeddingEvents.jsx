import './WeddingEvents.css'
import weddingHeroImg from '../assets/images/wedding-hero.png'
import sacredFireImg from '../assets/images/sacred-fire.png'
import meditationRetreatImg from '../assets/images/meditation-retreat.png'
import weddingMandapImg from '../assets/images/wedding-mandap.png'
import oceanCeremonyImg from '../assets/images/ocean-ceremony.png'
import weddingDecorImg from '../assets/images/wedding-decor.png'

function WeddingEvents() {
    return (
        <div className="wedding-page">

            {/* ===== HERO SECTION ===== */}
            <section className="wedding-hero">
                <div className="wedding-hero-overlay"></div>
                <img src={weddingHeroImg} alt="Sacred Wedding" className="wedding-hero-img" />
                <div className="wedding-hero-content">
                    <span className="wedding-hero-tag">SPIRITUAL UNIONS</span>
                    <h1 className="wedding-hero-title">
                        Sacred Weddings.<br />
                        <span className="hero-highlight">Eternal Bonds.</span>
                    </h1>
                    <p className="wedding-hero-desc">
                        We curate ceremonies that honor the sacred art of union — rooted in Vedic traditions,
                        wrapped in the warmth of intention, and adorned with timeless artistry.
                    </p>
                    <div className="wedding-hero-btns">
                        <button className="btn-wedding btn-wedding-primary">Plan Your Sacred Wedding</button>
                        <button className="btn-wedding btn-wedding-outline">Our Rituals →</button>
                    </div>
                </div>
            </section>

            {/* ===== SPIRITUAL DESTINATION WEDDINGS ===== */}
            <section className="destination-section">
                <div className="destination-header">
                    <div className="destination-header-left">
                        <span className="section-label">SACRED EXPERIENCES</span>
                        <h2 className="section-heading">
                            Spiritual Destination<br />Weddings
                        </h2>
                    </div>
                    <div className="destination-header-right">
                        <p>
                            Every union is a celebration of two souls merging in the divine flow of love.
                            We create immersive, soulful experiences rooted in Vedic philosophy.
                        </p>
                    </div>
                </div>

                <div className="destination-cards">
                    <div className="dest-card">
                        <div className="dest-card-icon">🕉️</div>
                        <h3>Vedic Rituals</h3>
                        <p>A blend of Granthi ceremonies and sacred rituals that align your energies with the divine.</p>
                    </div>
                    <div className="dest-card">
                        <div className="dest-card-icon">🪔</div>
                        <h3>Traditional Flavors</h3>
                        <p>We curate a feast infused with Vedic cooking traditions, gatherings, infusing the spiritual aspects of eating
                            with nourishment.</p>
                    </div>
                    <div className="dest-card">
                        <div className="dest-card-icon">📿</div>
                        <h3>Personalized Vows</h3>
                        <p>Our priests and ceremony artists craft personalized rituals, ensuring every vow flows from the heart.</p>
                    </div>
                </div>
            </section>

            {/* ===== CONSCIOUS EVENTS & GATHERINGS ===== */}
            <section className="events-section">
                <div className="events-grid">
                    <div className="events-images">
                        <div className="events-img-large">
                            <img src={sacredFireImg} alt="Sacred Fire Ceremony" />
                        </div>
                        <div className="events-img-small">
                            <img src={meditationRetreatImg} alt="Meditation Retreat" />
                        </div>
                    </div>

                    <div className="events-content">
                        <span className="section-label">MINDFUL CELEBRATIONS</span>
                        <h2 className="section-heading">
                            Conscious Events &<br />Gatherings
                        </h2>
                        <div className="events-list">
                            <div className="event-item">
                                <div className="event-dot"></div>
                                <div>
                                    <h4>Sacred Retreats</h4>
                                    <p>Immersive spiritual retreats with healing circles, meditation, and deep exploration.</p>
                                </div>
                            </div>
                            <div className="event-item">
                                <div className="event-dot"></div>
                                <div>
                                    <h4>Sacred Festivals</h4>
                                    <p>Curated celebrations that honor the cosmic rhythms and ancient traditions.</p>
                                </div>
                            </div>
                            <div className="event-item">
                                <div className="event-dot"></div>
                                <div>
                                    <h4>Free Consultation Available</h4>
                                    <p>A 30-minute call to chart the sacred energies and begin your journey with us.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== MOMENTS OF GRACE - GALLERY ===== */}
            <section className="gallery-section">
                <h2 className="gallery-title">Moments of Grace</h2>
                <p className="gallery-subtitle">A curated selection of our sacred experiences</p>

                <div className="gallery-grid">
                    <div className="gallery-item">
                        <img src={weddingMandapImg} alt="Wedding Mandap" />
                    </div>
                    <div className="gallery-item">
                        <img src={oceanCeremonyImg} alt="Ocean Ceremony" />
                    </div>
                    <div className="gallery-item">
                        <img src={weddingDecorImg} alt="Wedding Decor" />
                    </div>
                    <div className="gallery-item">
                        <img src={sacredFireImg} alt="Sacred Fire" />
                    </div>
                    <div className="gallery-item">
                        <img src={meditationRetreatImg} alt="Retreat" />
                    </div>
                    <div className="gallery-item">
                        <img src={weddingHeroImg} alt="Wedding" />
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIALS ===== */}
            <section className="testimonials-section">
                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        <p className="testimonial-text">
                            "Consulting with BSA felt just like sharing stories; it wasn't
                            just plain planning. Our Vedic ceremony was interwoven with so much
                            beauty and meaning, we were blown away. Choosing BSA was a
                            blessing in every sense of the word."
                        </p>
                        <div className="testimonial-author">
                            <div className="author-avatar">S</div>
                            <div>
                                <strong>Sunita Mehta</strong>
                                <span>Sacred Wedding 2024</span>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-card">
                        <p className="testimonial-text">
                            "The holistic ceremony organized by BSA Tribe brought
                            a sense of peace and joy that transcended ordinary. Our
                            guests felt the magic in every detail. Truly a conscious
                            sacred experience like no other."
                        </p>
                        <div className="testimonial-author">
                            <div className="author-avatar">H</div>
                            <div>
                                <strong>Hareem Deshpra</strong>
                                <span>Destination Wedding 2024</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CTA SECTION ===== */}
            <section className="wedding-cta">
                <div className="wedding-cta-inner">
                    <h2>Begin Your Sacred Journey</h2>
                    <p>Whether it&apos;s a destination or an intimate gathering, we are here to weave the sacred into your story.</p>
                    <button className="btn-wedding btn-wedding-cta">Request Now</button>
                </div>
            </section>

            {/* ===== FOOTER ===== */}
            <footer className="wedding-footer">
                <div className="footer-grid">
                    <div className="footer-col">
                        <h4>BSA TRIBE</h4>
                        <p>Transcending the dualities of life through ancient rituals and modern consciousness.</p>
                    </div>
                    <div className="footer-col">
                        <h4>Navigation</h4>
                        <ul>
                            <li>Home</li>
                            <li>Weddings</li>
                            <li>Products</li>
                            <li>Programs</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Contact</h4>
                        <ul>
                            <li>info@bsatribe.com</li>
                            <li>+91 98765 43210</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2026 BSA TRIBE. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default WeddingEvents

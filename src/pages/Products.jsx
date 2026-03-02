import './Pages.css'
import productHeroBg from '../assets/images/hero-mountain-lake.png'
import retreatMeditationImg from '../assets/images/retreat_meditation.png'
import breathworkImg from '../assets/images/breathwork.png'
import mantraImg from '../assets/images/mantra_card.png'
import dharmaImg from '../assets/images/sacred-study-card.png'
import sacredFireImg from '../assets/images/sacred-fire.png'
import medRetreatImg from '../assets/images/meditation-retreat.png'
import communityImg from '../assets/images/community-card.png'

function Products() {
    return (
        <div className="page products-page">
            <div className="product-hero">
                <img
                    src={productHeroBg}
                    alt="Mountain Landscape"
                    className="product-hero-bg"
                />
                <div className="product-hero-overlay"></div>
                <div className="product-hero-content">
                    <span className="section-tag">ANCIENT WISDOM</span>
                    <h1>Elevate Your <br /><span style={{ color: '#e67e22' }}>Consciousness</span></h1>
                    <p className="page-intro">
                        Experience spiritual growth through our curated ancient wisdom programs designed for the modern soul.
                    </p>
                    <div className="product-hero-btns">
                        <button className="btn btn-primary">Explore Programs</button>
                        <button className="btn btn-outline">View Schedule</button>
                    </div>
                </div>
            </div>

            <section className="wellbeing-section">
                <div className="wellbeing-header">
                    <div>
                        <span className="section-tag">PATH TO PEACE</span>
                        <h2 className="wellbeing-title">Spiritual Well-being</h2>
                        <p className="wellbeing-subtitle">Foundation practices for inner stillness and clarity of mind.</p>
                    </div>
                    <a href="#" className="offerings-view-all">See all practices →</a>
                </div>
                <div className="wellbeing-grid">
                    <div className="wellbeing-card">
                        <div className="wellbeing-img">
                            <img src={retreatMeditationImg} alt="Meditation Retreat" />
                            <span className="popular-badge">POPULAR</span>
                        </div>
                        <div className="wellbeing-body">
                            <h3>Meditation Retreats</h3>
                            <p>Experience deep silence and inner peace in secluded sanctuaries away from the noise of modern life.</p>
                            <button className="btn btn-outline wellbeing-btn">Learn More</button>
                        </div>
                    </div>
                    <div className="wellbeing-card">
                        <div className="wellbeing-img">
                            <img src={breathworkImg} alt="Breathwork Sessions" />
                        </div>
                        <div className="wellbeing-body">
                            <h3>Breathwork Sessions</h3>
                            <p>Master ancient pranayama techniques to regulate your energy, reduce stress, and awaken your vitality.</p>
                            <button className="btn btn-outline wellbeing-btn">Learn More</button>
                        </div>
                    </div>
                    <div className="wellbeing-card">
                        <div className="wellbeing-img">
                            <img src={mantraImg} alt="Mantra Immersion" />
                        </div>
                        <div className="wellbeing-body">
                            <h3>Mantra Immersion</h3>
                            <p>Connect with sacred sound vibrations that resonate with your higher self and purify your energetic field.</p>
                            <button className="btn btn-outline wellbeing-btn">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="courses-section">
                <div className="courses-header">
                    <h2>Spiritual Living Courses</h2>
                    <p>Bridging the gap between spiritual practice and everyday life through ancient Dharma wisdom.</p>
                </div>
                <div className="courses-layout">
                    <div className="courses-main-card">
                        <div className="courses-main-img">
                            <img src={dharmaImg} alt="Dharma-based Living" />
                        </div>
                        <div className="courses-main-content">
                            <span className="course-tag">CORE WISDOM</span>
                            <h3>Dharma-based Living</h3>
                            <p>Learn to align your daily actions with universal laws for a life of purpose, prosperity, and harmony.</p>
                            <a href="#" className="course-link">Explore Curriculum <span className="arrow">↗</span></a>
                        </div>
                    </div>
                    <div className="courses-list">
                        <div className="course-list-item">
                            <div className="course-icon heart-icon">♥</div>
                            <div className="course-list-text">
                                <h4>Conscious Relationships</h4>
                                <p>Transform your connections through empathy, boundaries, and spiritual intimacy.</p>
                            </div>
                        </div>
                        <div className="course-list-item">
                            <div className="course-icon mind-icon">⚛</div>
                            <div className="course-list-text">
                                <h4>Inner Transformation</h4>
                                <p>A deep dive into the psychology of the self and the alchemy of spiritual growth.</p>
                            </div>
                        </div>
                        <div className="course-list-item">
                            <div className="course-icon star-icon">✨</div>
                            <div className="course-list-text">
                                <h4>Vedic Wisdom in Modernity</h4>
                                <p>Applying the oldest philosophy to the newest challenges of the 21st century.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== Online Global Programs Section ===== */}
            <section className="global-programs-section">
                <div className="global-programs-layout">

                    <div className="global-programs-content">
                        <h2>Online Global Programs</h2>
                        <p className="global-programs-desc">
                            No matter where you are in the world, join our growing global community. Virtual sessions are optimized for Europe, Americas, and worldwide time zones.
                        </p>

                        <div className="global-features">
                            <div className="feature-item">
                                <span className="feature-icon">🌏</span>
                                <span>Worldwide Access</span>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">🎥</span>
                                <span>Live HD Sessions</span>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">⏱️</span>
                                <span>Adaptive Timing</span>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">💬</span>
                                <span>Community Slack</span>
                            </div>
                        </div>

                        <button className="btn btn-primary btn-white">Explore Online Hub</button>
                    </div>

                    <div className="global-programs-image-area">
                        <div className="ceramic-bowl-container">
                            <div className="ceramic-bowl">
                                <div className="bowl-inner">
                                    <span className="bowl-text">VIRTUAL<br />SANGHA</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* ===== Upcoming Events Section ===== */}
            <section className="upcoming-events-section">
                <div className="events-header">
                    <h2>Upcoming Sangha Events</h2>
                    <p>Join our global live gatherings and intimate retreats designed to elevate your spiritual practice.</p>
                </div>
                <div className="events-grid">

                    <div className="event-card">
                        <div className="event-img">
                            <img src={sacredFireImg} alt="Sacred Fire Ceremony" />
                            <div className="event-date">
                                <span className="month">OCT</span>
                                <span className="day">15</span>
                            </div>
                        </div>
                        <div className="event-body">
                            <h3>Full Moon Cacao & Fire</h3>
                            <p>A sacred evening of intention setting, heart-opening cacao, and releasing what no longer serves you into the fire.</p>
                            <div className="event-meta">
                                <span>📍 Ubud, Bali & Virtual</span>
                                <span>🕖 7:00 PM GMT+8</span>
                            </div>
                            <button className="btn btn-outline event-btn">Reserve Spot</button>
                        </div>
                    </div>

                    <div className="event-card">
                        <div className="event-img">
                            <img src={medRetreatImg} alt="Silent Meditation Retreat" />
                            <div className="event-date">
                                <span className="month">NOV</span>
                                <span className="day">02</span>
                            </div>
                        </div>
                        <div className="event-body">
                            <h3>7-Day Silent Retreat</h3>
                            <p>Disconnect from the world to reconnect with your inner self. A guided Vipassana journey in the mountains.</p>
                            <div className="event-meta">
                                <span>📍 Rishikesh, India</span>
                                <span>🕖 8:00 AM IST</span>
                            </div>
                            <button className="btn btn-outline event-btn">Reserve Spot</button>
                        </div>
                    </div>

                    <div className="event-card">
                        <div className="event-img">
                            <img src={communityImg} alt="Community Gathering" />
                            <div className="event-date">
                                <span className="month">DEC</span>
                                <span className="day">21</span>
                            </div>
                        </div>
                        <div className="event-body">
                            <h3>Winter Solstice Gathering</h3>
                            <p>Celebrate the return of the light with our global Sangha. Live music, chanting, and intuitive dance.</p>
                            <div className="event-meta">
                                <span>📍 London, UK & Virtual</span>
                                <span>🕖 6:00 PM GMT</span>
                            </div>
                            <button className="btn btn-outline event-btn">Reserve Spot</button>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Products

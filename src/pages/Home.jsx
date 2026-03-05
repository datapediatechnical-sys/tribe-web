import './Pages.css'
import heroDarkMountains from '../assets/images/hero-dark-mountains.png'
import retreatImg from '../assets/images/retreat-card.png'
import sacredStudyImg from '../assets/images/sacred-study-card.png'
import communityImg from '../assets/images/community-card.png'
import { Link } from 'react-router-dom'
import ExplorePath from '../components/ExplorePath'
import { Heart, Flame, Star, Sparkles, Sprout, Footprints } from 'lucide-react'

function Home() {
    return (
        <div className="page home-page">
            <div className="hero-section">
                <img src={heroDarkMountains} alt="Dark Mountain Landscape" className="hero-bg-img" />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-title">
                        Awaken the <span className="highlight">Sacred</span> Within.
                    </h1>
                    <p className="hero-subtitle">
                        Bridging Ancient Wisdom & Modern Consciousness — transforming lives through purpose and awakening.
                    </p>
                    <div className="hero-buttons">
                        <ExplorePath triggerText="Explore the Path" />
                        <Link to="/programs"><button className="btn btn-outline">View Programs</button></Link>
                    </div>
                </div>
            </div>

            <section className="philosophy-section">
                <div className="philosophy-layout">
                    <div className="philosophy-left">
                        <span className="section-tag">OUR PHILOSOPHY</span>
                        <h2>Beyond Shubh Ashubh</h2>
                        <p className="philosophy-desc">
                            In a world divided by binary judgments of good and bad, we invite you to find the center.
                            Our philosophy transcends traditional dualities to embrace the balanced state of the modern seeker.
                        </p>
                        <div className="philosophy-cards">
                            <div className="philosophy-card">
                                <span className="philosophy-card-icon"><Heart size={24} color="#e67e22" strokeWidth={1.5} /></span>
                                <h3>Equanimity</h3>
                                <p>Finding stillness in the dance of opposites.</p>
                            </div>
                            <div className="philosophy-card">
                                <span className="philosophy-card-icon"><Flame size={24} color="#e67e22" strokeWidth={1.5} /></span>
                                <h3>Conscious Ritual</h3>
                                <p>Modern practices rooted in ancient truth.</p>
                            </div>
                        </div>
                    </div>
                    <div className="philosophy-right">
                        <div className="mandala-diagram">
                            <div className="mandala-ring"></div>
                            <div className="mandala-center">
                                <span>UNITY</span>
                            </div>
                            <div className="mandala-node mandala-top">
                                <div className="node-circle"><Star size={20} color="#e67e22" strokeWidth={1.5} /></div>
                                <span>WISDOM</span>
                            </div>
                            <div className="mandala-node mandala-right-node">
                                <div className="node-circle"><Sparkles size={20} color="#e67e22" strokeWidth={1.5} /></div>
                                <span>KALA</span>
                            </div>
                            <div className="mandala-node mandala-bottom">
                                <div className="node-circle"><Sprout size={20} color="#e67e22" strokeWidth={1.5} /></div>
                                <span>GROWTH</span>
                            </div>
                            <div className="mandala-node mandala-left-node">
                                <div className="node-circle"><Footprints size={20} color="#e67e22" strokeWidth={1.5} /></div>
                                <span>RITUAL</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="offerings-section">
                <div className="offerings-header">
                    <div>
                        <h2 className="offerings-title">Curated Offerings</h2>
                        <p className="offerings-subtitle">Dive deep into a space of transformation with our signature spiritual offerings.</p>
                    </div>
                    <a href="#" className="offerings-view-all">View All Offerings →</a>
                </div>
                <div className="offerings-grid">
                    <div className="offering-card">
                        <div className="offering-img-wrap">
                            <img src="https://images.unsplash.com/photo-1544365558-35aa4afcf11f?auto=format&fit=crop&q=80&w=800" alt="Silent Himalaya Retreat" />
                        </div>
                        <div className="offering-body">
                            <span className="offering-tag">✦ MEDITATION</span>
                            <h3>Silent Himalaya Retreat</h3>
                            <p>A 21-day immersion into the deep silence of the higher realms, guided through ancient meditative practices.</p>
                            <button className="btn btn-outline offering-btn">Learn More</button>
                        </div>
                    </div>
                    <div className="offering-card">
                        <div className="offering-img-wrap">
                            <img src={sacredStudyImg} alt="Ancient Texts Modern Life" />
                        </div>
                        <div className="offering-body">
                            <span className="offering-tag">✦ SACRED STUDY</span>
                            <h3>Ancient Texts Modern Life</h3>
                            <p>Uncovering the Upanishads through the lens of neuropsychology and consciousness.</p>
                            <button className="btn btn-outline offering-btn">Learn More</button>
                        </div>
                    </div>
                    <div className="offering-card">
                        <div className="offering-img-wrap">
                            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" alt="The Weaver's Circle" />
                        </div>
                        <div className="offering-body">
                            <span className="offering-tag">✦ SANGHA</span>
                            <h3>The Weaver's Circle</h3>
                            <p>A global digital community of seekers, practitioners and modern mystics building bridges together.</p>
                            <button className="btn btn-outline offering-btn">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="glance-section">
                <div className="glance-layout">
                    <div className="glance-left">
                        <span className="section-tag">✦ BSA TRIBE</span>
                        <p className="glance-desc">
                            A holistic space built to awaken the sacred within —
                            through ritual, community, and conscious living.
                        </p>
                        <a href="#" className="glance-cta">Explore Our Journey →</a>
                    </div>
                    <div className="glance-right">
                        <div className="glance-card">
                            <span className="glance-card-icon">🙏</span>
                            <h3>12,000+</h3>
                            <p>Seekers United</p>
                        </div>
                        <div className="glance-card">
                            <span className="glance-card-icon">🕉️</span>
                            <h3>500+</h3>
                            <p>Sacred Rituals</p>
                        </div>
                        <div className="glance-card">
                            <span className="glance-card-icon">✨</span>
                            <h3>8,500+</h3>
                            <p>Transformations</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home

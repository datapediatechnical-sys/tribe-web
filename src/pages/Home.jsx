import './Pages.css'

function Home() {
    return (
        <div className="page home-page">
            <div className="hero-section">
                <h1 className="hero-title">
                    Awaken the <span className="highlight">Sacred</span> Within.
                </h1>
                <p className="hero-subtitle">
                    Bridging Ancient Wisdom & Modern Consciousness — transforming lives through purpose and awakening.
                </p>
                <div className="hero-buttons">
                    <button className="btn btn-primary">Explore the Path</button>
                    <button className="btn btn-outline">Our Story</button>
                </div>
            </div>

            <section className="philosophy-section">
                <span className="section-tag">THE PHILOSOPHY</span>
                <h2>Beyond Shubh Ashubh —</h2>
                <p className="philosophy-quote">
                    <em>We are not just a community. We are a movement.</em>
                </p>
                <p className="philosophy-desc">
                    A rooted collective that bridges the gap between ancient rituals and modern conscious living,
                    creating a sanctuary for those seeking depth in a superficial world.
                </p>
            </section>
        </div>
    )
}

export default Home

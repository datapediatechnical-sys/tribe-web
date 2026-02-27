import './Pages.css'

function Programs() {
    return (
        <div className="page programs-page">
            <div className="page-header">
                <span className="section-tag">TRANSFORMATIVE JOURNEYS</span>
                <h1>Programs</h1>
                <p className="page-intro">
                    Structured spiritual programs designed to guide your journey of awakening and self-discovery.
                </p>
            </div>

            <div className="cards-grid">
                <div className="service-card">
                    <div className="card-icon">🧘</div>
                    <h3>Meditation Mastery</h3>
                    <p>A 21-day program to deepen your meditation practice and inner awareness.</p>
                </div>
                <div className="service-card">
                    <div className="card-icon">📖</div>
                    <h3>Vedic Wisdom</h3>
                    <p>Ancient scriptures decoded for modern conscious living.</p>
                </div>
                <div className="service-card">
                    <div className="card-icon">🌙</div>
                    <h3>Moon Circle</h3>
                    <p>Monthly gatherings aligned with lunar cycles for collective healing.</p>
                </div>
            </div>
        </div>
    )
}

export default Programs

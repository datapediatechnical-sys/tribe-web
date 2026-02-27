import './Pages.css'

function Products() {
    return (
        <div className="page products-page">
            <div className="product-hero">
                <img
                    src="https://images.unsplash.com/photo-1526239187794-f8c27c7872ee?q=80&w=867&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Conscious Products"
                    className="product-hero-bg"
                />
                <div className="product-hero-overlay"></div>
                <div className="product-hero-content">
                    <span className="section-tag">HANDCRAFTED & MINDFUL</span>
                    <h1>Conscious Essentials</h1>
                    <p className="page-intro">
                        Curated earth-toned artifacts designed to ground your daily practice and honor the journey within.
                    </p>
                    <button className="btn btn-primary">Explore Collection</button>
                </div>
            </div>

            <div className="cards-grid">
                <div className="service-card">
                    <div className="card-icon">🧴</div>
                    <h3>Sacred Oils</h3>
                    <p>Pure, ethically sourced essential oils for meditation and healing.</p>
                </div>
                <div className="service-card">
                    <div className="card-icon">📿</div>
                    <h3>Spiritual Accessories</h3>
                    <p>Malas, crystals, and sacred jewelry crafted with intention.</p>
                </div>
                <div className="service-card">
                    <div className="card-icon">🕯️</div>
                    <h3>Ritual Kits</h3>
                    <p>Complete ceremony kits for puja, meditation, and daily rituals.</p>
                </div>
            </div>
        </div>
    )
}

export default Products

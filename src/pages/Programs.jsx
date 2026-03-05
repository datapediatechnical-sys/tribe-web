import './Pages.css'
import productHeroBg from '../assets/images/hero-mountain-lake.png'

function Programs() {
    return (
        <div className="page programs-page">
            <section className="programs-hero-section">
                <div className="programs-hero-bg" style={{ backgroundImage: `url(${productHeroBg})` }}></div>
                <div className="programs-hero-overlay"></div>
                <div className="programs-hero-content">
                    <span className="banner-tag">HANDCRAFTED & MINDFUL</span>
                    <h2>Conscious Essentials</h2>
                    <p>Curated earth-toned artifacts designed to ground your daily practice and honor the journey within.</p>
                    <button className="btn btn-primary banner-btn">Explore Collection</button>
                </div>
            </section>

            {/* ===== Spiritual Living Products Grid ===== */}
            <section className="programs-product-grid-section">
                <div className="category-filters">
                    <button className="filter-btn active">All Essentials</button>
                    <button className="filter-btn">Spiritual Living</button>
                    <button className="filter-btn">Recycled & Conscious</button>
                    <button className="filter-btn">Ritual Boxes</button>
                </div>

                <div className="product-grid-header">
                    <div className="header-left">
                        <h2>Spiritual Living</h2>
                        <p>Tools for mindfulness and presence</p>
                    </div>
                    <a href="#" className="view-all-link">View All &rarr;</a>
                </div>

                <div className="shop-product-grid">
                    <div className="shop-product-card">
                        <div className="shop-img-wrapper">
                            <img src="https://images.unsplash.com/photo-1608501821300-4f99e58bba77?auto=format&fit=crop&q=80&w=800" alt="Handcrafted Incense" />
                        </div>
                        <div className="shop-product-info">
                            <h3>Handcrafted Incense</h3>
                            <span className="price">$12.00</span>
                        </div>
                    </div>

                    <div className="shop-product-card">
                        <div className="shop-img-wrapper">
                            <img src="https://picsum.photos/seed/copperbottle/800/800" alt="Copper Water Bottle" />
                        </div>
                        <div className="shop-product-info">
                            <h3>Copper Water Bottle</h3>
                            <span className="price">$35.00</span>
                        </div>
                    </div>

                    <div className="shop-product-card">
                        <div className="shop-img-wrapper">
                            <img src="https://picsum.photos/seed/malabeads/800/800" alt="Sandalwood Mala Beads" />
                        </div>
                        <div className="shop-product-info">
                            <h3>Sandalwood Mala Beads</h3>
                            <span className="price">$28.00</span>
                        </div>
                    </div>

                    <div className="shop-product-card">
                        <div className="shop-img-wrapper">
                            <img src="https://picsum.photos/seed/brassdiyas/800/800" alt="Brass Diyas" />
                        </div>
                        <div className="shop-product-info">
                            <h3>Brass Diyas</h3>
                            <span className="price">$18.00</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== Full-Width Product Card Sections ===== */}
            <section className="fw-product-section">
                {/* Recycled & Conscious */}
                <div className="fw-category-block">
                    <div className="fw-category-header">
                        <div>
                            <h2 className="fw-category-title">Recycled &amp; Conscious</h2>
                            <p className="fw-category-subtitle">Eco-friendly choices for a sustainable path</p>
                        </div>
                        <a href="#" className="fw-view-all">View All &rarr;</a>
                    </div>
                    <div className="fw-cards-row">
                        <div className="fw-card">
                            <div className="fw-card-img">
                                <img src="https://images.unsplash.com/photo-1597633425046-08f5110420b5?auto=format&fit=crop&q=80&w=800" alt="Recycled Fabric Bags" />
                            </div>
                            <div className="fw-card-info">
                                <h3>Recycled Fabric Bags</h3>
                                <p>Hand-woven from upcycled textile waste, each bag tells a unique story of renewal.</p>
                                <span className="fw-card-price">$42.00</span>
                                <button className="fw-add-btn">Add to Bag</button>
                            </div>
                        </div>
                        <div className="fw-card">
                            <div className="fw-card-img">
                                <img src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80&w=800" alt="Handmade Eco-Decor" />
                            </div>
                            <div className="fw-card-info">
                                <h3>Handmade Eco-Decor</h3>
                                <p>Artisanal home pieces crafted using sustainable clay and natural pigments.</p>
                                <span className="fw-card-price">$55.00</span>
                                <button className="fw-add-btn">Add to Bag</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Spiritual Ritual Boxes */}
                <div className="fw-category-block">
                    <div className="fw-category-header">
                        <div>
                            <h2 className="fw-category-title">Spiritual Ritual Boxes</h2>
                            <p className="fw-category-subtitle">Complete kits for your seasonal practices</p>
                        </div>
                        <a href="#" className="fw-view-all">View All &rarr;</a>
                    </div>
                    <div className="fw-cards-row">
                        <div className="fw-card">
                            <div className="fw-card-img">
                                <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800" alt="New Moon Ritual Box" />
                            </div>
                            <div className="fw-card-info">
                                <h3>New Moon Ritual Box</h3>
                                <p>A curated box with sage, crystals, and intention cards for your new moon ceremony.</p>
                                <span className="fw-card-price">$68.00</span>
                                <button className="fw-add-btn">Add to Bag</button>
                            </div>
                        </div>
                        <div className="fw-card">
                            <div className="fw-card-img">
                                <img src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800" alt="Solstice Celebration Kit" />
                            </div>
                            <div className="fw-card-info">
                                <h3>Solstice Celebration Kit</h3>
                                <p>Seasonal herbs, candles, and guided meditation for solstice rituals.</p>
                                <span className="fw-card-price">$75.00</span>
                                <button className="fw-add-btn">Add to Bag</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Programs

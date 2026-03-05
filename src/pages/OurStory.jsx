import React from 'react';
import './OurStory.css';
import heroImg from '../assets/images/hero-dark-mountains.png';
import philosophyImg from '../assets/images/sacred-fire.png';

function OurStory() {
    return (
        <div className="our-story-page">
            <section className="story-hero">
                <div className="story-hero-content">
                    <h1>A Journey of Ancestry & Awakening</h1>
                    <p>Rooted in the ancient Vedic path, tailored for the modern conscious soul.</p>
                </div>
            </section>

            <section className="story-content-section">
                <div className="story-grid">
                    <div className="story-text">
                        <h2>The Vision</h2>
                        <p>
                            BSA Tribe was born from a simple yet profound realization: that ancient wisdom
                            is not a relic of the past, but the most vital technology for our future.
                        </p>
                        <p>
                            We bridge the gap between two worlds—the profound silence of the Himalayas
                            and the dynamic rhythm of modern leadership. Our mission is to facilitate
                            a transformation that is both deeply spiritual and practically grounded.
                        </p>
                    </div>
                    <div className="story-image">
                        <img src={philosophyImg} alt="Sacred Vision" />
                    </div>
                </div>
            </section>

            <section className="legacy-section">
                <div className="legacy-inner">
                    <blockquote>
                        "Truth is one, though the sages call it by many names. Our task is to awaken
                        to that unity in the midst of our modern diversity."
                    </blockquote>
                    <p className="legacy-author">— The Weaver's Path</p>
                </div>
            </section>

            <section className="story-content-section" style={{ background: '#0a0a0a' }}>
                <div className="story-grid" style={{ gridTemplateColumns: '1fr 1fr', direction: 'rtl' }}>
                    <div className="story-text" style={{ direction: 'ltr' }}>
                        <h2>The Heritage</h2>
                        <p>
                            Our ancestry traces back through generations of Vedic practitioners who understood
                            ritual not as mere ceremony, but as a map for consciousness.
                        </p>
                        <p>
                            Today, we bring this heritage to you through curated retreats, sacred products,
                            and community gatherings designed to nurture the high-vibrational soul.
                        </p>
                    </div>
                    <div className="story-image">
                        <img src={heroImg} alt="Ancestral Heritage" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default OurStory;

import React, { useState, useEffect } from 'react';
import './ExplorePath.css';

function ExplorePath({ triggerText }) {
    const [isOpen, setIsOpen] = useState(false);

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) setIsOpen(false);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    // Prevent scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const paths = [
        {
            icon: '🕉️',
            title: 'Sacred Rituals',
            description: 'Connect with the divine through morning pujas, fire ceremonies, and evening aartis in our holy space.'
        },
        {
            icon: '🧘',
            title: 'Spiritual Retreats',
            description: 'Immerse yourself in deep silence and meditation within the tranquil foothills of the Himalayas.'
        },
        {
            icon: '📜',
            title: 'Ancient Wisdom',
            description: 'Explore timeless Vedic texts interpreted for the modern seeker, bridging past and future.'
        }
    ];

    return (
        <div className="explore-path-container">
            <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
                {triggerText}
            </button>

            <div className={`explore-overlay ${isOpen ? 'active' : ''}`}>
                <div className="explore-bg" onClick={() => setIsOpen(false)}></div>

                <div className="explore-modal">
                    <button className="close-btn" onClick={() => setIsOpen(false)} aria-label="Close">
                        &times;
                    </button>

                    <div className="explore-header">
                        <h2>Choose Your Path</h2>
                        <p>Where does your journey of awakening begin today?</p>
                    </div>

                    <div className="path-grid">
                        {paths.map((path, index) => (
                            <div key={index} className="path-card">
                                <div className="path-icon">{path.icon}</div>
                                <h3>{path.title}</h3>
                                <p>{path.description}</p>
                                <span className="path-btn">Enter Path →</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExplorePath;

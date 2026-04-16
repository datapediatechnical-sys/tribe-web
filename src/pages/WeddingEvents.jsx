import { useState, useEffect } from 'react'
import './WeddingEvents.css'
import weddingHeroImg from '../assets/images/wedding-events.jpeg'
import clearHeroImg from '../assets/images/wedding-hero-final.jpg'

// Images from the approved mockup
const udaipurImg = "https://lh3.googleusercontent.com/aida-public/AB6AXuDD0h-YILwZPDSzbqhMcYoYzn9XDbqwN6Rr75VYj3o66CaWWavLgM_AgAfdnjmkj8AsFmHJgDKGMMq7-h1XoysvVlLScUm0FIJxLjvsgyGtcHZM9tCEbSeXkHvYHmXCqzzAEwTOr8Ag88O6zonEqeznwvu5oggm5R5hnVhJHU7ZKhUcraD9GSKUimNLUduODUviBC2XdeqGGCBgiP3BdBWH5hKlpwvQoJGl-RXOBpeblQzgcQBdC6kiziMwB8yoMs_ptyB8TVLImnk"
const jaipurImg = "https://lh3.googleusercontent.com/aida-public/AB6AXuDC9KdDndDEP8OuOOtJ5whDB3sUYR3tmLPS6LFFNKtNDKkO8C09zBuc3I7LOtTZLSut9_RnL2AA2czOx75Tk-CnLyioBgK78JpY_YKSx0OM6qh8PlshkU3w12eWIJJrdfDPH7zXQWGFB2m6eReurPcRBH5iuisIppNzq2Tk1d7NvwQE-3CNKfLMc8JzikTB8AFLf-NvotRO8018o0Qikri6Ykp5nxSKG4bjRSu6ihq5H4Z9sUI0iB65wsdp8g4MkGLCSGfoYN_sUnE"
const kolkataImg = "https://lh3.googleusercontent.com/aida-public/AB6AXuCXgVuHQ5bfATvHTekmrja51UVlzFFvyNjoBCxdTH9F47h28XrZMg4sFePYtgb4hdNcyVNCTe0lnhNX98zGSAOTxj9x0FIcSCdmng3oyGrVzdDPYBnSOlPAw5Fs8FkjE5bhfNmv7iVDBWtdU9MFKq7kCOwSY17_NSv4U9-vPVlgB7zLqFntoEmKDu_Ls64XLRcdNDwfDJzNYTGKesLzceSNPxWNsqXk3m2zYqxKE1jKyUqFKUxf_3nvvaVRngT8BnATpuQNSTPEx-E"
const guestImg = "https://lh3.googleusercontent.com/aida-public/AB6AXuDM8b6C3C2i0BTgy-3Q-DVGuJMqo3AVKQeQ-uiuYKI4Xm2ABik1Un-zSm2KJfnocDNJHydaAcrWX2S-ygjgsp0CdZMC36SXwuvA5u3hilmTjfSaxK_S8uaLu2S77mXskiwUmvjSnD4jdv-p1zP9U3qfFeoHYQS-TNQmmbhy53G8wumduGVyVHGXyV4HpXGwje20j3HDbw4s8zw1c0diXuh_lx-QoT7LjOXCD-46xg292-SvZojmpAp2qDF9xX_1a7UcPnOu6DEvaro"

function WeddingEvents() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: weddingHeroImg,
            label: "THE CULTURAL PASSPORT",
            title: "Tickets to Heritage",
            description: "Elevate beyond the journey. Secure your exclusive admission to India’s most prestigious cultural weddings and exhibitions.",
            buttons: [
                { text: "BECOME THE HOST", class: "btn-glass-outline" },
                { text: "EXPLORE DESTINATIONS", class: "btn-satin-gold" }
            ],
            alt: "Bridal Heritage Group",
            objectFit: 'cover',
            objectPosition: 'top center'
        },
        {
            image: clearHeroImg,
            label: "AN ANCESTRAL INVITATION",
            title: "Open Your Celebration",
            titleAccent: "to the World",
            description: "Are you hosting a celebration of historic proportions? Share your legacy with a global circle of cultural enthusiasts.",
            buttons: [
                { text: "SUBMIT INTEREST", class: "btn-satin-gold" }
            ],
            alt: "Mandala Heritage Pattern",
            objectFit: 'contain',
            objectPosition: 'center center',
            isSpecial: true
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="wedding-page-v2">

            {/* ===== HERO SECTION ===== */}
            <section className="heritage-hero">
                <div className="slides-container">
                    {slides.map((slide, index) => (
                        <div key={index} className={`hero-slide ${index === currentSlide ? 'active' : ''}`}>
                            <div className="heritage-hero-overlay"></div>
                            <img 
                                src={slide.image} 
                                alt={slide.alt} 
                                className="heritage-hero-img" 
                                style={{ 
                                    objectFit: slide.objectFit || 'cover',
                                    objectPosition: slide.objectPosition || 'center center'
                                }}
                            />
                            <div className={`heritage-hero-content ${slide.isSpecial ? 'special-hero-content' : ''}`}>
                                <span className="heritage-hero-label manrope-caps">{slide.label}</span>
                                <h1 className="serif-tight heritage-hero-title">
                                    {slide.title}
                                    {slide.titleAccent && (
                                        <span className="hero-title-accent">{slide.titleAccent}</span>
                                    )}
                                </h1>
                                <p className="heritage-hero-desc">{slide.description}</p>
                                <div className="hero-buttons">
                                    {slide.buttons.map((btn, btnIdx) => (
                                        <button key={btnIdx} className={`${btn.class} rounded-full manrope-caps`}>
                                            {btn.text}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== INVITATIONS GRID (BENTO) ===== */}
            <section className="invitations-section">
                <div className="invitations-container">
                    <div className="invitations-header">
                        <div>
                            <h2 className="serif-tight section-heading-v2" style={{ fontWeight: 700 }}>Upcoming Exclusive Invitations</h2>
                            <span className="section-label-v2" style={{ fontSize: '0.8rem', opacity: 0.7 }}>Curated access to sacred unions in historic destinations.</span>
                        </div>
                        <div className="invitations-header-right">
                            <span className="featured-access-tag manrope-caps">Featured Access</span>
                        </div>
                    </div>

                    <div className="bento-grid">
                        {/* Ticket Card 1 */}
                        <div className="bento-card bento-card-1 rounded-full group">
                            <img src={udaipurImg} alt="Udaipur Wedding" className="bento-card-img" />
                            <div className="bento-card-content">
                                <div className="flex justify-between items-start" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                    <span className="card-tag manrope-caps" style={{ background: 'rgba(233, 195, 73, 0.2)', backdropFilter: 'blur(12px)' }}>Sacred Circle</span>
                                    <span className="manrope-caps" style={{ fontSize: '0.65rem', color: 'var(--on-surface)' }}>Nov 2024</span>
                                </div>
                                <div style={{ width: '100%' }}>
                                    <h3 className="serif-tight" style={{ fontSize: '1.5rem' }}>The Royal Oasis Union</h3>
                                    <p style={{ maxWidth: '350px', fontSize: '0.85rem' }}>Admission to a three-day celebration at the City Palace, Udaipur. Limited to 12 guest invitations.</p>
                                    <button className="btn-text-icon manrope-caps" style={{ fontSize: '0.7rem' }}>
                                        Request Ticket <span className="material-symbols-outlined">arrow_right_alt</span>
                                    </button>
                                </div>
                            </div>
                            <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '4px', background: 'var(--primary)' }}></div>
                        </div>

                        {/* Ticket Card 2 */}
                        <div className="bento-card bento-card-2 rounded-full group">
                            <div className="card-img-top">
                                <img src={jaipurImg} alt="Jaipur Wedding" />
                            </div>
                            <div className="bento-card-content">
                                <div>
                                    <span className="manrope-caps" style={{ color: 'var(--primary)', fontSize: '0.6rem', marginBottom: '0.3rem', display: 'block' }}>Ancestral Estate</span>
                                    <h3 className="serif-tight" style={{ fontSize: '1.1rem' }}>The Amber Fort Gala</h3>
                                    <p style={{ fontSize: '0.75rem' }}>A night of sacred music and culinary legacy in the heart of Jaipur.</p>
                                </div>
                                <button className="btn-card-outline manrope-caps" style={{ fontSize: '0.6rem' }}>
                                    View Experience
                                </button>
                            </div>
                        </div>

                        {/* Ticket Card 3 */}
                        <div className="bento-card bento-card-3 rounded-full group">
                            <div className="bento-card-content">
                                <div>
                                    <span className="manrope-caps" style={{ color: 'var(--primary)', fontSize: '0.6rem', marginBottom: '0.3rem', display: 'block' }}>Ancestral Estate</span>
                                    <h3 className="serif-tight" style={{ fontSize: '1.1rem' }}>The Jodhpur Sunsets</h3>
                                    <p style={{ fontSize: '0.75rem' }}>Exclusive admission to pre-wedding rituals at Umaid Bhawan.</p>
                                </div>
                                <div>
                                    <p className="serif-tight date-large" style={{ fontSize: '1.1rem' }}>Dec 2024</p>
                                    <button className="btn-text-icon manrope-caps" style={{ fontSize: '0.6rem' }}>
                                        Apply Now <span className="material-symbols-outlined" style={{ fontSize: '0.9rem' }}>open_in_new</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Ticket Card 4 */}
                        <div className="bento-card bento-card-4 rounded-full group">
                            <img src={kolkataImg} alt="Kolkata Heritage" className="bento-card-img" style={{ opacity: 0.3 }} />
                            <div className="bento-card-content" style={{ justifyContent: 'center', maxWidth: '500px' }}>
                                <h3 className="serif-tight" style={{ fontSize: '1.5rem' }}>The Zamindar Inheritance</h3>
                                <p style={{ fontSize: '0.85rem' }}>Witness a traditional Bengali wedding in a 200-year-old restored mansion. An immersive cultural invitation into the soul of Bengal.</p>
                                <div className="card-tags-row">
                                    <span className="mini-tag manrope-caps" style={{ fontSize: '0.6rem' }}>Tradition</span>
                                    <span className="mini-tag manrope-caps" style={{ fontSize: '0.6rem' }}>Cuisine</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== THE SACRED STANDARDS ===== */}
            <section className="standards-section">
                <div className="standards-container">
                    <div className="standards-visual">
                        <div className="circle-img-frame rounded-full">
                            <img src={guestImg} alt="Luxury Guest" className="rounded-full" />
                        </div>
                        <div className="standards-quote-card glass-panel rounded-full shadow-2xl">
                            <p className="serif-tight italic" style={{ color: 'var(--primary)', fontSize: '0.85rem' }}>
                                "To be a guest is to be a custodian of the sacred for a moment in time."
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="serif-tight" style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '2rem' }}>The Sacred Standards</h2>
                        <div className="standards-list" style={{ gap: '2.5rem' }}>
                            <div className="standards-item">
                                <div className="standards-icon-box" style={{ background: 'rgba(233,195,73,0.1)', border: '1px solid rgba(233,195,73,0.3)', width: '2.5rem', height: '2.5rem' }}>
                                    <span className="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>verified</span>
                                </div>
                                <div className="standards-text">
                                    <h4 className="manrope-caps" style={{ fontSize: '0.7rem', fontWeight: 700 }}>The Honor Covenant</h4>
                                    <p style={{ fontSize: '0.75rem', lineHeight: 1.6 }}>Admission is granted through a mutual accord of respect. Each guest is meticulously vetted to uphold the spiritual and familial integrity of the ancestral union.</p>
                                </div>
                            </div>

                            <div className="standards-item">
                                <div className="standards-icon-box" style={{ background: 'rgba(233,195,73,0.1)', border: '1px solid rgba(233,195,73,0.3)' }}>
                                    <span className="material-symbols-outlined">checkroom</span>
                                </div>
                                <div className="standards-text">
                                    <h4 className="manrope-caps" style={{ fontSize: '0.85rem', fontWeight: 700 }}>Sartorial Allegiance</h4>
                                    <p style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>Respecting tradition through dress is a cornerstone of our Accord. We provide curated access to master couturiers to ensure your attire honors the lineage of your hosts.</p>
                                </div>
                            </div>

                            <div className="standards-item">
                                <div className="standards-icon-box" style={{ background: 'rgba(233,195,73,0.1)', border: '1px solid rgba(233,195,73,0.3)' }}>
                                    <span className="material-symbols-outlined">auto_stories</span>
                                </div>
                                <div className="standards-text">
                                    <h4 className="manrope-caps" style={{ fontSize: '0.85rem', fontWeight: 700 }}>Cultural Stewardship</h4>
                                    <p style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>Our Standards require an immersion into the 'Sacred Briefing'—a guide to the nuances of ritual, silent etiquette, and the storied legacy of the family you join.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== INVITE THE WORLD ===== */}
            <section className="invite-cta-section">
                <div className="glow-bg"></div>
                <div className="invite-cta-content">
                    <div className="accent-line"></div>
                    <h2 className="serif-tight">Invite the World</h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto 3.5rem' }}>
                        Are you hosting a celebration of historic proportions?
                        Allow BSA Tribe to curate your guest list from a global circle of ancestral enthusiasts.
                        Share your legacy with the world.
                    </p>
                    <button className="btn-outline-large manrope-caps">Become a Host</button>
                </div>
            </section>

            {/* ===== BOTTOM NAV BAR (MOBILE) ===== */}
            <nav className="mobile-bottom-nav md-hidden">
                <a href="#" className="mobile-nav-item active">
                    <span className="material-symbols-outlined">confirmation_number</span>
                    <span className="manrope-caps" style={{ fontSize: '10px' }}>Tickets</span>
                </a>
                <a href="#" className="mobile-nav-item">
                    <span className="material-symbols-outlined">castle</span>
                    <span className="manrope-caps" style={{ fontSize: '10px' }}>Legacy</span>
                </a>
                <a href="#" className="mobile-nav-item">
                    <span className="material-symbols-outlined">support_agent</span>
                    <span className="manrope-caps" style={{ fontSize: '10px' }}>Concierge</span>
                </a>
            </nav>

        </div>
    )
}

export default WeddingEvents

import React from 'react';
import './HeroGlowSection.scss';
import img1 from '../../../assets/SALON/hero/HeroGlowSection/img1.png'
import img2 from '../../../assets/SALON/hero/HeroGlowSection/img2.png'
import img3 from '../../../assets/SALON/hero/HeroGlowSection/img3.png'
import img4 from '../../../assets/SALON/hero/HeroGlowSection/img4.png'
import { ArrowRight } from 'lucide-react';

export default function HeroGlowSection() {
    return (
        <section className="hero-glow-section">
            <div className="image image-top-left">
                <img src={img1} alt="Lips" />
            </div>
            <div className="image image-bottom-left">
                <img src={img2} alt="Mask Face" />
            </div>
            <div className="image image-top-right">
                <img src={img3} alt="Model" />
            </div>
            <div className="image image-bottom-right">
                <img src={img4} alt="Facial Mask" />
            </div>

            <div className="trusted-badge">
                <div className="avatars">
                    <img className='img1' src={img3} alt="client" />
                    <img  className='img2' src={img2} alt="client" />
                    <img  className='img2' src={img4} alt="client" />
                </div>
                <span>Trusted by 15000+ clients</span>
            </div>

            <h1 className="hero-title">
                It’s Time To Put You <span>First</span>
            </h1>
            <p className="hero-subtext">
                From flawless skin to fabulous hair—step into OBW and walk out glowing. Book your personalized appointment today and feel the difference.
            </p>

            <div className="hero-buttons">
                <button className="btn-primary btn">
                    <span>
                        Book Appointment  <ArrowRight className="arrow-icon" size={20} strokeWidth={2} />
                    </span>
                </button>
                <a className="btn-link">
                    Learn More <span>→</span>
                </a>
            </div>
        </section>
    );
}
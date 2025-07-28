import React from 'react';
import './SalonAboutHero.scss';
// Make sure this image path is correct for your project
import heroImage from '../../../../assets/SALON/hero/About/heroImg.webp';

const SalonAboutHero = () => {
    return (
        <section 
            className="salon-about-hero" 
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <div className="salon-about-hero__overlay"></div>
            <div className="salon-about-hero__content">
                <h1>Our Story: Dedicated to Helping You Look and Feel Great</h1>
                <p>Your Journey to Glowing Skin and Good Health, With Us by Your Side</p>
            </div>
        </section>
    );
};

export default SalonAboutHero;
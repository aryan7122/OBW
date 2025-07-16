import React from 'react';
import './SalonAboutHero.scss';
// Make sure this image path is correct for your project
import heroImage from '../../../../assets/SALON/hero/About/heroImg.jpg';

const SalonAboutHero = () => {
    return (
        <section 
            className="salon-about-hero" 
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <div className="salon-about-hero__overlay"></div>
            <div className="salon-about-hero__content">
                <h1>Our Journey: Commitment to Beauty and Well-being</h1>
                <p>A Path to Radiance: Embracing Beauty and Wellness Together</p>
            </div>
        </section>
    );
};

export default SalonAboutHero;
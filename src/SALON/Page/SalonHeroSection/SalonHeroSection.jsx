// File: SalonHeroSection.jsx
import React from 'react';
import './SalonHeroSection.scss';
import heroImage from '../../../assets/SALON/hero/hero-image.jpg';
import profile1 from '../../../assets/SALON/hero/profile1.png';
import profile2 from '../../../assets/SALON/hero/profile2.png';
import profile3 from '../../../assets/SALON/hero/profile3.png';
import str from '../../../assets/SALON/hero/str.png';
import heroImageMobile from '../../../assets/SALON/hero/hero-image-mobile.png';

const featureItems = [
    'Calm & Hygienic',
    'Soothing',
    'Top Grooming',
    'Stylish haircuts',
    'Good Policies',
    'Classic salons'
];

const SalonHeroSection = () => {
    return (
        <section className="salon-hero"
          style={{
    backgroundImage: `url(${window.innerWidth <= 600 ? heroImageMobile : heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
        >
           
            {/* <div className="overlay-blur"> */}
            <div className="hero-content overlay-blur">
                 <div>
                       <div className="trust-card">
                        <div className="profiles">
                            <img src={profile1} alt="Client 1" />
                            <img src={profile2} alt="Client 2" />
                            <img src={profile3} alt="Client 3" />
                        </div>
                        <span>Trusted by 15000+ clients</span>
                    </div>

                    <h1>
                        Tailored Self-Care That Honors You, Every Single Moment
                    </h1>
                 </div>

                    <div className="subline">
                       <p> At OBW salon, we combine luxury and personalized
                        skincare to enhance your beauty.</p>
                    </div>
                </div>
            {/* </div> */}

            <div className="scrolling-features">
                <div className="feature-strip">
                    {featureItems.concat(featureItems).map((item, index) => (
                        <div key={index} className="feature-item">
                            <span><img src={str} alt="" /></span> {item}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SalonHeroSection;

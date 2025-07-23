// File: AboutUsSection.jsx
import React from 'react';
import './AboutUsSection.scss';
import faceCareImg from '../../../assets/SALON/hero/faceCareImg.webp';
import productImg from '../../../assets/SALON/hero/productImg.webp';
import str from '../../../assets/SALON/hero/str.png';
import str3 from '../../../assets/SALON/hero/str3.png';

const AboutUsSection = () => {
    return (
        <section className="about-us-section">
            <div className="about-us-container">
                <div className="about-us-left">
                    <div className="about-us-face-img">
                        <img src={faceCareImg} alt="Facial Treatment" />
                    </div>
                    <img src={str3} className='str3' />
                    <div className="about-us-product-img">
                        <img src={productImg} alt="Products" />
                    </div>
                </div>

                <div className="about-us-right">
                    <h4 className="about-us-subhead">
                        ABOUT US <span className="about-us-spark"><img src={str} /></span>
                    </h4>
                    <h2 className="about-us-headline">
                        We Care About How You Look and Feel
                    </h2>
                    <p className="about-us-description">
                        At OBW, we believe beauty is not just about your looks, it’s about how you feel inside. Our team is here to help you feel confident and refreshed with every visit. Whether it’s a new hairstyle, glowing skin, or a relaxing session, we make sure every service is done with care and comfort. Located in Bangalore, OBW has become a trusted place for people who want quality beauty care in a friendly, stylish space.
                    </p>
                    <button className="about-us-cta-btn btn2">
                        <span>
                            LEARN MORE
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;

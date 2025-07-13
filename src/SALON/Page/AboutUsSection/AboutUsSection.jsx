// File: AboutUsSection.jsx
import React from 'react';
import './AboutUsSection.scss';
import faceCareImg from '../../../assets/SALON/hero/faceCareImg.png';
import productImg from '../../../assets/SALON/hero/productImg.png';
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
                        We Provide Special Care For Your<br />
                        Appearance And Beauty
                    </h2>
                    <p className="about-us-description">
                        At OBW, we believe beauty isn’t just about how you look — it’s how you feel. With a passion for transformation and precision, OBW has grown into a trusted destination for salon and clinical beauty services in Bangalore. Whether you want to refresh your style or rejuvenate your skin, we’re here to bring out the best in you.
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

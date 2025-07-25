// File: SalonHeroSection.jsx
import React, { useState } from 'react';
import './SalonHeroSection.scss';
import heroImage from '../../../assets/SALON/hero/hero-image-mobile.webp';
import profile1 from '../../../assets/SALON/hero/profile1.png';
import profile2 from '../../../assets/SALON/hero/profile2.png';
import profile3 from '../../../assets/SALON/hero/profile3.png';
import str from '../../../assets/SALON/hero/str.png';
import heroImageMobile from '../../../assets/SALON/hero/hero-image-mobile.webp';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { MoveRight } from 'lucide-react';
import SalonBookAppointment from '../../Components/SalonBookAppointment/SalonBookAppointment';

const featureItems = [
    'Calm & Hygienic',
    'Soothing',
    'Top Grooming',
    'Stylish haircuts',
    'Good Policies',
    'Classic salons'
];

const SalonHeroSection = () => {
    
 const [showModal, setShowModal] = useState(false);
    const handleBookNowClick = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };
    return (
        <section className="salon-hero"
            style={{
                backgroundImage: `url(${window.innerWidth <= 600 ? heroImageMobile : heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
                    {showModal && <SalonBookAppointment onClose={closeModal} />}

            {/* <div className="overlay-blur"> */}
            <div className="hero-content-2 overlay-blur">
                <div>
                    <div className="trust-card">
                        {/* <div className="profiles">
                            <img src={profile1} alt="Client 1" />
                            <img src={profile2} alt="Client 2" />
                            <img src={profile3} alt="Client 3" />
                        </div> */}
                        <span>Trusted by 15000+ clients</span>
                    </div>

                    <h1>
                        Where Every Service is a <span> Signature Experience  </span>
                    </h1>
                </div>

                <div className="subline">
                    <div className="buttons">
                        <div className="social_media_icon">
                            <a href="https://www.facebook.com/oceanbluewellness" target="_blank" rel="noopener noreferrer">
                                <FaFacebook  size={20}/>
                            </a>
                            <a href="https://www.instagram.com/obwsalon?igsh=MXRnZ3FraGtiaTBhbg==" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={20} />
                            </a>
                            {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <FaXTwitter />
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    <FaLinkedin />
  </a> */}
                            <a href="https://www.youtube.com/@ObwSalon" target="_blank" rel="noopener noreferrer">
                                <FaYoutube size={20} />
                            </a>
                        </div>
                        <button className="appointment-button-2 btn2" onClick={handleBookNowClick} >
                            <span>
                                Book Appointment Now <MoveRight className="arrow-icon" size={16} strokeWidth={1.9} />
                            </span>
                        </button>
                       
                    </div>
                </div>
            </div>
            {/* </div> */}

            {/* <div className="scrolling-features">
                <div className="feature-strip">
                    {featureItems.concat(featureItems).map((item, index) => (
                        <div key={index} className="feature-item">
                            <span><img src={str} alt="" /></span> {item}
                        </div>
                    ))}
                </div>
            </div> */}
        </section>
    );
};

export default SalonHeroSection;

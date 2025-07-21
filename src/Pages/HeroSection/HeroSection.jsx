import React, { useState } from "react";
import "./HeroSection.scss";
import { ArrowRight, CirclePlay, Facebook, Instagram } from "lucide-react";
import BookAppointment from "../../Components/BookAppointment/BookAppointment";
import { motion } from 'framer-motion';
import img1 from '../../assets/firststep/hero2.jpg'
import InfinityScrollGallery from "./InfinityScrollGallery/InfinityScrollGallery";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// const img1="https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/HeroSection/rzj46jkcwd2ib9kxzvtt"

const HeroSection = () => {
    const [showModal, setShowModal] = useState(false);
    const handleBookNowClick = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="hero-section">
                <div className="hero_bg">
                    <div className="content">
                        <div className="social_media_icon">
                            <a href="https://www.facebook.com/share/1CpRx6vUJB/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
                                <FaFacebook />
                            </a>
                            <a href="https://www.instagram.com/obwclinic" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                            {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <FaXTwitter />
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    <FaLinkedin />
  </a> */}
                            <a href="https://www.youtube.com/@ObwSalon" target="_blank" rel="noopener noreferrer">
                                <FaYoutube />
                            </a>
                        </div>

                        <motion.h1
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >Experience true elegance & indulge in  <span>sophistication</span></motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            At OBW, we blend luxury and personalized skincare to rejuvenate your beauty. Discover the artistry of our expert team dedicated to your unique needs.
                        </motion.p>
                        <motion.div className="buttons"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <button className="appointment-button btn2" onClick={handleBookNowClick} >
                                <span>
                                    Book Appointment Now <ArrowRight className="arrow-icon" size={20} strokeWidth={2} />
                                </span>
                            </button>
                            {/* <button className="secondary-btn  btn">
                                <span>
                                    <CirclePlay size={22} color="" strokeWidth={2} absoluteStrokeWidth />
                                    See How It Works
                                </span>
                            </button> */}
                        </motion.div>
                    </div>
                    <div className="hero-image"
                    // initial={{ opacity: 0, scale: 0.8 }}
                    // whileInView={{ opacity: 1, scale: 1 }}
                    // transition={{ duration: 0.6 }}
                    // viewport={{ once: true, amount: 0.1 }}
                    >
                        {/* <img

                            src={img1}
                            alt="Hero Girl"
                        /> */}
                        <InfinityScrollGallery />
                    </div>
                </div>
            </div>
            {showModal && <BookAppointment onClose={closeModal} />}
        </>
    );
};

export default HeroSection;

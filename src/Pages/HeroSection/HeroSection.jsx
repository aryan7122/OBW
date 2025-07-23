import React, { useState } from "react";
import "./HeroSection.scss";
import { ArrowRight, CirclePlay, Facebook, Instagram, MoveRight } from "lucide-react";
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


                        <div className="content_box_s">
                            <h2 className="h2_tag">
                                Top specialist for clinical treatments across banglore!
                            </h2>
                            <motion.h1
                                initial={{ opacity: 0, y: -30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true, amount: 0.5 }}
                            >Transforming Skin. Restoring Confidence.</motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                Personalized Treatments Backed by Clinical Expertise

                            </motion.p>
                        </div>
                        <motion.div className="buttons"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
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
                            <button className="appointment-button btn2" onClick={handleBookNowClick} >
                                <span>
                                    Book Appointment Now <MoveRight className="arrow-icon" size={16} strokeWidth={1.9} />

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

                </div>
            </div>
            {showModal && <BookAppointment onClose={closeModal} />}
        </>
    );
};

export default HeroSection;

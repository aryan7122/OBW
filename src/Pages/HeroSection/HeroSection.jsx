import React, { useState } from "react";
import "./HeroSection.scss";
import { ArrowRight, CirclePlay } from "lucide-react";
import BookAppointment from "../../Components/BookAppointment/BookAppointment";
import { motion } from 'framer-motion';
import img1 from '../../assets/firststep/hero2.jpg'

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
                        <motion.h1
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >Discover the Art of Timeless <span>Beauty</span> & <span>Wellness</span>. </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            Rejuvenate your skin, restore your glow, and redefine confidence with expert care at OBW. Experience personalized treatments designed to bring out your best self. 
                        </motion.p>
                        <motion.div className="buttons"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <button className="appointment-button" onClick={handleBookNowClick} >
                                Book Appointment Now <ArrowRight className="arrow-icon" size={20} strokeWidth={3} />
                            </button>
                            {/* <button className="secondary-btn">
                            <CirclePlay size={32} color="#00CFDE" strokeWidth={3} absoluteStrokeWidth />
                            See How It Works
                        </button> */}
                        </motion.div>
                    </div>
                    <motion.div className="hero-image"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <motion.img
                            initial={{ opacity: 0, x: 150 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, amount: 0.5 }}
                            src={img1}
                            alt="Hero Girl"
                        />
                    </motion.div>
                </div>
            </div>
            {showModal && <BookAppointment onClose={closeModal} />}
        </>
    );
};

export default HeroSection;

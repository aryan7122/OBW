import React, { useState } from "react";
import "./HeroSection.scss";
import { ArrowRight, CirclePlay } from "lucide-react";
import BookAppointment from "../../Components/BookAppointment/BookAppointment";
import { motion } from 'framer-motion';

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
                        >Experience true elegance and indulge in sophistication.</motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            At OBW, we blend luxury and personalized skincare to rejuvenate your
                            beauty. Discover the artistry of our expert team dedicated to your
                            unique needs.
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
                            src="https://s3-alpha-sig.figma.com/img/4c33/aa75/c0fb940b95018e5564b4964375268ada?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AcQYKKHdTKu~L54imqEOTsyL1h7QgZ~9hxKcYe9q8Y8jItwm4-pT4IKViAxZM~WDVJ5zjCRU68uG6UpM-IqDSl8U3yAiSWrpHhX~cjrQ~9bOOU958XMctQNgu2dDVHHKAqLYwSGUFBr~pVUEcAspc2O6Ns7AwV1X4XxBJg8ImBh2qikGVAYz2HwBxuSSunkdmc7uGF1YzoU25pxmKyIgb79adYgvyuoo-bltLOsiYrnajMhzWROgLk9PnkXBslu1FWk5HA~xV7v2BZitWfQzyqSx-xXpDu5j6Llfac3wPGWvL2qZsCwUO-hBzKDgsioQCzNSAkvWblxvhSd-SYEzLA__"
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

import React, { useState } from "react";
import "./TrendingTreatments.scss";
import img1 from '../../assets/TrendingTreatments/Exosome Therapy for Skin & Scalp-min.jpg'
import img2 from '../../assets/TrendingTreatments/Anti-DHT Mesotherapy-min.jpg'
import img3 from '../../assets/TrendingTreatments/Medi-Facials-min.jpg'
import img4 from '../../assets/TrendingTreatments/Skin Boosters-min.jpg'
import img5 from '../../assets/TrendingTreatments/Lipolytic Injections-min.jpg'
import img6 from '../../assets/TrendingTreatments/IV Therapy for Skin, Hair & Body Care-min.jpg'
import img7 from '../../assets/TrendingTreatments/Botulinum Toxin Injections-min.jpg'
import img8 from '../../assets/TrendingTreatments/Hair Transplantation-min.jpg'
import { ArrowRight, ChevronRight } from "lucide-react";
import BookAppointment from "../../Components/BookAppointment/BookAppointment";
import { useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const treatments = [
    {
        title: "Exosome Therapy for Skin & Scalp ",
        description: "Revitalize your skin and scalp with cutting-edge exosome therapy, promoting collagen production, hair regrowth, and a youthful glow.",
        image: img1,
    },
    {
        title: "Anti-DHT Mesotherapy  ",
        description: "Combat hair thinning with targeted anti-DHT mesotherapy, nourishing hair follicles and reducing hair loss for fuller, healthier hair.",
        image: img2,
    },
    {
        title: "Medi-Facials ",
        description: "Experience advanced Medi-facials tailored to your skin’s needs, combining medical-grade ingredients for instant radiance and skin health.   ",
        image: img3,
    },
    {
        title: "Skin Boosters  ",
        description: "Deeply hydrate and rejuvenate your skin with our premium skin boosters, enhancing elasticity, glow, and long-lasting hydration.   ",
        image: img4,
    },
    {
        title: "Lipolytic Injections   ",
        description: "Melt stubborn fat with our non-surgical lipolytic injections, sculpting and contouring problem areas for a slimmer, more defined look.   ",
        image: img5,
    },
    {
        title: "IV Therapy for Skin, Hair & Body Care  ",
        description: "Boost your beauty from within with IV therapy, delivering essential vitamins and antioxidants for radiant skin, strong hair, and overall wellness.   ",
        image: img6
    },
    {
        title: "Botulinum Toxin Injections ",
        description: "Smooth fine lines and wrinkles with botulinum toxin injections, giving you a refreshed, youthful, and natural-looking appearance.   ",
        image: img7
    },
    {
        title: " Hair Transplantation ",
        description: " Restore your confidence with advanced hair transplantation, offering natural-looking, long-lasting results for fuller, thicker hair.    ",
        image: img8
    },
    // {
    //     title: " Scar Revision or Reduction Treatments ",
    //     description: " Minimize scars and reveal smoother skin with our expert scar revision treatments, using cutting-edge techniques for visible improvement.    ",
    //     image: img4,
    // },
    // {
    //     title: " Laser Resurfacing Treatments ",
    //     description: " Renew your skin with laser resurfacing, reducing wrinkles, pigmentation, and acne scars for a flawless, youthful complexion.  ",
    //     image: img4,
    // },
];

const TrendingTreatments = () => {
    const [showModal, setShowModal] = useState(false);
    const handleBookNowClick = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };
    const navigate = useNavigate();
    // const HandleNavigation = (path) => {
    //     navigate(path);
    //     window.scrollTo(0, 0);
    // };
    return (
        <div className="trending-treatments">
            <div className="title-sbt">TRENDING</div>
            <header className="heading-section">
                <h1 className="trending-title">
                    Trending <motion.span className="heart"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true, amount: 0.2 }}>&#x2764;</motion.span> Treatments
                </h1>
                <p className="description">
                    Explore the latest treatments reshaping healthcare, from innovative therapies for chronic pain to advanced skincare solutions. Discover options like regenerative medicine that taps into the body's healing abilities and personalized nutrition plans tailored to your health needs. Stay informed with treatments that prioritize results and patient comfort.
                </p>
            </header>

            <div className="cards-container">
                {treatments.map((treatment, index) => (
                    <motion.div
                        key={index}
                        className="card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { delay: index * 0.2, duration: 0.6, ease: "easeOut" }
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="card-image">
                            <img src={treatment.image} alt={treatment.title} className="" />
                        </div>
                        <h3 className="card-title">{treatment.title}</h3>
                        <p className="card-description">{treatment.description}</p>
                    </motion.div>
                ))}
            </div>;

            <footer className="footer-section">
                <button className="Book-Now" onClick={handleBookNowClick} >Book Now  <ArrowRight className="arrow-icon" size={20} strokeWidth={3} /></button>
                <div className="next-btn"><a href="/treatment">Next</a> <ChevronRight color="#5B2F2F" /> </div>
            </footer>
            {showModal && <BookAppointment onClose={closeModal} />}

        </div>
    );
};

export default TrendingTreatments;

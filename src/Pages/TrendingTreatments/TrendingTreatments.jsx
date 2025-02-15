import React, { useState } from "react";
import "./TrendingTreatments.scss";
import img1 from '../../assets/TrendingTreatments/img1.jpeg'
import img2 from '../../assets/TrendingTreatments/img2.jpeg'
import img3 from '../../assets/TrendingTreatments/img3.jpeg'
import img4 from '../../assets/TrendingTreatments/img4.jpeg'
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
        image: 'https://img.freepik.com/free-photo/beautiful-female-wearing-pink-gloves-showing-filled-syringe-camera-close-up-portrait_7502-10384.jpg?t=st=1739625819~exp=1739629419~hmac=0e8b35515accb356d9ab1110389269b1f32965a3b8add78a8b3a30b255de5564&w=360',
    },
    {
        title: "IV Therapy for Skin, Hair & Body Care  ",
        description: "Boost your beauty from within with IV therapy, delivering essential vitamins and antioxidants for radiant skin, strong hair, and overall wellness.   ",
        image: 'https://img.freepik.com/free-photo/women-discussing-spa-treatment_23-2149871834.jpg?t=st=1739625859~exp=1739629459~hmac=d78fc2adf8d84fc5d25bed6627beb3f484c357a9d3a4e86a632830608e9eede7&w=360',
    },
    {
        title: "Botulinum Toxin Injections ",
        description: "Smooth fine lines and wrinkles with botulinum toxin injections, giving you a refreshed, youthful, and natural-looking appearance.   ",
        image: 'https://img.freepik.com/free-photo/young-woman-getting-prp-therapy_23-2149341404.jpg?t=st=1739625892~exp=1739629492~hmac=44cded4e9cd09de4d092a53456c88ceba4a73af54e3fbc1bc779bd79e159e901&w=360',
    },
    {
        title: " Hair Transplantation ",
        description: " Restore your confidence with advanced hair transplantation, offering natural-looking, long-lasting results for fuller, thicker hair.    ",
        image: 'https://img.freepik.com/free-photo/man-getting-prp-injection-alopecia_23-2149341451.jpg?t=st=1739625927~exp=1739629527~hmac=c225661cfce7e9b53d942b39af29f5563b758f6b7818acc9d52c2c2717f72fb2&w=360',
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
                <div className="next-btn"><a href="">Next</a> <ChevronRight color="#5B2F2F" /> </div>
            </footer>
            {showModal && <BookAppointment onClose={closeModal} />}

        </div>
    );
};

export default TrendingTreatments;

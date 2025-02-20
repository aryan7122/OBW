import React, { useState, useEffect, useRef } from "react";
import "./TrendingTreatments.scss";
import img1 from '../../assets/TrendingTreatments/Exosome Therapy for Skin & Scalp-min.jpg'
import img2 from '../../assets/TrendingTreatments/Anti-DHT Mesotherapy-min.jpg'
import img3 from '../../assets/TrendingTreatments/Medi-Facials-min.jpg'
import img4 from '../../assets/TrendingTreatments/Skin Boosters-min.jpg'
import img5 from '../../assets/TrendingTreatments/Lipolytic Injections-min.jpg'
import img6 from '../../assets/TrendingTreatments/IV Therapy for Skin, Hair & Body Care-min.jpg'
import img7 from '../../assets/TrendingTreatments/Botulinum Toxin Injections-min.jpg'
import img8 from '../../assets/TrendingTreatments/Hair Transplantation-min.jpg'
import img9 from '../../assets/TrendingTreatments/Scar Revision or Reduction Treatments-min.jpg'
import img10 from '../../assets/TrendingTreatments/Laser Resurfacing Treatments-min.jpg'
import img11 from '../../assets/TrendingTreatments/HIFU (High-Intensity Focused Ultrasound)-min.jpg'
import img12 from '../../assets/TrendingTreatments/PMU (Permanent Makeup)-min.jpg'
import { ArrowRight, ChevronRight } from "lucide-react";
import BookAppointment from "../../Components/BookAppointment/BookAppointment";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import placeholderImg from '../../assets/TrendingTreatments/LazyLoadImage.png'
import WebPImage from "../../util/WebPImage";

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
    {
        title: " Scar Revision or Reduction Treatments ",
        description: " Minimize scars and reveal smoother skin with our expert scar revision treatments, using cutting-edge techniques for visible improvement.    ",
        image: img9,
    },
    {
        title: " Laser Resurfacing Treatments ",
        description: " Renew your skin with laser resurfacing, reducing wrinkles, pigmentation, and acne scars for a flawless, youthful complexion.  ",
        image: img10,
    },
    {
        title: " HIFU (High-Intensity Focused Ultrasound) ",
        description: "A non-invasive skin tightening treatment that stimulates collagen production for a firmer, more youthful appearance—without surgery or downtime.   ",
        image: img11,
    },
    {
        title: "PMU (Permanent Makeup)",
        description: "Enhance your natural beauty with long-lasting, semi-permanent cosmetic tattooing for brows, lips, and eyeliner, designed for effortless perfection every day.",
        image: img12,
    },
];

const TrendingTreatments = () => {
    const [showModal, setShowModal] = useState(false);
    const [visibleCount, setVisibleCount] = useState(8); // Initially 8 cards
    const [itemsPerLoad, setItemsPerLoad] = useState(8);
    const [initialCount, setInitialCount] = useState(8);
    const buttonRef = useRef(null);
    useEffect(() => {
        const updateItemsPerLoad = () => {
            if (window.innerWidth < 568) {
                setVisibleCount(4); // Mobile pe 4 dikhao
                setItemsPerLoad(4);
                setInitialCount(4);
            } else {
                setVisibleCount(8); // Desktop pe 8 dikhao
                setItemsPerLoad(8);
                setInitialCount(8);
            }
        };

        updateItemsPerLoad();
        window.addEventListener("resize", updateItemsPerLoad);
        return () => window.removeEventListener("resize", updateItemsPerLoad);
    }, []);

    const handleLoadMore = () => {
        setVisibleCount((prevCount) => prevCount + itemsPerLoad);
    };
    const handleLoadLess = () => {
        setVisibleCount(initialCount);
        setTimeout(() => {
            buttonRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
    };
    return (
        <div className="trending-treatments">
            <div className="title-sbt">TRENDING</div>
            <header className="heading-section">
                <h1 className="trending-title">Trending <span className="heart">&#x2764;</span> Treatments</h1>
                <p className="description">
                    Explore the latest treatments reshaping healthcare, from innovative therapies for chronic pain to advanced skincare solutions. Discover options like regenerative medicine that taps into the body's healing abilities and personalized nutrition plans tailored to your health needs. Stay informed with treatments that prioritize results and patient comfort.

                </p>
            </header>

            <div className="cards-container">
                {treatments.slice(0, visibleCount).map((treatment, index) => (
                    <div key={index} className="card">
                        <div className="card-image">
                            <WebPImage
                                effect="blur"
                                placeholderSrc={placeholderImg}
                                src={treatment.image}
                                alt={treatment.title}
                            />
                        </div>
                        <h3 className="card-title">{treatment.title}</h3>
                        <p className="card-description">{treatment.description}</p>
                    </div>
                ))}
            </div>

            <button ref={buttonRef} className="LoadMoreTreatments" onClick={visibleCount < treatments.length ? handleLoadMore : handleLoadLess}>
                {visibleCount < treatments.length ? "Load More" : "Load Less"}
                <ArrowRight className="arrow-icon" size={20} strokeWidth={3} />
            </button>



            <footer className="footer-section" >
                <button className="Book-Now" onClick={() => setShowModal(true)}>Book Now <ArrowRight className="arrow-icon" size={20} strokeWidth={3} /></button>
                <div className="next-btn"><a href="/treatment">Next</a> <ChevronRight color="#5B2F2F" /> </div>
            </footer>

            {showModal && <BookAppointment onClose={() => setShowModal(false)} />}
        </div>
    );
};

export default TrendingTreatments;

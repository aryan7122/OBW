import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
// import 'react-lazy-load-image-component/src/effects/blur.css';
import BookAppointment from "../../Components/BookAppointment/BookAppointment";
import "./TrendingTreatments.scss";
import WebPImage from "../../util/WebPImage";
// import { image } from "motion/react-client";
import img1 from '../../assets/TrendingTreatments/Body Contouring (LipoLaser).jpg'
import img2 from '../../assets/TrendingTreatments/PRP-GFC for Hair.png'
import img3 from '../../assets/TrendingTreatments/Laser Hair reduction.jpg'
import img4 from '../../assets/TrendingTreatments/chemical peelGlow peel.jpg'
import hert from '../../assets/TrendingTreatments/hert.svg'
import { useNavigate } from "react-router-dom";

const treatments = [
    {
        title: "Body Contouring (LipoLaser)  ",
        description: "Revitalize your skin and scalp with cutting-edge exosome therapy, promoting collagen production, hair regrowth, and a youthful glow.",
        // image: "https://res.cloudinary.com/dvu9zrnsp/image/upload/f_auto,q_auto/v1/OBW_TRENING/Exosome_Therapy_for_Skin_Scalp-min_yykqhj",
        image: img1,

    },
    {
        title: "PRP-GFC for Hair",
        description: "Combat hair thinning with targeted anti-DHT mesotherapy, nourishing hair follicles and reducing hair loss for fuller, healthier hair.",
        // image: "https://res.cloudinary.com/dvu9zrnsp/image/upload/f_auto,q_auto/v1/OBW_TRENING/Anti-DHT_Mesotherapy-min_eq4fns",
        image: img2,
    },
    {
        title: "Laser Hair reduction",
        description: "Experience advanced Medi-facials tailored to your skin’s needs, combining medical-grade ingredients for instant radiance and skin health.   ",
        // image: "https://res.cloudinary.com/dvu9zrnsp/image/upload/f_auto,q_auto/v1/OBW_TRENING/Medi-Facials-min_xn8znv",
        image: img3,
    },
    {
        title: "Laser Hair reduction",
        description: "Deeply hydrate and rejuvenate your skin with our premium skin boosters, enhancing elasticity, glow, and long-lasting hydration.   ",
        // image: "https://res.cloudinary.com/dvu9zrnsp/image/upload/f_auto,q_auto/v1/OBW_TRENING/Skin_Boosters-min_rcxqeq",
        image: img4,
    },
    {
        title: "Lipolytic Injections   ",
        description: "Melt stubborn fat with our non-surgical lipolytic injections, sculpting and contouring problem areas for a slimmer, more defined look.   ",
        image: "https://res.cloudinary.com/dvu9zrnsp/image/upload/f_auto,q_auto/v1/OBW_TRENING/Lipolytic_Injections-min_oqi1fs",
    },
    {
        title: "IV Therapy for Skin, Hair & Body Care  ",
        description: "Boost your beauty from within with IV therapy, delivering essential vitamins and antioxidants for radiant skin, strong hair, and overall wellness.   ",
        image: "https://res.cloudinary.com/dvu9zrnsp/image/upload/f_auto,q_auto/v1/OBW_TRENING/IV_Therapy_for_Skin_Hair_Body_Care-min_w5xd4u"
    },
    {
        title: "Botulinum Toxin Injections ",
        description: "Smooth fine lines and wrinkles with botulinum toxin injections, giving you a refreshed, youthful, and natural-looking appearance.   ",
        image: "https://res.cloudinary.com/dvu9zrnsp/image/upload/f_auto,q_auto/v1/OBW_TRENING/Botulinum_Toxin_Injections-min_sphk7l"
    },
    {
        title: " Hair Transplantation ",
        description: " Restore your confidence with advanced hair transplantation, offering natural-looking, long-lasting results for fuller, thicker hair.    ",
        image: "https://res.cloudinary.com/dvu9zrnsp/image/upload/f_auto,q_auto/v1/OBW_TRENING/Hair_Transplantation-min_hyvi4z"
    },
    {
        title: " Scar Revision or Reduction Treatments ",
        description: " Minimize scars and reveal smoother skin with our expert scar revision treatments, using cutting-edge techniques for visible improvement.    ",
        image: "https://res.cloudinary.com/dvu9zrnsp/image/upload/f_auto,q_auto/v1/OBW_TRENING/Scar_Revision_or_Reduction_Treatments-min_da9mlf",
    },
    {
        title: " Laser Resurfacing Treatments ",
        description: " Renew your skin with laser resurfacing, reducing wrinkles, pigmentation, and acne scars for a flawless, youthful complexion.  ",
        image: "https://res.cloudinary.com/dvu9zrnsp/image/upload/f_auto,q_auto/v1/OBW_TRENING/Laser_Resurfacing_Treatments_2_-min_zlmx5q",
    },
    {
        title: " HIFU (High-Intensity Focused Ultrasound) ",
        description: "A non-invasive skin tightening treatment that stimulates collagen production for a firmer, more youthful appearance—without surgery or downtime.   ",
        image: "https://res.cloudinary.com/dvu9zrnsp/image/upload/f_auto,q_auto/v1/OBW_TRENING/HIFU_High-Intensity_Focused_Ultrasound_-min_gnn9j2",
    },
    {
        title: "PMU (Permanent Makeup)",
        description: "Enhance your natural beauty with long-lasting, semi-permanent cosmetic tattooing for brows, lips, and eyeliner, designed for effortless perfection every day.",
        image: "https://res.cloudinary.com/dvu9zrnsp/image/upload/f_auto,q_auto/v1/OBW_TRENING/PMU_Permanent_Makeup_-min_gvqy6r",
    },
];

const TrendingTreatments = () => {
    const navigate = useNavigate();

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

    console.log('treatments', treatments.length
    )

    //  sliders
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(1);
    const gap = 18;
    const sliderRef = useRef(null);

    useEffect(() => {
        const updateCards = () => {
            const width = window.innerWidth;
            if (width < 500) setCardsToShow(1); // On small mobiles
            if (width < 600) setCardsToShow(1); // On small mobiles
            if (width < 700) setCardsToShow(1.2); // On small mobiles
            else if (width < 900) setCardsToShow(2); // On tablets
            else if (width < 980) setCardsToShow(2.5); // On tablets
            else if (width < 1150) setCardsToShow(3); // On tablets
            else setCardsToShow(3.5); 
        };
        updateCards();
        window.addEventListener("resize", updateCards);
        return () => window.removeEventListener("resize", updateCards);
    }, []);

    const totalPages = treatments.length - cardsToShow + 1;
    const transformValue = `translateX(calc(-${currentIndex * (100 / cardsToShow)}% - ${currentIndex * gap}px))`;
  

    const handleWheel = (event) => {
        if (event.deltaY > 0) {
            // handleNext();
        } else {
            // handlePrevious();
        }
    };
    //  sliders
    const HandleNavigation = (title) => {
        window.scrollTo(0, 0);
        navigate(`/${title}`);
    };
    
    return (
        <div className="trending-treatments">
            <div className="header_top">


                <div className="title-sbt">TRENDING</div>
                <header className="heading-section">
                    <div>
                        <h1 className="trending-title">Trending <span className="heart"><img src={hert}/></span> Treatments</h1>
                        <p className="description">
Explore the latest in healthcare, including innovative therapies for chronic pain and personalized nutrition plans. Stay updated on effective treatment options!
                        </p>
                    </div>
                    <button
                        onClick={() => HandleNavigation('treatment')}

                        ref={buttonRef}
                        className="LoadMoreTreatments btn"
                        // onClick={visibleCount < treatments.length ? handleLoadMore : handleLoadLess}
                    >
                        <span>
                           View All
                            <ArrowRight className="arrow-icon" size={20} strokeWidth={2} />
                        </span>
                    </button>
                </header>
            </div>


            {/* <div className="cards-container">
                {treatments.slice(0, 4).map((treatment, index) => (
                    <div key={index} className="card">
                        <div className="card-image">
                            <WebPImage
                                // placeholderSrc={placeholderImg}
                                src={treatment.image}
                                alt={treatment.title}
                            />
                        </div>
                        <h3 className="card-title">{treatment.title}</h3>
                        <p className="card-description">{treatment.description}</p>
                    </div>
                ))}
                <div className="next-btn"><a href="/treatment">Next</a> <ChevronRight color="#5B2F2F" /> </div>

            </div> */}



            <div className="card-slider-container" onWheel={handleWheel}>
                <div className="team-images"
                    // style={{ "--index": currentIndex }}
                    style={{ transform: transformValue }}
                    ref={sliderRef}
                >
                    {treatments.map((treatment, index) => (
                        <>
                            <div className="card"
                                key={index}
                                style={{ minWidth: `calc(${100 / cardsToShow}% - ${gap * (cardsToShow - 1) / cardsToShow}px)` }}
                                          >
                                <div className="card-image">
                                    <WebPImage
                                        key={index}
                                        src={treatment.image}
                                        alt={`Team group ${index + 1}`}
                                        className={`team-photo ${index === currentIndex ? "active" : "hidden"}`}
                                    />
                                </div>

                                <h3 className="card-title">{treatment.title}</h3>
                                <p className="card-description">{treatment.description}</p>
                            </div>
                        </>
                    ))}
                </div>
                <div className="progress">
                    <button className="nav-btn left"
                        // onClick={handlePrevious} disabled={currentIndex === 0}
                        onClick={() => setCurrentIndex(Math.max(currentIndex - 1, 0))}
                        disabled={currentIndex === 0}
                    >
                        <ArrowLeft className="arrow-icon" size={20} strokeWidth={2} />
                    </button>
                    <button className="nav-btn right"
                        // onClick={handleNext} disabled={currentIndex >= treatments.length - visibleCards}
                        onClick={() => setCurrentIndex(Math.min(currentIndex + 1, treatments.length - cardsToShow))}
                        disabled={currentIndex >= treatments.length - cardsToShow}
                    >
                        <ArrowRight className="arrow-icon" size={20} strokeWidth={2} />
                    </button>
                </div>
            </div>
{/* 
            <button ref={buttonRef} className="LoadMoreTreatments" onClick={visibleCount < treatments.length ? handleLoadMore : handleLoadLess}>
                {visibleCount < treatments.length ? "Load More" : "Load Less"}
                <ArrowRight className="arrow-icon" size={20} strokeWidth={2} />
            </button> */}




            {/* <footer className="footer-section" >

            </footer> */}
                {/* <hr /> */}
            {showModal && <BookAppointment onClose={() => setShowModal(false)} />}
        </div>
    );
};

export default TrendingTreatments;

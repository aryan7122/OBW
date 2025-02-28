import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
// import 'react-lazy-load-image-component/src/effects/blur.css';
import BookAppointment from "../../Components/BookAppointment/BookAppointment";
import "./TrendingTreatments.scss";
import WebPImage from "../../util/WebPImage";

const treatments = [
    {
        title: "Exosome Therapy for Skin & Scalp ",
        description: "Revitalize your skin and scalp with cutting-edge exosome therapy, promoting collagen production, hair regrowth, and a youthful glow.",
        image: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/ClinicalConcerns/ucdhczvbxl1gih9lutoi",
    },
    {
        title: "Anti-DHT Mesotherapy  ",
        description: "Combat hair thinning with targeted anti-DHT mesotherapy, nourishing hair follicles and reducing hair loss for fuller, healthier hair.",
        image: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/ClinicalConcerns/eztv3stbmzpkyoytbqyr",
    },
    {
        title: "Medi-Facials ",
        description: "Experience advanced Medi-facials tailored to your skin’s needs, combining medical-grade ingredients for instant radiance and skin health.   ",
        image: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/ClinicalConcerns/mlspriuvbrcebi9iusup",
    },
    {
        title: "Skin Boosters  ",
        description: "Deeply hydrate and rejuvenate your skin with our premium skin boosters, enhancing elasticity, glow, and long-lasting hydration.   ",
        image: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/ClinicalConcerns/ysa3w3ibnhgkosdxnkjc",
    },
    {
        title: "Lipolytic Injections   ",
        description: "Melt stubborn fat with our non-surgical lipolytic injections, sculpting and contouring problem areas for a slimmer, more defined look.   ",
        image: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/ClinicalConcerns/ugtov4jgaj0cv1crdlqq",
    },
    {
        title: "IV Therapy for Skin, Hair & Body Care  ",
        description: "Boost your beauty from within with IV therapy, delivering essential vitamins and antioxidants for radiant skin, strong hair, and overall wellness.   ",
        image: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/ClinicalConcerns/eidjxvnkelfhreo2karf"
    },
    {
        title: "Botulinum Toxin Injections ",
        description: "Smooth fine lines and wrinkles with botulinum toxin injections, giving you a refreshed, youthful, and natural-looking appearance.   ",
        image: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/ClinicalConcerns/i5xxfksqmkewe2hmnsna"
    },
    {
        title: " Hair Transplantation ",
        description: " Restore your confidence with advanced hair transplantation, offering natural-looking, long-lasting results for fuller, thicker hair.    ",
        image: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/ClinicalConcerns/h37ljtlpmquyugd9mygj"
    },
    {
        title: " Scar Revision or Reduction Treatments ",
        description: " Minimize scars and reveal smoother skin with our expert scar revision treatments, using cutting-edge techniques for visible improvement.    ",
        image: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/ClinicalConcerns/vveltd58pkzt4uqsredu",
    },
    {
        title: " Laser Resurfacing Treatments ",
        description: " Renew your skin with laser resurfacing, reducing wrinkles, pigmentation, and acne scars for a flawless, youthful complexion.  ",
        image: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/ClinicalConcerns/tiwy0cseohjykdqrj5fe",
    },
    {
        title: " HIFU (High-Intensity Focused Ultrasound) ",
        description: "A non-invasive skin tightening treatment that stimulates collagen production for a firmer, more youthful appearance—without surgery or downtime.   ",
        image: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/ClinicalConcerns/xrudstk0ooqyrzxu4aaf",
    },
    {
        title: "PMU (Permanent Makeup)",
        description: "Enhance your natural beauty with long-lasting, semi-permanent cosmetic tattooing for brows, lips, and eyeliner, designed for effortless perfection every day.",
        image: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/ClinicalConcerns/bpmwovt0mallxxjd7nu7",
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

    console.log('treatments', treatments.length
    )

    //  sliders
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCards = 1;
    const handleNext = () => {
        if (currentIndex < treatments.length - visibleCards) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleWheel = (event) => {
        if (event.deltaY > 0) {
            // handleNext();
        } else {
            // handlePrevious();
        }
    };
    //  sliders

    return (
        <div className="trending-treatments">
            <div className="header_top">

          
            <div className="title-sbt">TRENDING</div>
            <header className="heading-section">
                <h1 className="trending-title">Trending <span className="heart">&#x2764;</span> Treatments</h1>
                <p className="description">
                    Explore the latest treatments reshaping healthcare, from innovative therapies for chronic pain to advanced skincare solutions. Discover options like regenerative medicine that taps into the body's healing abilities and personalized nutrition plans tailored to your health needs. Stay informed with treatments that prioritize results and patient comfort.

                </p>
                </header>
            </div>


            {/* <div className="cards-container">
                {treatments.slice(0, visibleCount).map((treatment, index) => (
                    <div key={index} className="card">
                        <div className="card-image">
                            <WebPImage
                                placeholderSrc={placeholderImg}
                                src={treatment.image}
                                alt={treatment.title}
                            />
                        </div>
                        <h3 className="card-title">{treatment.title}</h3>
                        <p className="card-description">{treatment.description}</p>
                    </div>
                ))}
            </div> */}

            {/* <button ref={buttonRef} className="LoadMoreTreatments" onClick={visibleCount < treatments.length ? handleLoadMore : handleLoadLess}>
                {visibleCount < treatments.length ? "Load More" : "Load Less"}
                <ArrowRight className="arrow-icon" size={20} strokeWidth={3} />
            </button> */}

            <div className="card-slider-container" onWheel={handleWheel}>
                <div className="team-images" style={{ "--index": currentIndex }}>
                    {treatments.map((treatment, index) => (
                        <>
                            <div className="card">
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
                    <button className="nav-btn left" onClick={handlePrevious} disabled={currentIndex === 0}>
                        <ArrowLeft className="arrow-icon" size={20} strokeWidth={3} />
                    </button>
                    <button className="nav-btn right" onClick={handleNext} disabled={currentIndex >= treatments.length - visibleCards}>
                        <ArrowRight className="arrow-icon" size={20} strokeWidth={3} />
                    </button>
                </div>
            </div>






            <footer className="footer-section" >
                <button className="Book-Now" onClick={() => setShowModal(true)}>Book Now <ArrowRight className="arrow-icon" size={20} strokeWidth={3} /></button>
                <div className="next-btn"><a href="/treatment">Next</a> <ChevronRight color="#5B2F2F" /> </div>
            </footer>

            {showModal && <BookAppointment onClose={() => setShowModal(false)} />}
        </div>
    );
};

export default TrendingTreatments;

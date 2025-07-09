import React, { useEffect, useRef, useState } from "react";
import "./HappyClients.scss";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import bimg1 from "../../assets/HappyClients/bimg1.png";
import bimg2 from "../../assets/HappyClients/bimg2.png";
import bimg3 from "../../assets/HappyClients/bimg3.png";
import bimg4 from "../../assets/HappyClients/bimg4.png";
import happyImg from "../../assets/HappyClients/happy.svg";

const data = [
    {
        name: "Sheetal Trivedi", location: "Bengaluru",
        description: `"I used OBW clinical services, and it was fantastic! The staff was attentive, making everything easy.I felt supported, and the results were great.Highly recommend!"`,
        image: bimg4, star: 4
    },
    { name: "Vishwas Patel", location: "Bengaluru", image: bimg1, star: 5 },
    { name: "Arjun Verma", location: "Hyderabad", image: bimg2, star: 5 },
    { name: "Vishwas Patel", location: "Bengaluru", image: bimg3, star: 5 },
    { name: "Client Five", location: "Bengaluru", image: bimg2, star: 5 },
    { name: "Lalita Thakur", location: "Mumbai", image: bimg1, star: 5 }
];

const HappyClients = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCardsCount, setVisibleCardsCount] = useState(1);
    const [cardSize, setCardSize] = useState(597);
    const [hoveredIndex, setHoveredIndex] = useState(0); // 👈 By default first card open

    const hoverTimeout = useRef();
    const wrapperRef = useRef(null);
    const sliderRef = useRef(null);

    useEffect(() => {
        const calculate = () => {
            if (wrapperRef.current && sliderRef.current) {
                const wrapperWidth = wrapperRef.current.offsetWidth;
                const card = sliderRef.current.querySelector(".slider-card");
                if (card) {
                    const cardWidth = card.offsetWidth;
                    const margin = parseFloat(getComputedStyle(card).marginRight);
                    const total = cardWidth + margin;
                    setCardSize(total);
                    const count = Math.floor(wrapperWidth / total);
                    setVisibleCardsCount(count > 0 ? count : 1);
                }
            }
        };
        calculate();
        window.addEventListener("resize", calculate);
        return () => window.removeEventListener("resize", calculate);
    }, []);

    const handleNext = () => {
        const maxIndex = data.length - visibleCardsCount;
        const next = Math.min(currentIndex + 1, maxIndex);
        setCurrentIndex(next);
        // setHoveredIndex(next); // 👈 keep updated
    };

    const handlePrevious = () => {
        const prev = Math.max(currentIndex - 1, 0);
        setCurrentIndex(prev);
        // setHoveredIndex(prev); // 👈 keep updated
    };

    useEffect(() => {
        if (sliderRef.current) {
            const offset = currentIndex * cardSize;
            const lastVisibleIndex = data.length - visibleCardsCount;
            const isLastSlide = currentIndex >= lastVisibleIndex;
            const extra = isLastSlide ? 150 : 0; // 👈 100px shift for last
            sliderRef.current.style.transform = `translateX(-${offset +  extra}px)`;
        }
    }, [currentIndex, cardSize]);

    const handleHover = (index) => {
        const maxIndex = data.length - visibleCardsCount;
        const safeIndex = Math.min(index, maxIndex);
        setCurrentIndex(safeIndex);
        setHoveredIndex(index);
    };

    const totalSteps = data.length - visibleCardsCount + 1;
    const progress = (currentIndex / (totalSteps - 1)) * 100;

    return (
        <div className="happy-slider-container">
            {/* heading */}
            <div className="content_top">
                <h2 className="slider-heading">
                    Hear From Our Happy
                    <motion.img src={happyImg} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.6 }} alt="Happy Clients" />
                    Clients
                </h2>
            </div>

            {/* slider cards */}
            <div className="blog-slider-wrapper" ref={wrapperRef}>
                <div className="slider-cards" ref={sliderRef}>
                    {data.map((item, index) => (
                        <motion.div
                            className={`slider-card ${index === hoveredIndex ? 'active' : ''}`} // 👈 Add class if hovered
                            key={index}
                            onMouseEnter={() => {
                                // clearTimeout(hoverTimeout.current);
                                hoverTimeout.current = setTimeout(() => {
                                    // handleHover(index);
                                    // setHoveredIndex(index)
                                }, 300); // smoother
                            }}
                            onMouseLeave={() => {
                                clearTimeout(hoverTimeout.current);
                                setHoveredIndex(null)
                            }}
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="img_flex">
                                <img src={item.image} className="card-image" alt="" />
                                {item.description && <div className="des_"><p>{item.description}</p></div>}
                            </div>
                            <div className="card_blur">
                                <div className="aut_text-img">
                                    <div className="aut_text">
                                        <p className="card-name">{item.name}</p>
                                        <p className="card-location">{item.location}</p>
                                        <div className="stars">
                                            {Array.from({ length: 5 }).map((_, starIndex) => (
                                                <motion.span
                                                    key={starIndex}
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{ duration: 0.6, delay: starIndex * 0.1 }}
                                                    viewport={{ once: true, amount: 0.2 }}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"
                                                        fill={starIndex < item?.star ? "#C8CF00" : "#c8cf0038"}>
                                                        <path d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z" />
                                                    </svg>
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* progress & navigation */}
            <div className="progress">
                <div className="progress-bar-wrapper">
                    <div className="progress-bar" style={{ width: `${isNaN(progress) ? 100 : progress}%` }}></div>
                </div>
                <button onClick={handlePrevious} disabled={currentIndex === 0} className="nav-btn">
                    <ArrowLeft />
                </button>
                <button onClick={handleNext} disabled={currentIndex >= data.length - visibleCardsCount} className="nav-btn">
                    <ArrowRight />
                </button>
            </div>
        </div>
    );
};


export default HappyClients;

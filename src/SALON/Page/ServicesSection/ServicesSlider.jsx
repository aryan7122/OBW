// ServicesSlider.jsx
import React, { useRef, useEffect, useState } from 'react';
import './ServicesSection.scss';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ServicesSlider = ({ services }) => {
    const containerRef = useRef(null);
    const [showControls, setShowControls] = useState(false);

    useEffect(() => {
        const checkScroll = () => {
            const el = containerRef.current;
            if (el && el.scrollWidth > el.clientWidth + 10) {
                setShowControls(true);
            } else {
                setShowControls(false);
            }
        };
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, [services]);

    const scrollLeft = () => {
        const el = containerRef.current;
        if (el) el.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        const el = containerRef.current;
        if (el) el.scrollBy({ left: 300, behavior: 'smooth' });
    };
// console.log('😒😒😒😒😒',services.length)
    return (
        <div className="slider-wrapper">
           
            <div className={`services-slider card_is_${services.length}`} ref={containerRef}>
                {services.map((service, index) => (
                    <div className={`service-card ` } key={index}>
                        <img src={service.image} alt={service.title} className="service-img" />
                        <div className="service-blur">
                            <h4 className="service-title">{service.title}</h4>
                            <hr className="divider" />
                            <div className="bottom-info">
                                <span className="price">Rs.{service.price} <p>Onwards</p></span>
                                <button className="book-btn btn">
                                    <span> 
                                    Book Appointment
                                </span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="btn_slider">
                {showControls && (
                    <button className="slider-arrow left" onClick={scrollLeft}>
                        <ArrowLeft size={24} />
                    </button>
                )}
                {showControls && (
                    <button className="slider-arrow right" onClick={scrollRight}>
                        <ArrowRight size={24} />
                    </button>
                )}
           </div>
        </div>
    );
};

export default ServicesSlider;

// Usage:
// import ServicesSlider from './ServicesSlider';
// <ServicesSlider services={services.filter(service => service.category === activeTab)} />
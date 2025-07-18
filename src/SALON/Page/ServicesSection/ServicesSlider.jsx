// ServicesSlider.jsx
import React, { useRef, useEffect, useState } from 'react';
import './ServicesSection.scss';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ServicesSlider = ({ services }) => {

    const containerRef = useRef(null);
    const [showControls, setShowControls] = useState(false);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    // useEffect(() => {
    //     const checkScroll = () => {
    //         const el = containerRef.current;
    //         if (el && el.scrollWidth > el.clientWidth + 10) {
    //             setShowControls(true);
    //         } else {
    //             setShowControls(false);
    //         }
    //     };
    //     checkScroll();
    //     window.addEventListener('resize', checkScroll);
    //     return () => window.removeEventListener('resize', checkScroll);
    // }, [services]);

    useEffect(() => {
        const checkScroll = () => {
            const el = containerRef.current;
            if (!el) return;

            const isScrollable = el.scrollWidth - el.clientWidth > 1;
            setShowControls(isScrollable);
        };

        // Initial check after layout settles
        const observer = new ResizeObserver(checkScroll);
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        // Also check on window resize
        window.addEventListener('resize', checkScroll);

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
            window.removeEventListener('resize', checkScroll);
        };
    }, [services]);


    const scrollLeft = () => {
        const el = containerRef.current;
        if (el) el.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        const el = containerRef.current;
        if (el) el.scrollBy({ left: 300, behavior: 'smooth' });
    };
    const updateScrollButtons = () => {
        const el = containerRef.current;
        if (!el) return;

        const scrollLeft = el.scrollLeft;
        const maxScrollLeft = el.scrollWidth - el.clientWidth;

        setCanScrollLeft(scrollLeft > 10);
        setCanScrollRight(scrollLeft < maxScrollLeft - 10);
    };
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const handleResizeOrScroll = () => {
            updateScrollButtons();
        };

        // Initial check
        updateScrollButtons();

        // Scroll & resize listeners
        el.addEventListener('scroll', handleResizeOrScroll);
        window.addEventListener('resize', handleResizeOrScroll);

        return () => {
            el.removeEventListener('scroll', handleResizeOrScroll);
            window.removeEventListener('resize', handleResizeOrScroll);
        };
    }, [services]);


    console.log('😒😒😒😒😒', containerRef)
    return (
        <div className="slider-wrapper">

            <div className={`services-slider card_is_${services.length}`} ref={containerRef}>
                {services.map((service, index) => (
                    <div className={`service-card `} key={index}>
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
                    <button
                        className={`slider-arrow left ${!canScrollLeft ? 'disabled' : ''}`}
                        onClick={scrollLeft}
                        disabled={!canScrollLeft}                     >
                        <ArrowLeft size={34} />
                    </button>
                )}
                {showControls && (
                    <button
                        className={`slider-arrow right ${!canScrollRight ? 'disabled' : ''}`}
                        onClick={scrollRight}
                        disabled={!canScrollRight}
                    >
                        <ArrowRight size={34} />
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
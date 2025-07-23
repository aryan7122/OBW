import React, { useState, useEffect, useRef } from 'react';
import './BlogSlider.scss';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import WebPImage from '../../util/WebPImage';
import img11 from "../../assets/TrendingTreatments/Laser Resurfacing Treatments-min.jpg";
import img10 from "../../assets/TrendingTreatments/Scar Revision or Reduction-min.jpg";
import { useNavigate } from 'react-router-dom';
import { blogs } from './Blog';



const BlogSlider = () => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3.5);
    const sliderRef = useRef(null);

    useEffect(() => {
        const updateCards = () => {
            const width = window.innerWidth;
            if (width < 500) setCardsToShow(0); // On small mobiles
            if (width < 600) setCardsToShow(1); // On small mobiles
            if (width < 700) setCardsToShow(1.5); // On small mobiles
            else if (width < 900) setCardsToShow(2); // On tablets
            else if (width < 980) setCardsToShow(2.5); // On tablets
            else if (width < 1150) setCardsToShow(3); // On tablets
            else setCardsToShow(3.6); // On desktops
        };
        updateCards();
        window.addEventListener('resize', updateCards);
        return () => window.removeEventListener('resize', updateCards);
    }, []);

    const handleStart = (e) => {
        sliderRef.current.dataset.dragStart = e.clientX || e.touches[0].clientX;
    };

    const handleEnd = (e) => {
        const startX = Number(sliderRef.current.dataset.dragStart);
        const endX = e.clientX || (e.changedTouches && e.changedTouches[0]?.clientX);
        const swipeThreshold = 75; // Pixels to consider it a swipe

        if (endX && Math.abs(startX - endX) > swipeThreshold) {
            if (startX - endX > 0) { // Swiped left
                setCurrentIndex((prev) => Math.min(prev + 1, blogs.length - cardsToShow));
            } else { // Swiped right
                setCurrentIndex((prev) => Math.max(prev - 1, 0));
            }
        }
        sliderRef.current.dataset.dragStart = null; // Reset drag start
    };

    const totalPages = blogs.length - cardsToShow + 1;
    const progressWidth = (currentIndex + 1) / totalPages * 100;


    const gap = 20; // from .slider-cards gap
    const cardWidthPercentage = (100 - (gap * (cardsToShow - 1)) / (sliderRef.current?.offsetWidth || 1000)) / cardsToShow;
    const transformValue = `translateX(-${currentIndex * (100 / cardsToShow)}%)`;

    const HandleNavigation = (title) => {
        const formattedTitle = title.toLowerCase().replace(/\s+/g, "-");
        window.scrollTo(0, 0);
        navigate(`/blog-detail/${formattedTitle}`);
    };

    return (
        <div className='blog-slider-wrapper'>
            <div className="blog-slider-container">
                <div className="content_top">
                    <div>
                        <h3 className='blog_title'>BLOGS</h3>
                        <h2 className="slider-heading">
                        {/* Unlock The Power Of Tailored Growth Solutions */}
                      Discover beauty and wellness tips to enhance your glow and well-being.
                        </h2>
                    </div>
                    <button className="view-all btn" onClick={() => navigate('/blogs')}>
                        <span>
                            See All Blogs <ArrowRight className="arrow-icon" size={20} strokeWidth={2} />
                        </span>
                    </button>
                </div>

                <div
                    className="blog-slider-wrapper" // Renamed to avoid class name conflict
                    ref={sliderRef}
                    onTouchStart={handleStart}
                    onTouchEnd={handleEnd}
                    onMouseDown={handleStart}
                    onMouseUp={handleEnd}
                    onMouseLeave={handleEnd} // Important for desktop drag to reset
                >
                    <div
                        className="slider-cards"
                        style={{
                            transform: `translateX(calc(-${currentIndex * (103 / cardsToShow)}% )`,
                            // For 3 cards, each takes 1/3 of width. For each step, move 1/3 width + 1 gap.
                            // If it's a fixed percentage and gap is also fixed, the calculation can be more precise:
                            // transform: `translateX(calc(-${currentIndex * (100 / cardsToShow)}% - ${currentIndex * gap}px))`
                        }}
                    >
                        {blogs.map((blog, i) => (
                            <div
                                className="slider-card"
                                onClick={() => HandleNavigation(blog?.title)}
                                key={i}
                                style={{
                                    minWidth: `calc(${100 / cardsToShow}% - ${gap * (cardsToShow - 1) / cardsToShow}px)`
                                    // This ensures each card correctly takes its share of width,
                                    // distributing the gaps evenly.
                                }}
                            >
                                <WebPImage src={blog.image} alt={blog?.title} className="card-image" />
                                <h3 className="card-title">{blog?.title}</h3>
                                <div className="rd_mo">
                                    <p className='read-more'>Read More </p>
                                    <p className='category'>{blog?.category}</p>
                                    {/* <p className='read-time'>5 min</p> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="progress">
                    <div className="progress-bar-wrapper">
                        <div className="progress-bar" style={{ width: `${progressWidth}%` }}></div>
                    </div>
                    <button className="nav-btn left" onClick={() => setCurrentIndex(Math.max(currentIndex - 1, 0))} disabled={currentIndex === 0}>
                        <ArrowLeft className="arrow-icon" size={20} strokeWidth={2} />
                    </button>
                    <button
                        className="nav-btn right"
                        onClick={() => setCurrentIndex(Math.min(currentIndex + 1, blogs.length - cardsToShow))}
                        disabled={currentIndex >= blogs.length - cardsToShow}
                    >
                        <ArrowRight className="arrow-icon" size={20} strokeWidth={2} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogSlider;
// 
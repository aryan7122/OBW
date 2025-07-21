// ✅ Fully Updated BlogSlider with fixed responsive scrolling, progress bar and flex-based layout

import React, { useState, useEffect, useRef } from 'react';
import './BlogSlider.scss';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import WebPImage from '../../util/WebPImage';
import img11 from "../../assets/TrendingTreatments/Laser Resurfacing Treatments-min.jpg";
import img10 from "../../assets/TrendingTreatments/Scar Revision or Reduction-min.jpg";
import { useNavigate } from 'react-router-dom';

const blogs = [
    {
        title: "Medi-Facials: The Ultimate Skin Rejuvenation Treatment",
        p: "Discover how medi-facials provide deep skin nourishment and rejuvenation...",
        author: "Anjali Verma",
        authorImg: "https://img.freepik.com/free-photo/portrait-beautiful-young-woman-having-facial-treatment_1157-14194.jpg",
        date: "Feb 10, 2025",
        image: "https://res.cloudinary.com/dvu9zrnsp/image/upload/f_auto,q_auto/v1/OBW_TRENING/Medi-Facials-min_xn8znv",
        category: "Skin"
    },
    {
        title: "Laser Hair Removal: The Hassle-Free Solution for Smooth Skin",
        p: "Say goodbye to shaving, waxing, and plucking!...",
        author: "Riya Mehta",
        authorImg: "https://img.freepik.com/free-photo/portrait-woman-getting-laser-hair-removal-treatment-skin-care_1157-14225.jpg",
        date: "Feb 15, 2025",
        image: "https://res.cloudinary.com/dvu9zrnsp/image/upload/f_auto,q_auto/v1/OBW_TRENING/Laser_Hair_Removal-min_u7vpue",
        category: "Hair"
    },
    {
        title: "IV Therapy for Skin, Hair & Body Wellness",
        p: "IV therapy is a treatment designed to nourish your body from within...",
        author: "Aarav Sharma",
        authorImg: "https://img.freepik.com/free-photo/young-woman-getting-iv-therapy-treatment-skin-care-health_1157-13747.jpg",
        date: "Feb 20, 2025",
        image: "https://res.cloudinary.com/dvu9zrnsp/image/upload/f_auto,q_auto/v1/OBW_TRENING/IV_Therapy_for_Skin_Hair_Body_Care-min_w5xd4u",
        category: "Wellness"
    },
    {
        title: "Scar Revision or Reduction Treatments: Smooth and Refined Skin",
        p: "Get smoother skin and reduce the appearance of scars...",
        author: "Tanya Sharma",
        authorImg: "https://img.freepik.com/free-photo/young-woman-face-scar-revision-treatment_1157-14209.jpg",
        date: "Mar 25, 2025",
        image: img10,
        category: "Skin"
    },
    {
        title: "Laser Resurfacing Treatments: Smooth, Youthful Skin in No Time",
        p: "Achieve youthful, radiant skin quickly with laser resurfacing treatments...",
        author: "Sanya Mehta",
        authorImg: "https://img.freepik.com/free-photo/close-up-woman-laser-skin-resurfacing-treatment_1157-15163.jpg",
        date: "Apr 1, 2025",
        image: img11,
        category: "Skin"
    }
];


const BlogSlider = () => {
    const navigate = useNavigate();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3);
    const sliderRef = useRef(null);

    useEffect(() => {
        const updateCards = () => {
            const width = window.innerWidth;
            if (width < 480) setCardsToShow(1);
            else if (width < 768) setCardsToShow(1.2);
            else if (width < 1024) setCardsToShow(2);
            else if (width < 1440) setCardsToShow(3);
            else setCardsToShow(3.2);
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
        const swipe = startX - endX;

        if (swipe > 75) setCurrentIndex((prev) => Math.min(prev + 1, blogs.length - Math.floor(cardsToShow)));
        else if (swipe < -75) setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    const progressWidth = (currentIndex + 1) / (blogs.length - Math.floor(cardsToShow) + 1) * 100;
    const slugify = (title) => {
        return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    };

    const HandleNavigation = (title) => {
        const formattedTitle = title.toLowerCase().replace(/\s+/g, "-"); // Slug conversion
        window.scrollTo(0, 0);
        navigate(`/blog-detail/${formattedTitle}`);
    };

    return (
        <div className='blog-slider-wrapper'>
            <div className="blog-slider-container">
                <div className="content_top">
                    <div>
                        <h3 className='blog_title'>BLOGS</h3>
                        <h2 className="slider-heading">Unlock The Power Of Tailored Growth Solutions</h2>
                        {/* <p>Boost your growth with data-driven strategies tailored to your business. Use insights to make informed decisions and drive success.</p> */}
                    </div>
                    <button className="view-all btn" onClick={() => HandleNavigation('/blogs')}>
                        <span>
                            See All Blogs <ArrowRight className="arrow-icon" size={20} strokeWidth={2} />
                        </span>
                    </button>
                </div>

                <div
                    className="blog-slider-wrapper"
                    ref={sliderRef}
                    onTouchStart={handleStart}
                    onTouchEnd={handleEnd}
                    onMouseDown={handleStart}
                    onMouseUp={handleEnd}
                >
                    <div
                        className="slider-cards"
                        style={{ transform: `translateX(-${currentIndex * (90 / cardsToShow)}%)` }}
                    >
                        {blogs.map((blog, i) => (
                            <div className="slider-card"
                                onClick={() => HandleNavigation(blog?.title)}
                                key={i} 
                                style={{ minWidth: `${90 / cardsToShow}%` }}
                                >
                                <WebPImage src={blog.image} alt={blog?.title} className="card-image" />
                                <h3 className="card-title">{blog?.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="progress">
                    <div className="progress-bar-wrapper">
                        <div className="progress-bar" style={{ width: `${progressWidth}%` }}></div>
                    </div>
                    <button className="nav-btn left" onClick={() => setCurrentIndex(Math.max(currentIndex - 1, 0))}>
                        <ArrowLeft className="arrow-icon" size={20} strokeWidth={2} />
                    </button>
                    <button
                        className="nav-btn right"
                        onClick={() => setCurrentIndex(Math.min(currentIndex + 1, blogs.length - Math.floor(cardsToShow)))}
                    >
                        <ArrowRight className="arrow-icon" size={20} strokeWidth={2} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogSlider;

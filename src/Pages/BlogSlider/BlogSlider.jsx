import { ArrowLeft, ArrowRight } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BlogSlider.scss';
const blogs = [
    {
        title: "Medi-Facials: The Ultimate Skin Rejuvenation Treatment",
        p: "Discover how medi-facials provide deep skin nourishment and rejuvenation. Unlike regular facials, medi-facials use advanced dermatological techniques to hydrate, exfoliate, and treat skin concerns like acne, pigmentation, and fine lines. These facials are customized as per your skin type, ensuring a glowing and refreshed look after every session.",
        author: "Anjali Verma",
        authorImg: "https://img.freepik.com/free-photo/portrait-beautiful-young-woman-having-facial-treatment_1157-14194.jpg?w=1060",
        date: "Feb 10, 2025",
        image: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/BlogSlider/lldglrzaq4mfpre7ggqo",
        category: "Skin"
    },
    {
        title: "Laser Hair Removal: The Hassle-Free Solution for Smooth Skin",
        p: "Say goodbye to the constant struggle of shaving, waxing, and plucking! Laser hair removal offers a long-term solution for smooth, hair-free skin by targeting hair follicles and preventing regrowth. It is a safe, effective, and virtually painless procedure that works well on various skin types, giving you confidence with every session.",
        author: "Riya Mehta",
        authorImg: "https://img.freepik.com/free-photo/portrait-woman-getting-laser-hair-removal-treatment-skin-care_1157-14225.jpg?w=1060",
        date: "Feb 15, 2025",
        image: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/BlogSlider/mgp21fo5pzjy3gapzwim",
        category: "Hair"
    },
    {
        title: "IV Therapy for Skin, Hair & Body Wellness",
        p: "IV therapy is a revolutionary treatment designed to nourish your body from within. By delivering essential vitamins, minerals, and antioxidants directly into your bloodstream, IV therapy helps improve skin health, strengthen hair, boost immunity, and increase energy levels. It's a quick and effective way to achieve overall wellness and a youthful glow.",
        author: "Aarav Sharma",
        authorImg: "https://img.freepik.com/free-photo/young-woman-getting-iv-therapy-treatment-skin-care-health_1157-13747.jpg?w=1060",
        date: "Feb 20, 2025",
        image: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/BlogSlider/y6tqnhdcncam70t7v8g1",
        category: "Wellness"
    },
];


const BlogSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCards = 1;
    const handleNext = () => {
        if (currentIndex < blogs.length - visibleCards) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const navigate = useNavigate();
    const HandleNavigation = (title) => {
        const formattedTitle = title.toLowerCase().replace(/\s+/g, "-"); // Slug conversion
        window.scrollTo(0, 0);
        navigate(`/blog-detail/${formattedTitle}`);
    };

    return (
        <div className="blog-slider-container">
            <h3 className='blog_title'>BLOG</h3>
            <div className="content_top">
                <div>
                    <h2 className="slider-heading">Discover beauty and wellness tips to enhance your glow and well-being.</h2>
                    <p className="slider-subheading">
                        Explore in-depth expert advice, insightful tips, and the most current trends in skincare, haircare, and a variety of aesthetic treatments to enhance your beauty routine.
                    </p>
                </div>
                <button onClick={() => HandleNavigation('/blogs')} className="view-all">See All Blogs  <ArrowRight className="arrow-icon" size={20} strokeWidth={3} /></button>
            </div>


            <div className="blog-slider-wrapper">

                <div className="slider-cards" style={{ "--index": currentIndex }}>
                    {blogs.map((blog, index) => (
                        <div key={index} className="slider-card">
                            <img src={blog.image} alt={blog?.title} className="card-image" />
                            <h3 className="card-title">{blog?.title}</h3>
                            <h3 className="card-p">{blog?.p}</h3>
                            <div className="author">
                                <div className='aut_text-img'>
                                    <img src={blog?.authorImg} />
                                    <div className='aut_text'>
                                        <p className="card-author">{blog?.author}</p>
                                        <p className="card-date">{blog?.date}</p>
                                    </div>
                                </div>
                                <button onClick={() => HandleNavigation(`${blog?.title}`)}
                                    className="read-more-btn">Read Full Blog</button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <div className="progress">
                <button className="nav-btn left" onClick={handlePrevious} disabled={currentIndex === 0}>
                    <ArrowLeft className="arrow-icon" size={20} strokeWidth={3} />
                </button>
                <button className="nav-btn right" onClick={handleNext} disabled={currentIndex >= blogs.length - visibleCards}>
                    <ArrowRight className="arrow-icon" size={20} strokeWidth={3} />
                </button>
                <div className="progress-bar-wrapper">
                    <div
                        className="progress-bar"
                        style={{ width: `${((currentIndex + 1) / blogs.length) * 100}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default BlogSlider;

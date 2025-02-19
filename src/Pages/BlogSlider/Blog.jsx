import React, { useEffect, useState } from "react";
import "./Blog.scss";
import Frame from "../../assets/about/Frame.svg";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img1 from '../../assets/TrendingTreatments/Medi-Facials-min.jpg'
import img2 from '../../assets/TrendingTreatments/Laser Hair Removal-min.jpg'
import img4 from '../../assets/TrendingTreatments/girl-with-black-mask-lies-table-spa-saloon (1).jpg'
import img7 from '../../assets/TrendingTreatments/Skin Brightening-min.jpg'
import img10 from '../../assets/TrendingTreatments/Scar Revision or Reduction-min.jpg'
import img5 from '../../assets/TrendingTreatments/Hair GFC & PRP-min.jpg'
import img3 from '../../assets/TrendingTreatments/IV Therapy for Skin, Hair & Body Care-min.jpg'
import img6 from '../../assets/TrendingTreatments/PMU (Permanent Makeup)-min.jpg'
import img8 from '../../assets/TrendingTreatments/Hair Transplantation-min.jpg'
import img9 from '../../assets/TrendingTreatments/Anti-DHT Mesotherapy-min.jpg'
import img11 from '../../assets/TrendingTreatments/Laser Resurfacing Treatments-min.jpg'

function Blog() {
    const [selectedCategory, setSelectedCategory] = useState("View all");
    const [currentIndex, setCurrentIndex] = useState(0);
    // const itemsPerPage = 7; 
    const [itemsPerPage, setBlogsPerPage] = useState(8);

    useEffect(() => {
        const updateBlogsPerPage = () => {
            if (window.innerWidth <= 700) {
                setBlogsPerPage(4);
            } else if (window.innerWidth <= 1000) {
                setBlogsPerPage(7);
            } else {
                setBlogsPerPage(9);
            }
        };

        updateBlogsPerPage();
        window.addEventListener("resize", updateBlogsPerPage);
        return () => window.removeEventListener("resize", updateBlogsPerPage);
    }, []);


    const blogs = [
        {
            title: "Medi-Facials: The Ultimate Skin Rejuvenation Treatment",
            p: "Discover how medi-facials provide effective skin rejuvenation, leaving your skin glowing and refreshed.",
            author: "Anjali Verma",
            authorImg: "https://img.freepik.com/free-photo/portrait-beautiful-young-woman-having-facial-treatment_1157-14194.jpg?w=1060",
            date: "Feb 10, 2025",
            image: img1,
            category: "Skin"
        },
        {
            title: "Laser Hair Removal: The Hassle-Free Solution for Smooth Skin",
            p: "Say goodbye to shaving and waxing with laser hair removal, a long-lasting solution for smooth, hair-free skin.",
            author: "Riya Mehta",
            authorImg: "https://img.freepik.com/free-photo/portrait-woman-getting-laser-hair-removal-treatment-skin-care_1157-14225.jpg?w=1060",
            date: "Feb 15, 2025",
            image: img2,
            category: "Hair"
        },
        {
            title: "IV Therapy for Skin, Hair & Body Wellness",
            p: "Experience the rejuvenating benefits of IV therapy for enhancing your skin, hair, and overall wellness.",
            author: "Aarav Sharma",
            authorImg: "https://img.freepik.com/free-photo/young-woman-getting-iv-therapy-treatment-skin-care-health_1157-13747.jpg?w=1060",
            date: "Feb 20, 2025",
            image: img3,
            category: "Wellness"
        },
        {
            title: "Carbon Laser Peel: The Secret to Flawless Skin",
            p: "Achieve clear, radiant skin with the revolutionary carbon laser peel that targets acne and pigmentation.",
            author: "Nikita Soni",
            authorImg: "https://img.freepik.com/free-photo/close-up-woman-having-carbon-laser-peel-treatment_1157-15536.jpg?w=1060",
            date: "Feb 25, 2025",
            image: img4,
            category: "Skin"
        },
        {
            title: "Hair GFC & PRP: The Most Effective Hair Growth Solutions",
            p: "Explore hair growth solutions like GFC and PRP that stimulate hair follicles and promote natural hair growth.",
            author: "Sanya Mehta",
            authorImg: "https://img.freepik.com/free-photo/young-woman-getting-hair-prp-treatment_1157-14167.jpg?w=1060",
            date: "Mar 1, 2025",
            image: img5,
            category: "Hair"
        },
        {
            title: "PMU (Permanent Makeup): Enhancing Natural Beauty with Long-Lasting Results",
            p: "Permanent makeup solutions like eyebrow tattoos, eyeliner, and lip tint for a long-lasting enhancement.",
            author: "Pooja Gupta",
            authorImg: "https://img.freepik.com/free-photo/beautiful-woman-eyebrow-tattoo-pmu_1157-12007.jpg?w=1060",
            date: "Mar 5, 2025",
            image: img6,
            category: "Beauty"
        },
        {
            title: "Skin Brightening: Achieve a Radiant and Even Complexion",
            p: "Brighten your skin with treatments designed to even out skin tone, reduce dark spots, and promote a healthy glow.",
            author: "Rashi Kapoor",
            authorImg: "https://img.freepik.com/free-photo/young-woman-having-skin-brightening-treatment_1157-12974.jpg?w=1060",
            date: "Mar 10, 2025",
            image: img7,
            category: "Skin"
        },
        {
            title: "Hair Transplant: Restore Your Hair, Restore Your Confidence",
            p: "Regain your confidence with hair transplant treatments that restore natural, fuller hair.",
            author: "Anjali Sinha",
            authorImg: "https://img.freepik.com/free-photo/young-man-hair-transplant-hair-restoration-surgery_1157-13978.jpg?w=1060",
            date: "Mar 15, 2025",
            image: img8,
            category: "Hair"
        },
        {
            title: "Anti-DHT Mesotherapy: Prevent Hair Loss and Promote Hair Growth",
            p: "Combat hair loss and promote growth with anti-DHT mesotherapy, which targets hair follicle health.",
            author: "Sanya Mehta",
            authorImg: "https://img.freepik.com/free-photo/close-up-woman-hair-mesotherapy-treatment_1157-14113.jpg?w=1060",
            date: "Mar 20, 2025",
            image: img9,
            category: "Hair"
        },
        {
            title: "Scar Revision or Reduction Treatments: Smooth and Refined Skin",
            p: "Get smoother skin and reduce the appearance of scars with advanced revision treatments.",
            author: "Tanya Sharma",
            authorImg: "https://img.freepik.com/free-photo/young-woman-face-scar-revision-treatment_1157-14209.jpg?w=1060",
            date: "Mar 25, 2025",
            image: img10,
            category: "Skin"
        },
        {
            title: "Laser Resurfacing Treatments: Smooth, Youthful Skin in No Time",
            p: "Achieve youthful, radiant skin quickly with laser resurfacing treatments that help reduce wrinkles and skin imperfections.",
            author: "Sanya Mehta",
            authorImg: "https://img.freepik.com/free-photo/close-up-woman-laser-skin-resurfacing-treatment_1157-15163.jpg?w=1060",
            date: "Apr 1, 2025",
            image: img11,
            category: "Skin"
        }
    ];

    const categories = ["View all", "Skin", "Hair", "Wellness", 'Beauty'];

    // const filteredBlogs =
    //     selectedCategory === "View all"
    //         ? blogs
    //         : blogs.filter((blog) => blog.category === selectedCategory);
    const navigate = useNavigate();
    // const HandleNavigation = (path) => {
    //     navigate(path);
    // };
    const HandleNavigation = (title) => {
        const formattedTitle = title.toLowerCase().replace(/\s+/g, "-"); // Slug conversion
        window.scrollTo(0, 0);
        navigate(`/blog-detail/${formattedTitle}`);
    };
    // 

    // Category filtering logic
    const filteredBlogs = selectedCategory === "View all"
        ? blogs
        : blogs.filter(blog => blog.category === selectedCategory);

    // Pagination logic
    const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
    const visibleBlogs = filteredBlogs.slice(currentIndex, currentIndex + itemsPerPage);

    // Navigation handlers
    const goNext = () => {
        if (currentIndex + itemsPerPage < filteredBlogs.length) {
            setCurrentIndex(currentIndex + itemsPerPage);
        }
    };

    const goPrev = () => {
        if (currentIndex - itemsPerPage >= 0) {
            setCurrentIndex(currentIndex - itemsPerPage);
        }
    };
    return (
        <>
            <div className="blog-page">
                <div className="content_top">
                    <div>
                        <h3 className="blog_title">BLOG</h3>
                        <h2 className="slider-heading">
                            Latest <img src={Frame} alt="" /> Insights
                        </h2>
                        <p className="slider-subheading">
                            Explore in-depth expert advice, insightful tips, and the most
                            current trends in skincare, haircare, and a variety of aesthetic
                            treatments to enhance your beauty routine.
                        </p>
                    </div>
                </div>
                {/* Category Filter */}
                <div className="blogs_card_page">
                    <div className="categories-filter">
                        <h3>Blog Categories</h3>
                        <ul>
                            {categories.map((category) => (
                                <li
                                    key={category}
                                    className={selectedCategory === category ? "active" : ""}
                                    onClick={() => setSelectedCategory(category)}>
                                    {category}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Blog List */}
                    <div className="blog-wrapper">
                        <div className="blog-cards">
                            {visibleBlogs.map((blog, index) => (
                                <div key={index} className="blog-card">
                                    <img
                                        src={blog.image}
                                        alt={blog?.title}
                                        className="card-image"
                                    />
                                    <div className="ct-tm">
                                        <h3>{blog?.category}</h3>
                                        <h4>5 min read</h4>
                                    </div>
                                    <h3 className="card-title">{blog?.title}</h3>
                                    <h3 className="card-p">{blog?.p}</h3>
                                    <div className="author">
                                        <div className="aut_text-img">
                                            <img src={blog?.authorImg} />
                                            <div className="aut_text">
                                                <p className="card-author">{blog?.author}</p>
                                                <p className="card-date">{blog?.date}</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => HandleNavigation(`${blog?.title}`)}
                                            className="read-more-btn">
                                            Read Full Blog
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Pagination Controls */}
            <div className="pagination">
                <button onClick={goPrev} disabled={currentIndex === 0}>
                    <FaArrowLeft /> Prev
                </button>
                <span> Page {currentIndex / itemsPerPage + 1} of {totalPages} </span>
                <button onClick={goNext} disabled={currentIndex + itemsPerPage >= filteredBlogs.length}>
                    Next <FaArrowRight />
                </button>
            </div>
        </>
    );
}

export default Blog;

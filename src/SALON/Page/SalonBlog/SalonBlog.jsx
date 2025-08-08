import React, { useEffect, useState, useMemo, useRef, useCallback } from "react";
import "./SalonBlog.scss";
import { useNavigate } from "react-router-dom";
import { Search, ArrowLeft, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import imgBlog from "../../../assets/blog.jpg";

// Images ka import
// import img1 from "../../../assets/TrendingTreatments/Medi-Facials-min.jpg";
// import img2 from "../../../assets/TrendingTreatments/Laser Hair Removal-min.jpg";
// import img3 from "../../../assets/TrendingTreatments/IV Therapy for Skin, Hair & Body Care-min.jpg";
// import img4 from "../../../assets/TrendingTreatments/Carbon Laser Peel_11zon.jpg";
// import img5 from "../../../assets/TrendingTreatments/Hair GFC & PRP-min.jpg";
// import img6 from "../../../assets/TrendingTreatments/PMU (Permanent Makeup)-min.jpg";
// import img7 from "../../../assets/TrendingTreatments/Skin Brightening-min.jpg";
// import img8 from "../../../assets/TrendingTreatments/Hair Transplantation-min.jpg";
// import img9 from "../../../assets/TrendingTreatments/Anti-DHT Mesotherapy-min.jpg";
import WebPImage from "../../../util/WebPImage";
import { blogs } from "./SalonBlogDetail/SalonBlogDetail";
import { useDispatch, useSelector } from "react-redux";
import { fetchSalonBlogs } from "../../../features/salon/salonBlogSlice";
import LoaderPage from "../../../util/Loader/LoaderPage";
import BlogError from "../../../util/BlogError/BlogError";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// --- FIX #1: DATA KO COMPONENT KE BAHAR NIKALEIN ---
// Isse yeh array baar-baar nahi banenge aur loop nahi banega.
// const allBlogs = [
//     { id: 1, title: "The Ultimate Guide to Glowing Skin Before a Special Event", description: "Discover the perfect pre-event skincare routine including facials, hydrating treatments.", image: img1, category: "Skin", date: "10 July" },
//     { id: 2, title: "7 Signs You Need a Hair Spa (And What to Expect)", description: "Stay ahead of the beauty curve! We explore the hottest hair spa, and what to...", image: img2, category: "Hair", date: "11 July" },
//     { id: 3, title: "Top 5 Salon Trends in Bangalore This Year", description: "Discover the perfect pre-event skincare routine including facials, hydrating treatments.", image: img3, category: "Styling", date: "12 July" },
//     { id: 4, title: "Discover the hottest nail colours and styles trending", description: "Discover the perfect pre-event skincare routine including facials, hydrating treatments.", image: img4, category: "Nails", date: "13 July" },
//     { id: 5, title: "Everything you need to know about hair extensions", description: "Discover the perfect pre-event skincare routine including facials, hydrating treatments.", image: img5, category: "Hair", date: "14 July" },
//     { id: 6, title: "Ultimate guide for frizz-free and sleek hair with Obw", description: "Discover the perfect pre-event skincare routine including facials, hydrating treatments.", image: img6, category: "Hair", date: "15 July" },
//     { id: 7, title: "beauty and hair preparation guide for Eid", description: "Discover the perfect pre-event skincare routine including facials, hydrating treatments.", image: img7, category: "Skin", date: "16 July" },
//     { id: 8, title: "ultimate summer haircare guide & Maintenance", description: "Discover the perfect pre-event skincare routine including facials, hydrating treatments.", image: img8, category: "Hair", date: "17 July" },
//     { id: 9, title: "3 Must-try products for radiant skin during this season", description: "Discover the perfect pre-event skincare routine including facials, hydrating treatments.", image: img9, category: "Skin", date: "18 July" },
//     { id: 10, title: "A guide to hair coloring", description: "Explore the world of hair color with our expert tips and trend analysis for the season.", image: img2, category: "Coloring", date: "19 July" },
//     { id: 11, title: "Advanced Skin Treatments", description: "A look into the most advanced skin treatments available today for a youthful glow.", image: img1, category: "Skin", date: "20 July" },
// ];

const allBlogs = blogs;

// const categories = ["View all", "Styling", "Hair", "Nails", "Skin", "Coloring"];

const getBlogsPerPage = () => window.innerWidth <= 992 ? 8 : 9;

const SalonBlog = () => {
    const navigate = useNavigate();

    // --- STATE MANAGEMENT ---
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("View all");
    const [currentPage, setCurrentPage] = useState(1);
    const [blogsPerPage, setBlogsPerPage] = useState(getBlogsPerPage());
    const [visibleCategories, setVisibleCategories] = useState([]);
    const [dropdownCategories, setDropdownCategories] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const filtersContainerRef = useRef(null);
    const categoryButtonRefs = useRef({});

    // --- FIX #2: useEffect KO THEEK KAREIN ---
    // Is useEffect ko ab sirf ek baar chalna chahiye jab component load ho.
    // Empty dependency array `[]` ka matlab hai - "sirf ek baar chalo".
    // apis
    const dispatch = useDispatch();
    const { loading, apiblogs, error } = useSelector(state => state.salonBlog);
    useEffect(() => {
        dispatch(fetchSalonBlogs());
    }, [dispatch]);
    const categories = useMemo(() => {
        const uniqueCategories = Array.from(
            new Set(apiblogs.map(blog => blog?.category).filter(Boolean))
        );
        return ["View all", ...uniqueCategories];
    }, [apiblogs]);

    const HandleNavigation = (title) => {
        const formattedTitle = title.toLowerCase().replace(/\s+/g, "-"); // Slug conversion
        window.scrollTo(0, 0);
        navigate(`/blog-detail/${formattedTitle}`);
    };

    useEffect(() => {
        const calculateVisibleCategories = () => {
            if (!filtersContainerRef.current) return;

            const containerWidth = filtersContainerRef.current.offsetWidth;
            const moreButtonWidth = 100;
            let currentWidth = 0;
            const tempVisible = [];
            const tempDropdown = [];

            categories.forEach((category) => {
                const tabWidth = categoryButtonRefs.current[category]?.offsetWidth + 16;

                if (currentWidth + tabWidth < containerWidth - moreButtonWidth) {
                    tempVisible.push(category);
                    currentWidth += tabWidth;
                } else {
                    tempDropdown.push(category);
                }
            });

            setVisibleCategories(tempVisible);
            setDropdownCategories(tempDropdown);

        };

        const handleResize = () => {
            setBlogsPerPage(getBlogsPerPage());
            calculateVisibleCategories();
        };

        handleResize(); // Component load hone par ek baar chalao
        window.addEventListener('resize', handleResize); // Resize par chalao

        // Component hatne par listener ko saaf karo
        return () => window.removeEventListener('resize', handleResize);
    }, [apiblogs]); // <-- YEH SABSE ZAROORI FIX HAI (EMPTY ARRAY)

    // --- FILTERING AND PAGINATION LOGIC ---
    const filteredBlogs = useMemo(() => {
        let filtered = apiblogs; // ✅ Use API se aaya data

        if (searchTerm) {
            filtered = filtered.filter(blog =>
                blog.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedCategory !== "View all") {
            filtered = filtered.filter(blog => blog.category === selectedCategory);
        }

        return filtered;
    }, [searchTerm, selectedCategory, apiblogs]);


    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, selectedCategory]);

    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
    const startIndex = (currentPage - 1) * blogsPerPage;
    const visibleBlogs = filteredBlogs.slice(startIndex, startIndex + blogsPerPage);

    // --- HANDLERS ---
    const handleNavigation = (title) => {
        const formattedTitle = title.toLowerCase().replace(/\s+/g, "-");
        window.scrollTo(0, 0);
        navigate(`/blog-detail/${title}`);
        console.log(('urlll', title))
    };

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo(0, 0);
        }
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setIsDropdownOpen(false);
    };

    // --- RENDER FUNCTIONS ---

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxPagesToShow = 5; // Max numbers to display directly (e.g., 1, 2, 3, ..., 8, 9, 10)

        if (totalPages <= maxPagesToShow) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            // Logic for displaying numbers like 1, 2, 3, ..., 8, 9, 10
            // Always show first two pages
            pageNumbers.push(1);
            pageNumbers.push(2);

            if (currentPage > 3) {
                pageNumbers.push("...");
            }

            // Show current page, and pages around it
            if (currentPage > 2 && currentPage < totalPages - 1) {
                if (currentPage === totalPages) { // If current page is the last one
                    pageNumbers.push(currentPage - 2);
                    pageNumbers.push(currentPage - 1);
                } else if (currentPage === totalPages - 1) { // If current page is second to last
                    pageNumbers.push(currentPage - 1);
                    pageNumbers.push(currentPage);
                } else {
                    pageNumbers.push(currentPage);
                }
            }

            if (currentPage < totalPages - 2) {
                pageNumbers.push("...");
            }

            // Always show last two pages
            if (totalPages > 2) {
                if (!pageNumbers.includes(totalPages - 1)) {
                    pageNumbers.push(totalPages - 1);
                }
                if (!pageNumbers.includes(totalPages)) {
                    pageNumbers.push(totalPages);
                }
            }

            // Filter out duplicates and sort
            const uniquePageNumbers = [...new Set(pageNumbers)].sort((a, b) => {
                if (a === "...") return 1;
                if (b === "...") return -1;
                return a - b;
            });

            return uniquePageNumbers.map((number, index) => {
                if (number === "...") {
                    return (
                        <span key={index} className="ellipsis">
                            ...
                        </span>
                    );
                }
                return (
                    <button
                        key={number}
                        onClick={() => handlePageChange(number)}
                        className={currentPage === number ? "active" : ""}
                    >
                        {number}
                    </button>
                );
            });
        }

        return pageNumbers.map((number) => (
            <button
                key={number}
                onClick={() => handlePageChange(number)}
                className={currentPage === number ? "active" : ""}
            >
                {number}
            </button>
        ));
    };
    // const renderPageNumbers = () => {
    //     if (totalPages <= 1) return null;
    //     return (
    //         <div className="pagination">
    //             <button
    //                 onClick={() => handlePageChange(currentPage - 1)}
    //                 disabled={currentPage === 1}
    //                 className="pagination-arrow"
    //             >
    //                 <ArrowLeft size={20} />
    //             </button>
    //             <span>{`Page ${currentPage} of ${totalPages}`}</span>
    //             <button
    //                 onClick={() => handlePageChange(currentPage + 1)}
    //                 disabled={currentPage === totalPages}
    //                 className="pagination-arrow"
    //             >
    //                 <ArrowRight size={20} />
    //             </button>
    //         </div>
    //     );
    // };


    if (loading) return <LoaderPage loading={true} />;
    if (blogs.length === 0 || error) return <BlogError />;
    console.log('visibleBlogs', visibleBlogs)

    return (
        <div className="salon-blog-page">
            <header className="salon-blog-header">
                <h4 className="blog_post">blog post</h4>
                <h1>Welcome To The Obw Salon Blog</h1>
                <div className="search-bar">
                    <Search className="search-icon" size={20} />
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </header>
            <main className="salon-blog-content">
                <div className="category-filters" ref={filtersContainerRef}>
                    <div style={{ visibility: 'hidden', position: 'absolute', display: 'flex', gap: '15px' }}>
                        {categories.map(cat => (
                            <button key={cat} ref={el => categoryButtonRefs.current[cat] = el} className="filter-button">{cat}</button>
                        ))}
                    </div>

                    {visibleCategories.map((category) => (
                        <button
                            key={category}
                            className={`filter-button ${selectedCategory === category ? "active" : ""}`}
                            onClick={() => handleCategorySelect(category)}
                        >
                            {category}
                        </button>
                    ))}

                    {dropdownCategories.length > 0 && (
                        <div className="dropdown-wrapper">
                            <button
                                className={`more-button ${isDropdownOpen || dropdownCategories.includes(selectedCategory) ? 'active' : ''}`}
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                More {isDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            </button>
                            {isDropdownOpen && (
                                <div className="dropdown-menu">
                                    {dropdownCategories.map(category => (
                                        <div
                                            key={category}
                                            className={`dropdown-item ${selectedCategory === category ? 'active' : ''}`}
                                            onClick={() => handleCategorySelect(category)}
                                        >
                                            {category}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <div className="salon-blog-grid">
                    {visibleBlogs?.length > 0 ? (
                        visibleBlogs?.map((blog, i) => (
                            <div key={i} className="salon-blog-card" onClick={() => handleNavigation(blog.url)}>
                                <WebPImage

                                    src={blog?.image || imgBlog}
                                    //   src={blog.image && blog.image.trim() !== "" ? blog.image : imgBlog} 

                                    alt={blog?.title} className="card-image" />
                                <div className="card-content">
                                    <div className="info_title">
                                        <p>{blog?.category}</p>
                                        <p>{blog?.published_at}</p>
                                    </div>
                                    <h3 className="card-title">{blog.title}</h3>
                                    <p className="card-description">
                                        {blog?.subtitle?.length > 80
                                            ? blog?.subtitle?.slice(0, 80) + "..."
                                            : blog?.subtitle}
                                        {blog?.subtitle?.length > 80 && (
                                            <span className="read-more">Read more</span>
                                        )}
                                    </p>


                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="no-results">No blogs found. Try a different search or category.</p>
                    )}
                </div>

                {/* {renderPageNumbers()} */}
                {totalPages > 1 && ( // Only show pagination if there's more than one page
                    <div className="pagination">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="pagination-prev-next pre-"
                        >
                            <FaArrowLeft /> Previous
                        </button>
                        <div className="page-numbers">{renderPageNumbers()}</div>
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="pagination-prev-next next-"
                        >
                            Next <FaArrowRight />
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
};

export default SalonBlog;

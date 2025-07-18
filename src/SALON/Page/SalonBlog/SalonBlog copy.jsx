import React, { useEffect, useState, useMemo } from "react";
import "./SalonBlog.scss";
import { useNavigate } from "react-router-dom";
import { Search, ArrowLeft, ArrowRight } from 'lucide-react';

// Import your images here (make sure paths are correct)
import img1 from "../../../assets/TrendingTreatments/Medi-Facials-min.jpg";
import img2 from "../../../assets/TrendingTreatments/Laser Hair Removal-min.jpg";
import img3 from "../../../assets/TrendingTreatments/IV Therapy for Skin, Hair & Body Care-min.jpg";
import img4 from "../../../assets/TrendingTreatments/Carbon Laser Peel_11zon.jpg";
import img5 from "../../../assets/TrendingTreatments/Hair GFC & PRP-min.jpg";
import img6 from "../../../assets/TrendingTreatments/PMU (Permanent Makeup)-min.jpg";
import img7 from "../../../assets/TrendingTreatments/Skin Brightening-min.jpg";
import img8 from "../../../assets/TrendingTreatments/Hair Transplantation-min.jpg";
import img9 from "../../../assets/TrendingTreatments/Anti-DHT Mesotherapy-min.jpg";
import WebPImage from "../../../util/WebPImage";


const SalonBlog = () => {
    const navigate = useNavigate();

    // --- STATE MANAGEMENT ---
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("View all");
    const [currentPage, setCurrentPage] = useState(1);
    // const blogsPerPage = 9; // Display 9 blogs per page in a 3x3 grid
 const [blogsPerPage, setBlogsPerPage] = useState(getBlogsPerPage());

  function getBlogsPerPage() {
    return window.innerWidth <= 992 ? 8 : 9;
  }
    // --- DATA ---
    // (You would typically fetch this data from an API)
    const allBlogs = [
        { id: 1, title: "The Ultimate Guide to Glowing Skin Before a Special Event", description: "Discover the perfect pre-event skincare routine including facials, hydrating treatments.", image: img1, category: "Skin" },
        { id: 2, title: "7 Signs You Need a Hair Spa (And What to Expect)", description: "Stay ahead of the beauty curve! We explore the hottest hair spa, and what to...", image: img2, category: "Hair" },
        { id: 3, title: "Top 5 Salon Trends in Bangalore This Year", description: "Discover the perfect pre-event skincare routine including facials, hydrating treatments.", image: img3, category: "Styling" },
        { id: 4, title: "Discover the hottest nail colours and styles trending", description: "Discover the perfect pre-event skincare routine including facials, hydrating treatments.", image: img4, category: "Nails" },
        { id: 5, title: "Everything you need to know about hair extensions", description: "Discover the perfect pre-event skincare routine including facials, hydrating treatments.", image: img5, category: "Hair" },
        { id: 6, title: "Ultimate guide for frizz-free and sleek hair with Obw", description: "Discover the perfect pre-event skincare routine including facials, hydrating treatments.", image: img6, category: "Hair" },
        { id: 7, title: "beauty and hair preparation guide for Eid", description: "Discover the perfect pre-event skincare routine including facials, hydrating treatments.", image: img7, category: "Skin" },
        { id: 8, title: "ultimate summer haircare guide & Maintenance", description: "Discover the perfect pre-event skincare routine including facials, hydrating treatments.", image: img8, category: "Hair" },
        { id: 9, title: "3 Must-try products for radiant skin during this season", description: "Discover the perfect pre-event skincare routine including facials, hydrating treatments.", image: img9, category: "Skin" },
        { id: 10, title: "A guide to hair coloring", description: "Explore the world of hair color with our expert tips and trend analysis for the season.", image: img2, category: "Coloring" },
        { id: 11, title: "Advanced Skin Treatments", description: "A look into the most advanced skin treatments available today for a youthful glow.", image: img1, category: "Skin" },
    ];

    const categories = ["View all", "Styling", "Hair", "Nails", "Skin", "Coloring"];

    // --- FILTERING AND PAGINATION LOGIC ---
    const filteredBlogs = useMemo(() => {
        let blogs = allBlogs;

        // 1. Filter by search term (case-insensitive)
        if (searchTerm) {
            blogs = blogs.filter(blog =>
                blog.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // 2. Filter by category
        if (selectedCategory !== "View all") {
            blogs = blogs.filter(blog => blog.category === selectedCategory);
        }

        return blogs;
    }, [searchTerm, selectedCategory, allBlogs]);

    // Reset to page 1 when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, selectedCategory]);

    // Pagination calculations
    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
    const startIndex = (currentPage - 1) * blogsPerPage;
    const visibleBlogs = filteredBlogs.slice(startIndex, startIndex + blogsPerPage);

    // --- HANDLERS ---
    const handleNavigation = (title) => {
        const formattedTitle = title.toLowerCase().replace(/\s+/g, "-");
        window.scrollTo(0, 0);
        navigate(`/blog-detail/${formattedTitle}`);
    };

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo(0, 0);
        }
    };
    
   // In your SalonBlog.jsx file...

    // --- RENDER FUNCTIONS ---
    const renderPageNumbers = () => {
        if (totalPages <= 1) return null;

        const pages = [];
        const pageNeighbours = 1; // How many pages to show on each side of the current page

        // Helper to add a range of pages
        const addPageRange = (start, end) => {
            for (let i = start; i <= end; i++) {
                pages.push(i);
            }
        };

        // Always add the first page
        pages.push(1);

        // Add ellipsis if there's a gap after the first page
        if (currentPage - pageNeighbours > 2) {
            pages.push('...');
        }

        // Add pages around the current page
        addPageRange(
            Math.max(2, currentPage - pageNeighbours),
            Math.min(totalPages - 1, currentPage + pageNeighbours)
        );

        // Add ellipsis if there's a gap before the last page
        if (currentPage + pageNeighbours < totalPages - 1) {
            pages.push('...');
        }
        
        // Always add the last page
        if (totalPages > 1) {
            pages.push(totalPages);
        }

        // Remove duplicates that might occur in edge cases
        const uniquePages = [...new Set(pages)];

        return (
            <div className="pagination-container">
                <div className="pagination">
                    <button
                        className="prev-next-btn"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        <ArrowLeft size={16} /> Previous
                    </button>
                    <div className="page-numbers">
                        {uniquePages.map((page, index) => {
                            if (page === '...') {
                                return <span key={index} className="ellipsis">...</span>;
                            }
                            return (
                                <button
                                    key={index}
                                    className={`page-btn ${currentPage === page ? 'active' : ''}`}
                                    onClick={() => handlePageChange(page)}
                                >
                                    {page}
                                </button>
                            );
                        })}
                    </div>
                    <button
                        className="prev-next-btn"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next <ArrowRight size={16} />
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="salon-blog-page">
            <header className="salon-blog-header">
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
                <div className="category-filters">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`filter-button ${selectedCategory === category ? "active" : ""}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="salon-blog-grid">
                    {visibleBlogs.length > 0 ? (
                        visibleBlogs.map((blog) => (
                            <div key={blog.id} className="salon-blog-card" onClick={() => handleNavigation(blog.title)}>
                                <WebPImage src={blog.image} alt={blog.title} className="card-image" />
                                <div className="card-content">
                                    <div className="info_title">
                                        <p>{blog.category}</p>
                                        <p>10July</p>
                                    </div>
                                    <h3 className="card-title">{blog.title}</h3>
                                    <p className="card-description">
                                        {blog.description} <span className="read-more">Read more</span>
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="no-results">No blogs found. Try a different search or category.</p>
                    )}
                </div>
                
                {renderPageNumbers()}
            </main>
        </div>
    );
};

export default SalonBlog;
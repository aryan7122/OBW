import React, { useEffect, useMemo, useState } from "react";
import "./Blog.scss";
import Frame from "../../assets/about/Frame.svg";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import imgBlog from "../../assets/Blog.jpg";

import img1 from '../../assets/blog/Hair Transplant Surgery for Men What You Need to Know.webp'
import img2 from '../../assets/blog/Q-Switch Laser Glow Without Filters.webp'
import img3 from '../../assets/blog/Laser Hair Reduction for Men A Smarter Way to Stay Groomed.webp'
import img4 from '../../assets/blog/IV Therapy Instant Wellness, Inside Out.webp'

import img7 from "../../assets/TrendingTreatments/Skin Brightening-min.jpg";
import img10 from "../../assets/TrendingTreatments/Scar Revision or Reduction-min.jpg";
import img5 from "../../assets/TrendingTreatments/Hair GFC & PRP-min.jpg";
// import img3 from "../../assets/TrendingTreatments/IV Therapy for Skin, Hair & Body Care-min.jpg";
import img6 from "../../assets/TrendingTreatments/PMU (Permanent Makeup)-min.jpg";
import img8 from "../../assets/TrendingTreatments/Hair Transplantation-min.jpg";
import img9 from "../../assets/TrendingTreatments/Anti-DHT Mesotherapy-min.jpg";
import img11 from "../../assets/TrendingTreatments/Laser Resurfacing Treatments-min.jpg";
import WebPImage from "../../util/WebPImage";
import { useDispatch, useSelector } from "react-redux";
import { fetchClinicBlogs } from "../../features/clinic/clinicBlogSlice";
import LoaderPage from "../../util/Loader/LoaderPage";
import BlogError from "../../util/BlogError/BlogError";

export const blogs = [
  {
    title: "Hair Transplant Surgery for Men: What You Need to Know",
    p: "Hair loss can feel frustrating, especially when it starts to affect your confidence. If you're someone who's tried everything, oils, shampoos, even hair masks, with little to no success, hair transplant surgery might be a solution worth exploring. It's more common (and safer) than you might think!",
    author: "Dr. Vikram Singh",
    authorImg: "https://img.freepik.com/free-photo/young-man-hair-transplant-hair-restoration-surgery_1157-13978.jpg?w=1060",
    date: "Jul 22, 2025",
    image: img1, // Assuming img1 is imported for this blog
    category: "Hair",
  },
  {
    title: "Laser Hair Reduction for Men: A Smarter Way to Stay Groomed",
    p: "Let’s face it, dealing with unwanted body hair isn’t fun. Shaving causes razor burns, waxing is painful, and the results never last. That’s why more men are turning to laser hair reduction. It's clean, effective, and gives long-term results with minimal effort.",
    author: "Dr. Priya Sharma",
    authorImg: "https://img.freepik.com/free-photo/portrait-beautiful-young-woman-having-facial-treatment_1157-14194.jpg?w=1060",
    date: "Jul 25, 2025",
    image: img3, // Assuming img2 is imported for this blog
    category: "Anti-aging",
  },
  {
    title: "Q-Switch Laser: Glow Without Filters",
    p: "Dark spots, tanning, dull skin, or acne marks can sometimes make you feel less like yourself. That’s where Q-Switch Laser treatment comes in a gentle, effective way to revive your natural glow and even out your skin tone without damaging your skin.",
    author: "Nikita Soni",
    authorImg: "https://img.freepik.com/free-photo/close-up-woman-having-carbon-laser-peel-treatment_1157-15536.jpg?w=1060",
    date: "Jul 28, 2025",
    image: img2, // Assuming img3 is imported for this blog
    category: "Skin",
  },
  {
    title: "IV Therapy: Instant Wellness, Inside Out",
    p: "IV Therapy is a fast and effective way to give your body exactly what it needs vitamins, minerals, and hydration directly into your bloodstream for quicker absorption and better results.",
    author: "Aarav Sharma",
    authorImg: "https://img.freepik.com/free-photo/young-woman-getting-iv-therapy-treatment-skin-care-health_1157-13747.jpg?w=1060",
    date: "Aug 01, 2025",
    image: img4, // Assuming img4 is imported for this blog
    category: "Botox",
  },
];

function Blog() {
  const dispatch = useDispatch();
  const { loading, apiblogs, error } = useSelector(state => state.clinicBlog);
    useEffect(() => {
        dispatch(fetchClinicBlogs());
    }, [dispatch]);
  console.log('blog',apiblogs)

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


  // const categories = ["View all", "Skin", "Hair", "Anti-aging", "Botox"];
 const categories = useMemo(() => {
        const uniqueCategories = Array.from(
            new Set(apiblogs.map(blog => blog?.category).filter(Boolean))
        );
        return ["View all", ...uniqueCategories];
    }, [apiblogs]);
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
 const filteredBlogs =
  selectedCategory === "View all"
    ? apiblogs
    : apiblogs.filter((blog) => blog.category === selectedCategory);

  // // Pagination logic
  // const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  // const visibleBlogs = filteredBlogs.slice(
  //   currentIndex,
  //   currentIndex + itemsPerPage
  // );

  // // // Navigation handlers
  // const goNext = () => {
  //   if (currentIndex + itemsPerPage < filteredBlogs.length) {
  //     setCurrentIndex(currentIndex + itemsPerPage);
  //   }
  // };

  // const goPrev = () => {
  //   if (currentIndex - itemsPerPage >= 0) {
  //     setCurrentIndex(currentIndex - itemsPerPage);
  //   }
  // };



  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1); // Changed from currentIndex to currentPage
  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleBlogs = filteredBlogs.slice(startIndex, endIndex);
  // const [itemsPerPage, setBlogsPerPage] = useState(8);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); // Scroll to top when page changes
  };

  // Generate pagination numbers to display (similar to the image)
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

  useEffect(() => {
    // Reset current page to 1 when category changes
    setCurrentPage(1);
  }, [selectedCategory]);


    if (loading) return   <LoaderPage loading={true} />;
    if (blogs.length === 0) return <BlogError  />;

    
  return (
    <div className="clinic_blog_p">
      <div className="blog-page">
        <div className="content_top">
          <div>
            <h3 className="blog_title">BLOG</h3>
            <h2 className="slider-heading">
              Latest <img src={Frame} alt="" /> Insights
            </h2>
            {/* <p className="slider-subheading">
              Explore in-depth expert advice, insightful tips, and the most
              current trends in skincare, haircare, and a variety of aesthetic
              treatments to enhance your beauty routine.
            </p> */}
          </div>
        </div>
        {/* Category Filter */}
        <div className="blogs_card_page">

          <div className="blog_filter_card">
            <div className="categories-filter">
              <h3>Blog Categories</h3>
              <ul>
                {categories.map((category) => (
                  <li
                    key={category}
                    className={selectedCategory === category ? "active" : ""}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Blog List */}
          <div className="blog-wrapper">
            <div className="blog-cards">
              {visibleBlogs.map((blog, index) => (
                <div key={index} className="blog-card">
                  <div
                    onClick={() => HandleNavigation(`${blog?.url}`)}
                  >
                    <WebPImage
                      src={blog.image || imgBlog}
                      alt={blog?.title}
                      className="card-image"

                    />
                  </div>
                  <div className="ct-tm">
                    <h3>{blog?.category}</h3>
                    <h4>{blog?.published_at}</h4>
                  </div>
                  <h3 className="card-title" onClick={() => HandleNavigation(`${blog?.url}`)}
                  >{blog?.title}</h3>
                  <h3 className="card-p" >{blog?.subtitle}</h3>
                  {/* <div className="author">
                    <div className="aut_text-img">
                      <WebPImage src={blog?.authorImg} />
                      <div className="aut_text">
                        <p className="card-author">{blog?.author}</p>
                        <p className="card-date">{blog?.date}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => HandleNavigation(`${blog?.title}`)}
                      className="read-more-btn"
                    >
                      Read Full Blog
                    </button>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Pagination Controls */}
      {/* <div className="pagination">
        <button onClick={goPrev} disabled={currentIndex === 0}>
          <FaArrowLeft /> Prev
        </button>
        <span>
          {" "}
          Page {currentIndex / itemsPerPage + 1} of {totalPages}{" "}
        </span>
        <button
          onClick={goNext}
          disabled={currentIndex + itemsPerPage >= filteredBlogs.length}
        >
          Next <FaArrowRight />
        </button>
      </div> */}
      {/* Pagination Controls */}
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
    </div>
  );
}

export default Blog;

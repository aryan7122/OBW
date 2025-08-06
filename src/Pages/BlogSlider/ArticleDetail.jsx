import React, { useEffect, useState } from "react";
import "./ArticleDetail.scss";
import { FaAngleLeft } from "react-icons/fa";
import { FaLinkedin, FaFacebook, FaTwitter, FaLink } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import imgBlog from "../../assets/Blog.jpg";
import img1 from '../../assets/blog/Hair Transplant Surgery for Men What You Need to Know.webp'
import img2 from '../../assets/blog/Q-Switch Laser Glow Without Filters.webp'
import img3 from '../../assets/blog/Laser Hair Reduction for Men A Smarter Way to Stay Groomed.webp'
import img4 from '../../assets/blog/IV Therapy Instant Wellness, Inside Out.webp'

import WebPImage from "../../util/WebPImage";
import { blogs } from "./Blog";
import { ChevronLeft } from "lucide-react";
import { fetchClinicBlogDetail, fetchClinicBlogs } from "../../features/clinic/clinicBlogSlice";
import LoaderPage from "../../util/Loader/LoaderPage";
import BlogError from "../../util/BlogError/BlogError";
import { useDispatch, useSelector } from "react-redux";
const ArticleDetail = () => {
    const { id } = useParams();

    const dispatch = useDispatch();

    const { detailLoading, blogDetail, detailError, apiblogs } = useSelector(state => state.clinicBlog);
    console.log("📦 apiblogs", apiblogs);


  useEffect(() => {
  if (id) {
        console.log("🔥 Dispatching blog detail for slug:", id);

    dispatch(fetchClinicBlogDetail(id));
    dispatch(fetchClinicBlogs());
  }
}, [id]);

    console.log('api blogDetail', blogDetail)
    // console.log("Raw articleId:", id);
   

    const [pageUrl, setPageUrl] = useState('');

    // 3. Set the URL after the component mounts on the client-side
    useEffect(() => {
        setPageUrl(window.location.href);
    }, []);

    // 4. Update the handleCopyUrl function
    const handleCopyUrl = () => {
        if (!pageUrl) return; // Guard clause for safety

        navigator.clipboard.writeText(pageUrl).then(() => {
            toast.success("URL copied to clipboard!");
        }).catch(err => {
            toast.error("Failed to copy URL.");
            console.error("Copy failed: ", err);
        });
    };

    // 5. Update the handleShare function
    const handleShare = (platform) => {
        if (!pageUrl) return; // Guard clause for safety

        const encodedUrl = encodeURIComponent(pageUrl);
        let shareUrl = "";

        switch (platform) {
            case "linkedin":
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
                break;
            case "twitter":
                // You can also add text to the tweet
                const text = encodeURIComponent("Check out this amazing blog!");
                shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${text}`;
                break;
            case "facebook":
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
                break;
            default:
                return;
        }

        window.open(shareUrl, "_blank", "noopener,noreferrer"); // Added for security
    };

    const navigate = useNavigate();
    const HandleNavigation = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };
    const HandleNavigation2 = (title) => {
        const formattedTitle = title.toLowerCase().replace(/\s+/g, "-"); // Slug conversion
        window.scrollTo(0, 0);
        navigate(`/blog-detail/${formattedTitle}`);
    };

    // 
    const [email, setEmail] = useState("");

    // Email validation function
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Handle form submit
    const handleSubscribe = (e) => {
        e.preventDefault();

        // Validation check
        if (!email) {
            toast.error("Please enter your email!");
            return;
        }

        if (!isValidEmail(email)) {
            toast.error("Please enter a valid email address!");
            return;
        }

        // Success message
        toast.success("Subscribed successfully!");

        // Console log for debugging
        console.log("Subscribed Email:", email);

        // Reset email input
        setEmail("");
    };

    if (detailLoading) return <LoaderPage loading={true} />;
    if (detailError) return <BlogError />;
    if (!blogDetail || Object.keys(blogDetail).length === 0) {
        return <BlogError />;
    }
    return (
        <>
            <Toaster position="top-center" />
            <div className="article-detail">
                <div className="header">
                    <div className="cover-image">
                        <img src={blogDetail.image || imgBlog} alt="Cover image" />
                    </div>
                    <div className="right_content">
                        <button onClick={() => HandleNavigation('/blogs')} className="allBlg"><ChevronLeft size={16} strokeWidth={2} /> All Posts</button>
                        <div>

                            <div className="ct-tm">
                                <h3>{blogDetail?.category}</h3>
                                {/* <h4>{article?.category ? '5 min read' : ''}</h4> */}
                            </div>
                            <h1>{blogDetail.title}</h1>
                        </div>


                        <div className="meta">
                            <div className="meta-info">
                                <p>
                                    Published on
                                </p>
                                <p>
                                    <strong>{blogDetail.published_at}</strong>
                                </p>
                            </div>

                            <div className="meta-icons">
                                Share:
                                <div className="icons_">
                                    <span className="icon">
                                        <FaLink
                                            onClick={handleCopyUrl}

                                            title="Copy URL"
                                        />
                                    </span>
                                    <span className="icon">
                                        <FaLinkedin
                                            onClick={() => handleShare("linkedin")}
                                            title="Share on LinkedIn"
                                        />
                                    </span>
                                    <span className="icon">
                                        <FaTwitter
                                            onClick={() => handleShare("twitter")}
                                            title="Share on Twitter"
                                        />
                                    </span>
                                    <span className="icon">
                                        <FaFacebook
                                            onClick={() => handleShare("facebook")}
                                            title="Share on Facebook"
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="blog-data-detail">
                    <div className="content">
                        {/* {blogDetail.map((section, index) => (
                            <section key={index} className="section">
                                <h2>{section.heading}</h2>
                                <p>{section.content}</p>
                                {section.image &&
                                    <>
                                        <WebPImage src={section.image} alt={section.heading} className="section-image" />
                                        <div className="caption_img_">{formattedcaaptionImg}</div>
                                    </>
                                }
                                {section.list && (
                                    <ul>
                                        {section.list.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                                <p>{section.content_after}</p>

                            </section>
                        ))} */}
                         <div
                className="article-html-content"
                dangerouslySetInnerHTML={{ __html: blogDetail?.description }}
            ></div>

                    </div>


                    {/* <aside className="sidebar">
                        <div className="newsletter">
                            <h3>{article.newsletter.heading}</h3>
                            <p>Subscribe to receive the latest blog posts to your inbox every week.</p>

                            <form onSubmit={handleSubscribe}>
                                <input
                                    type="email"
                                    placeholder={article.newsletter.placeholder}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button className="blog_subscribing" type="submit">{article.newsletter.buttonText}</button>
                            </form>

                            <h4 className="link_P">
                                By subscribing you agree to with our{" "}
                                <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
                            </h4>
                        </div>
                    </aside> */}
                </div>
            </div>
            <div className="article-wrapper">
                <div className="title-all-bg">
                    <h3>Related Posts</h3>
                    <button onClick={() => HandleNavigation("/blogs")}
                        className="btn-view-all">View all</button>
                </div>
                <div className="article-cards">
                    {blogs.slice(0, 3).map((blog, index) => (
                        <div key={index} className="article-card">
                            <img
                                src={blog.image}
                                alt={blog?.title}
                                className="card-image"
                                onClick={() => HandleNavigation2(`${blog?.title}`)}
                            />
                            <div className="content_card_">
                                <div className="ct-tm">
                                    <h3>{blog?.category}</h3>
                                    {/* <h4>5 min read</h4> */}
                                </div>
                                <h3 className="card-title" onClick={() => HandleNavigation2(`${blog?.title}`)}>{blog?.title}</h3>
                                <h3 className="card-p">{blog?.p}</h3>
                                <div className="author">
                                    {/* <div className="aut_text-img">
                                    <img src={blog?.authorImg} />
                                    <div className="aut_text">
                                        <p className="card-author">{blog?.author}</p>
                                        <p className="card-date">{blog?.date}</p>
                                    </div>
                                </div> */}
                                    <button
                                        onClick={() => HandleNavigation2(`${blog?.title}`)}
                                        className="read-more-btn">
                                        Read more {'>'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </>
    );
};

export default ArticleDetail;

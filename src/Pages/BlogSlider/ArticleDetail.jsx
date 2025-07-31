import React, { useEffect, useState } from "react";
import "./ArticleDetail.scss";
import { FaAngleLeft } from "react-icons/fa";
import { FaLinkedin, FaFacebook, FaTwitter, FaLink } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import img1 from '../../assets/blog/Hair Transplant Surgery for Men What You Need to Know.webp'
import img2 from '../../assets/blog/Q-Switch Laser Glow Without Filters.webp'
import img3 from '../../assets/blog/Laser Hair Reduction for Men A Smarter Way to Stay Groomed.webp'
import img4 from '../../assets/blog/IV Therapy Instant Wellness, Inside Out.webp'

import WebPImage from "../../util/WebPImage";
import { blogs } from "./Blog";
import { ChevronLeft } from "lucide-react";
const ArticleDetail = () => {

    // Assuming img1, img2, img3, img4 are imported at the top of your file
    // e.g., import img1 from './path/to/image1.jpg';

    const data1 = {
        title: "Hair Transplant Surgery for Men: What You Need to Know",
        category: "Hair",
        author: "Dr. Vikram Singh",
        date: "Jul 22, 2025",
        coverImage: img1,
        sections: [
            {
                heading: "Introduction",
                content: "Hair loss can feel frustrating, especially when it starts to affect your confidence. If you're someone who's tried everything, oils, shampoos, even hair masks, with little to no success, hair transplant surgery might be a solution worth exploring. \n \n It's more common (and safer) than you might think! Let's break down how it works, what the process involves, and what you should know before making a decision."
            },
            {
                heading: "What is Hair Transplant Surgery?",
                content: "Hair transplant is a minor surgical procedure that moves healthy hair follicles from one part of your scalp (usually the back or sides) to the area where you’re losing hair, most often the front or top."
            },
            {
                heading: "There are two common types:",
                list: [
                    "FUE (Follicular Unit Extraction): Individual hair follicles are taken out and transplanted.",
                    "FUT (Follicular Unit Transplantation): A strip of scalp with healthy hair is removed, and follicles are separated and implanted."
                ],
                content_after: "Both methods are safe and effective when done by experienced doctors."
            },
            {
                heading: "Who is it for?",
                content: "Hair transplant is ideal for men who:",
                list: [
                    "Have male-pattern baldness",
                    "Have thinning or receding hairlines",
                    "Want a long-term solution instead of temporary fixes"
                ],
                content_after: "It's important to have enough healthy hair on your scalp for the doctor to work with."
            },
            {
                heading: "What Happens During the Procedure?",
                content: "You'll first have a consultation where the doctor checks your hair loss pattern and scalp condition. On the day of the procedure, your scalp is numbed so you won't feel pain. The doctor then carefully removes hair from the donor area and places it into the thinning/bald areas. It takes several hours and is usually done in a single day. You can go home the same day."
            },
            {
                heading: "Recovery & Results",
                list: [
                    "You may have mild swelling or redness for a few days.",
                    "Hair will start to shed (this is normal!) and then regrow naturally over 3-6 months.",
                    "Final results usually appear around 9-12 months after surgery."
                ]
            },
            {
                heading: "Conclusion",
                content: "Hair transplant surgery isn't just about getting hair back it's about getting your confidence back. If you're tired of hiding under caps or avoiding the mirror, this could be the moment to make a real change. At OBW Clinic, our experienced team uses safe, proven techniques to give you natural-looking results and long-term satisfaction. Book a consultation today and let's bring your hair and confidence back to life."
            }
        ],
        newsletter: {
            heading: "Subscribe to Newsletter",
            description: "Stay up-to-date with the latest skincare tips and articles by subscribing to our newsletter.",
            placeholder: "Enter your email",
            buttonText: "Subscribe"
        }
    };

    const data2 = {
        title: "Laser Hair Reduction for Men: A Smarter Way to Stay Groomed",
        category: "Grooming",
        author: "Dr. Priya Sharma",
        date: "Jul 25, 2025",
        coverImage: img3,
        sections: [
            {
                heading: "Introduction",
                content: "Let's face it, dealing with unwanted body hair isn't fun. Shaving causes razor burns, waxing is painful, and the results never last. That's why more men are turning to laser hair reduction. It's clean, effective, and gives long-term results with minimal effort. \n\n If you're tired of constant grooming or just want a neater, more defined look, this treatment might be exactly what you need. And yes, it works wonders at OBW Clinic."
            },
            {
                heading: "How It Works",
                content: "Laser hair reduction targets the roots of your hair using light energy. Over time, it reduces the thickness and growth of hair, making your skin feel smoother and cleaner with far less maintenance. It's not a one-time fix, but with a few sessions, the results are noticeable and lasting. At OBW Clinic, we use advanced technology to make sure the procedure is safe, quick, and comfortable for men of all skin types."
            },
            {
                heading: "Common Areas Men Treat",
                content: "Every man is different, but here are a few areas where laser hair reduction is often requested:",
                list: [
                    "Beard shaping for a clean jawline",
                    "Chest and stomach for a groomed, even look",
                    "Back and shoulders for a smooth finish",
                    "Neck to avoid frequent shaving and irritation"
                ]
            },
            {
                heading: "What Makes OBW Different",
                content: "At OBW Clinic, we don't just offer treatment, we offer guidance. You'll get a personal consultation, a clear treatment plan, and expert care throughout the journey. Our laser systems are safe, precise, and designed to minimize discomfort. Most importantly, we focus on natural-looking results that feel right for you."
            },
            {
                heading: "Conclusion",
                content: "Laser hair reduction is more than just a grooming upgrade; it's a confidence boost that saves time, effort, and stress. Whether you're after a sharper look or just want to feel better in your skin, we're here to help. Start your journey to smoother skin at OBW Clinic today and experience the difference for yourself."
            }
        ],
        newsletter: {
            heading: "Subscribe to Newsletter",
            description: "Stay up-to-date with the latest grooming tips and articles by subscribing to our newsletter.",
            placeholder: "Enter your email",
            buttonText: "Subscribe"
        }
    };

    const data3 = {
        title: "Q-Switch Laser: Glow Without Filters",
        category: "Skin",
        author: "Nikita Soni",
        date: "Jul 28, 2025",
        coverImage: img2,
        sections: [
            {
                heading: "Introduction",
                content: "Dark spots, tanning, dull skin, or acne marks can sometimes make you feel less like yourself. That's where Q-Switch Laser treatment comes in a gentle, effective way to revive your natural glow and even out your skin tone without damaging your skin. \n \n At OBW Clinic, we customize every Q-Switch Laser session to suit your skin's unique needs because you deserve clear, radiant skin that feels as good as it looks.",
                
            },
            {
                heading: "What Is a Q-Switch Laser?",
                content: "Q-Switch Laser is a non-invasive treatment that uses short bursts of laser light to break down pigmentation and dark spots deep within the skin. Your body then naturally clears out this pigment, revealing smoother, brighter skin underneath."
            },
            {
                heading: "Perfect for treating:",
                list: [
                    "Sun damage and tanning",
                    "Acne marks and scars",
                    "Uneven skin tone",
                    "Freckles and pigmentation"
                ]
            },
            {
                heading: "Why Women Love Q-Switch Laser",
                list: [
                    "Gentle Yet Powerful: Clears pigmentation without harming your skin",
                    "No Downtime: Go back to your routine right after",
                    "Quick Sessions: Takes just 15-30 minutes",
                    "Visible Glow: See real improvements in a few sittings"
                ]
            },
            {
                heading: "What to Expect",
                content: "Your treatment begins with a skin analysis by our expert. We'll cleanse your skin, and then gently apply the laser. You might feel a soft snapping sensation; it's quick and easy to handle. After the session, there may be slight redness for a few hours, but nothing major. With simple aftercare and good sun protection, you'll be glowing in no time."
            },
            {
                heading: "Feel Confident in Your Skin",
                content: "Q-Switch Laser isn't just about brighter skin it's about feeling confident and refreshed, every time you look in the mirror. At OBW Clinic, we make skincare simple, effective, and something to look forward to."
            }
        ],
        newsletter: {
            heading: "Subscribe to Newsletter",
            description: "Stay informed about the latest skincare trends and treatments by subscribing to our newsletter.",
            placeholder: "Enter your email",
            buttonText: "Subscribe"
        }
    };

    const data4 = {
        title: "IV Therapy: Instant Wellness, Inside Out",
        category: "Wellness",
        author: "Aarav Sharma",
        date: "Aug 01, 2025",
        coverImage: img4,
        sections: [
            {
                heading: "Feel Energized. Look Refreshed.",
                content: "IV Therapy is a fast and effective way to give your body exactly what it needs vitamins, minerals, and hydration directly into your bloodstream for quicker absorption and better results. \n\n Whether you're feeling low on energy, battling dull skin, recovering from stress, or just want an immunity boost, IV Therapy helps you feel better, faster."
            },
            {
                heading: "Why Try IV Therapy at OBW Clinic?",
                list: [
                    "Boosts energy levels naturally",
                    "Improves skin hydration and glow",
                    "Strengthens immunity and recovery",
                    "Reduces fatigue, stress, and brain fog"
                ],
                content_after: "Each drip is tailored to your body's needs because wellness isn't one-size-fits-all. Our experts assess your goals and create a custom infusion designed to help you feel your best."
            },
            {
                heading: "Simple, Safe, and Effective",
                content: "In just 30-45 minutes, you'll feel revitalized from within. No downtime. Just deep hydration and essential nutrients delivered directly where your body needs them most."
            },
            {
                heading: "Let Your Body Thank You",
                content: "Your body does a lot for you. Give it back the support it deserves with IV Therapy that works from the inside out."
            }
        ],
        newsletter: {
            heading: "Subscribe to Newsletter",
            description: "Stay informed about the latest health and wellness trends by subscribing to our newsletter.",
            placeholder: "Enter your email",
            buttonText: "Subscribe"
        }
    };

    const data0 = {
        title: " Not Found This page",
        category: "",
        author: "--",
        authorImg: "",
        date: "--",
        coverImage: "https://img.freepik.com/free-vector/no-data-concept-illustration_114360-626.jpg?t=st=1739623432~exp=1739627032~hmac=3de6e9d64703e8febb50e16ce40786018484b0e98f1e60d292d6445279a54f8f&w=1060",
        sections: [

            {
                heading: "",
                content: ""
            }
        ],
        newsletter: {
            heading: "Subscribe to Our Newsletter",
            description: "Stay updated on the latest anti-aging treatments and skincare tips by subscribing to our newsletter.",
            placeholder: "Enter your email",
            buttonText: "Subscribe"
        }
    };

    const { id } = useParams();
    console.log("Raw articleId:", id);
    const formattedcaaptionImg = decodeURIComponent(id)
        .replace(/-/g, " ") // Hyphen (-) ko space me replace karega
        .replace(/\b\w/g, char => char.toUpperCase()); // Har word ka pehla letter capital karega
    // ✅ URL Slug ko normal text me convert karo
    const formattedId = decodeURIComponent(id).toLowerCase();
    // const formattedId = decodeURIComponent(id).replace(/-/g, " ").toLowerCase();

    console.log("Formatted articleId:", formattedId);

    const getArticleData = () => {
        if (formattedId === "hair-transplant-surgery-for-men:-what-you-need-to-know") {
            return data1;
        } else if (formattedId === "laser-hair-reduction-for-men:-a-smarter-way-to-stay-groomed") {
            return data2;
        } else if (formattedId === "q-switch-laser:-glow-without-filters") {
            return data3;
        } else if (formattedId === "iv-therapy:-instant-wellness,-inside-out") {
            return data4;
        } else {
            return data0;
        }
    };

    const article = getArticleData();

    // const blogs = [
    //     {
    //         title: "Medi-Facials: The Ultimate Skin Rejuvenation Treatment",
    //         p: "Discover how medi-facials provide effective skin rejuvenation, leaving your skin glowing and refreshed.",
    //         author: "Anjali Verma",
    //         authorImg: "https://img.freepik.com/free-photo/portrait-beautiful-young-woman-having-facial-treatment_1157-14194.jpg?w=1060",
    //         date: "Feb 10, 2025",
    //         image: img1,
    //         category: "Skin"
    //     },
    //     {
    //         title: "Laser Hair Removal: The Hassle-Free Solution for Smooth Skin",
    //         p: "Say goodbye to shaving and waxing with laser hair removal, a long-lasting solution for smooth, hair-free skin.",
    //         author: "Riya Mehta",
    //         authorImg: "https://img.freepik.com/free-photo/portrait-woman-getting-laser-hair-removal-treatment-skin-care_1157-14225.jpg?w=1060",
    //         date: "Feb 15, 2025",
    //         image: img2,
    //         category: "Hair"
    //     },
    //     {
    //         title: "IV Therapy for Skin, Hair & Body Wellness",
    //         p: "Experience the rejuvenating benefits of IV therapy for enhancing your skin, hair, and overall wellness.",
    //         author: "Aarav Sharma",
    //         authorImg: "https://img.freepik.com/free-photo/young-woman-getting-iv-therapy-treatment-skin-care-health_1157-13747.jpg?w=1060",
    //         date: "Feb 20, 2025",
    //         image: img3,
    //         category: "Wellness"
    //     },
    // ];


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
    return (
        <>
            <Toaster position="top-center" />
            <div className="article-detail">
                <div className="header">
                    <div className="cover-image">
                        <img src={article.coverImage} alt="Cover image" />
                    </div>
                    <div className="right_content">
                        <button onClick={() => HandleNavigation('/blogs')} className="allBlg"><ChevronLeft size={16} strokeWidth={2} /> All Posts</button>
                        <div>

                            <div className="ct-tm">
                                <h3>{article?.category}</h3>
                                <h4>{article?.category ? '5 min read' : ''}</h4>
                            </div>
                            <h1>{article.title}</h1>
                        </div>


                        <div className="meta">
                            <div className="meta-info">
                                <p>
                                    Published on
                                </p>
                                <p>
                                    <strong>{article.date}</strong>
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
                        {article.sections.map((section, index) => (
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
                        ))}
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

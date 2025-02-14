import React from "react";
import "./ArticleDetail.scss";
import { FaAngleLeft } from "react-icons/fa";
import { FaLinkedin, FaFacebook, FaTwitter, FaLink } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ArticleDetail = () => {
    const data = {
        title: "The Science Behind Skin Peels: What You Need to Know",
        category: "Skin",
        author: "Aryan Solanki",
        date: "25 January 2025",
        coverImage: "https://s3-alpha-sig.figma.com/img/c08c/bca2/78b2d646e0acb22d61689f83b9d38feb?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ltGvqUU5GEKEhx0ci9-0C-6m2HQP6r0MYMG9H01XGaLeKtTlp0jXIuNSrUAh~m4i2Sg9s8n40McreWFub3K06Ptdz3qY8Q-bmppfarJtrFNOF2RANLptnEdnTiQKSEX2ruNW4zFTRSnBPj8YCSgkq5sOYcby9wIfJ97bcIpOgmhG5ZlRXwcNC~PJJWy5lAT6DZjlJb-Cd72psYv8Hww5hd9EIgBo1wBkGNKxcqgyCBRPuXlrG4C4~gNhpuA6niTg5uubo2x394C0kyGQUobNKoqTtSVDZWfFDDZkTqPpawD0qh0JIPIwxDw3r15Qonmn-2lM66kgHYp1KKxjfL9ANA__",
        sections: [
            {
                heading: "Introduction",
                content: "If you’re looking to rejuvenate your skin, improve texture, or address specific concerns like acne, pigmentation, or fine lines, skin peels could be your secret weapon. These treatments, performed by dermatologists, offer a range of solutions tailored to your skin type and needs. In this guide, we’ll walk you through the different types of skin peels, their benefits, and how to choose the right one for you"
            },
            {
                heading: "What Are Skin Peels?",
                content: "Skin peels, also known as chemical peels, involve applying a solution to the skin to exfoliate its top layers. This process promotes cell turnover, revealing fresher, smoother, and more radiant skin underneath. Depending on the type of peel, they can address various skin concerns, from acne scars to uneven tone.",
                image: "https://s3-alpha-sig.figma.com/img/eefb/2e44/219a501e9aa570ed081638ea5b1db6e3?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sqEGDEjtn2so8~9rSJ9I4LArWWir-hLf-unLbwTu~zbICAVcOrT0XQtMWj4-6cHhlrhn0tHTDMh0I235ZGR~F3WoqdWZwpb8Gwq4Mu8pqo~ts6M9N0uShVxAD6m0m2O-j1Ly4rFRCWOi55p6Z8PPOOOTttcGhSDTqeU3G~Ife3hCVhOV2LI-1eINk2Co3~G1FMWfS-4K3VXXcIy1dKC3DVER32HZIoxwMNNpv5rfqlhMvA6E2Oeu6oB0kJnvF8yKBIAkU9h0rH8H4gAd~yGmr1RrkbczppMGhIcMb67Ps7sZyAYucH4NhZQO2J8QLjaWI43aF6J8T0kwzesiwjuxkA__"
            },
            {
                heading: "How to Choose the Right Peel for You",
                content: "Selecting the perfect peel depends on your skin type, concerns, and goals. Here are some factors to consider:",
                list: [
                    "Skin Concerns: Identify your primary issue, such as acne, pigmentation, or aging.",
                    "Skin Type: Sensitive skin may benefit from gentler options like lactic peels, while oily skin can handle stronger peels like salicylic acid.",
                    "Downtime: Some peels, like TCA, require recovery time, whereas lighter peels have minimal downtime.",
                    "Professional Guidance: Always consult with a dermatologist to ensure the chosen peel is safe and effective for your skin.",
                ]
            },
            {
                heading: "What to Expect During a Skin Peel Treatment",
                content: "Here’s a quick rundown of what typically happens during a skin peel treatment:",
                list: [
                    "Consultation: Your dermatologist will examine your skin and recommend the appropriate peel.",
                    "Preparation: Your skin will be cleansed and prepped for the application.",
                    "Application: The peeling solution is applied and left on for a specific duration."
                ]
            },
            {
                heading: "Conclusion",
                content: `Results depend on the type of peel. Lighter peels may show immediate improvements, while deeper peels require a few days to a week for full effects to appear. Regular sessions can amplify results over time.
                            
                           Skin peels are a transformative treatment that can address various skin concerns and leave you with radiant, youthful skin. By understanding the types of peels and working with a professional, you can achieve your desired results safely and effectively.
                            Ready to embark on your journey to better skin? Book a consultation with OBW Clinical Services today and let us help you glow like never before!`
            }
        ],
        newsletter: {
            heading: "Subscribe to Newsletter",
            description: "Stay up-to-date with the latest skincare tips and articles by subscribing to our newsletter.",
            placeholder: "Enter your email",
            buttonText: "Subscribe"
        }
    };
    const blogs = [

        {
            title: "Top 5 Anti-Aging Treatments for Timeless Beauty",
            p: "Explore the most effective anti-aging solutions, from Botox to fillers, and discover how they help reduce fine lines, restore elasticity, and enhance your natural glow",
            author: "Sameer Devale",
            authorImg:
                "https://s3-alpha-sig.figma.com/img/fd3d/4c48/a8b689cbbfb343fe22651fcb4dc1c2e0?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Uwb09X8QnrTuT06L7dJd8u5sxBw3oHbOIAU1g1pI~9ECmNkSoBykaf-BY4qOo-WgI0rXokuLYqDaZmAsw3CjcanoV~be1rMIqzpGOdpI8LiMTi9FKiBoXoDHnw5zsIk2qxYEQoHcXzQeqfshBjnb02-DykjfD1VhShrvhcA-1xaLGibRv9qWGsvxEhjP3ppdWTILsUydlP~oMKTSzto~2~tEpiMC6BwjcHP9cyNtKz3g3bEalvUj2hnVZzgT4x6N0X8NWZ9D9J5x4cytjmtB44WXr9qHLgqeUIwtR27m9N0MXTRXybVpOPVQqbfK0K5x-OtGZq9tff6V6Yjc-SA6Wg__",
            date: "Jan 14, 2025",
            image:
                "https://s3-alpha-sig.figma.com/img/912c/a837/117c9d64bb86b26a60b5c99bb8b860b8?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ooh36m6ePlF-K-zwS7eGiRgZ~VgJx288VKARbH7EIkJH~F1SWBYePMBt3nt68XpLTPgx6n3MjJN4w6UoBzwY7sIw-mE1fr-NpwxpXC2EJfKN3vm2eQxEyC~HisS8pwfXFcoJDKoCWQvAs-HcZKesZuQhtoJXjOsFbyZ~ODz3~mrbc61cKxcv4skFyc8SNl8j6bMApAzcoeulYwHAxjZ7bYxIWRfnHKLi9o6v2oGTwjm39QZz48ZZC~jzKhEeFJ0xgFV9TPHItxLz6b5NCdWJSeNaIR5nn~8ScfCLNlcpSILoykBA46HueeiKOyKgahXAw~Fq~s-r8vG~NZjQjxg7Xg__", // Replace with your image URL
            category: "Anti-aging",
        },
        {
            title: "Laser Hair Removal: Is it Right for You?",
            p: "Find out everything about laser hair reduction, including how it works, what to expect during sessions, and why it’s a long-term solution for smooth, hair-free skin",
            author: "Jyoti Jain",
            authorImg:
                "https://s3-alpha-sig.figma.com/img/fd3d/4c48/a8b689cbbfb343fe22651fcb4dc1c2e0?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Uwb09X8QnrTuT06L7dJd8u5sxBw3oHbOIAU1g1pI~9ECmNkSoBykaf-BY4qOo-WgI0rXokuLYqDaZmAsw3CjcanoV~be1rMIqzpGOdpI8LiMTi9FKiBoXoDHnw5zsIk2qxYEQoHcXzQeqfshBjnb02-DykjfD1VhShrvhcA-1xaLGibRv9qWGsvxEhjP3ppdWTILsUydlP~oMKTSzto~2~tEpiMC6BwjcHP9cyNtKz3g3bEalvUj2hnVZzgT4x6N0X8NWZ9D9J5x4cytjmtB44WXr9qHLgqeUIwtR27m9N0MXTRXybVpOPVQqbfK0K5x-OtGZq9tff6V6Yjc-SA6Wg__",
            date: "Jan 08, 2025",
            image:
                "https://s3-alpha-sig.figma.com/img/81d9/3752/ba48f7db28f925a9ca9103acbc0f213c?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hrlS5rKjrrnhPXRi~Xn3fE5YYcBMqOl~iRs3i86fxKVuZeWlnAEdBinqT4qU7LVq1iR71oeNNJiAc5N7pRHuE0gT0Dfcn0W~J2iObKVUF440a~X~T-BqBMmrrxXWMTOrY14nqHpIJFLM8o6oyAiflHpcgtv1G7IRsIu2xDYdPHGRtdyyG6F60lrZ0V4O3Wwn~yhf468vECZrjIuY0ozB6IehAgU6VVyQ6IDRqw-QOo3llpqnf0RCwOiaO0xVJYikAJvPnnMgpOW2Z41uSf5lyLi7sADnOMyjjPjIBnbn9XADFkuEKGF-n8odbhGowHHttS05CG4vAEq3x~IRwzRXYg__", // Replace with your image URL
            category: "Hair",
        },
        {
            title:
                "Botox and Fillers Demystified: A Beginner's Guide to Anti-Aging Treatments",
            p: "Struggling with thinning hair? This blog compares PRP and GFC treatments, detailing their benefits, procedures, and results to help you make an informed choice for luscious locks.",
            author: "Jyoti Jain",
            authorImg:
                "https://s3-alpha-sig.figma.com/img/fd3d/4c48/a8b689cbbfb343fe22651fcb4dc1c2e0?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Uwb09X8QnrTuT06L7dJd8u5sxBw3oHbOIAU1g1pI~9ECmNkSoBykaf-BY4qOo-WgI0rXokuLYqDaZmAsw3CjcanoV~be1rMIqzpGOdpI8LiMTi9FKiBoXoDHnw5zsIk2qxYEQoHcXzQeqfshBjnb02-DykjfD1VhShrvhcA-1xaLGibRv9qWGsvxEhjP3ppdWTILsUydlP~oMKTSzto~2~tEpiMC6BwjcHP9cyNtKz3g3bEalvUj2hnVZzgT4x6N0X8NWZ9D9J5x4cytjmtB44WXr9qHLgqeUIwtR27m9N0MXTRXybVpOPVQqbfK0K5x-OtGZq9tff6V6Yjc-SA6Wg__",
            date: "Jan 08, 2025",
            image:
                "https://s3-alpha-sig.figma.com/img/3146/b8f3/4c0dbeeedf9e12561734bcc0ef61f4f3?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=G0vg4rAzRXyispWi3rSdGcg5i0RuGCPk8f86FaINB2PDGce5jOQ8qf9XihpQPZvByz4UVMiCyCpbO2t6FArIs6Bkh2ZKzo07CCxEXZAYv6OoPLiWBWys81yvHHuDeiP91MJrmnx8RRiE6QikbZYwuwJs-JWzlMVtV1CXIJKkyPezfpEsLLSi1spAtAtX6CJI85jXWIzkV0aeYnbU5uvDCUni71wspR8IwH4HNSnjBUZt6ftAQKKCMl9GpSuK7VrwfoeYsf2ZfY6jmtDelCH6Zt-hcJGh4u7OGkSMojcx3PkiDtyBWNM3FJ~0s9~pcqkTwWSB6mzKgux3kOzCY37ZyA__",
            category: "Botox",
        },

    ];


    const handleCopyUrl = () => {
        navigator.clipboard.writeText(url);
        alert("URL copied to clipboard!");
    };

    const handleShare = (platform) => {
        const encodedUrl = encodeURIComponent(url);
        let shareUrl = "";

        switch (platform) {
            case "linkedin":
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
                break;
            case "twitter":
                shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}`;
                break;
            case "facebook":
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
                break;
            default:
                return;
        }

        window.open(shareUrl, "_blank");
    };
    const navigate = useNavigate();
    const HandleNavigation = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };
    return (
        <>
            <div className="article-detail">
                <button onClick={() => HandleNavigation('/blogs')} className="allBlg"> <FaAngleLeft />All Posts</button>
                <div className="ct-tm">
                    <h3>{data?.category}</h3>
                    <h4>5 min read</h4>
                </div>
                <div className="header">
                    <h1>{data.title}</h1>

                    <div className="cover-image">
                        <img src={data.coverImage} alt="Cover image" />
                    </div>
                    <div className="meta">
                        <div className="meta-info">
                            <p>
                                Written by <strong>{data.author}</strong>
                            </p>
                            <p>
                                Published on <strong>{data.date}</strong>
                            </p>
                        </div>
                        <div className="meta-icons">
                            <FaLink
                                onClick={handleCopyUrl}
                                className="icon"
                                title="Copy URL"
                            />
                            <FaLinkedin
                                onClick={() => handleShare("linkedin")}
                                className="icon"
                                title="Share on LinkedIn"
                            />
                            <FaTwitter
                                onClick={() => handleShare("twitter")}
                                className="icon"
                                title="Share on Twitter"
                            />
                            <FaFacebook
                                onClick={() => handleShare("facebook")}
                                className="icon"
                                title="Share on Facebook"
                            />
                        </div>
                    </div>

                </div>
                <div className="blog-data-detail">
                    <div className="content">
                        {data.sections.map((section, index) => (
                            <section key={index} className="section">
                                <h2>{section.heading}</h2>
                                <p>{section.content}</p>
                                {section.image &&
                                    <>
                                        <img src={section.image} alt={section.heading} className="section-image" />
                                        <div className="caption_img_">Image caption goes here</div>
                                    </>
                                }
                                {section.list && (
                                    <ul>
                                        {section.list.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </section>
                        ))}
                    </div>

                    <aside className="sidebar">
                        <div className="newsletter">
                            <h3>{data.newsletter.heading}</h3>
                            <p>{data.newsletter.description}</p>
                            <input type="email" placeholder={data.newsletter.placeholder} />
                            <button>{data.newsletter.buttonText}</button>
                            <p>By subscribing you agree to with our <a href="">Privacy Policy</a>.</p>
                        </div>
                    </aside>
                </div>
            </div>
            <div className="article-wrapper">
                <div className="title-all-bg">
                    <h3>Related Posts</h3>
                    <button onClick={() => HandleNavigation("/blogs")}
                        className="btn-view-all">View all</button>
                </div>
                <div className="article-cards">
                    {blogs.map((blog, index) => (
                        <div key={index} className="article-card">
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
                                    onClick={() => HandleNavigation("/blog-detail")}
                                    className="read-more-btn">
                                    Read Full Blog
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
            
        </>
    );
};

export default ArticleDetail;

import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Linkedin, Twitter, Facebook, Link as LinkIcon, ChevronLeft } from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';
import './SalonBlogDetail.scss';
import WebPImage from '../../../../util/WebPImage'; // Assuming you have this component
import blogImg from '../../../../assets/SALON/hero/blogs/img1.png'
import blogImg2 from '../../../../assets/SALON/hero/blogs/img2.jpg'
// --- CENTRALIZED BLOG DATA ---
// It's better to have all blog data in one place.
// This makes finding the current and next blog much easier.
const allBlogs = [
    {
        slug: 'the-ultimate-guide-to-glowing-skin-before-a-special-event',
        title: 'The Ultimate Guide to Glowing Skin Before a Special Event',
        publishedDate: '12 July, 2025',
        coverImage: blogImg, // Replace with your image URL
        introduction: "Whether it’s a wedding, a party, or a photoshoot, everyone wants that radiant, flawless glow when there's a special occasion on the horizon. Achieving that perfect look involves more than just makeup; it’s about targeted treatments, good timing, and self-care. At OBW Salons, we specialize in helping you look your best when it matters the most. This guide will walk you through the ideal pre-event skincare timeline, recommended treatments, and expert tips to make sure you shine on the big day.",
        sections: [
            {
                type: 'recommended',
                heading: '🗓 3–4 Weeks Before the Event: Start Earlyy',
                treatments: [
                    { name: 'PRP (Platelet Rich Plasma)', description: 'A powerful anti-aging treatment that stimulates collagen, reduces fine lines, and gives your skin a plump, youthful glow.' },
                    { name: 'GFC for Hair', description: 'Perfect for treating dull or tired skin—it boosts hydration and overall skin health through growth factor concentrate.' },
                    { name: 'Dermapen Microneedling', description: 'Helps reduce scars, improve skin tone, and refine texture. Start early to allow time for healing.' }
                ]
            },
            {
                type: 'recommended',
                heading: '💆 1–2 Weeks Before the Event: Lock in the Glow',
                treatments: [
                    { name: 'HydraFacial', description: 'A favorite among brides and event-goers, it deeply cleanses, exfoliates, and infuses hydration, leaving your skin instantly radiant.' },
                    { name: 'Carbon Laser Facial', description: 'A no-downtime treatment that removes impurities, tightens pores, and evens out skin tone.' },
                    { name: 'IV Drip Therapy for Fatigue & Glow', description: 'A celebrity favorite! It hydrates your body from within and delivers nutrients that boost energy and skin radiance.' }
                ]
            },
            {
                type: 'whyChoose',
                heading: 'Why Choose OBW for Pre-Event Skincare?',
                points: [
                    'At OBW, we understand that one size fits no one. Our specialists will customize every treatment based on your skin type, event type, and timeline. Whether you have 3 days or 3 weeks, we create a glow-up plan just for you.',
                    'With certified skin experts, cutting-edge technology, and a relaxing ambiance across all three of our locations, your skin is in the best hands with us.'
                ]
            }
        ],
        callToAction: {
            heading: 'Book Your Pre-Event Consultation Today',
            subtext: 'Walk in stressed, walk out glowing.',
            buttonText: 'Book Appointment',
            link: '/book-appointment'
        }
    },
    {
        slug: '7-signs-you-need-a-hair-spa',
        title: '7 Signs You Need a Hair Spa (And What to Expect)',
        publishedDate: '10 July, 2025',
        coverImage: 'https://i.imgur.com/example2.jpg', // Replace with your image URL
        introduction: 'This is the introduction for the second blog post about hair spas...',
        sections: [ /* Add sections for this blog */],
        callToAction: { /* Add CTA for this blog */ }
    }
    // ... Add all your other blog objects here with a unique 'slug'
];

const NotFoundBlog = {
    title: 'Blog Post Not Found',
    publishedDate: '',
    coverImage: 'https://i.imgur.com/gJt7tqT.png',
    introduction: 'Sorry, we couldn\'t find the blog post you were looking for. It might have been moved or deleted.',
    sections: [],
    callToAction: null
};


const SalonBlogDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    // Find the current blog post using the slug from the URL
    const article = useMemo(() => allBlogs.find(b => b.slug === slug) || NotFoundBlog, [slug]);

    // Find the next article for the "Read Next" section
    const nextArticle = useMemo(() => {
        const currentIndex = allBlogs.findIndex(b => b.slug === slug);
        return currentIndex > -1 && currentIndex < allBlogs.length - 1 ? allBlogs[currentIndex + 1] : null;
    }, [slug]);

    const handleShare = (platform) => {
        const url = window.location.href;
        const encodedUrl = encodeURIComponent(url);
        let shareUrl = '';

        switch (platform) {
            case 'linkedin': shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`; break;
            case 'twitter': shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodeURIComponent(article.title)}`; break;
            case 'facebook': shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`; break;
            case 'copy':
                navigator.clipboard.writeText(url).then(() => toast.success('Link copied!'));
                return;
            default: return;
        }
        window.open(shareUrl, '_blank');
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (!email) {
            return toast.error("Please enter your email!");
        }
        toast.success("Thank you for subscribing!");
        setEmail('');
    };

    return (
        <div className="blog-detail-page">
            <Toaster position="top-center" />
            <header className="blog-detail-header">
                <button onClick={() => navigate('/blogs')} className="back-link">
                    <ChevronLeft size={16} />
                    All Posts
                </button>
                <div className='tags_page'>
                    <div className='category '>Skin</div>
                    <div className='read-time'>5 min read</div>
                </div>
                <h1>{article.title}</h1>
                <WebPImage src={article.coverImage} alt={article.title} className="cover-image" />
                <div className="metadata-bar">
                    <div className="publish-date">Published on <h4> {article.publishedDate}</h4></div>
                    <div className="share-icons">
                        <span className='icon_'>
                            <Linkedin onClick={() => handleShare('linkedin')} size={20} />
                        </span>
                        <span className='icon_'>
                            <Twitter onClick={() => handleShare('twitter')} size={20} />
                        </span>
                        <span className='icon_'>
                            <Facebook onClick={() => handleShare('facebook')} size={20} />
                        </span>
                        <span className='icon_'>
                            <LinkIcon onClick={() => handleShare('copy')} size={20} />
                        </span>
                    </div>
                </div>
            </header>

            <div className="blog-detail-layout">
                <aside className="sidebar">
                    <div className="newsletter-card">
                        <h4>Subscribe to newsletter</h4>
                        <p>Subscribe to receive the latest blog posts to your inbox every week.</p>
                        <form onSubmit={handleSubscribe}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button type="submit btn">Subscribe</button>
                        </form>
                        <p className="privacy-text">By subscribing you agree with our <span className='link_'>Privacy Policy</span>.</p>
                    </div>
                </aside>

                <main className="article-content">
                    <h1 className='Introduction'>Introduction</h1>
                    <p className="introduction">{article.introduction}</p>
                    {article.sections.map((section, index) => {
                        switch (section.type) {
                            case 'recommended':
                                return (
                                    <section key={index} className="recommended-section">
                                        <h2>{section.heading}</h2>
                                        <h3>Recommended Treatments:</h3>
                                        {section.treatments.map((treatment, i) => (
                                            <div key={i} className="treatment-item">
                                                <strong>{treatment.name}</strong>
                                                <p>{treatment.description}</p>
                                            </div>
                                        ))}
                                    </section>
                                );
                            case 'whyChoose':
                                return (
                                    <section key={index} className="recommended-section why-c hoose-section">
                                        <h3><span role="img" aria-label="heart">💗</span> {section.heading}</h3>
                                        {section.points.map((point, i) => <p key={i}>{point}</p>)}
                                    </section>
                                );
                            default:
                                return null;
                        }
                    })}
                    {article.callToAction && (
                        <div className="cta-section">
                            <h3>{article.callToAction.heading}</h3>
                            <p>{article.callToAction.subtext}</p>
                            <button onClick={() => navigate(article.callToAction.link)} className="cta-button btn">
                                <span>
                                    {article.callToAction.buttonText}
                                    <ArrowRight className="arrow-icon" size={20} strokeWidth={3} />
                                </span>
                            </button>
                        </div>
                    )}
                </main>
            </div>


            {nextArticle && (
                <footer className="read-next-footer">
                    <img src={blogImg2} />
                    <div className='next_content'>
                        <div className="next-article-info">
                            <div className='tags_page_Next'>
                                <div className='category '>Skin</div> •
                                <div className='read-time'>5 min read</div>
                            </div>
                            <h3>{nextArticle.title}</h3>
                        </div>
                        <div className="next-article-nav">
                            <button className='read_ btn' onClick={() => navigate(`/blog-detail/${nextArticle.slug}`)}>
                            <span>

                                Read full blog
                                <ArrowRight className="arrow-icon" size={20} strokeWidth={3} />
                            </span>
                            </button>
                            <button className='next_ btn' onClick={() => navigate(`/blog-detail/${nextArticle.slug}`)}>
                            <span>
                                Next Post
                                <ArrowRight className="arrow-icon" size={20} strokeWidth={3} />
                            </span>
                            </button>
                        </div>
                    </div>
                </footer>
            )}
        </div>
    );
};

export default SalonBlogDetail;
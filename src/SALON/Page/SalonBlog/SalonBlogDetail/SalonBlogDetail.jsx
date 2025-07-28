import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Linkedin, Twitter, Facebook, Link as LinkIcon, ChevronLeft } from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';
import './SalonBlogDetail.scss'; // Ensure this SCSS is not changed
import WebPImage from '../../../../util/WebPImage'; // Assuming you have this component

// Import your blog images (replace with actual paths if different and ensure they are correct)
// import img1 from '../../assets/TrendingTreatments/Medi-Facials-min.jpg';
// import img2 from '../../assets/TrendingTreatments/Laser Hair Removal-min.jpg';
// import img3 from '../../assets/TrendingTreatments/IV Therapy for Skin, Hair & Body Care-min.jpg';
// import img4 from '../../assets/TrendingTreatments/Carbon Laser Peel_11zon.jpg';
// import img5 from '../../assets/TrendingTreatments/Hair GFC & PRP-min.jpg';
// import WebPImage from '../../../../util/WebPImage'; // Assuming you have this component
import img1 from '../../../../assets/SALON/hero/blogs/img1.jpg'
import img2 from '../../../../assets/SALON/hero/blogs/img2.jpg'
import img3 from '../../../../assets/SALON/hero/blogs/img3.jpg'
import img4 from '../../../../assets/SALON/hero/blogs/img4.jpg'
import img5 from '../../../../assets/SALON/hero/blogs/img5.jpg'
// import blogImg2 from '../../../../assets/SALON/hero/blogs/img2.jpg'
// Placeholder images for related posts if needed for SalonBlogDetail's related section,
// but the instruction specifically mentioned adding to SalonBlogDetail based on PDF.
// For the 'Related Posts' section at the bottom, we'll use a simplified version of `blogs` if `Blog.js` is imported.
// Assuming 'blogs' array is available from './Blog' if you want related posts.
// If not, you might define a new 'relatedBlogs' array here.

// NOTE: I'm defining a placeholder for 'blogs' here if it's not imported from './Blog'
// If you actually import 'blogs' from './Blog.js', you can remove this placeholder.
export const blogs = [
    {
        title: "Why Every Woman Needs a 'Reset Ritual' And How a Salon Visit Can Be Yours",
        p: "In today's fast-paced world, self-care isn't just a luxury; it's a necessity. Between work deadlines, personal responsibilities, and life's everyday demands, women often put themselves last. But what if we told you that one simple habit, a regular salon visit, could help reset your body, mind, and spirit? Welcome to the power of the Reset Ritual.",
        image: img1,
        category: "Skin",
        slug: `why-every-woman-needs-a-'reset-ritual'-and-how-a-salon-visit-can-be-yours`,
        date:'10July'

    },
    {
        title: "Tame the Frizz: Hair Care Tips for the Rainy Season",
        p: "Rainy days may feel romantic and refreshing, but your hair often disagrees. Frizz, hair fall, sticky scalp—monsoon can be a real challenge for your beautiful locks. But don't worry, a little care can go a long way! Let's break down why your hair suffers during rain and what you can do to keep it healthy, smooth, and manageable.",
        image: img2,
        category: "Hair"
    },
    {
        title: "Hair Botox - The Ultimate Anti-Aging Treatment for Your Hair",
        p: "Just like your skin, your hair also ages. With constant exposure to heat, chemicals, pollution, and stress, your hair can lose its shine, strength, and smoothness. If you're struggling with dull, frizzy, or damaged hair, Hair Botox might be the game-changing treatment you need.",
        image: img3,
        category: "Wellness",
         date:'10July'
    },
    {
        title: "Why a Hair Spa Is More Than Just Pampering - It\'s Hair Therapy",
        p: "In today's fast-paced life, your hair goes through a lot—pollution, heat styling, chemical treatments, stress, and even poor diet. Over time, this leads to dullness, dryness, hair fall, and lifeless strands. That's where a Hair Spa comes in. It's not just a luxury—it's a much-needed therapy for your scalp and strands.",
        image: img4,
        category: "Skin",
         date:'10July'
    },
    {
        title: "Why Men Should Visit the Salon Too - Grooming Is for Everyone",
        p: "Gone are the days when salons were considered a space only for women. Today, modern salons offer a wide range of grooming services designed specifically for men, and walking into a salon is no longer just about getting a quick haircut. It’s about investing in your style, hygiene, and confidence. ",
        image: img5,
        category: "Hair",
         date:'10July'
    }
];


// --- CENTRALIZED BLOG DATA (Updated as per PDF and ArticleDetail structure) ---
const allBlogs = [
    {
        slug: `why-every-woman-needs-a-'reset-ritual'-and-how-a-salon-visit-can-be-yours`,
        title: "Why Every Woman Needs a 'Reset Ritual' And How a Salon Visit Can Be Yours",
        publishedDate: 'July 10, 2025',
        coverImage: img1, // Use a relevant image
        category: 'Wellness',
        readTime: '5 min read',
        sections: [
            {
                type: 'Introduction',
                content: "In today's fast-paced world, self-care isn't just a luxury; it's a necessity. Between work deadlines, personal responsibilities, and life's everyday demands, women often put themselves last. But what if we told you that one simple habit, a regular salon visit, could help reset your body, mind, and spirit? Welcome to the power of the Reset Ritual." // Source 3, 4, 5, 6
            },
            {
                type: 'heading_paragraph',
                heading: 'What Is a Reset Ritual?', // Source 7
                content: "A reset ritual is a small but intentional routine that helps you pause, recharge, and return to yourself. It could be a Sunday Walk, a journal session, or a skincare routine. But one of the most powerful and enjoyable reset rituals is a salon experience. It's not just about grooming. It's about disconnecting from chaos and reconnecting with calm. It's about stepping away from the to-do list and stepping into a space that's only for you." // Source 8, 9, 10, 11, 12
            },
            {
                type: 'heading_paragraph',
                heading: 'Your Reset Ritual at OBW', // Source 13
                content: "At OBW Salon, we believe every woman deserves to feel pampered, beautiful, and at peace. From luxurious hair rituals and relaxing facials to calming spaces and warm service, we're not just about beauty; we're about how beauty makes you feel. Our trained professionals don't just style hair; they listen, care, and guide you into becoming your most confident self." // Source 14, 15, 16, 17
            },
            {
                type: 'paragraph',
                content: "You don't need a reason to take care of yourself. You don't have to wait for burnout. Sometimes, all it takes is one visit, one moment, one ritual... to start feeling like yourself again. So go ahead and book that appointment. Light the candle. Take a nap. Get the haircut. Because the world needs your best self. And that starts with you choosing you." // Source 18, 19, 20, 21, 22
            }
        ],
        callToAction: {
            heading: 'Book Your Reset Ritual Today',
            subtext: 'Discover the tranquility and rejuvenation you deserve.',
            buttonText: 'Book Appointment',
            link: '/book-appointment'
        }
    },
    {
        slug: `tame-the-frizz:-hair-care-tips-for-the-rainy-season`,
        title: 'Tame the Frizz: Hair Care Tips for the Rainy Season',
        publishedDate: 'July 15, 2025',
        coverImage: img2,
        category: 'Hair',
        readTime: '5 min read',
        sections: [
            {
                type: 'Introduction',
                content: "Rainy days may feel romantic and refreshing, but your hair often disagrees. Frizz, hair fall, sticky scalp—monsoon can be a real challenge for your beautiful locks. But don't worry, a little care can go a long way! Let's break down why your hair suffers during rain and what you can do to keep it healthy, smooth, and manageable." // Source 25, 26, 27, 28
            },
            {
                type: 'heading_paragraph',
                heading: 'Why Does Hair Get So Messy in the Monsoon?', // Source 29
                content: "During the rainy season, the air is filled with moisture and humidity. This causes your hair to swell, leading to frizz, breakage, and extra oiliness on the scalp. Rainwater, especially when mixed with pollution, also makes your hair weak and dull. Whether you have curly, wavy, or straight hair, it's important to give your mane some extra attention during this season." // Source 30, 31, 32, 33
            },
            {
                type: 'heading_list',
                heading: 'Top Hair Problems in Rainy Season', // Source 34
                list: [
                    'Frizziness: Due to high humidity', // Source 35
                    'Hair Fall: Weak roots from sweat and moisture', // Source 36
                    'Greasy Scalp: Sweat and rainwater make your scalp oily', // Source 36
                    'Dandruff: Fungal growth thrives in wet, sticky environments', // Source 36
                    'Limp Hair: Hair loses volume and feels flat' // Source 37
                ]
            },
            {
                type: 'heading_list',
                heading: 'What Salon Treatments Help During Rainy Season?', // Source 38
                list: [
                    'At OBW Salon, our monsoon hair rituals are designed to restore balance and bring back your shine:', // Source 39
                    'Anti-Frizz Hair Spa - For smooth, sleek hair', // Source 40
                    'Deep Nourishment Treatment - Repairs dryness and adds volume', // Source 41
                    'Scalp Detox - Clears clogged pores and dandruff', // Source 42
                    'Hydration Hair Mask - Revives dull, flat hair' // Source 43
                ]
            },
            {
                type: 'heading_list',
                heading: 'Quick Dos & Don\'ts', // Source 44
                list: [
                    '☑ Tie your hair loosely while going out', // Source 45
                    '☑ Use a microfiber towel to dry your hair', // Source 46
                    '☑ Cover your hair during heavy rain', // Source 47
                    '☒ Don\'t comb wet hair aggressively', // Source 48, 49, 50
                    '☒ Don\'t skip conditioning' // Source 51
                ]
            }
        ],
        callToAction: {
            heading: 'Protect Your Hair This Monsoon!',
            subtext: 'Visit OBW Salon for specialized monsoon hair rituals.',
            buttonText: 'Book Hair Treatment',
            link: '/book-appointment'
        }
    },
    {
        slug: `why-a-hair-spa-is-more-than-just-pampering---it's-hair-therapy`,
        title: 'Why a Hair Spa Is More Than Just Pampering - It\'s Hair Therapy',
        publishedDate: 'July 20, 2025',
        coverImage: img4,
        category: 'Hair',
        readTime: '5 min read',
        sections: [
            {
                type: 'Introduction',
                content: "In today's fast-paced life, your hair goes through a lot—pollution, heat styling, chemical treatments, stress, and even poor diet. Over time, this leads to dullness, dryness, hair fall, and lifeless strands. That's where a Hair Spa comes in. It's not just a luxury—it's a much-needed therapy for your scalp and strands." // Source 54, 55, 56
            },
            {
                type: 'heading_list',
                heading: 'What Is a Hair Spa?', // Source 57
                list: [
                    'A hair spa is a professional treatment that deeply conditions, nourishes, and revitalizes both your scalp and hair.', // Source 58
                    'It typically includes:', // Source 59
                    'Deep cleansing to remove dirt and product buildup', // Source 60, 61
                    'Relaxing head massage to improve blood circulation', // Source 62
                    'Nourishing hair mask for hydration and repair', // Source 63, 64
                    'Steam therapy to help active ingredients penetrate deeply' // Source 65
                ]
            },
            {
                type: 'heading_list',
                heading: 'Benefits of Hair Spa', // Source 66
                list: [
                    'Reduces Hair Fall: A clean, nourished scalp leads to stronger roots', // Source 67
                    'Improves Hair Texture: Leaves hair softer, smoother, and shinier', // Source 68
                    'Treats Dandruff and Dryness: Restores moisture balance', // Source 68
                    'Boosts Hair Growth: Stimulates blood flow to hair follicles', // Source 69
                    'Relieves Stress: The massage also calms the mind and body' // Source 70
                ]
            },
            {
                type: 'heading_paragraph',
                heading: 'How Often Should You Get a Hair Spa?', // Source 71
                content: 'For heat-styled or chemically treated hair, a hair spa every 15 to 20 days is ideal. For normal hair, once a month helps maintain shine and strength.' // Source 72, 73
            },
            {
                type: 'heading_paragraph',
                heading: 'Expert Tip', // Source 74
                content: 'Always go for a spa treatment that suits your hair type—whether it\'s dry, oily, damaged, frizzy, or color-treated. At OBW Signature Salon, we personalize every session to match your unique hair needs.' // Source 75, 76
            }
        ],
        callToAction: {
            heading: 'Give Your Hair the Therapy It Deserves!',
            subtext: 'Book a personalized Hair Spa session at OBW Salon today.',
            buttonText: 'Schedule Hair Spa',
            link: '/book-appointment'
        }
    },
    {
        slug: 'hair-botox---the-ultimate-anti-aging-treatment-for-your-hair',
        title: 'Hair Botox - The Ultimate Anti-Aging Treatment for Your Hair',
        publishedDate: 'July 22, 2025',
        coverImage: img3,
        category: 'Hair',
        readTime: '5 min read',
        sections: [
            {
                type: 'Introduction',
                content: "Just like your skin, your hair also ages. With constant exposure to heat, chemicals, pollution, and stress, your hair can lose its shine, strength, and smoothness. If you're struggling with dull, frizzy, or damaged hair, Hair Botox might be the game-changing treatment you need." // Source 79, 80
            },
            {
                type: 'heading_paragraph',
                heading: 'What Is Hair Botox?', // Source 81
                content: 'Despite the name, Hair Botox contains no actual Botox. It\'s a deep conditioning treatment filled with powerful ingredients like proteins, vitamins, amino acids, and natural oils that help repair damaged hair. It\'s called "Botox" because it rejuvenates and fills in the gaps in your hair strands, making them smoother, fuller, and healthier.' // Source 82, 83
            },
            {
                type: 'heading_list',
                heading: 'What Does It Do?', // Source 84
                list: [
                    'Repairs damage from coloring, heat styling, and pollution', // Source 85, 86
                    'Deeply nourishes dry and brittle hair', // Source 87
                    'Reduces frizz and smoothens texture', // Source 88
                    'Restores shine and softness', // Source 89
                    'Strengthens hair and reduces breakage' // Source 90
                ]
            },
            {
                type: 'heading_list',
                heading: 'Who Should Get Hair Botox?', // Source 91
                list: [
                    'Hair Botox is ideal for:', // Source 92
                    'Frizzy, unmanageable hair', // Source 93
                    'Chemically treated or color-damaged hair', // Source 94
                    'Dry, lifeless, or overly porous hair', // Source 95
                    'Anyone looking for smoother, shinier, healthier hair' // Source 96
                ]
            },
            {
                type: 'heading_paragraph',
                heading: 'How Long Does It Last?', // Source 97
                content: 'Hair Botox results typically last 2 to 4 months, depending on your hair type and maintenance. Using sulfate-free shampoos and limiting heat styling can help extend the effect.' // Source 98, 99
            },
            {
                type: 'heading_paragraph',
                heading: 'Is It Safe?', // Source 100
                content: 'Yes, Hair Botox is free from harsh chemicals and formaldehyde. It\'s a non-invasive, deep-repair treatment that suits almost all hair types, including chemically treated or sensitive scalps.' // Source 101, 102
            },
            {
                type: 'heading_paragraph',
                heading: 'Transform Your Hair with OBW\'s Hair Botox Treatment', // Source 103
                content: 'At OBW Signature Salon, we believe healthy hair is beautiful hair. Our expert stylists will assess your hair condition and customize the Hair Botox treatment to deliver smooth, shiny, and frizz-free results from the first session. Book your appointment today and bring life back to your hair.' // Source 104, 105, 106
            }
        ],
        callToAction: {
            heading: 'Rejuvenate Your Hair with Hair Botox!',
            subtext: 'Experience smooth, shiny, and frizz-free hair.',
            buttonText: 'Book Hair Botox',
            link: '/book-appointment'
        }
    },
    {
        slug: `why-men-should-visit-the-salon-too---grooming-is-for-everyone`,
        title: 'Why Men Should Visit the Salon Too - Grooming Is for Everyone',
        publishedDate: 'July 25, 2025',
        coverImage: img5, // Use a relevant image for men's grooming
        category: 'Men\'s Grooming',
        readTime: '5 min read',
        sections: [
            {
                type: 'Introduction',
                content: "Gone are the days when salons were considered a space only for women. Today, modern salons offer a wide range of grooming services designed specifically for men, and walking into a salon is no longer just about getting a quick haircut. It's about investing in your style, hygiene, and confidence." // Source 109, 110, 111
            },
            {
                type: 'heading_list',
                heading: 'More Than Just a Haircut', // Source 112
                list: [
                    'At OBW Signature Salon, we understand men\'s grooming needs are unique. Our men\'s services include:', // Source 113
                    'Stylish haircuts tailored to your face shape and lifestyle', // Source 114
                    'Beard trimming and shaping for a clean, polished look', // Source 115
                    'Scalp detox and anti-dandruff treatments', // Source 116
                    'Hair spa for relaxation and stress relief', // Source 117
                    'Facials and skin treatments to keep your skin fresh and healthy', // Source 118
                    'Manicures and pedicures for neat, hygienic hands and feet' // Source 119
                ]
            },
            {
                type: 'heading_list',
                heading: 'Why Regular Grooming Matters', // Source 120
                list: [
                    'First impressions count - A well-groomed appearance shows you care about yourself', // Source 121
                    'Confidence booster - Looking good can help you feel more self-assured', // Source 122
                    'Better skin and hair health - Regular treatments prevent issues like acne, dandruff, and rough skin', // Source 122
                    'Stress relief - Salon visits give you time to unwind and refresh' // Source 123
                ]
            },
            {
                type: 'heading_paragraph',
                heading: 'Men Deserve Self-Care Too', // Source 123
                content: 'Self-care isn\'t just about appearance, it\'s about how you feel. Taking time out for grooming is a form of self-respect, and there\'s no shame in looking and feeling your best.' // Source 124, 125
            },
            {
                type: 'heading_paragraph',
                heading: 'Visit OBW Signature Salon Grooming Designed for Men', // Source 126
                content: 'Whether it\'s your monthly haircut or a full grooming session before an important event, we\'re here to help you look sharp and feel confident. Walk in or book an appointment with our expert stylists today.' // Source 127, 128
            },
            {
                type: 'heading_paragraph',
                heading: 'Because You Deserve the Spotlight', // Source 130
                content: 'Let your beauty shine—from glowing skin to perfect hair, OBW is your space to feel pampered, confident, and truly seen. Book your appointment now and treat yourself to the care you\'ve earned.' // Source 131, 132
            }
        ],
        callToAction: {
            heading: 'Book Your Appointment Now',
            subtext: 'Visit OBW Signature Salon for grooming designed for men.',
            buttonText: '*BOOK Appointment', // Source 129
            link: '/book-appointment'
        }
    }
];

const NotFoundBlog = {
    title: 'Blog Post Not Found',
    publishedDate: '',
    coverImage: 'https://i.imgur.com/gJt7tqT.png', // Placeholder for a not found image
    introduction: 'Sorry, we couldn\'t find the blog post you were looking for. It might have been moved or deleted.',
    sections: [],
    callToAction: null
};

const SalonBlogDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const article = useMemo(() => allBlogs.find(b => b.slug === slug) || NotFoundBlog, [slug]);

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
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return toast.error("Please enter a valid email address!");
        }

        toast.success("Thank you for subscribing!");
        setEmail('');
    };

    // This section is for "Related Posts" based on your provided ArticleDetail structure
    // It will use the 'blogs' array defined at the top of this file
    // Filter out the current article from related posts
    const relatedBlogs = useMemo(() => {
        return blogs.filter(blog => blog.title.toLowerCase().replace(/\s+/g, '-') !== slug).slice(0, 3);
    }, [slug]);

    const HandleNavigationToBlog = (title) => {
        const formattedTitle = title.toLowerCase().replace(/\s+/g, "-");
        window.scrollTo(0, 0);
        navigate(`/blog-detail/${formattedTitle}`);
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
                    {article.category && <div className='category '>{article.category}</div>}
                    {article.readTime && <div className='read-time'>{article.readTime}</div>}
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
                {/* <aside className="sidebar">
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
                            <button type="submit" className="btn_Subscribe">Subscribe</button>
                        </form>
                        <p className="privacy-text">By subscribing you agree with our <span className='link_'>Privacy Policy</span>.</p>
                    </div>
                </aside> */}

                <main className="article-content">
                    {article.sections.map((section, index) => {
                        switch (section.type) {
                            case 'Introduction':
                                return <section>
                                    <h1 className='Introduction'>Introduction</h1>
                                    <p key={index}>{section.content}</p>
                                </section>
                            case 'paragraph':
                                return <section>
                                    <p key={index}>{section.content}</p>
                                </section>
                            case 'heading_paragraph':
                                return (
                                    <section key={index}>
                                        <h2>{section.heading}</h2>
                                        <p>{section.content}</p>
                                    </section>
                                );
                            case 'heading_list':
                                return (
                                    <section key={index}>
                                        <h2>{section.heading}</h2>
                                        <ul>
                                            {section.list.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                        {section.content_after && <p>{section.content_after}</p>}
                                    </section>
                                );
                            // You can add more types if needed, like 'image_with_caption', etc.
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
                                    <ArrowRight className="arrow-icon" size={20} strokeWidth={2} />
                                </span>
                            </button>
                        </div>
                    )}
                </main>
            </div>


            {/* Related Posts Section - Adjusted to fit SalonBlogDetail's structure */}
            {/* <div className="article-wrapper">
                <div className="title-all-bg">
                    <h3>Related Posts</h3>
                    <button onClick={() => navigate("/blogs")} className="btn-view-all">View all</button>
                </div>
                <div className="article-cards">
                    {relatedBlogs.map((blog, index) => (
                        <div key={index} className="article-card">
                            <WebPImage
                                src={blog.image}
                                alt={blog?.title}
                                className="card-image"
                                onClick={() => HandleNavigationToBlog(blog?.title)}
                            />
                            <div className="content_card_">
                                <div className="ct-tm">
                                    <h3>{blog?.category}</h3>
                                </div>
                                <h3 className="card-title" onClick={() => HandleNavigationToBlog(blog?.title)}>{blog?.title}</h3>
                                <p className="card-p">{blog?.p}</p>
                                <div className="author"> 
                                    <button
                                        onClick={() => HandleNavigationToBlog(blog?.title)}
                                        className="read-more-btn"
                                    >
                                        Read more {'>'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}

            {/* Read Next Footer - Kept similar to previous SalonBlogDetail implementation */}
            {/* {nextArticle && ( */}
               {blogs.slice(0,1).map(blog => (
                <footer className="read-next-footer">
                    <img src={blog.image} />
                    <div className='next_content'>
                        <div className="next-article-info">
                            <div className='tags_page_Next'>
                                <div className='category '>Skin</div> •
                                <div className='read-time'>5 min read</div>
                            </div>
                            <h3>{blog.title}</h3>
                        </div>
                        <div className="next-article-nav">
                            <button className='read_ ' onClick={() => navigate(`/blog-detail/${blog.slug}`)}>

                                Read full blog
                                <ArrowRight className="arrow-icon" size={20} strokeWidth={2} />
                            </button>
                            <button className='next_ ' onClick={() => navigate(`/blog-detail/${blog.slug}`)}>
                         
                                Next Post
                                {/* <ArrowRight className="arrow-icon" size={20} strokeWidth={2} /> */}
                           
                            </button>
                        </div>
                    </div>
                </footer>
               ))}
        </div>
    );
};

export default SalonBlogDetail;
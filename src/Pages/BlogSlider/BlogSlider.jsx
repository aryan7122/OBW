import React, { useState } from 'react';
import './BlogSlider.scss';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const blogs = [
    {
        title: "The Science Behind Skin Peels: What You Need to Know",
        p: 'Dive deep into the transformative world of skin peels. Learn about their benefits, how they work, and why they’re a go-to solution for acne scars, pigmentation, and rejuvenation.',
        author: "Aryan Sawant",
        authorImg: "https://s3-alpha-sig.figma.com/img/fd3d/4c48/a8b689cbbfb343fe22651fcb4dc1c2e0?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Uwb09X8QnrTuT06L7dJd8u5sxBw3oHbOIAU1g1pI~9ECmNkSoBykaf-BY4qOo-WgI0rXokuLYqDaZmAsw3CjcanoV~be1rMIqzpGOdpI8LiMTi9FKiBoXoDHnw5zsIk2qxYEQoHcXzQeqfshBjnb02-DykjfD1VhShrvhcA-1xaLGibRv9qWGsvxEhjP3ppdWTILsUydlP~oMKTSzto~2~tEpiMC6BwjcHP9cyNtKz3g3bEalvUj2hnVZzgT4x6N0X8NWZ9D9J5x4cytjmtB44WXr9qHLgqeUIwtR27m9N0MXTRXybVpOPVQqbfK0K5x-OtGZq9tff6V6Yjc-SA6Wg__",
        date: "Jan 16, 2025",
        image: "https://s3-alpha-sig.figma.com/img/c08c/bca2/78b2d646e0acb22d61689f83b9d38feb?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=T-T90hIYR-~mawSZZI5nzpVm3L8kaTNnog0TFpaQ5M3jdveuA7uBkcdoBi1Fyk4-20LwGSgh0LZqXv9Xf7L1GAyc8AKmkCpWZsX2UXq~6acWBgRdFsnkNABLWUyt2VbOneupV1rSaRRg0p3ItwMDcoLRkrKlcvXsYlSBNVdYsW2Cigq1gyFhslrulcEyDcy8DAP6uyBVPHzh4PWP0D1sbQFToasBPhfOo6LVcXOH1a5OOQJjFPuYl3uz7h9UHFPsRfC5fCdu1JeMv9xiJYQK9LSPgAComi6XmejMLXPGWlNoQpOvi9JPnM3105aGRtYk-JL8EyUrGZ5MQ0rXV-kHPw__", // Replace with your image URL
    },
    {
        title: "Top 5 Anti-Aging Treatments for Timeless Beauty",
        p: 'Explore the most effective anti-aging solutions, from Botox to fillers, and discover how they help reduce fine lines, restore elasticity, and enhance your natural glow',
        author: "Sameer Devale",
        authorImg: "https://s3-alpha-sig.figma.com/img/fd3d/4c48/a8b689cbbfb343fe22651fcb4dc1c2e0?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Uwb09X8QnrTuT06L7dJd8u5sxBw3oHbOIAU1g1pI~9ECmNkSoBykaf-BY4qOo-WgI0rXokuLYqDaZmAsw3CjcanoV~be1rMIqzpGOdpI8LiMTi9FKiBoXoDHnw5zsIk2qxYEQoHcXzQeqfshBjnb02-DykjfD1VhShrvhcA-1xaLGibRv9qWGsvxEhjP3ppdWTILsUydlP~oMKTSzto~2~tEpiMC6BwjcHP9cyNtKz3g3bEalvUj2hnVZzgT4x6N0X8NWZ9D9J5x4cytjmtB44WXr9qHLgqeUIwtR27m9N0MXTRXybVpOPVQqbfK0K5x-OtGZq9tff6V6Yjc-SA6Wg__",
        date: "Jan 14, 2025",
        image: "https://s3-alpha-sig.figma.com/img/912c/a837/117c9d64bb86b26a60b5c99bb8b860b8?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ooh36m6ePlF-K-zwS7eGiRgZ~VgJx288VKARbH7EIkJH~F1SWBYePMBt3nt68XpLTPgx6n3MjJN4w6UoBzwY7sIw-mE1fr-NpwxpXC2EJfKN3vm2eQxEyC~HisS8pwfXFcoJDKoCWQvAs-HcZKesZuQhtoJXjOsFbyZ~ODz3~mrbc61cKxcv4skFyc8SNl8j6bMApAzcoeulYwHAxjZ7bYxIWRfnHKLi9o6v2oGTwjm39QZz48ZZC~jzKhEeFJ0xgFV9TPHItxLz6b5NCdWJSeNaIR5nn~8ScfCLNlcpSILoykBA46HueeiKOyKgahXAw~Fq~s-r8vG~NZjQjxg7Xg__", // Replace with your image URL
    },
    {
        title: "Laser Hair Removal: Is it Right for You?",
        p: 'Find out everything about laser hair reduction, including how it works, what to expect during sessions, and why it’s a long-term solution for smooth, hair-free skin',
        author: "Jyoti Jain",
        authorImg: "https://s3-alpha-sig.figma.com/img/fd3d/4c48/a8b689cbbfb343fe22651fcb4dc1c2e0?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Uwb09X8QnrTuT06L7dJd8u5sxBw3oHbOIAU1g1pI~9ECmNkSoBykaf-BY4qOo-WgI0rXokuLYqDaZmAsw3CjcanoV~be1rMIqzpGOdpI8LiMTi9FKiBoXoDHnw5zsIk2qxYEQoHcXzQeqfshBjnb02-DykjfD1VhShrvhcA-1xaLGibRv9qWGsvxEhjP3ppdWTILsUydlP~oMKTSzto~2~tEpiMC6BwjcHP9cyNtKz3g3bEalvUj2hnVZzgT4x6N0X8NWZ9D9J5x4cytjmtB44WXr9qHLgqeUIwtR27m9N0MXTRXybVpOPVQqbfK0K5x-OtGZq9tff6V6Yjc-SA6Wg__",
        date: "Jan 08, 2025",
        image: "https://s3-alpha-sig.figma.com/img/81d9/3752/ba48f7db28f925a9ca9103acbc0f213c?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hrlS5rKjrrnhPXRi~Xn3fE5YYcBMqOl~iRs3i86fxKVuZeWlnAEdBinqT4qU7LVq1iR71oeNNJiAc5N7pRHuE0gT0Dfcn0W~J2iObKVUF440a~X~T-BqBMmrrxXWMTOrY14nqHpIJFLM8o6oyAiflHpcgtv1G7IRsIu2xDYdPHGRtdyyG6F60lrZ0V4O3Wwn~yhf468vECZrjIuY0ozB6IehAgU6VVyQ6IDRqw-QOo3llpqnf0RCwOiaO0xVJYikAJvPnnMgpOW2Z41uSf5lyLi7sADnOMyjjPjIBnbn9XADFkuEKGF-n8odbhGowHHttS05CG4vAEq3x~IRwzRXYg__", // Replace with your image URL
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
    const HandleNavigation = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
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
                                <button onClick={() => HandleNavigation('/blog-detail')} className="read-more-btn">Read Full Blog</button>
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

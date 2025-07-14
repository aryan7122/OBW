import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./TestimonialsSlider.scss";

const testimonials = [
    {
        name: "Shrushthi Shinde",
        role: "Student",
        rating: 5.0,
        text: "Working at OBW Salon has greatly improved my career, enhancing my skills and enabling me to serve my clients better.",
        image:
            "https://photosrush.net/wp-content/uploads/instagram-profile-picture-avatar_39.webp",
        bgColor: "#F4F1FF",
    },
    {
        name: "Ananya Roy",
        role: "Junior Designer",
        rating: 5.0,
        text: "I recently visited OBW Salon and was blown away by the atmosphere and the staff's professionalism. They really took the time to understand what I wanted and the results were fantastic!",
        image:
            "https://lh3.googleusercontent.com/proxy/3QxvOoGFYnR17Oc_K1jOncMLiNQldN0egZWT-PM4yHqekZqRZaSegFY8aSFVwnfpBgfpRQg8GmXAOMQoIIS6q-bW4xtE8dfBGKYQGDIXkJO28ygUeBrAHw",
        bgColor: "#FFF8CC",
    },
    {
        name: "Rohit Kumar",
        role: "Software Engineer",
        rating: 4.8,
        text: "My experience at OBW Salon! The staff was friendly, atmosphere was relaxing. They understood my hair needs, and the results were fantastic!",
        image:
            "https://i0.wp.com/www.splento.com/blog/wp-content/uploads/2020/02/8-1-1.jpg?resize=1200%2C1200&ssl=1",
        bgColor: "#FFFD9F",
    },
    {
        name: "Rohit Kumar",
        role: "Software Engineer",
        rating: 5.0,
        text: "My experience at OBW Salon! The staff was friendly, atmosphere was relaxing. They understood my hair needs, and the results were fantastic!",
        image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        bgColor: "#FFEFDA",
    },
];

export default function TestimonialsSlider() {
    return (
        <section className="testimonials-section">
            <div className="header">
                <span className="badge">TESTIMONIALS</span>
                <h2>Our Success Stories</h2>
            </div>
            <Swiper
                // spaceBetween={20}
                // slidesPerView={2.55}
                pagination={{ clickable: true }}
                navigation={{ prevEl: ".prev-arrow", nextEl: ".next-arrow" }}
                modules={[Navigation, Pagination]}
                // breakpoints={{
                //   768: { slidesPerView: 1 },
                //   1024: { slidesPerView: 3 },
                // }}
                spaceBetween={10}
                slidesPerView={{
                      600: { slidesPerView: 1 },
                    800: { slidesPerView: 2 },
                    1024: { slidesPerView: 2.5 },
                    1400: { slidesPerView: 2.8 },
                }}
                breakpoints={{
                    600: { slidesPerView: 1 },
                    800: { slidesPerView: 2 },
                    1024: { slidesPerView: 2.5 },
                    1400: { slidesPerView: 2.8 },
                }}
                className="testimonial-swiper"
            >
                {testimonials.map((item, idx) => (
                    <SwiperSlide key={idx}>
                        <div
                            className="avatar-wrapper"
                            style={{ backgroundColor: item.bgColor }}
                        >
                            <img src={item.image} alt={item.name} className="avatar" />
                        </div>
                        <div
                            className="testimonial-card"
                            style={{ backgroundColor: item.bgColor }}
                        >
                            <div className="testimonial-content">
                                <p className="review">{item.text}</p>
                                <div className="meta">
                                    <div>
                                        <h4>{item.name}</h4>
                                        <p>{item.role}</p>
                                    </div>
                                    <div className="rating">
                                        {item.rating.toFixed(1)}
                                        <Star size={16} fill="#000" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
                <div className="arrows">
                    <button className="prev-arrow">
                        <ArrowLeft />
                    </button>
                    <button className="next-arrow">
                        <ArrowRight />
                    </button>
                </div>
            </Swiper>
        </section>
    );
}
//

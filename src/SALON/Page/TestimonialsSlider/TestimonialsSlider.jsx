import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./TestimonialsSlider.scss";
import str3 from "../../../assets/SALON/hero/str.png";

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
            "https://img.freepik.com/free-photo/beautiful-girl-stands-park_8353-5084.jpg?semt=ais_hybrid&w=740",
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
                <div className="badge">
                    <h3> <img src={str3} />
                        TESTIMONIALS
                        <img src={str3} /></h3>
                </div>
                <h2>Our Success Stories</h2>
            </div>
            <Swiper
                modules={[Navigation, Pagination]}
                pagination={{ clickable: true }}
                navigation={{ prevEl: ".prev-arrow", nextEl: ".next-arrow" }}
                spaceBetween={40}

                // Mobile se desktop tak ke liye responsive settings
                breakpoints={{
                    // Mobile (300px se upar)
                    60: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    // Tablet (800px se upar)
                    660: {
                        slidesPerView: 1.1,
                    },
                    777: {
                        slidesPerView: 1.3,
                    },
                    // Chhota Desktop (1024px se upar)
                    1024: {
                        slidesPerView: 1.9,
                    },
                    1200: {
                        slidesPerView: 2.2,
                    },
                    1400: {
                        slidesPerView: 2.5,
                    },
                }}
                // slidesPerView='auto'
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
                              <svg width="0" height="0"  className="clipPath">
                                <clipPath id="myCardShape" clipPathUnits="objectBoundingBox">
                                    <path d="M 0.035 0 H 0.357 C 0.392 0, 0.410 0, 0.428 0.067 C 0.446 0.121, 0.476 0.165, 0.514 0.168 C 0.551 0.168, 0.582 0.118, 0.600 0.067 C 0.617 0, 0.635 0, 0.671 0 H 0.964 C 0.982 0, 1 0.033, 1 0.067 V 0.932 C 1 0.966, 0.982 1, 0.964 1 H 0.035 C 0.017 1, 0 0.966, 0 0.932 V 0.067 C 0 0.033, 0.017 0, 0.035 0 Z"></path>
                                </clipPath>
                            </svg>
                          
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

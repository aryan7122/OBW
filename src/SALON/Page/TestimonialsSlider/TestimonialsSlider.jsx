import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./TestimonialsSlider.scss";
import str3 from "../../../assets/SALON/hero/str.png";
import googleLogo from "../../../assets/SALON/hero/google.png"; // Using the 'google.png' you provided
import bgnone from "../../../assets/SALON/bgnone.png"; // Using the 'google.png' you provided

const testimonials = [
    {
        type: "googleSummary", // New type to distinguish Google slide
        name: "Google",
        role: "google",
        rating: 4.9,
        text: "Google review summary",
        image: googleLogo, // Use the imported google logo
        bgColor: "#FFF4DB", // Light yellow background for Google summary
    },
    {
        type: "testimonial",
        name: "Pavan Naik",
        role: "2 days ago", // Matching the image
        rating: 5.0,
        text: "I had a wonderful head massage from Deepika. She was highly professional, gentle yet effective, and ensured a truly relaxing experience. The pressure was just right, and I left feeling completely refreshed and stress-free. I would highly recommend her services to anyone seeking a calming and rejuvenating session.",
        initial: "P", // For placeholder if image is not there
        bgColor: "#F4F1FF", // Light purple from the image
        link: "Check on google", // Added a link text as in the first image
    },
    {
        type: "testimonial",
        name: "Hillery Moses",
        role: "Three days ago", // Matching the image
        rating: 5.0,
        text: "I have had great experience with this salon. The staff has been amazingly good and gave my hair an exceptional look. I want my eye brows to be done by them again.",
        initial: "H", // For placeholder if image is not there
        bgColor: "#FFF8CC", // Light yellow from the image
        link: "Check on google",
    },
    {
        type: "testimonial",
        name: "Shrushthi Shinde",
        role: "Student",
        rating: 5.0,
        text: "Working at OBW Salon has greatly improved my career, enhancing my skills and enabling me to serve my clients better.",
        initial: "S",
        image:
            "https://photosrush.net/wp-content/uploads/instagram-profile-picture-avatar_39.webp",
        bgColor: "#F4F1FF",
        link: "Check on google",
    },
    {
        type: "testimonial",
        name: "Ananya Roy",
        role: "Junior Designer",
        rating: 5.0,
        text: "I recently visited OBW Salon and was blown away by the atmosphere and the staff's professionalism. They really took the time to understand what I wanted and the results were fantastic!",
        initial: "A",
        image:
            "https://img.freepik.com/free-photo/beautiful-girl-stands-park_8353-5084.jpg?semt=ais_hybrid&w=740",
        bgColor: "#FFF8CC",
        link: "Check on google",
    },
];

export default function TestimonialsSlider() {
    return (
        <section className="testimonials-section">
            <div className="header">
                <div className="badge">
                    <h3>
                        {" "}
                        <img src={str3} alt="star" />
                        TESTIMONIALS
                        <img src={str3} alt="star" />
                    </h3>
                </div>
                <h2>Our Success Stories</h2>
            </div>

            <Swiper
                modules={[Navigation, Pagination]}
                pagination={{ clickable: true }} // Revert to clickable dots
                navigation={{ prevEl: ".prev-arrow", nextEl: ".next-arrow" }}
                spaceBetween={20} // Adjusted spaceBetween slightly
                // centeredSlides={true} // Keep the active slide centered
                slidesPerView='auto'// Keep the active slide centered
                breakpoints={{
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 1.2, // Show more than one partially
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 1.8,
                        spaceBetween: 30,
                    },
                    1280: {
                        slidesPerView: 2.2,
                        spaceBetween: 30,
                    },
                    1440: {
                        slidesPerView: 2.5,
                        spaceBetween: 40,
                    },
                }}
                className="testimonial-swiper"
            >
                {testimonials.map((item, idx) => (
                    <SwiperSlide key={idx}>
                        {item.type === "googleSummary" ? (
                            // Google Review Summary Card
                            <div >
                                {/* <div className="avatar-wrapper google-logo-wrapper">
                  <img src={item.image} alt="Google" className="avatar" />
                </div> */}

                                <div
                                    className="avatar-wrapper avatar-wrapper-G"

                                >
                                    <div className="bgImg " style={{ backgroundColor: item.bgColor }}>
                                        {item.image ? (
                                            <div className="googlrLogo">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="avatarG"
                                                />
                                            </div>
                                        ) : (
                                            <div className="avatar-initial">{item.initial}</div>
                                        )}
                                    </div>
                                </div>
                                <div
                                    className="testimonial-card google-summary-card"
                                    style={{ backgroundColor: item.bgColor }}
                                >
                                    <div className="testimonial-content">
                                        <p className="review reviewG">{item.text}</p>
                                        <div className="google-stars">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={48} fill="#FEB909" strokeWidth={0} />
                                            ))}
                                        </div>
                                        <h4>  {item.rating.toFixed(1)} stars</h4>
                                        {/* <div className="meta google-meta">
                    <div>
                      <h4>{item.name}</h4>
                      <p>{item.role}</p>
                    </div>
                    <div className="rating google-rating">
                      {item.rating.toFixed(1)}
                      <Star size={16} fill="#000" />
                    </div>
                  </div> */}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            // Regular Testimonial Card
                            <>
                                <div
                                    className="avatar-wrapper"
                                // style={{ backgroundColor: item.bgColor }}
                                >
                                    <div className="bgImg " style={{ backgroundColor: item.bgColor }}>

                                        {item.image ? (
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="avatar"
                                            />
                                        ) : (
                                            <div className="avatar_initial ">{item.initial}</div>
                                        )}
                                    </div>
                                </div>

                                <div
                                    className="testimonial-card"
                                    style={{ backgroundColor: item.bgColor }}
                                >
                                    {/* <svg width="0" height="0" className="clipPath">
                                        <clipPath id="myCardShape" clipPathUnits="objectBoundingBox">
                                            <path d="M 0.035 0 H 0.357 C 0.392 0, 0.410 0, 0.428 0.067 C 0.446 0.121, 0.476 0.165, 0.514 0.168 C 0.551 0.168, 0.582 0.118, 0.600 0.067 C 0.617 0, 0.635 0, 0.671 0 H 0.964 C 0.982 0, 1 0.033, 1 0.067 V 0.932 C 1 0.966, 0.982 1, 0.964 1 H 0.035 C 0.017 1, 0 0.966, 0 0.932 V 0.067 C 0 0.033, 0.017 0, 0.035 0 Z"></path>
                                        </clipPath>
                                    </svg> */}



                                    <div className="testimonial-content">
                                        <div className="rating">
                                            {item.rating.toFixed(1)}
                                            <Star size={20} fill="#FEB909" strokeWidth={0} />

                                        </div>
                                        <p className="review">{item.text}</p>
                                        <div className="meta">
                                            <div className="user_d_i">
                                                <h4>{item.name}</h4>
                                                <p>{item.role}</p>
                                            </div>

                                            {item.link && (
                                                <a href="#" className="check-on-google">
                                                    {item.link}
                                                    <span className="g-icon"><ArrowRight size={16} /></span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </SwiperSlide>
                ))}

                {/* Custom navigation and pagination outside Swiper but within the section */}
                <div className="swiper-controls">
                    <div className="swiper-pagination"></div> {/* Pagination dots */}
                    <div className="arrows">
                        <button className="prev-arrow">
                            <ArrowLeft />
                        </button>
                        <button className="next-arrow">
                            <ArrowRight />
                        </button>
                    </div>
                </div>
            </Swiper>
        </section>
    );
}
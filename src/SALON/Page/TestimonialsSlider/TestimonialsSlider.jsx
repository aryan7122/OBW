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
        rating: 4.8,
        totlereview:'(371)+',
        text: "Google review summary",
        image: googleLogo, // Use the imported google logo
        bgColor: "#FFF4DB", // Light yellow background for Google summary
    },
      {
        type: "testimonial",
        name: "Dhruvi Dolia",
        role: "a week ago",
        rating: 5.0,
        text: "I’ve availed multiple services at this clinic,  from Glutathione IV treatments and full-body laser hair removal to regular salon services and I can confidently say this place is outstanding. The staff and doctors are extremely polite, professional, and attentive. Every experience I’ve had here has been smooth, comfortable and effective. Highly recommend this clinic for both medical and aesthetic treatments!",
        initial: "D",
        
        bgColor: "#F4F1FF",
        link: "Check on google",
    },
    {
        type: "testimonial",
        name: "Dinesh Suthar",
        role: "3 weeks ago",
        rating: 5.0,
        text: "I had a fantastic experience getting my haircut with Nima! He  was incredibly professional, friendly, and really listened to what I wanted. The attention to detail was spot on — he took the time to shape everything perfectly and gave great styling tips too. I walked out feeling fresh and confident. Highly recommend Nima if you’re looking for someone who truly knows what they’re doing with hair!",
        initial: "D",
        // image:
        //     "https://img.freepik.com/free-photo/beautiful-girl-stands-park_8353-5084.jpg?semt=ais_hybrid&w=740",
        bgColor: "#FFF8CC",
        link: "Check on google",
    },
     {
        type: "testimonial",
        name: "Prajwal M J",
        role: "a months ago", // Matching the image
        rating: 5.0,
        text: "I recently visited Salon OBW, and I must say it was an exceptional experience from start to finish. The salon’s modern and chic aesthetics instantly set a relaxing tone, and the cleanliness was on point, making me feel comfortable throughout my visit. Suraj, who attended to me, did an outstanding job with my haircut and beard trim. His attention to detail and skill truly impressed me, and I left feeling completely satisfied. The staff was warm and welcoming, ensuring that my experience was nothing short of perfect. I highly recommend Salon OBW for anyone looking for top-notch grooming services!",
        initial: "P", // For placeholder if image is not there
        bgColor: "#FFF8CC", // Light yellow from the image
        link: "Check on google",
    },
    {
        type: "testimonial",
        name: "deepu gowda",
        role: "a months ago", // Matching the image
        rating: 5.0,
        text: "Been visiting this place from past 1 year one of best saloon in south Bangalore. Thier services are great and also cost friendly. I have been taking services from Mr. Awiral, this guy has magic in his hands better than any specialist ☺️.",
        initial: "C", // For placeholder if image is not there
        bgColor: "#F4F1FF", // Light purple from the image
        link: "Check on google", // Added a link text as in the first image
    },
    {
        type: "testimonial",
        name: "Go Green",
        role: "a months ago", // Matching the image
        rating: 5.0,
        text: "Nima did an amazing job with my hair. He was spot on with figuring out my haor issues and provided guidance on how to fix it and also on daily hair maintenance tips. Would definitely come back here next time.",
        initial: "G", // For placeholder if image is not there
        bgColor: "#F4F1FF", // Light purple from the image
        link: "Check on google", // Added a link text as in the first image
    },
    {
        type: "testimonial",
        name: "Anand R",
        role: "a months ago", // Matching the image
        rating: 5.0,
        text: "Excellent service as always..   regular here for my haircut for last 2 years.. salon is trendy n classy yet fit our budgets. Stylist Suraj never fail to impress with his skills.    Good job guys.. Keep it up..",
        initial: "A", // For placeholder if image is not there
        bgColor: "#F4F1FF", // Light purple from the image
        link: "Check on google", // Added a link text as in the first image
    },
    {
        type: "testimonial",
        name: "Keerthisri V",
        role: "a year ago", // Matching the image
        rating: 5.0,
        text: "I have been going to this salon for almost 4  months now. Service is really good. It's very customer centric. Have got almost all services like facial, threading, manicure, pedicure, waxing, nail art and everything is done very professionally. Recently got the Hydra facial, with the new machine technique, it gave a instant glow on my face and have reduced my facial marks & pores lightly. The face is hydrated very well. They use Japanese products for this facial. This facial is affordable here compared to many salons where  I see they charge extremely too much. They have advised 3 sessions to see maximum results.",
        initial: "K", // For placeholder if image is not there
        bgColor: "#F4F1FF", // Light purple from the image
        link: "Check on google", // Added a link text as in the first image
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
                                        {/* <p> {item.totlereview}</p> */}
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
                                            <Star className="Star_d" size={20} fill="#FEB909" strokeWidth={0} />
                                             {[...Array(5)].map((_, i) => (
                                                <Star className="Star_m" key={i} size={20} fill="#FEB909" strokeWidth={0} />
                                            ))}

                                        </div>
                                        <p className="review">{item.text}</p>
                                        <div className="meta">
                                            <div className="user_d_i">
                                                <h4>{item.name}</h4>
                                                <p>{item.role}</p>
                                            </div>

                                            {item.link && (
                                                <a href="https://g.page/r/CcIzjcohVtWsEBM/review"  target='_blank' className="check-on-google">
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
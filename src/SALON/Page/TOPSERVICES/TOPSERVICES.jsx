import React from 'react';
import './Top_Services.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import service1 from '../../../assets/SALON/hero/TOP SERVICES/img1.png';
import service2 from '../../../assets/SALON/hero/TOP SERVICES/img2.jpg';
import service3 from '../../../assets/about/Radiant South Asian Woman with Circular Glasses.png';
import service4 from '../../../assets/about/3accd80b7ddfc415aab514c71ade1c85.jpg'
import service5 from '../../../assets/SALON/hero/TOP SERVICES/img1.png';
import service6 from '../../../assets/SALON/hero/TOP SERVICES/img3.jpg';
import service7 from '../../../assets/SALON/hero/TOP SERVICES/img4.png';
import service8 from '../../../assets/SALON/hero/TOP SERVICES/img5.png';

const services = [
    { id: 1, title: 'Refreshing clean up', image: service1 },
    { id: 2, title: 'Blowdry', image: service2 },
    { id: 3, title: 'Face Mask', image: service3 },
    { id: 4, title: 'Hydration Therapy', image: service4 },
    { id: 5, title: 'Glow Boost', image: service5 },
    { id: 6, title: 'Glow Boost', image: service6 },
    { id: 7, title: 'Glow Boost', image: service7 },
    { id: 8, title: 'Glow Boost', image: service8 },
];

const TopServices = () => {
    return (
        <section className="top-services">
            <p className="subtitle"> <span>✳</span>  TOP SERVICES <span>✳</span></p>
            <h2 className="title">
                Discover The Exceptional Services <br /> We Have In Store For You!
            </h2>

            <div className="ellipse-carousel">
                <Swiper
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView="auto"
                    loop={true}
                    spaceBetween={30}
                    loopedSlides={8}
                    coverflowEffect={{
                        rotate: 80,
                        depth: -320,
                        modifier: 0.1,
                        scale: 1.2,
                    }}
                    pagination={{ el: ".swiper-pagination", clickable: true }}
                    modules={[EffectCoverflow, Pagination]}
                    className="swiper-container"
                >
                    {services.map((service, index) => (
                        <SwiperSlide key={index} className="swiper-slide-custom">
                            <img src={service.image} alt={service.title} />
                            <div className="label">{service.title}</div>
                        </SwiperSlide>
                    ))}

                    <div className="swiper-pagination"></div>
                </Swiper>
            </div>
        </section>
    );
};

export default TopServices;

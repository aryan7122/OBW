// ClassicDealsOffer.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import './ClassicDealsOffer.scss';
import str3 from '../../../assets/SALON/hero/str.png';

import icon from '../../../assets/ClassicDeals/icon.svg';
import img1 from '../../../assets/ClassicDeals/82d0ed43325b491b68f8e16e982cedc2cbc5127d.png';
import img2 from '../../../assets/ClassicDeals/0506f37ac2788613bae09e7506c000c6d1eb2031.png';
import img3 from '../../../assets/ClassicDeals/woman-beauty-clinic-face-treatment 1.png';
import img4 from '../../../assets/ClassicDeals/Beauty Oil Portrait 1.png';
import img5 from '../../../assets/ClassicDeals/Luxury Cosmetic Arrangement 1.png';

const offers = [
  {
    title: 'Upto 25% OFF',
    subtitle: 'on all services',
    bgColor: '#2f2f2f',
    image: img1,
  },
  {
    title: 'BUY 1 GET 1 FREE',
    subtitle: 'Dull skin worries\nTry our beauty facial',
    bgColor: '#7b4440',
    image: img2,
  },
  {
    title: 'Upto 25% OFF',
    subtitle: '',
    bgColor: '#060606',
    image: img3,
  },
  {
    title: 'Flat 50% OFF',
    subtitle: 'Clinical products',
    bgColor: '#081361',
    image: img4,
  },
  {
    title: 'Hairfall problem?',
    subtitle: 'Flat 30% off\nOn hair care services',
    bgColor: '#892245',
    image: img5,
  },
];


const ClassicDealsOffer = () => {
  return (
    <section className="ClassicDealsOffer-deals">
      <div className="ClassicDealsOffer-heading">
        <div>
          <span className="badge">TOP OFFERS <img src={str3}/> </span>
          <h2>
            Classic Deals <span className="icon">
              <img src={icon} alt="" />
            </span> with extra offers
          </h2>
        </div>
         <div className="swiper-controls">
          <button className="swiper-prev">
            <ArrowLeft size={20} strokeWidth={1.5} />
          </button>
          <button className="swiper-next">
            <ArrowRight size={20} strokeWidth={1.5} />
          </button>
         </div>
      </div>

      <div className="ClassicDealsOffer-swiper-wrapper">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
          }}
          spaceBetween={0}
                    slidesPerView={'auto'} 

          // slidesPerView={2.8}
          // breakpoints={{
          //   600: { slidesPerView: 1.5 },
          //   800: { slidesPerView: 2 },
          //   1024: { slidesPerView: 2.5 },
          //   1400: { slidesPerView: 2.8 },
          //   1530: { slidesPerView: 2.1 },
          // }}
        >
          {offers.map((offer, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="offer-card"
                style={{ backgroundColor: offer.bgColor }}
              >
                <div className="text-content">
                  <h3>{offer.title}</h3>
                  {offer.subtitle && <p>{offer.subtitle}</p>}
                  <button className="Book-Now btn">
                    Book Now <ArrowRight className="arrow-icon" size={20} strokeWidth={3} />
                  </button>
                </div>
                <img src={offer.image} alt="deal" className="deal-img" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

       
      </div>
    </section>
  );
};

export default ClassicDealsOffer;

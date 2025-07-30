// ClassicDealsOffer.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import './ClassicDealsOffer.scss';
import str3 from '../../../assets/SALON/hero/str.png';

import icon from '../../../assets/SALON/hero/ClassicDeals/icon.svg';
import img1 from '../../../assets/SALON/hero/ClassicDeals/offer1.jpg';
import img2 from '../../../assets/SALON/hero/ClassicDeals/offer2.png';
import img3 from '../../../assets/SALON/hero/ClassicDeals/offer3.png';
import img4 from '../../../assets/SALON/hero/ClassicDeals/offer4.png';
import img5 from '../../../assets/SALON/hero/ClassicDeals/offer5.png';

const offers = [
  {
    title: 'At Just 899',
    subtitle: 'Get manicure + pedicure',
    bgColor: '#EBECE7',
    image: img1,
  },
  {
    title: 'upto 20% off',
    subtitle: 'on all salon services',
    bgColor: 'background: linear-gradient(294.96deg, rgba(255, 255, 255, 0) 45.18%, rgba(0, 158, 153, 0.8) 60.92%)',
    image: img2,
  },
  {
    title: 'Premium facials',
    subtitle: (
      <>
        starting at just <span style={{ color: '#CBD10C' }}>1999</span>
      </>
    ),


    bgColor: 'linear-gradient(94.84deg, #902753 4.12%, #692a44 106.39%)',
    image: img3,
  },
  {
    title: 'botox,straightening at just Rs 4999 ',
    subtitle: 'Any length Keratin',
    bgColor: '#ABABAB',
    image: img4,
  },
  {
    title: '30% off',
    subtitle: 'On first Time visitors',
    bgColor: 'linear-gradient(255.26deg, rgba(255, 253, 253, 0) 47.11%, rgba(42, 22, 22, 0.8) 69.38%)',
    image: img5,
  },
];


const ClassicDealsOffer = () => {
  return (
    <section className="ClassicDealsOffer_deals_salon">
      <div className="ClassicDealsOffer-heading">
        <div>
          <span className="badge">TOP OFFERS <img src={str3} /> </span>
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
                className="offers-cards"
                style={{ background: offer.bgColor }}
              >
                <div className="text-content">
                  <h3>{offer.title}</h3>
                  {offer.subtitle && <p>{offer.subtitle}</p>}
                  <button className="Book_2_Now btn">
                    Book Now <ArrowRight className="arrow-icon" size={20} strokeWidth={2} />
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

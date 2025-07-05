import React from 'react';
import './ClassicDeals.scss';
import { ArrowRight } from 'lucide-react';
import icon from '../../assets/ClassicDeals/icon.svg'
import img1 from '../../assets/ClassicDeals/82d0ed43325b491b68f8e16e982cedc2cbc5127d.png'
import img2 from '../../assets/ClassicDeals/0506f37ac2788613bae09e7506c000c6d1eb2031.png'
import img3 from '../../assets/ClassicDeals/woman-beauty-clinic-face-treatment 1.png'
import img4 from '../../assets/ClassicDeals/Beauty Oil Portrait 1.png'
import img5 from '../../assets/ClassicDeals/Luxury Cosmetic Arrangement 1.png'

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

const ClassicDeals = () => {
  return (
    <section className="classic-deals">
      <div className="top-heading">
        <div>
          <span className="badge">TOP OFFERS</span>
          <h2>
            Classic Deals <span className="icon">
              <img src={icon} alt="" />
            </span> with extra offers
          </h2>
        </div>
        <p>
          Explore exclusive deals on chronic pain therapies and nutrition. 
          Find your best treatment options!
        </p>
      </div>

      <div className="offers-grid">
        {offers.slice(0, 2).map((offer, idx) => (
          <div
            key={idx}
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
        ))}
      </div>
      <div className="offers-grid grid-3">
        {offers.slice(2, 5).map((offer, idx) => (
          <div
            key={idx}
            className="offer-card"
            style={{ backgroundColor: offer.bgColor }}
          >
            <div className="text-content">
              <h3>{offer.title}</h3>
              {offer.subtitle
                &&
                <p>{offer.subtitle}</p>

              }
              <button className="Book-Now btn">
                <span>
                  Book Now <ArrowRight className="arrow-icon" size={20} strokeWidth={3} />
                </span>
              </button>
            </div>
        
              <img src={offer.image} alt="deal" className="deal-img" />
         
          </div>
        ))}
      </div>

      <div className="see-all">
        <button className="see-all-btn btn">
          <span>
          See All Offers <ArrowRight className="arrow-icon" size={20} strokeWidth={3} />
          </span>
        </button>
      </div>
    </section>
  );
};

export default ClassicDeals;
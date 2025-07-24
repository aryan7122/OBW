import React, { useState } from 'react';
import './ClassicDeals.scss';
import { ArrowRight } from 'lucide-react';
import icon from '../../assets/ClassicDeals/icon.svg'
import img1 from '../../assets/ClassicDeals/img.png'
import img2 from '../../assets/ClassicDeals/img (0).jpg'
import img3 from '../../assets/ClassicDeals/img (2).webp'
import img4 from '../../assets/ClassicDeals/img (1).png'
import img5 from '../../assets/ClassicDeals/img (3).png'
import BookAppointment from '../../Components/BookAppointment/BookAppointment';

const offers = [
  {
    title: 'Upto 50% OFF',
    subtitle: 'on all clinical services',
    bgColor: '#3C0000',
    image: img1,
  },
  {
    title: 'Buy 5 get 2 Free',
    subtitle: 'Any iv therapy drips',
    bgColor: '#F7F7F7',
    image: img2,
  },
  {
    title: 'Flat 30% Off',
    subtitle: 'on Dermal fillers',
    bgColor: '#716A60',
    image: img3,
  },
  {
    title: 'Flat 35% off',
    subtitle: ' full body laser hair reduction',
    dc:"Hair-free, anytime, anyware",
    bgColor: '#00131C',
    image: img5,
  },
  {
    title: 'Buy 2 hydra facial',
    subtitle: 'just  Rs. 4999',
    bgColor: '#791D4A',
    image: img4,
  },
];

const ClassicDeals = () => {
    const [showModal, setShowModal] = useState(false);
      const handleBookNowClick = () => {
          setShowModal(true);
      };
      const closeModal = () => {
          setShowModal(false);
      };
  return (
    <section className="classic-deals">
                {showModal && <BookAppointment onClose={closeModal} />}

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

      <div className="offers-grid grid-2">
        {offers.slice(0, 2).map((offer, idx) => (
          <div
            key={idx}
            className="offer-card"
            style={{ backgroundColor: offer.bgColor }}
          >
            <div className="text-content">
              <h3>{offer.title}</h3>
              {offer.subtitle && <p>{offer.subtitle}</p>}
              <button className="Book-Now btn" onClick={handleBookNowClick}>
                Book Now <ArrowRight className="arrow-icon" size={20} strokeWidth={2} />
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
              <button className="Book-Now btn" onClick={handleBookNowClick}>
                <span>
                  Book Now <ArrowRight className="arrow-icon" size={20} strokeWidth={2} />
                </span>
              </button>
            </div>
        
              <img src={offer.image} alt="deal" className="deal-img" />
         
          </div>
        ))}
      </div>

      {/* <div className="see-all">
        <button className="see-all-btn btn">
          <span>
          See All Offers <ArrowRight className="arrow-icon" size={20} strokeWidth={2} />
          </span>
        </button>
      </div> */}
    </section>
  );
};

export default ClassicDeals;
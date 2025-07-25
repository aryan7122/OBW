import React, { useEffect, useRef, useState } from "react";
import "./TeamSection.scss";
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from "lucide-react";
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';
import { useNavigate } from "react-router-dom";
import img1 from '../../assets/team/0K6A5365-min.jpg'
import img2 from '../../assets/team/0K6A5357-min.jpg'
import img3 from '../../assets/team/0K6A5359-min.jpg'

import icon1 from '../../assets/team/icon1.png'
import icon2 from '../../assets/team/icon2.png'
import icon3 from '../../assets/team/icon3.png'
import icon4 from '../../assets/team/icon4.png'
import icon5 from '../../assets/team/icon5.png'
import icon6 from '../../assets/team/icon6.png'
import icon7 from '../../assets/team/str.svg'

// const img1 = "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/HappyFaces/i38dnetngbnyftvucibs"
// const img2 = "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/HappyFaces/xhwhyct7xs2yehbto7fm"
// const img3 = "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/HappyFaces/mliudlqchy4xm0c9lbd9"
// const icon1 = "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/qualifiedTeam/ehtgyrcp6c8z9kxpg88h"
// const icon2 = "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/qualifiedTeam/nxctprhdl38umm0opc5c"
// const icon3 = "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/qualifiedTeam/tjnngwmfmjb4ac5sofrr"
// const icon4 = "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/qualifiedTeam/ko5jbmkpcrdnhccyynm2"
// const icon5 = "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/qualifiedTeam/foguxt7tgp1rg8fawtfj"
// const icon6 = "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/qualifiedTeam/mtudaldvzvdx1i1yyhp3"
// const icon7 = "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/qualifiedTeam/fw0ufhddkgxjbmofypun"

const images = [img1, img2, img3];

const stats = [
  { label: "Years of Combine Experience", value: 5, id: "experience", isPercentage: false },
  { label: "Certified Specialists", value: 50, id: "certified", isPercentage: false },
  { label: "Successful Treatments", value: 300, id: "treatments", isPercentage: false },
  { label: "Client Satisfaction Rate", value: 99, id: "satisfaction", isPercentage: true },
  { label: "Convenient Locations", value: 4, id: "locations", isPercentage: false },
  { label: "Positive Testimonials", value: 100, id: "testimonials", isPercentage: false },
];

const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 1;

  const handleNext = () => {
    if (currentIndex < images.length - visibleCards) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Mouse Scroll to Slide Images
  const handleWheel = (event) => {
    if (event.deltaY > 0) {
      // handleNext();
    } else {
      // handlePrevious();
    }
  };
  // const handleWheel = useCallback((event) => {
  //   event.preventDefault(); // Default scroll behavior disable karein
  //   if (event.deltaY > 0) {
  //     handleNext();
  //   } else {
  //     handlePrevious();
  //   }
  // }, [currentIndex]);

  const navigate = useNavigate();

  const HandleNavigation = (path, sectionId) => {
    navigate(`${path}#${sectionId}`);
  };

  // Number animation logic
  const animateCount = (start, end, elementId, isPercentage = false) => {
    let currentValue = start;
    const interval = setInterval(() => {
      if (currentValue >= end) {
        clearInterval(interval);
      } else {
        currentValue += Math.ceil((end - start) / 30); // Smooth increment
        document.getElementById(elementId).textContent = isPercentage
          ? `${currentValue}%` // Add % for the satisfaction rate
          : `${currentValue}+`; // Add + for other stats
      }
    }, 30);
  };

  const observerRef = useRef(null);

  const handleObserver = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

        stats.forEach(stat => {
          animateCount(0, stat.value, stat.id, stat.isPercentage);
        });
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.5, // Trigger when 50% of the element is in the viewport
    });
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
    return () => {
      if (observerRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section className="team-section-">
      {/* <div className="slider-container" onWheel={handleWheel}>
        <div className="team-images" style={{ "--index": currentIndex }}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Team group ${index + 1}`}
              className={`team-photo ${index === currentIndex ? "active" : "hidden"}`}
            />
          ))}
        </div>
        <div className="progress">
          <button className="nav-btn left" onClick={handlePrevious} disabled={currentIndex === 0}>
            <ArrowLeft className="arrow-icon" size={20} strokeWidth={2} />
          </button>
          <button className="nav-btn right" onClick={handleNext} disabled={currentIndex >= images.length - visibleCards}>
            <ArrowRight className="arrow-icon" size={20} strokeWidth={2} />
          </button>
        </div>
      </div> */}
      <div className="teams-container">
        <div className="teams-header">
          <div className="head-title-team">
            <h2>
            The Experts    
              {'  '}
              <img src={icon7} alt=""
                /> {' '}
            Behind Your Glow 
            </h2>
            <p>
             Our team is skilled, caring, and focused on giving you results that look great and feel even better
             
            </p>
          </div>
          {/* <button className="view-all"
            onClick={() => HandleNavigation("/about", "meet-section")}
          >
            Meet The team
            <ArrowRight className="arrow-icon" size={20} strokeWidth={2} />
          </button> */}
        </div>

        <div className="team-stats" ref={observerRef}
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 0.4 }}
        >
          {stats.map((stat, index) => (
            <div className="stat-item" key={stat.id}
            // initial={{ opacity: 0, y: -40 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{
            //   duration: 0.4,
            //   delay: index * 0.2, // Delay each stat by 0.2s for a staggered effect
            // }}
            // viewport={{ once: true, amount: 0 }}
            >
              <div>
              <img
                effect="blur" wrapperProps={{
                  style: { transitionDelay: "0.2s" },
                }}
                // placeholderSrc={placeholderImg}
                once={true}
                loading="lazy"
                key={index}
                src={stat.id === "experience" ? icon1 :
                  stat.id === "certified" ? icon2 :
                    stat.id === "treatments" ? icon3 :
                      stat.id === "satisfaction" ? icon4 :
                        stat.id === "locations" ? icon5 :
                          icon6} />
                <p>{stat.label}</p>
              </div>
                <h3 id={stat.id} className="stat-number">0{stat.isPercentage ? "%" : "+"}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

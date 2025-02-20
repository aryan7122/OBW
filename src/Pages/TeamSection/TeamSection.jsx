import React, { useState, useEffect, useRef } from "react";
import "./TeamSection.scss";
import img1 from '../../assets/team/0K6A5365-min.jpg';
import img2 from '../../assets/team/0K6A5357-min.jpg';
import img3 from '../../assets/team/0K6A5359-min.jpg';
import icon1 from '../../assets/team/str.svg';
import icon2 from '../../assets/team/3dicons-travel-front-color.svg';
import icon3 from '../../assets/team/3dicons-tick-front-color.svg';
import icon4 from '../../assets/team/3dicons-thumb-up-front-color.svg';
import icon5 from '../../assets/team/3dicons-trophy-front-color.svg';
import icon6 from '../../assets/team/3dicons-map-pin-front-color.svg';
import icon7 from '../../assets/team/3dicons-star-2-front-color.svg';
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import WebPImage from "../../util/WebPImage";

const images = [img1, img2, img3];
import { motion } from 'framer-motion';

const stats = [
  { label: "Years of Combine Experience", value: 20, id: "experience", isPercentage: false },
  { label: "Certified Specialists", value: 100, id: "certified", isPercentage: false },
  { label: "Successful Treatments", value: 5000, id: "treatments", isPercentage: false },
  { label: "Client Satisfaction Rate", value: 96, id: "satisfaction", isPercentage: true },
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
      handleNext();
    } else {
      handlePrevious();
    }
  };

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
      <div className="slider-container" onWheel={handleWheel}>
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
            <ArrowLeft className="arrow-icon" size={20} strokeWidth={3} />
          </button>
          <button className="nav-btn right" onClick={handleNext} disabled={currentIndex >= images.length - visibleCards}>
            <ArrowRight className="arrow-icon" size={20} strokeWidth={3} />
          </button>
        </div>
      </div>
      <div className="teams-container">
        <div className="teams-header">
          <div>
            <h2>
              Our qualified and experienced {' '}
              <motion.img src={icon1} alt=""
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.2 }} /> {' '}
              team
            </h2>
            <p>
              At OBW, we have a diverse team with a broad range of expertise. We
              are committed to providing high quality and compassionate mental
              health support to meet your needs.
            </p>
          </div>
          <button className="view-all"
            onClick={() => HandleNavigation("/about", "meet-section")}
          >
            Meet The team
            <ArrowRight className="arrow-icon" size={20} strokeWidth={3} />
          </button>
        </div>

        <motion.div className="team-stats" ref={observerRef}
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 0.4 }}
        >
          {stats.map((stat, index) => (
            <motion.div className="stat-item" key={stat.id}
            // initial={{ opacity: 0, y: -40 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{
            //   duration: 0.4,
            //   delay: index * 0.2, // Delay each stat by 0.2s for a staggered effect
            // }}
            // viewport={{ once: true, amount: 0 }}
            >
              <div>
                <h3 id={stat.id} className="stat-number">0{stat.isPercentage ? "%" : "+"}</h3>
                <p>{stat.label}</p>
              </div>
              <LazyLoadImage
                effect="blur" wrapperProps={{
                  style: { transitionDelay: "0.2s" },
                }}
                // placeholderSrc={placeholderImg}
                once={true}
                loading="lazy"
                key={index}
                src={stat.id === "experience" ? icon2 :
                  stat.id === "certified" ? icon3 :
                    stat.id === "treatments" ? icon4 :
                      stat.id === "satisfaction" ? icon5 :
                        stat.id === "locations" ? icon6 :
                          icon7} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;

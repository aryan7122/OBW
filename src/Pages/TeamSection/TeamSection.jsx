import React, { useState } from "react";
import "./TeamSection.scss";
import img1 from '../../assets/team/34d2edqd.jpeg'
import img2 from '../../assets/team/12312.jpeg'
import img3 from '../../assets/team/t2.avif'
import icon1 from '../../assets/team/str.svg'
import icon2 from '../../assets/team/3dicons-travel-front-color.svg'
import icon3 from '../../assets/team/3dicons-tick-front-color.svg'
import icon4 from '../../assets/team/3dicons-thumb-up-front-color.svg'
import icon5 from '../../assets/team/3dicons-trophy-front-color.svg'
import icon6 from '../../assets/team/3dicons-map-pin-front-color.svg'
import icon7 from '../../assets/team/3dicons-star-2-front-color.svg'
import {
  CheckCircle,
  Briefcase,
  Trophy,
  MapPin,
  ThumbsUp,
  Star,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
const images = [
  img1, // Replace with actual image paths
  img2,
  img3,
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

  return (
    <section className="team-section-">
      {/* <div className="team-images">
        <img
          src={img1}
          alt="Team group one"
          className="team-photo"
        />
        <img
          src={img2}
          alt="Team group two"
          className="team-photo"
        />
       
      </div> */}
      <div className="slider-container" onWheel={handleWheel}>
        <div className="team-images" style={{ "--index": currentIndex }}
        >
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
              <img src={icon1} alt="" /> {' '}
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


        <div className="team-stats">
          <div className="stat-item">
            <div>
              <h3 className="stat-number">20+</h3>
              <p>Years of Combine Experience</p>
            </div>
            <img src={icon2} />
          </div>
          <div className="stat-item">
            <div>
              <h3 className="stat-number">15+</h3>
              <p>Certified Specialists</p>
            </div>
            <img src={icon3} />
          </div>
          <div className="stat-item">
            <div>
              <h3 className="stat-number">5000+</h3>
              <p>Successful Treatments</p>
            </div>
            <img src={icon4} />
          </div>
          <div className="stat-item">
            <div>
              <h3 className="stat-number">96%</h3>
              <p>Client Satisfaction Rate</p>
            </div>
            <img src={icon5} />
          </div>
          <div className="stat-item">
            <div>
              <h3 className="stat-number">4</h3>
              <p>Convenient Locations</p>
            </div>
            <img src={icon6} />
          </div>
          <div className="stat-item">
            <div>
              <h3 className="stat-number">100+</h3>
              <p>Positive Testimonials</p>
            </div>
            <img src={icon7} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

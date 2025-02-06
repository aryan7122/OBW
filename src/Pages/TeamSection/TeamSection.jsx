import React from "react";
import "./TeamSection.scss";
import img1 from '../../assets/team/34d2edqd.jpeg'
import img2 from '../../assets/team/12312.jpeg'
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
} from "lucide-react";

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="team-images">
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
      </div>
      <div className="team-container">
        <div className="team-header">
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
          <button className="view-all">Meet The team  <ArrowRight className="arrow-icon" size={20} strokeWidth={3} /></button>

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

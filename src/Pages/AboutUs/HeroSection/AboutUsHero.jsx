import React from "react";
import "./AboutUsHero.scss";
import { ArrowRight } from "lucide-react";

const AboutUsHero = () => {
  
  return (
    <div className="about-us">
      <div className="element1"></div>
      <div className="element2"></div>
      <div className="element3"></div>
      <div className="element4"></div>
      <div className="element5"></div>
      <div className="content">
        <h1>Our Story: Excellence in Beauty and Wellness</h1>
        <p>
          We are revolutionizing the world of skin and hair care by offering
          personalized solutions that cater to individual needs, all while
          harnessing the power of advanced technology to ensure optimal results.
        </p>
        {/* <button></button> */}
        <button className="BookAppointmentNow">Book Appointment Now  <ArrowRight className="arrow-icon" size={20} strokeWidth={3} /></button>

      </div>
    </div>
  );
};

export default AboutUsHero;

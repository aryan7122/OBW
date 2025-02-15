import React, { useState } from "react";
import "./AboutUsHero.scss";
import { ArrowRight } from "lucide-react";
import BookAppointment from "../../../Components/BookAppointment/BookAppointment";

const AboutUsHero = () => {
  const [showModal, setShowModal] = useState(false);
  const handleBookNowClick = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="about-us">
        <div className="element1"></div>
        <div className="element2"></div>
        <div className="element3"></div>
        <div className="element4"></div>
        <div className="element5"></div>
        <div className="content">
          <h1>Transforming Your Skin, Elevating Your Confidence</h1>
          <p>
            OBW Clinic enhances natural beauty and well-being through advanced
            aesthetic and skin care solutions. Founded with a vision to provide
            premium, result-driven treatments, our clinic offers a comprehensive
            range of services, including skin brightening, anti-aging solutions,
            laser treatments, chemical peels, PRP therapy, HydraFacial, body
            contouring, and much more.
          </p>
          {/* <button></button> */}
          <button onClick={handleBookNowClick} className="BookAppointmentNow">
            Book Appointment Now{" "}
            <ArrowRight className="arrow-icon" size={20} strokeWidth={3} />
          </button>
        </div>
      </div>
      {showModal && <BookAppointment onClose={closeModal} />}
    </>
  );
};

export default AboutUsHero;

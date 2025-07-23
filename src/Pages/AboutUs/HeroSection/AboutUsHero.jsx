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
        <div className="content_box">
          <div className="content">
            <h1>Our Story: Excellence in 
<span> Beauty & Wellness</span></h1>
            <p>
             We are revolutionizing the world of skin and hair care by offering personalized solutions that cater to individual needs, all while harnessing the power of advanced technology to ensure optimal results.
            </p>
            {/* <button></button> */}
          </div>
          <button onClick={handleBookNowClick} className="BookAppointmentNow btn">
            <span>

            Contact Us {" "}
              <ArrowRight className="arrow-icon" size={20} strokeWidth={2} />
            </span>
          </button>
        </div>
      </div>
      {showModal && <BookAppointment onClose={closeModal} />}
    </>
  );
};

export default AboutUsHero;

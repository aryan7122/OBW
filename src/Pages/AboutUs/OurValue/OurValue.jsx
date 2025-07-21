import { ArrowRight } from "lucide-react";
import React from "react";
import "./OurValue.scss";
// import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import fallStr from '../../../assets/about/fallStr.svg';
import WebPImage from "../../../util/WebPImage";
import img1 from '../../../assets/about/Stylized Portrait of a Woman with Flowers.webp'
import img2 from '../../../assets/about/Serene Woman with Flower.webp'
import img3 from '../../../assets/about/Serene Woman with Flower (1).webp'
const treatments = [
    {
        title: "More Than Skin Deep ",
        description: "We combine advanced technology with caring, skilled professionals. It’s not just about results, it’s about making sure you feel safe, relaxed, and supported throughout your journey. ",
        image: img1,
    },
    {
        title: "Honest Beauty, Real Results ",
        description: "We don’t chase trends. We focus on what’s right for your skin using expert knowledge and the latest methods to give you visible, lasting results. ",
        image: img2,
    },
    {
        title: "Safety Comes First ",
        description: "We never take shortcuts. All our products are tested, all our machines are certified, and all our treatments are done by trained experts because your trust matters to us. ",
        image: img3,
    },
];

const OurValue = () => {
    const navigate = useNavigate();
    const HandleNavigation = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };
    return (
        <div className="OurValue-treatments">
            <div className="title-sbt">Our Values</div>
            <header className="heading-section">
                <h1 className="trending-title">
                  What OBW    <span className="heart"><img src={fallStr} alt="" /></span>      Clinic Truly Believes In  
                </h1>
                <p className="description">
At OBW Clinic, we don’t just care for your skin; we care for your confidence, self-worth, and overall well-being. Every appointment, every conversation, and every result are centered around you, your story, your goals, and your comfort.                 </p>
            </header>

            <div className="cards-container">
                {treatments.map((treatment, index) => (
                    <div key={index} className="card_">
                        <div className="card-image">
                            <WebPImage src={treatment.image} alt={treatment.title} className="" />
                        </div>
                        <h3 className="card-title">{treatment.title}</h3>
                        <p className="card-description">{treatment.description}</p>
                    </div>
                ))}
            </div>

            {/* <footer className="footer-section"> */}
            {/* <button className="Book-Now" onClick={() => HandleNavigation("/contact")}>Get in touch now  <ArrowRight className="arrow-icon" size={20} strokeWidth={2} /></button> */}
            {/* <div className="next-btn"><a href="">Next</a> <ChevronRight color="#5B2F2F" /> </div> */}
            {/* </footer> */}
        </div>
    );
};

export default OurValue;

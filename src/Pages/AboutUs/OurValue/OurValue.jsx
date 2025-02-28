import { ArrowRight } from "lucide-react";
import React from "react";
import "./OurValue.scss";
// import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import fallStr from '../../../assets/about/fallStr.svg';
import WebPImage from "../../../util/WebPImage";
import img2 from '../../../assets/TrendingTreatments/Personalized & Holistic Approach-min.jpg'
import img3 from '../../../assets/TrendingTreatments/Commitment to Safety & Quality-min.jpg'
const treatments = [
    {
        title: "Excellence in Aesthetics",
        description: "We combine advanced technology with expert care to deliver high-quality, result-driven treatments. ",
        image: "https://res.cloudinary.com/dvu9zrnsp/image/upload/f_auto,q_auto/v1/OBW_TRENING/Exosome_Therapy_for_Skin_Scalp-min_yykqhj",
    },
    {
        title: "Personalized & Holistic Approach",
        description: "Every client is unique, and we customize our treatments to meet individual beauty and wellness goals. ",
        image: img2,
    },
    {
        title: "Commitment to Safety & Quality ",
        description: "We use only clinically tested, dermatologically safe products and FDA-approved procedures to ensure the best care.",
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
                    What We  <span className="heart"><img src={fallStr} alt="" /></span>      Stand For
                </h1>
                <p className="description">
                    At OBW Clinic, we believe in delivering exceptional care, transformative results, and a holistic approach to beauty and wellness. Our mission is to provide safe, effective, and personalized treatments that enhance confidence and well-being.
                </p>
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

            <footer className="footer-section">
                <button className="Book-Now" onClick={() => HandleNavigation("/contact")}>Get in touch now  <ArrowRight className="arrow-icon" size={20} strokeWidth={3} /></button>
                {/* <div className="next-btn"><a href="">Next</a> <ChevronRight color="#5B2F2F" /> </div> */}
            </footer>
        </div>
    );
};

export default OurValue;

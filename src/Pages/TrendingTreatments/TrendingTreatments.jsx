import React from "react";
import "./TrendingTreatments.scss";
import img1 from '../../assets/TrendingTreatments/img1.jpeg'
import img2 from '../../assets/TrendingTreatments/img2.jpeg'
import img3 from '../../assets/TrendingTreatments/img3.jpeg'
import img4 from '../../assets/TrendingTreatments/img4.jpeg'
import { ArrowRight, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";

const treatments = [
    {
        title: "Cosmelan Peel",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: img1,
    },
    {
        title: "PRP for hair",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: img2,
    },
    {
        title: "Laser Hair Reduction",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: img3,
    },
    {
        title: "Dermal fillers",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: img4,
    },
];

const TrendingTreatments = () => {
    return (
        <div className="trending-treatments">
            <div className="title-sbt">TRENDING</div>
            <header className="heading-section">
                <h1 className="trending-title">
                    Trending <span className="heart">&#x2764;</span> Treatments
                </h1>
                <p className="description">
                    Explore the latest treatments reshaping healthcare, from innovative therapies for chronic pain to advanced skincare solutions. Discover options like regenerative medicine that taps into the body's healing abilities and personalized nutrition plans tailored to your health needs. Stay informed with treatments that prioritize results and patient comfort.
                </p>
            </header>

            <div className="cards-container">
                {treatments.map((treatment, index) => (
                    <div key={index} className="card">
                        <div className="card-image">
                            <img src={treatment.image} alt={treatment.title} className="" />
                        </div>
                        <h3 className="card-title">{treatment.title}</h3>
                        <p className="card-description">{treatment.description}</p>
                    </div>
                ))}
            </div>

            <footer className="footer-section">
                <button className="Book-Now">Book Now  <ArrowRight className="arrow-icon" size={20} strokeWidth={3} /></button>
                <div className="next-btn"><a href="">Next</a> <ChevronRight color="#5B2F2F" /> </div>
            </footer>
        </div>
    );
};

export default TrendingTreatments;

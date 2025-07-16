import React from 'react';
import { Gem, HandHeart, Rocket, Sparkles } from 'lucide-react';
import './SalonAboutValues.scss';
import str3 from "../../../../assets/SALON/hero/str.png";

const valuesData = [
    {
        icon: <Gem size={24} />,
        title: "Precision Meets Passion",
        text: "At OBW, every treatment, from haircuts to clinical procedures, is done with care and passion, blending artistry with science for great results.",
        color: "yellow"
    },
    {
        icon: <HandHeart size={24} />,
        title: "Authentic Care, Always",
        text: "We focus on building strong relationships with our clients through honest guidance and personalized attention. Your comfort and satisfaction are our top priorities.",
        color: "beige"
    },
    {
        icon: <Rocket size={24} />,
        title: "Innovation-Driven Beauty",
        text: "We embrace the latest skincare and beauty trends, ensuring our services remain top-notch – because you deserve the best.",
        color: "lavender"
    }
];

const SalonAboutValues = () => {
    return (
        <section className="salon-about-values">
            <div className="values-header">
                <p className="label"><img src={str3} /> VALUES <img src={str3} /></p>
                <h2>Our Expertise In Beauty Industry</h2>
            </div>
            <div className="values-grid">
                {valuesData.map(value => (
                    <div key={value.title} className={`value-card value-card--${value.color}`}>
                        <div className="value-card__icon">{value.icon}</div>
                        <h3>{value.title}</h3>
                        <p>{value.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SalonAboutValues;
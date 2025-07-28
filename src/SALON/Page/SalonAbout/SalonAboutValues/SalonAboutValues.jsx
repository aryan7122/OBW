import React from 'react';
import { CalendarCheck2, Gem, HandHeart, Heart, Leaf, Rocket, ScanHeart, Sparkles } from 'lucide-react';
import './SalonAboutValues.scss';
import str3 from "../../../../assets/SALON/hero/str.png";

const valuesData = [
    {
        icon:<Heart  size={24} />,
        title: "Skill with Heart",
        text: "At OBW, every service, whether it’s a haircut, or skin treatment, is done with passion & care. We mix creativity with expert knowledge to give you the best results.",
        color: "yellow"
    },
    {
        icon:<Leaf  size={24} />,
        title: "Genuine Care",
        text: "We truly care about our clients. We listen to your needs, give honest advice, and make sure you feel comfortable and confident every time you visit.",
        color: "beige"
    },
    {
        icon: <CalendarCheck2   size={24}/>,
        title: "Always Up-to-Date",
        text: "We keep up with the latest in hair and skin care to provide you with exceptional beauty treatments. Your beauty is our priority!",
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
                    <div key={value.title}
                     className={`value-card value-card--${value.color}`}
                    >
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
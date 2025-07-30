import React from "react";
import "./WhyChooseUs.scss";
import faceImage from "../../../assets/SALON/hero/whyChooseUs/face-why.png"; // Replace with actual image path
// import serum1 from '../../../assets/whyChooseUs/serum1.png';
// import serum2 from '../../../assets/whyChooseUs/serum2.png';
import str3 from "../../../assets/SALON/hero/str.png";
import { BadgePercent, Gem, ShieldCheck, Sparkle } from "lucide-react";

const cards = [
  {
    icon: <Gem size={36} strokeWidth={1} />,
    title: "Skilled Hands, Friendly Hearts",
    desc: "Our stylists are trained, talented, and care deeply about your look",
  },
  {
    icon: <BadgePercent size={36} strokeWidth={1} />,
    title: "Beauty That’s Budget-Friendly ",
    desc: "Get expert care and luxury styling without breaking the bank",
  },
  {
    icon: <ShieldCheck size={36} strokeWidth={1} />,
    title: "Salon Clean, Always Safe ",
    desc: "We follow strict hygiene steps to ensure every visit is spotless",
  },
  {
    icon: <Sparkle size={36} strokeWidth={1} />,
    title: "Only Trusted, Salon-Grade Products",
    desc: "We use premium hair and skin products your beauty truly deserves.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="top-section">
        <span className="badge">
          WHY CHOOSE US
             <img src={str3} />{" "}
        </span>
        <h2 className="heading">Why You'll Love Getting Styled at OBW Salon </h2>
        <div className="bottom_title">
          <p className="desc">
            Trusted by Clients, Powered by Creativity.
          </p>
          <p className="elevated">BEAUTY. ELEVATED.</p>
        </div>
      </div>

      <div className="card-image-wrapper">
        <img src={faceImage} alt="Face Treatment" className="main-img" />
        {/* <img src={serum1} className="floating-img serum1" alt="product" />
        <img src={serum2} className="floating-img serum2" alt="product" /> */}

        {cards.map((card, idx) => (
          <div className={`info-card card-${idx + 1}`} key={idx}>
            <div className="icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}

         <div className="circle-stamp-wrapper">
      <div className="circle-stamp">
        <svg viewBox="0 0 200 200" className="rotating-text">
          <defs>
            <path
              id="circlePath"
              d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
            />
          </defs>
          <text>
            <textPath href="#circlePath" startOffset="0%">
              BEST SERVICES ● BEST SERVICES ● BEST SERVICES ●
            </textPath>
          </text>
        </svg>

        <div className="dot top-left"></div>
        <div className="dot bottom-right"></div>
      </div>
    </div>
      </div>
      <div className="card_boax">
         {cards.map((card, idx) => (
          <div className={`info-card-2 card-${idx + 1}`} key={idx}>
            <div className="icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;

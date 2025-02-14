import React from "react";
import "./HeroSection.scss";
import { ArrowRight, CirclePlay } from "lucide-react";

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero_bg">
                <div className="content">
                    <h1>Experience true elegance and indulge in sophistication.</h1>
                    <p>
                        At OBW, we blend luxury and personalized skincare to rejuvenate your
                        beauty. Discover the artistry of our expert team dedicated to your
                        unique needs.
                    </p>
                    <div className="buttons">
                        <button className="appointment-button">
                            Book Appointment Now <ArrowRight className="arrow-icon" size={20} strokeWidth={3} />
                        </button>
                        {/* <button className="secondary-btn">
                            <CirclePlay size={32} color="#00CFDE" strokeWidth={3} absoluteStrokeWidth />
                            See How It Works
                        </button> */}
                    </div>
                </div>
                <div className="hero-image">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/4c33/aa75/c0fb940b95018e5564b4964375268ada?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AcQYKKHdTKu~L54imqEOTsyL1h7QgZ~9hxKcYe9q8Y8jItwm4-pT4IKViAxZM~WDVJ5zjCRU68uG6UpM-IqDSl8U3yAiSWrpHhX~cjrQ~9bOOU958XMctQNgu2dDVHHKAqLYwSGUFBr~pVUEcAspc2O6Ns7AwV1X4XxBJg8ImBh2qikGVAYz2HwBxuSSunkdmc7uGF1YzoU25pxmKyIgb79adYgvyuoo-bltLOsiYrnajMhzWROgLk9PnkXBslu1FWk5HA~xV7v2BZitWfQzyqSx-xXpDu5j6Llfac3wPGWvL2qZsCwUO-hBzKDgsioQCzNSAkvWblxvhSd-SYEzLA__"
                        alt="Hero Girl"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;

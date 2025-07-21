import React from 'react';
import './FabulousSection.scss';
import { MoveRight, Play } from 'lucide-react';
import img from '../../assets/TrendingTreatments/AllTreatments.jpg'
const FabulousSection = () => {
    return (
        <section className="fabulous-section">
            <div className="cont-card">
                <div className="media-container">
                    <div className="video-thumbnail ">
                        <img
                            src={img}
                            alt="Hair Spa Session"
                            className="video-image"
                        />
                        <div className="play_btn">
                            <div className="play-icon">
                                <Play size={28} />
                            </div>
                       </div>
                    </div>
                </div>
                <div className="content-container">
                    <span className="label">VALUES</span>
                    <h2 className="title">Step Into Your Most Confident Self </h2>
                    <p className="description">
                        More than a space, it’s a feeling. At OBW, we celebrate individuality, elegance, and the power of feeling truly you
                    </p>
                    <ul className="features">
                        <li>
                            <span className="arrow"><MoveRight /></span> Thoughtfully designed, calming interiors 
                        </li>
                        <li>
                            <span className="arrow"><MoveRight /></span> Impeccable hygiene standards you can trust
                        </li>
                        <li>
                            <span className="arrow"><MoveRight /></span> Located in premium, well-connected areas 
                        </li>
                        <li>
                            <span className="arrow"><MoveRight /></span> A luxurious vibe that feels like home
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default FabulousSection;

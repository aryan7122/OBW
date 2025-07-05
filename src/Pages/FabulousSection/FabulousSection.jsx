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
                    <h2 className="title">Ready to embrace your fabulous side?</h2>
                    <p className="description">
                        Are you ready to unleash your fabulous side? Dive into a world where
                        style meets confidence, and let your true colors shine!
                    </p>
                    <ul className="features">
                        <li>
                            <span className="arrow"><MoveRight /></span> Contemporary and roomy spaces
                        </li>
                        <li>
                            <span className="arrow"><MoveRight /></span> Clean and tidy space
                        </li>
                        <li>
                            <span className="arrow"><MoveRight /></span> Situated in top-rated areas
                        </li>
                        <li>
                            <span className="arrow"><MoveRight /></span> Unique and opulent atmosphere
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default FabulousSection;

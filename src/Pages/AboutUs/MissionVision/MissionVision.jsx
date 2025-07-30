import React from 'react';
import './MissionVision.scss';
import img1 from '../../../assets/about/ab_out_b.jpg'
import img2 from '../../../assets/about/3accd80b7ddfc415aab514c71ade1c85.jpg'
import icon1 from '../../../assets/about/ida.svg'
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MissionVision = () => {
    const navigate = useNavigate();
    const HandleNavigation = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };
    return (
        <section className="mission-vision">
            <div className="container">
                <div className="title0101">
                    <h2 className="section-title">Behind Every Treatment, A Clear <span className="icon"><img src={icon1} alt="" /></span> Vision</h2>
                    <img
                        src={img1}
                        alt="Meeting discussion"
                        className="image-large"
                    />
                </div>
                <div className="content-wrapper">
                    <div className="left-content">
                        <p>At OBW Clinic, we turn beauty trends into real skin wellness, empowering everyone with honest advice and effective treatments.
                        </p>
                        <div className="stats">

                            <div className="cards">
                                <div className="stat-item">
                                    <h3>2024</h3>
                                    <p>Founded</p>
                                </div>
                                <div className="stat-item">
                                    <h3>1500+</h3>
                                    <p>Customers Served this year</p>
                                </div>
                                <div className="stat-item">
                                    <h3>20+</h3>
                                    <p>Employees</p>
                                </div>
                                <div className="stat-item">
                                    <h3>5k+</h3>
                                    <p>Customers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-content">
                {/* <img
                            src={img2}
                            alt="Skincare model closeup"
                            className="image-feature"
                        /> */}
                <p className="description">
                    We are committed to providing safe, ethical, and inclusive skin healthcare. Our approach is rooted in respect, evidence-based care, and accessibility for individuals of all skin types and backgrounds.                        </p>
                <button className="BookAppointmentNow btn" onClick={() => HandleNavigation("/treatment")}>
                    <span>
                        See all services we provide<ArrowRight className="arrow-icon" size={20} strokeWidth={2} />
                    </span>
                </button>

            </div>
        </section>
    );
};

export default MissionVision;

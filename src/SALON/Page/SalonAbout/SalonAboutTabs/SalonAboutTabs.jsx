import React, { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import './SalonAboutTabs.scss';

// Import images for the tabs - adjust paths as needed
import whoWeAreImage from '../../../../assets/SALON/hero/About/Who we are.jpg';
import whatWeDoLeftImage from '../../../../assets/SALON/hero/About/What we do-left.webp';
import whatWeDoRightImage from '../../../../assets/SALON/hero/About/What we do-right.webp';
import str3 from "../../../../assets/SALON/hero/str.png";

const WhoWeAreContent = () => (
    <div className="tab-content-grid two-cols P_L">
        <div className="text-content">
            <h3>About Obw Salon</h3>
            <p>At OBW, we believe beauty is not just about your looks it’s also about how you feel. We’re passionate about helping people look and feel their best. Over time, OBW has become a trusted place for both salon and skincare services in Bangalore. </p>
            <p>We have four branches across Bangalore, where you’ll find experienced skin experts using advanced technology in a calm, relaxing space. Your skin is in good hands with our trained team. We focus on your comfort and happiness, making sure you leave feeling refreshed, confident, and well taken care of. </p>
            <br/>
            <br/>
            <br/>
            <h3>What We Do </h3>
            <p>At OBW, we provide a complete range of salon and skin clinic services under one roof. From haircuts, styling, and makeup to advanced skin treatments like HydraFacials, laser hair reduction, and CoolSculpting, we help you look and feel your best. With expert professionals, modern technology, and four branches in Bengaluru, every visit is personalized, relaxing, and confidence-boosting. </p>
        </div>
        <div className="image-content">
            <img src={whoWeAreImage} alt="A portrait of a confident woman" />
        </div>
    </div>
);

const WhatWeDoContent = () => {
    const stats = [
        { number: '04', label: 'Convenient Locations', color: 'blue' },
        { number: '20+', label: 'Years of combined Experience', color: 'yellow' },
        { number: '8000+', label: 'Clients Served', color: 'pink' },
        { number: '20+', label: 'Certified Professionals', color: 'grey' }
    ];
    return (
        <div className="tab_content_grid three-cols ">
            <div className="image_content">
                <img src={whatWeDoLeftImage} alt="Interior of a modern salon" className="what-we-do-img-left"/>
            </div>
            <div className="text_content">
                 <h3>We provide special care for your appearance and beauty</h3>
                 <div className="stats-grid">
                    {stats.map(stat => (
                        <div key={stat.label} className={`stat-card stat-card--${stat.color}`}>
                            <strong>{stat.number}</strong>
                            <p>{stat.label}</p>
                        </div>
                    ))}
                 </div>
            </div>
            <div className="image_content">
                <img src={whatWeDoRightImage} alt="Artistic display of hair coloring" className="what-we-do-img-right"/>
            </div>
        </div>
    );
};

const MissionVisionContent = () => (
    <div className="tab-content-single-col MissionVisionContent P_L">
        <div className="mission-item">
            <a href="#mission">Our mission <ArrowRight size={16}/></a>
            <p>At OBW, our mission is to help people feel confident and beautiful by offering high-quality salon and skincare services. We are committed to expert care, modern treatments, and creating a relaxing experience for every client.</p>
        </div>
        <div className="mission-item">
            <a href="#vision">Our vision <ArrowRight size={16}/></a>
            <p>Our vision is to grow as a trusted name in beauty and wellness, known for innovation, care, and customer satisfaction while always making sure each person who walks through our doors feels valued, refreshed, and special. </p>
        </div>
    </div>
);


const SalonAboutTabs = () => {
    const [activeTab, setActiveTab] = useState('who'); // 'who', 'what', 'mission'

    const renderContent = () => {
        switch (activeTab) {
            case 'what': return <WhatWeDoContent />;
            case 'mission': return <MissionVisionContent />;
            case 'who':
            default:
                return <WhoWeAreContent />;
        }
    };

    return (
        <section className="salon-about-tabs">
            <div className="tabs-header">
                <p className="label"><img src={str3} /> ABOUT US</p>
                <h2>Whether Beauty Meets Precision</h2>
            </div>
            <nav className="tabs-nav">
                <button 
                    className={`tab-button ${activeTab === 'who' ? 'active' : ''}`}
                    onClick={() => setActiveTab('who')}
                >
                    Who we are
                </button>
                {/* <button 
                    className={`tab-button ${activeTab === 'what' ? 'active' : ''}`}
                    onClick={() => setActiveTab('what')}
                >
                    What we do
                </button> */}
                <button 
                    className={`tab-button ${activeTab === 'mission' ? 'active' : ''}`}
                    onClick={() => setActiveTab('mission')}
                >
                    Our mission & Vision
                </button>
            </nav>
            <div className="tab-content-container">
                {renderContent()}
            </div>
        </section>
    );
};

export default SalonAboutTabs;
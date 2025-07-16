import React, { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import './SalonAboutTabs.scss';

// Import images for the tabs - adjust paths as needed
import whoWeAreImage from '../../../../assets/SALON/hero/About/Who we are.jpg';
import whatWeDoLeftImage from '../../../../assets/SALON/hero/About/What we do-left.png';
import whatWeDoRightImage from '../../../../assets/SALON/hero/About/What we do-right.png';
import str3 from "../../../../assets/SALON/hero/str.png";

const WhoWeAreContent = () => (
    <div className="tab-content-grid two-cols P_L">
        <div className="text-content">
            <h3>About Obw Salon</h3>
            <p>At OBW, we believe beauty isn’t just about how you look – it’s how you feel. With a passion for transformation and precision, OBW has grown into a trusted destination for salon and clinical beauty services in Bangalore. Whether you want to refresh your style or rejuvenate your skin, we're here to bring out the best in you.</p>
            <p>At our three branches in Bangalore, we offer a unique experience where certified skin experts utilize state-of-the-art technology in a calming and tranquil environment. Your skin deserves the best care, and with our dedicated team, you can trust that it is in exceptional hands. We prioritize your comfort and satisfaction, ensuring that every visit leaves you feeling rejuvenated and confident.</p>
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
        <div className="tab-content-grid three-cols ">
            <div className="image-content">
                <img src={whatWeDoLeftImage} alt="Interior of a modern salon" className="what-we-do-img-left"/>
            </div>
            <div className="text-content">
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
            <div className="image-content">
                <img src={whatWeDoRightImage} alt="Artistic display of hair coloring" className="what-we-do-img-right"/>
            </div>
        </div>
    );
};

const MissionVisionContent = () => (
    <div className="tab-content-single-col MissionVisionContent P_L">
        <div className="mission-item">
            <a href="#mission">Our mission <ArrowRight size={16}/></a>
            <p>Our vision is to redefine the art of hairdressing, creating a space where beauty, creativity, and wellness converge. We aspire to inspire confidence in every client, offering innovative styles and personalised experiences that reflect individuality.</p>
        </div>
        <div className="mission-item">
            <a href="#vision">Our vision <ArrowRight size={16}/></a>
            <p>Our team is passionate about staying ahead of trends while always prioritising the health and integrity of your hair, nails, skin, lashes and brows. We are dedicated to creating exceptional moments for you, our valued clients.</p>
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
                <button 
                    className={`tab-button ${activeTab === 'what' ? 'active' : ''}`}
                    onClick={() => setActiveTab('what')}
                >
                    What we do
                </button>
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
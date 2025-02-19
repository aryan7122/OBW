import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import './Location.scss';
import { useNavigate } from 'react-router-dom';

const Location = () => {
    const navigate = useNavigate();
    const HandleNavigation = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };
     
    return (
        <div className="location-container">
            <header className="location-header">
                <div>
                    <h1>Skin Clinic Locations</h1>
                    <p>
                        Explore our clinic locations, where expert care meets innovation. Get personalized advice, the latest skincare trends, and advanced aesthetic treatments to enhance your beauty and wellness.
                        
                    </p>
                </div>
                <button className="get-in-touch" onClick={() => HandleNavigation("/contact")}>
                    Get In Touch <ArrowRight className="arrow-icon" size={20} strokeWidth={3} />
                </button>
            </header>
            <div className="breadcrumb">
                <div>
                    <span className="unFill-separator">&#9734;</span>
                    <span className='p_home'>Home</span>
                    <span className="breadcrumb-separator">&#9733;</span>
                    <span className='p'>Skin Clinic Locations</span>
                </div>
                <div className="clinic-selection">
                    <h3>Select a clinic location:</h3>
                    <div className='smsl'>
                        <button className="clinic-button">Banashankari</button>
                        <button className="clinic-button">Kanakapura Main Rd</button>
                        {/* <button className="clinic-button">Kodipalya</button> */}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Location;
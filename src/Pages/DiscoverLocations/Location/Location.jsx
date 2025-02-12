import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Location.scss';

const Location = () => {
    return (
        <div className="location-container">
            <header className="location-header">
                <div>
                    <h1>Skin Clinic Locations</h1>
                    <p>
                        Discover our salon locations, where you’ll find expert advice, helpful tips, and the latest trends in skincare,
                        haircare, and aesthetic treatments to elevate your beauty routine.
                    </p>
                </div>
                <button className="get-in-touch">
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
                        <button className="clinic-button">Kanakapura Road</button>
                        <button className="clinic-button">R.R Nagar</button>
                        <button className="clinic-button">Kodipalya</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;
import React from 'react';
import './BannerSectionSalon.scss';
import { ArrowRight } from 'lucide-react';

const BannerSectionSalon = () => {
    const HandleNavigation = (path) => {
        console.log(`Navigating to: ${path}`);
    };

    return (
        <div className="BannerSectionSalon-section">
            <div className="BannerSectionSalon-content">

                <h1 className="BannerSectionSalon-title">
                    Elevate Your Beauty<br />Experience At Our Salon!
                    <span className="title-clam-eraser"></span>
                </h1>
                <button className="view-all btn" onClick={() => HandleNavigation("/contact")}>
                    <span>
                        Get In touch <ArrowRight className="arrow-icon" size={20} strokeWidth={3} />
                    </span>
                </button>
            </div>

        </div>
    );
};

export default BannerSectionSalon;
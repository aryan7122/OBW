import React from 'react';
import './BannerSectionSalon.scss';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BannerSectionSalon = () => {
        const navigate = useNavigate();

    const HandleNavigation = (path) => {
          window.scrollTo(0, 0);

        navigate(`/${path}`);
    };
    

    return (
        <div className="BannerSectionSalon-section">
            <div className="BannerSectionSalon-content">

                <h1 className="BannerSectionSalon-title">
                    Elevate Your Beauty<br />Experience At Our Salon!
                    <span className="title-clam-eraser"></span>
                </h1>
                <button className="view--all btn" onClick={() => HandleNavigation("contact")}>
                  
                    <span>
                       Explore
                    </span>
                       <ArrowRight className="arrow-icon" size={20} strokeWidth={2} />
                </button>
            </div>

        </div>
    );
};

export default BannerSectionSalon;
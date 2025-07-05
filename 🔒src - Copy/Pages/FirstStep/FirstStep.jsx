import { ArrowRight } from 'lucide-react'
// import React from 'react'
import './FirstStep.scss'
import { useNavigate } from 'react-router-dom';
const FirstStep = () => {
    const navigate = useNavigate();
    const HandleNavigation = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };
    return (
        <div className='FirstStep'>
            <div className='h1_card'>
                <h1>
                    Begin your journey to healthier, glowing skin today!
                </h1>
            </div>
            <p>Contact us today to enquire about our services or to book an appointment</p>
            <button className="view-all" onClick={() => HandleNavigation("/contact")} >Contact us  <ArrowRight className="arrow-icon" size={20} strokeWidth={3} /></button>

        </div>
    )
}

export default FirstStep
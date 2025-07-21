import React, { useState } from 'react';
import './Team.scss';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import happyImg from '../../../../assets/HappyClients/happy.svg'
import WebPImage from '../../../../util/WebPImage';
const data = [
    {
        name: "Lalita Thakur",
        location: "Mumbai",
        image: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/Locations/OurExperts/jakfv66owrqbhsvyw1fe", // Replace with your image URL
        star: 3,
    },
    {
        name: "Sheetal Trivedi",
        location: "Bengaluru",
        image: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/Locations/OurExperts/fd0fkgkvkaomkkezctxi", // Replace with your image URL
        star: 3.5,
    },
    {
        name: "Vishwas Patel",
        location: "Bengaluru",
        image: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/Locations/OurExperts/s8a4kae3lbjhcsvznica", // Replace with your image URL
        star: 5,
    },

];

const Team = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCards = 1;

    const handleNext = () => {
        if (currentIndex < data.length - visibleCards) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="team-container">
            <div className="content_top">
                <div>
                    <h1 className="team">Team</h1>
                    <h2 className="slider-heading">Our  Experts </h2>
                    <p className="slider-subheading">
                        Step into our salon for a rejuvenating experience! With multiple locations, our skilled professionals are committed to enhancing your beauty and confidence. Whether it’s a haircut, color treatment, or spa service, our team ensures top-notch care. Treat yourself today!
                    </p>
                </div>
                {/* <button className="view-all">Get In touch  <ArrowRight className="arrow-icon" size={20} strokeWidth={2} /></button> */}
            </div>


            <div className="blog-slider-wrapper">

                <div className="slider-cards" style={{ "--index": currentIndex }}>
                    {data.map((blog, index) => (
                        <div key={index} className={`" slider-card ${index === currentIndex ? "active" : "hidden"}`}
                        >
                            <WebPImage src={blog.image} alt={blog?.title} className="card-image" />
                            <div className="card_blur">
                                <div className='aut_text-img'>
                                    <div className='aut_text'>
                                        <p className="card-name">{blog?.name}</p>
                                        <p className="card-location">{blog?.location}</p>

                                    </div>
                                </div>
                                <button className="action_btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" color="#ffffff" fill="none">
                                        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                                        <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" stroke-width="1.5" />
                                        <path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" color="#ffffff" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.18182 10.3333C5.20406 10.3333 5 10.5252 5 11.4444V13.1111C5 14.0304 5.20406 14.2222 6.18182 14.2222H8.54545V20.8889C8.54545 21.8081 8.74951 22 9.72727 22H12.0909C13.0687 22 13.2727 21.8081 13.2727 20.8889V14.2222H15.9267C16.6683 14.2222 16.8594 14.0867 17.0631 13.4164L17.5696 11.7497C17.9185 10.6014 17.7035 10.3333 16.4332 10.3333H13.2727V7.55556C13.2727 6.94191 13.8018 6.44444 14.4545 6.44444H17.8182C18.7959 6.44444 19 6.25259 19 5.33333V3.11111C19 2.19185 18.7959 2 17.8182 2H14.4545C11.191 2 8.54545 4.48731 8.54545 7.55556V10.3333H6.18182Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="progress">
                    <button className="nav-btn left" onClick={handlePrevious} disabled={currentIndex === 0}>
                        <ArrowLeft className="arrow-icon" size={20} strokeWidth={2} />
                    </button>
                    <button className="nav-btn right" onClick={handleNext} disabled={currentIndex >= data.length - visibleCards}>
                        <ArrowRight className="arrow-icon" size={20} strokeWidth={2} />
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Team;

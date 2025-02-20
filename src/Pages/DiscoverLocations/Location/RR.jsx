import React, { useState } from "react";
import "./RR.scss";
import { ArrowRight, Phone } from "lucide-react";
import img1 from '../../../assets/about/e8942418fa09580f4a304b1b75102ee7.jpg'
import img2 from '../../../assets/about/5866f3bf14b8a2d9b731276b9089de83.jpg'
import img3 from '../../../assets/about/012b32172e499b8eed8d42a3bed687e1.jpg'
import line from '../../../assets/about/Line 267.svg'
import BookAppointment from "../../../Components/BookAppointment/BookAppointment";
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const images = [img1, img2, img3]; // Saari images ek array me store

const RR = () => {
    const [showModal, setShowModal] = useState(false);

    const handleBookNowClick = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="main-container-RR" id="Banashankari">
            {showModal && <BookAppointment onClose={closeModal} />}

            <div className="content">
                <div className="top_title">
                    <p className="address">203, 100 Feet Rd, near Polar Bear Ice Cream, Banashankari 6th Stage 3rd Block, Banashankari Stage 6, Chikkegowdanapalya, Bengaluru, Karnataka 560109</p>
                    <h1 className="title">Banashankari</h1>
                </div>
                <div className="_line"><img src={line} alt="line" /></div>
                <div className="action_two">
                    <div className="buttons">
                        <button className="book-btn" onClick={handleBookNowClick}>
                            Book Online <span> <ArrowRight size={18} /></span>
                        </button>
                        <a href="tel:9503038788" className="phone-btn">
                            9503038788 <span><Phone size={18} /></span>
                        </a>
                    </div>
                </div>

                <PhotoProvider>
                    <div className="photos-section">
                        <span>See more photos</span>
                        <div className="photos">
                            <PhotoView src={images[0]}>
                                <div className="photo" style={{ backgroundImage: `url(${images[0]})` }}></div>
                            </PhotoView>
                            <PhotoView src={images[1]}>
                                <div className="photo more-photos" style={{ backgroundImage: `url(${images[1]})` }}>
                                    +{images.length - 1}
                                </div>
                            </PhotoView>
                        </div>
                        {images.slice(1).map((image, index) => (
                            <PhotoView key={index + 1} src={image} />
                        ))}
                    </div>
                </PhotoProvider>
            </div>
        </div>
    );
};

export default RR;

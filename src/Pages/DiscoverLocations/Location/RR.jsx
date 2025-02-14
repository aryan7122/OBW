import React, { useState } from "react";
import "./RR.scss";
import { ArrowRight, Phone } from "lucide-react";
import img1 from '../../../assets/about/e8942418fa09580f4a304b1b75102ee7.jpg'
import img2 from '../../../assets/about/5866f3bf14b8a2d9b731276b9089de83.jpg'
import line from '../../../assets/about/Line 267.svg'
import BookAppointment from "../../../Components/BookAppointment/BookAppointment";
// 012b32172e499b8eed8d42a3bed687e1.jpg
const RR = () => {
     const [showModal, setShowModal] = useState(false);
        const handleBookNowClick = () => {
            setShowModal(true);
        };
        const closeModal = () => {
            setShowModal(false);
        };
    return (
        <div className="main-container-RR">
            {showModal && <BookAppointment onClose={closeModal} />}

            <div className="content">
                <div className="top_title">
                    <p className="address">No 2, Balarama Layout, Krishna Garden Main Road, near Happy Home Super Market, Rajarajeshwari Nagar, Bengaluru, Karnataka 560098</p>
                    <h1 className="title">R.R NAGAR</h1>
                </div>
                <div className="_line"><img src={line} /></div>
                <div className="action_two">
                    <div className="buttons">
                        <button className="book-btn" onClick={handleBookNowClick}>
                            Book Online <span> <ArrowRight size={18} /></span>
                        </button>
                        <a href="tel:9503038788" className="phone-btn">
                            9503038788 <span><Phone size={18} /></span>
                        </a>
                    </div>

                    <p className="description">
                        Lorem ipsum dolor sit amet consectetur. Purus lacus sed volutpat eu tempus condimentum. Facilisis ultrices fusce vitae ornare montes id. Diam pretium nulla faucibus massa pretium consequat urna id. Maecenas proin diam vestibulum vulputate ultricies ut faucibus etiam.
                    </p>
                </div>


                <div className="photos-section">
                    <span>See more photos</span>
                    <div className="photos">
                        <div className="photo" style={{ backgroundImage: `url(${img1})` }}></div>
                        <div className="photo more-photos" style={{ backgroundImage: `url(${img2})` }}>+2</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RR;

import React, { useState } from "react";
import "./Kankpur.scss";
import { ArrowRight, Phone } from "lucide-react";
import img1 from '../../../assets/about/e8942418fa09580f4a304b1b75102ee7.jpg'
import img2 from '../../../assets/about/5866f3bf14b8a2d9b731276b9089de83.jpg'
import img3 from '../../../assets/about/012b32172e499b8eed8d42a3bed687e1.jpg'
import line from '../../../assets/about/Line 267.svg'
import BookAppointment from "../../../Components/BookAppointment/BookAppointment";
// 012b32172e499b8eed8d42a3bed687e1.jpg
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
const images = [img1, img2, img3,
    'https://lh3.googleusercontent.com/gps-cs-s/AB5caB-oXlX1eDzxJ1vWmLMhc9HxC1TYV3lQFQnVPE_FcIR-ogKRTdN2FUbqBxRVMtKSL3EooN2U4psOBImtGiCZ6e3vnbX4yaohUz3ciDpmooarnKEKoqlp_gqO-hHTQlxuput2VnY4fQ=s1024',
    'https://lh3.googleusercontent.com/gps-cs-s/AB5caB9M1yNanuD2Lf8wPgK6E0AKiRqFNOHy4ggFMHaC-jf5TjlAx8v7TgEnPCCD9r8OwkMVKuDbVa0wCTN9NVZqXWopq3cX0__y1K8fqMYDfnJpQ5EKKKpxToXy6aErpIvVhVcT3FMk1w=s1024',
    'https://lh3.googleusercontent.com/gps-cs-s/AB5caB8iv_9G0PeGjh_-w8o9bKAKdTPi_YbtcLGavvBj6l4VRCqcF7MeQZs7X0SK0f4lIL6NnoVYfF3VwUk_Yr-hmFmfQX7eLMBhd8_b2PbG3RcMfjJOtwY9VStuWVhMHwbX6vcaNtjX=s1024',
    'https://lh3.googleusercontent.com/gps-cs-s/AB5caB91scZK8jDl3CHYi8b2fo4pCBeJzFDHmfN0BsqPW_qj9USH06pv9FbxJErsM1KfL69LltOhq1rffKAvuC0KRcaxkkGjotCPTck2YBsaE_erimvML2YH6I8ORDcerbsyOyajTOH2=s1024',
    'https://lh3.googleusercontent.com/gps-cs-s/AB5caB83vODEONxi6OVVXzl3KhvMsjKf4t_Ge4fSBUSaFDk-5_x6fjdsXuL3Bx9hhXaT9ySfrVNAe4ioXPDmx98_Ya_10u_kMHn3HQyccwBK-mUQ6dGYRT0rU0iVHgqJk86g7iCVTvA-=s1024',
    
];
const Kankpur = () => {
    const [showModal, setShowModal] = useState(false);
    const handleBookNowClick = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };
    return (
        <div className="main-container-Kankpur" id="Kanakapura">
            <div className="content">
                <div className="top_title">
                    <h1 className="title">Kanakapura Main Rd</h1>
                    <p className="address">No. 3 2nd floor, Kanakapura Main Rd, above Tanishq Jewellery, near KSIT college, Raghuvanahalli, KSIT junction, Bengaluru, Karnataka 560062</p>
                </div>
                <div className="_line"><img src={line} /></div>
                <div className="action_two">
                    <div className="buttons">
                        <button className="book-btn" onClick={handleBookNowClick} >
                            Book Online <span> <ArrowRight size={18} /></span>
                        </button>
                        <a href="tel:9503038788" className="phone-btn">
                            9503038788 <span><Phone size={18} /></span>
                        </a>
                    </div>

                    <p className="description">
                        {/* Lorem ipsum dolor sit amet consectetur. Purus lacus sed volutpat eu tempus condimentum. Facilisis ultrices fusce vitae ornare montes id. Diam pretium nulla faucibus massa pretium consequat urna id. Maecenas proin diam vestibulum vulputate ultricies ut faucibus etiam. */}
                    </p>
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
            {showModal && <BookAppointment onClose={closeModal} />}

        </div>
    );
};

export default Kankpur;

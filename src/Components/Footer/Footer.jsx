import React, { useState } from "react";
import "./Footer.scss";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"; // Keep only used icons
import logo from '../../assets/footer/logo.svg';
import { useNavigate } from "react-router-dom";
import { ArrowRight, Mail, Phone } from 'lucide-react'; // Assuming you use lucide-react for ArrowRight
import BookAppointment from '../BookAppointment/BookAppointment';

const Footer = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const HandleNavigation = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    const handleBookNowClick = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <footer className="footer">
            {showModal && <BookAppointment onClose={closeModal} />}

            <div className="footer-main-grid">
                {/* Section 1: Logo and Description */}
                <div className="grid-item footer-description-section">
                    <div>
                        <div className="footer-logo" onClick={() => HandleNavigation("/")}>
                            <img src={logo} alt="OBW Clinic Logo" />
                        </div>
                        <p className="description-text">
                            Step into our advanced clinic, where every visit is a step toward confidence and well-being. With expert care and personalized treatments, we’re here to help you achieve visible results and long-term skin and hair health.                                               </p>
                        <button className="book-appointment-btn btn" onClick={handleBookNowClick}>
                            <span>
                                Book Appointment <ArrowRight className="arrow-icon" size={20} strokeWidth={2} />
                            </span>
                        </button>
                    </div>
                    {/* Section 4: Contact Info and Button */}
                    <div className="grid-item footer-contact-section">
                        <div className="action_bt">
                            <h4 className="a4">CONTACT:</h4>
                            <div className="contact-info"> {/* Assuming a parent div */}
                                <p className="phone-number">
                                    {/* Phone number ko 'tel:' ke saath 'a' tag me daalein */}
                                    <a href="tel:+919764310135">
                                        <Phone size={20} />
                                        +91-9764310135
                                    </a>
                                </p>
                                <p className="email">
                                    {/* Email ko 'mailto:' ke saath 'a' tag me daalein */}
                                    <a href="mailto:contact@obw.com">
                                        <Mail size={20} />
                                        contact@obw.com
                                    </a>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Section 2: Company Links */}
                <div className="grid-item footer-company-links">
                    <h4>COMPANY:</h4>
                    <ul>
                        <li><a onClick={() => HandleNavigation("/about")}>About us</a></li>
                        <li><a onClick={() => HandleNavigation("/treatment")}>Treatments</a></li>
                        <li><a onClick={() => HandleNavigation("/contact")}>Contact US</a></li>
                        <li><a onClick={() => HandleNavigation("/blogs")}>Blogs</a></li>
                    </ul>
                </div>

                {/* Section 3: Clinic Services */}
                <div className="grid-item footer-clinic-services">
                    <h4>CLINIC:</h4>
                    <ul>
                        <li><a onClick={() => HandleNavigation("/treatment")}>Anti-ageing</a></li>
                        <li><a onClick={() => HandleNavigation("/treatment")}>Micro needling</a></li>
                        <li><a onClick={() => HandleNavigation("/treatment")}>Laser hair removal</a></li>
                        <li><a onClick={() => HandleNavigation("/treatment")}>PRP for hair</a></li>
                        <li><a onClick={() => HandleNavigation("/treatment")}>Dermal Fillers</a></li>
                    </ul>
                </div>


            </div>

            {/* Bottom Section */}
            <div className="footer-bottom">

                <div className="footer-policy-links">
                    <a onClick={() => HandleNavigation("/privacy-policy")}>Privacy Policy</a>
                    <a onClick={() => HandleNavigation("/terms-of-service")}>Terms of Service</a>
                    <a onClick={() => HandleNavigation("/cookies-settings")}>Cookies Settings</a>
                </div>
                <div className="right_">
                    <div className="footer-copyright">
                        <p>© 2025 OBW . All rights reserved.</p>
                    </div>
                    <div className="footer-social-icons">
                        <a href="https://www.facebook.com/profile.php?id=61566358426205" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="icon" />
                        </a>
                        <a href="https://www.instagram.com/obwclinic?igsh=cHFiNWw2aDN5aG1q" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="icon" />
                        </a>
                        <a href="" target="" rel="noopener noreferrer">
                            <FaYoutube className="icon" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
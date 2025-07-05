import React from "react";
import "./Footer.scss";
import { FaFacebook, FaInstagram } from "react-icons/fa"; // Keep only used icons
import logo from '../../assets/footer/logo.svg';
import { useNavigate } from "react-router-dom";
import { ArrowRight } from 'lucide-react'; // Assuming you use lucide-react for ArrowRight

const Footer = () => {
    const navigate = useNavigate();

    const HandleNavigation = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    return (
        <footer className="footer">
            <div className="footer-main-grid">
                {/* Section 1: Logo and Description */}
                <div className="grid-item footer-description-section">
                    <div>
                        <div className="footer-logo" onClick={() => HandleNavigation("/")}>
                            <img src={logo} alt="OBW Clinic Logo" />
                        </div>
                        <p className="description-text">
                            OBW is a pioneering hybrid clinic-salon in India, seamlessly merging
                            dermatological care with beauty treatments all in one location. We
                            provide a distinctive and harmonious blend of beauty and wellness
                            services.
                        </p>
                    </div>
                    {/* Section 4: Contact Info and Button */}
                    <div className="grid-item footer-contact-section">
                        <div className="action_bt">
                            <h4>CONTACT:</h4>
                            <p className="phone-number">+91-9764310135</p>
                            <p className="email">contact@obw.com</p>
                        </div>
                        <button className="book-appointment-btn btn" onClick={() => HandleNavigation("/book-appointment")}>
                            <span>
                                Book Appointment <ArrowRight className="arrow-icon" size={20} strokeWidth={3} />
                            </span>
                        </button>
                    </div>
                </div>

                {/* Section 2: Company Links */}
                <div className="grid-item footer-company-links">
                    <h4>COMPANY:</h4>
                    <ul>
                        <li><a onClick={() => HandleNavigation("/about")}>About us</a></li>
                        <li><a onClick={() => HandleNavigation("/treatments")}>Treatments</a></li>
                        <li><a onClick={() => HandleNavigation("/contact")}>Contact US</a></li>
                        <li><a onClick={() => HandleNavigation("/blogs")}>Blogs</a></li>
                    </ul>
                </div>

                {/* Section 3: Clinic Services */}
                <div className="grid-item footer-clinic-services">
                    <h4>CLINIC:</h4>
                    <ul>
                        <li><a onClick={() => HandleNavigation("/clinic/anti-ageing")}>Anti-ageing</a></li>
                        <li><a onClick={() => HandleNavigation("/clinic/micro-needling")}>Micro needling</a></li>
                        <li><a onClick={() => HandleNavigation("/clinic/laser-hair-removal")}>Laser hair removal</a></li>
                        <li><a onClick={() => HandleNavigation("/clinic/prp-for-hair")}>PRP for hair</a></li>
                        <li><a onClick={() => HandleNavigation("/clinic/dermal-fillers")}>Dermal Fillers</a></li>
                    </ul>
                </div>


            </div>

            {/* Bottom Section */}
            <div className="footer-bottom">
                <div className="footer-copyright">
                    <p>© 2025 OBW . All rights reserved.</p>
                </div>
                <div className="footer-policy-links">
                    <a onClick={() => HandleNavigation("/privacy-policy")}>Privacy Policy</a>
                    <a onClick={() => HandleNavigation("/terms-of-service")}>Terms of Service</a>
                    <a onClick={() => HandleNavigation("/cookies-settings")}>Cookies Settings</a>
                </div>
                <div className="footer-social-icons">
                    <a href="https://www.facebook.com/share/1CpRx6vUJB/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="icon" />
                    </a>
                    <a href="https://www.instagram.com/obwclinic?igsh=MTQxM2phdWZoZTRreA==" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="icon" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
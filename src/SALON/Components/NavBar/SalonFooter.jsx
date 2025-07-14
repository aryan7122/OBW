import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Facebook, Youtube, Instagram } from 'lucide-react';
import './SalonFooter.scss';
import logo from '../../../assets/footer/logo.svg'; // Make sure this path to your logo is correct

/**
 * A responsive footer component for the salon website.
 *
 * @component
 * @example
 * return (
 * <SalonFooter />
 * )
 */
const SalonFooter = () => {
    const navigate = useNavigate();

    /**
     * Handles navigation to a new page and scrolls to the top.
     * @param {string} path - The route to navigate to.
     */
    const handleNavigation = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    return (
        <footer className="salon-footer">
            <div className="salon-footer__main">
                {/* Left side of the footer with logo, description, and social media icons */}
                <div className="salon-footer__left">
                    <div className="salon-footer__logo" onClick={() => handleNavigation('/')}>
                        <img src={logo} alt="OBW Salon & Clinic Logo" />
                    </div>
                    <p className="salon-footer__description">
                        Step into our serene space, where every visit invites you to embark on a tranquil journey filled with beauty and relaxation. Experience the calm atmosphere that surrounds you, making each moment a delightful escape.
                    </p>
                    <div className="salon-footer__socials">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <Facebook size={22} />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <Youtube size={22} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <Instagram size={22} />
                        </a>
                    </div>
                </div>

                {/* Right side of the footer with navigation, services, and contact info */}
                <div className="salon-footer__right">
                    <nav className="salon-footer__nav">
                        <a onClick={() => handleNavigation('/services')}>Services</a>
                        <a onClick={() => handleNavigation('/about')}>About us</a>
                        <a onClick={() => handleNavigation('/blogs')}>Blogs</a>
                        <a onClick={() => handleNavigation('/contact')}>Contact</a>
                    </nav>
                    <div className="salon-footer__trending">
                        <h4 className="salon-footer__title">TRENDING SERVICES</h4>
                        <p>
                            Mens hair cut, Blowdry, Womens hair cut, Hair spa, Fashion color, Keratin treatment, Frizz control hair spa
                        </p>
                    </div>
                    <div className="salon-footer__contact">
                        <h4 className="salon-footer__title">Contact:</h4>
                        <div className="salon-footer__contact-details">
                            <a href="tel:+919972011222">+91 99720 11222</a>
                            <span className="salon-footer__separator">,</span>
                            <a href="mailto:contact@obwsalon.com">contact@obwsalon.com</a>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="salon-footer__divider" />

            {/* Bottom section of the footer with copyright and legal links */}
            <div className="salon-footer__bottom">
                <p className="salon-footer__copyright">
                    © 2025 OBW. All rights reserved.
                </p>
                <div className="salon-footer__legal-links">
                    <a onClick={() => handleNavigation('/privacy-policy')}>Privacy Policy</a>
                    <a onClick={() => handleNavigation('/terms-of-service')}>Terms of Service</a>
                    <a onClick={() => handleNavigation('/cookies-settings')}>Cookies Settings</a>
                </div>
            </div>
        </footer>
    );
};

export default SalonFooter;
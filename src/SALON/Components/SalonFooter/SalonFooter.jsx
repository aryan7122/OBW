import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Facebook, Youtube, Instagram, Phone, Mail } from 'lucide-react';
import './SalonFooter.scss';
import logo from '../../../assets/SALON/logo-.svg'; // Make sure this path to your logo is correct

const SalonFooter = () => {
    const navigate = useNavigate();
    const location = useLocation(); // Get current location

    const handleNavigation = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };
    const trendingServices = [
        "Mens hair cut",
        "Blowdry",
        "Womens hair cut",
        "Hair spa",
        "Fashion color",
        "Keratin treatment",
        "Frizz control hair spa"
    ];
     const isActive = (path) => {
        return location.pathname === path ? 'active' : '';

    };
 const getActiveClass = () => {
        return (
            location.pathname.startsWith('/blogs') ||
            location.pathname.startsWith('/blog-detail')
        ) ? 'active' : '';
    };
 const handleNavigationId = (navigate, targetId) => {
  navigate('/', { replace: false }); // Ya jis page pe vo ID hai usme
  setTimeout(() => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100); // Delay so DOM loads before scroll
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
Step into our peaceful salon, where every visit feels like a break from the busy world. From the moment you arrive, you’ll be surrounded by calm vibes, warm, relaxed, and truly taken care of.                     </p>
                    <div className="salon-footer__socials">
                        <a href="https://www.facebook.com/oceanbluewellness/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <Facebook size={22} />
                        </a>
                        <a href="https://www.youtube.com/@ObwSalon" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <Youtube size={22} />
                        </a>
                        <a href="https://www.instagram.com/obwsalon?igsh=MXRnZ3FraGtiaTBhbg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <Instagram size={22} />
                        </a>
                    </div>
                </div>

                {/* Right side of the footer with navigation, services, and contact info */}
                <div className="salon-footer__right">
                    <nav className="salon-footer__nav">
                        <a onClick={() => handleNavigationId(navigate, 'Services')} >Services</a>
                        <a onClick={() => handleNavigation('/about')} className={isActive('/about')}>About us</a>
                        <a onClick={() => handleNavigation('/blogs')} className={getActiveClass()}>Blogs</a>
                        <a onClick={() => handleNavigation('/contact')} className={isActive('/contact')}>Contact</a>
                    </nav>
                    <div className="salon-footer__trending">
                        <h4 className="salon-footer__title">TRENDING SERVICES</h4>
                       <p className="salon-footer__trending-links">
                            {trendingServices.map((service, index) => (
                                <React.Fragment key={service}>
                                    <a onClick={() => handleNavigation(createServiceSlug(service))}>
                                        {service}
                                    {index < trendingServices.length - 1 && ', '}
                                    </a>
                                    {/* Add a comma and space only if it's not the last item */}
                                </React.Fragment>
                            ))}
                        </p>
                    </div>
                    <div className="salon-footer__contact">
                        <h4 className="salon-footer__title">Contact:</h4>
                        <div className="salon-footer__contact-details">
                            <a href="tel:+919972011222"><Phone size={20} /> +91 99720 11222</a>
                            {/* <span className="salon-footer__separator">,</span> */}
                            <a href="mailto:contact@obwsalon.com"><Mail size={20} /> contact@obwsalon.com</a>
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

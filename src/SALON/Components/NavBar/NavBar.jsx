import React, { useState, useEffect, useContext } from 'react';
import './NavBar.scss';
import logo from '../../../assets/SALON/logo-.svg'
import { Menu, X, Search, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TabContext } from '../../../util/TabContext';
import BookAppointment from '../../../Components/BookAppointment/BookAppointment';
import SalonBookAppointment from '../SalonBookAppointment/SalonBookAppointment';

function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation(); // Get current location
    // const [isWhite, setIsWhite] = useState(false);
    const { pageTab, changeTab } = useContext(TabContext);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 650) {
                setScrolled(true);

            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const toggleSearchBar = () => {
        setIsVisible(!isVisible);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        window.scrollTo(0, 0);
    };
    const CloseMenu = () => {
        setMenuOpen(false);
    };

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
        // return location.pathname.includes(path) ? "active-link" : "";

    };
    // white bg
    const bgBlur = ['treatment'];
    const isbgBlur = bgBlur.some((path) => location.pathname.includes(path));
    const whiteBg = ['contact', 'blogs', 'blog-detail', 'locations', 'privacy-policy', 'terms-of-service'];
    const isWhite = whiteBg.some((path) => location.pathname.includes(path));
    const [showModal, setShowModal] = useState(false);
    const handleBookNowClick = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <header className={`NavBar ${pageTab === "SALON" ? 'SALON' : ''} ${scrolled ? 'NavBar-scrolled' : ''} ${isbgBlur ? 'isbgBlur' : ''}  ${isWhite ? 'NavBar-scrolled' : ''} ${menuOpen ? 'NavBar-scrolled' : ''}`}>
            <motion.nav
                className={`NavBar-container ${menuOpen ? 'menu-active-NavBar-container' : ''}`}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.1 }}
            >
                {/* Logo Section */}
                <div className="NavBar-logo">
                    <div className="logo-circle" ><Link to="/" className={isActive('/')}><img src={logo} alt="logo" /></Link></div>
                </div>

                {/* Navigation Links */}


                {/* Book Appointment and Search Section */}
                <div className={`NavBar-actions ${menuOpen ? 'menu-active' : ''}`}>
                    {!isVisible && !menuOpen &&
                        <ul className={`NavBar-links ${menuOpen ? 'menu-active' : ''}`}>
                            <li onClick={() => CloseMenu()} ><Link to="/" className={isActive('/')}>HOME</Link></li>
                            {/* <li onClick={() => CloseMenu()}><Link to="" className={isActive('/Services')}>Services</Link></li> */}
                            <li onClick={() => CloseMenu()}><Link to="/about" className={isActive('/about')}>ABOUT US</Link></li>
                            {/* <li onClick={() => toggleMenu()}><Link to="/locations" className={isActive('/locations')}>LOCATIONS</Link></li> */}
                            <li onClick={() => CloseMenu()}><Link to="/blogs" className={isActive('/blogs') || isActive('/blog-detail')}>BLOGS</Link></li>
                            <li onClick={() => CloseMenu()}><Link to="/contact" className={isActive('/contact')}>CONTACT</Link></li>
                        </ul>
                    }
                    {!isVisible
                        ? <>
                            <button className="appointment-button btn" onClick={handleBookNowClick}>
                                <span>
                                    Book Appointment <ArrowRight className="arrow-icon" size={20} strokeWidth={2} />
                                </span>
                            </button>
                            {/* <Search className="search-icon" size={24} onClick={toggleSearchBar} /> */}
                        </>
                        : ''
                    }
                    {isVisible && (
                        <div className="search-bar">
                            {/* <div className='card_search'>
                                <Search className="search_icon_1" size={24} />
                                <input
                                    type="text"
                                    className="search-input"
                                    placeholder="Search here"
                                />
                                <button className="search-button">Search</button>
                            </div>
                            <button className="close-button-nav" onClick={toggleSearchBar}>
                                ✖
                            </button> */}
                        </div>
                    )}
                </div>

                {/* Mobile Menu Toggle */}
                {!isVisible &&
                    <>
                        <div className="mobile-menu-icon" onClick={toggleMenu}>
                            {menuOpen ? <X size={28} /> : <Menu size={28} />}
                        </div>
                    </>
                }

            </motion.nav>
            {showModal && <SalonBookAppointment onClose={closeModal} />}
            {!isVisible && menuOpen &&
                <ul className={` ${menuOpen ? 'mobile-menu-active2' : ''}`}>
                    {/* Your existing navigation links */}
                    <li onClick={() => CloseMenu()}><Link to="/" className={isActive('/')}>HOME</Link></li>
                    <li onClick={() => CloseMenu()}><Link to="/about" className={isActive('/about')}>ABOUT US</Link></li>
                    <li onClick={() => CloseMenu()}><Link to="/blogs" className={isActive('/blogs') || isActive('/blog-detail')}>BLOGS</Link></li>
                    <li onClick={() => CloseMenu()}><Link to="/contact" className={isActive('/contact')}>CONTACT</Link></li>


                </ul>
            }
        </header >
    );
}

export default NavBar;

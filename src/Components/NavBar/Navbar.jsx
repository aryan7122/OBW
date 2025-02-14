import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import logo from '../../assets/footer/logo.svg'
import { Menu, X, Search, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import BookAppointment from '../BookAppointment/BookAppointment';
import { motion } from 'framer-motion';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation(); // Get current location

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

    const isActive = (path) => {
        return location.pathname === path ? 'active-link' : '';
    };
    // white bg
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
        <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}  ${isWhite ? 'navbar-scrolled' : ''} ${menuOpen ? 'navbar-scrolled' : ''}`}>
            <motion.nav
                className={`navbar-container ${menuOpen ? 'menu-active-navbar-container' : ''}`}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.1 }}
            >
                {/* Logo Section */}
                <div className="navbar-logo">
                    <div className="logo-circle"><img src={logo} alt="logo" /></div>
                </div>

                {/* Navigation Links */}
                {!isVisible &&
                    <ul className={`navbar-links ${menuOpen ? 'menu-active' : ''}`}>
                        <li onClick={() => toggleMenu()}><Link to="/" className={isActive('/')}>HOME</Link></li>
                        <li onClick={() => toggleMenu()}><Link to="/treatment" className={isActive('/treatment')}>TREATMENT</Link></li>
                        <li onClick={() => toggleMenu()}><Link to="/about" className={isActive('/about')}>ABOUT US</Link></li>
                        <li onClick={() => toggleMenu()}><Link to="/locations" className={isActive('/locations')}>LOCATIONS</Link></li>
                        <li onClick={() => toggleMenu()}><Link to="/blogs" className={isActive('/blogs')}>BLOGS</Link></li>
                        <li onClick={() => toggleMenu()}><Link to="/contact" className={isActive('/contact')}>CONTACT</Link></li>
                    </ul>
                }

                {/* Book Appointment and Search Section */}
                <div className={`navbar-actions ${menuOpen ? 'menu-active' : ''}`}>
                    {!isVisible
                        ? <>
                            <button className="appointment-button" onClick={handleBookNowClick}>
                                Book Appointment <ArrowRight className="arrow-icon" size={20} strokeWidth={3} />
                            </button>
                            <Search className="search-icon" size={24} onClick={toggleSearchBar} />
                        </>
                        : ''
                    }
                    {isVisible && (
                        <div className="search-bar">
                            <div className='card_search'>
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
                            </button>
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
            {showModal && <BookAppointment onClose={closeModal} />}

        </header >
    );
}

export default Navbar;

import React, { useState, useEffect, useContext } from 'react';
import './Navbar.scss';
import logo from '../../assets/footer/logo.svg'
import { Menu, X, Search, ArrowRight, MoveRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import BookAppointment from '../BookAppointment/BookAppointment';
import { motion } from 'framer-motion';
import { TabContext } from '../../util/TabContext';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation(); // Get current location
    // const [isWhite, setIsWhite] = useState(false);
    const { pageTab, changeTab } = useContext(TabContext);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
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
    };  const CloseMenu = () => {
                window.scrollTo(0, 0);
        setMenuOpen(false);
    };

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
        // return location.pathname.includes(path) ? "active-link" : "";

    };
    // white bg
    const bgBlurPaths = ['treatment'];

    const [isbgBlur, setIsBgBlur] = useState(false);

    useEffect(() => {
        const checkBlur = bgBlurPaths.some((path) => location.pathname.includes(path));
        setIsBgBlur(checkBlur);
    }, [location.pathname]);

    const whiteBg = ['contact', 'blogs','about', 'blog-detail', 'locations', 'privacy-policy', 'terms-of-service',];
    // const bgBlur = ['treatment'];
    // const isbgBlur = bgBlur.some((path) => location.pathname.includes(path));
    const isWhite = whiteBg.some((path) => location.pathname.includes(path));
    const [showModal, setShowModal] = useState(false);
    const handleBookNowClick = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };

    // Add this inside your Navbar component
    useEffect(() => {
        // If the menu is open, add a class to the body to prevent scrolling
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            // When the menu is closed, remove the style
            document.body.style.overflow = 'auto';
        }

        // Cleanup function to ensure the style is removed when the component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [menuOpen]); // This effect runs whenever `menuOpen` changes

    return (
        <header className={`navbar ${pageTab === "SALON" ? 'SALON' : ''} ${scrolled ? 'navbar-scrolled' : ''} ${isbgBlur ? 'isbgBlur' : ''}  ${isWhite ? 'navbar-scrolled' : ''} ${menuOpen ? 'navbar-scrolled' : ''}`}>
            <motion.nav
                className={`navbar-container ${menuOpen ? 'menu-active-navbar-container' : ''}`}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.1 }}
            >
                {/* Logo Section */}
                <div className="navbar-logo">
                    <div className="logo-circle" ><Link to="/" className={isActive('/')}><img src={logo} alt="logo" /></Link></div>
                </div>

                {/* Navigation Links */}
                {!isVisible && !menuOpen &&
                    <ul className={`navbar-links ${menuOpen ? 'menu-active' : ''}`}>
                        <li onClick={() => CloseMenu()}><Link to="/" className={isActive('/')}>HOME</Link></li>
                        <li onClick={() => CloseMenu()}><Link to="/treatment" className={isActive('/treatment')}>TREATMENT</Link></li>
                        <li onClick={() => CloseMenu()}><Link to="/about" className={isActive('/about')}>ABOUT US</Link></li>
                        {/* <li onClick={() => toggleMenu()}><Link to="/locations" className={isActive('/locations')}>LOCATIONS</Link></li> */}
                        <li onClick={() => CloseMenu()}><Link to="/blogs" className={isActive('/blogs') || isActive('/blog-detail')}>BLOGS</Link></li>
                        <li onClick={() => CloseMenu()}><Link to="/contact" className={isActive('/contact')}>CONTACT</Link></li>
                    </ul>
                }

                {/* Book Appointment and Search Section */}
                <div className={`navbar-actions ${menuOpen ? 'menu-active' : ''}`}>
                    {!isVisible
                        ? <>
                            <button className="appointment-button btn" onClick={handleBookNowClick}>
                                <span>
                                    Book Appointment   <MoveRight className="arrow-icon" size={16} strokeWidth={1.7} />

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
            {showModal && <BookAppointment onClose={closeModal} />}
            {!isVisible && menuOpen &&
                <ul className={` ${menuOpen ? 'mobile-menu-active' : ''}`}>
                    {/* Your existing navigation links */}
                    <li onClick={() => CloseMenu()}><Link to="/" className={isActive('/')}>HOME</Link></li>
                    <li onClick={() => CloseMenu()} > <Link to="/treatment" className={isActive('/treatment')}>TREATMENT</Link></li>
                    <li  onClick={() => CloseMenu()}><Link to="/about" className={isActive('/about')}>ABOUT US</Link></li>
                    <li onClick={() => CloseMenu()}><Link to="/blogs" className={isActive('/blogs') || isActive('/blog-detail')}>BLOGS</Link></li>
                    <li onClick={() => CloseMenu()}><Link to="/contact" className={isActive('/contact')}>CONTACT</Link></li>

                  
                </ul>
            }
        </header >
    );
}

export default Navbar;

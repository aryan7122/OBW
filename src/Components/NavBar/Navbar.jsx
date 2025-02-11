import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import logo from '../../assets/footer/logo.svg'
import { Menu, X, Search, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation(); // Get current location

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 754) {
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
    };

    const isActive = (path) => {
        return location.pathname === path ? 'active-link' : '';
    };
    // white bg
    const whiteBg = ['contact', 'blogs', 'blog-detail', 'locations', 'privacy-policy','terms-of-service'];
    const isWhite = whiteBg.some((path) => location.pathname.includes(path));

    return (
        <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}  ${isWhite ? 'navbar-scrolled' : ''}`}>
            <nav className={`navbar-container ${menuOpen ? 'menu-active-navbar-container' : ''}`}>
                {/* Logo Section */}
                <div className="navbar-logo">
                    <div className="logo-circle"><img src={logo} alt="logo" /></div>
                </div>

                {/* Navigation Links */}
                {!isVisible &&
                <ul className={`navbar-links ${menuOpen ? 'menu-active' : ''}`}>
                    <li><Link to="/" className={isActive('/')}>HOME</Link></li>
                    <li><Link to="/treatment" className={isActive('/treatment')}>TREATMENT</Link></li>
                    <li><Link to="/about" className={isActive('/about')}>ABOUT US</Link></li>
                    <li><Link to="/locations" className={isActive('/locations')}>LOCATIONS</Link></li>
                    <li><Link to="/blogs" className={isActive('/blogs')}>BLOGS</Link></li>
                    <li><Link to="/contact" className={isActive('/contact')}>CONTACT</Link></li>
                </ul>
                }

                {/* Book Appointment and Search Section */}
                <div className={`navbar-actions ${menuOpen ? 'menu-active' : ''}`}>
                    {!isVisible
                        ? <>
                            <button className="appointment-button">
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
                            <button className="close-button" onClick={toggleSearchBar}>
                                ✖
                            </button>
                        </div>
                    )}
                </div>

                {/* Mobile Menu Toggle */}
                <div className="mobile-menu-icon" onClick={toggleMenu}>
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </div>

            </nav>
        </header>
    );
}

export default Navbar;

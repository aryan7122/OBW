import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import logo from '../../assets/icons/logo.svg'
import { Menu, Search, ArrowRight } from 'lucide-react';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

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
    const [isVisible, setIsVisible] = useState(false);

    const toggleSearchBar = () => {
        setIsVisible(!isVisible);
    };
    return (
        <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <nav className="navbar-container">
                {/* Logo Section */}
                <div className="navbar-logo">
                    <div className="logo-circle"><img src={logo} alt="logo" /></div>

                </div>
                {/* Navigation Links */}
                {!isVisible && (
                    <ul className="navbar-links">
                        <li><a href="#home">HOME</a></li>
                        <li><a href="#treatment">TREATMENT</a></li>
                        <li><a href="#about">ABOUT US</a></li>
                        <li><a href="#locations">LOCATIONS</a></li>
                        <li><a href="#blogs">BLOGS</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                    </ul>
                )}

                {/* Book Appointment and Search Section */}
                <div className="navbar-actions">
                    {!isVisible
                        ?
                        <>
                            <button className="appointment-button">
                                Book Appointment <ArrowRight className="arrow-icon" size={20} strokeWidth={3} />
                            </button>
                            <Search className="search-icon" size={24} onClick={toggleSearchBar} />
                        </>
                        :
                        ''
                    }
                    {/* <Search className="search-icon" size={24} onClick={toggleSearchBar} /> */}
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

                {/* Mobile Menu */}
                <Menu className="menu-icon" size={28} />
            </nav>
        </header>
    );
}

export default Navbar;

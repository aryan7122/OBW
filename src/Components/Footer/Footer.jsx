import React from "react";
import "./Footer.scss";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from '../../assets/footer/logo.svg'
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={logo} alt="OBW Clinic Logo" />
                </div>
                <nav className="footer-nav">
                    <a href="/about">About us</a>
                    <a href="/treatment">Treatment</a>
                    <a href="/contact">Contact US</a>
                    <a href="/locations">Locations</a>
                    <a href="/blogs">Blogs</a>
                </nav>
                <div className="footer-icons">
                    <FaFacebook className="icon" />
                    <FaInstagram className="icon" />
                    <FaXTwitter className="icon" />
                    <FaLinkedin className="icon" />
                    <FaYoutube className="icon" />
                </div>
            </div>
            <div className="footer-bottom">
                <p>2025 Relume. All right reserved.</p>
                <div className="footer-links">
                    <a href="/privacy-policy">Privacy Policy</a>
                    <a href="/terms-of-service">Terms of Service</a>
                    <a href="#">Cookies Settings</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
// 
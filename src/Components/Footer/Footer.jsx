import React from "react";
import "./Footer.scss";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from '../../assets/footer/logo.svg'
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const Footer = () => {
    const navigate = useNavigate();
    const HandleNavigation = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo" onClick={() => HandleNavigation("/")}>
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
                    <a href="https://www.instagram.com/obwclinic?igsh=MTQxM2phdWZoZTRreA==">
                        <FaInstagram className="icon" />
                    </a>
                    <a href="https://www.facebook.com/share/1CpRx6vUJB/?mibextid=qi2Omg">
                        <FaFacebook className="icon" />
                    </a>
                    {/* <FaXTwitter className="icon" />
                    <FaLinkedin className="icon" />
                    <FaYoutube className="icon" /> */}
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 OWB CLINIC | All Rights Reserved.</p>
                {/* <div className="footer-links">
                    <a href="/privacy-policy">Privacy Policy</a>
                    <a href="/terms-of-service">Terms of Service</a>
                    <a href="#">Cookies Settings</a>
                </div> */}
            </div>
        </footer>
    );
};

export default Footer;
// 
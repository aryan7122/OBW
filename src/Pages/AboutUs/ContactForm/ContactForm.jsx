import React, { useState } from "react";
import "./ContactForm.scss";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa"; // Calendar icon
import img from '../../../assets/about/ae7fe1d6d3f899f793a7d688e60821c9.jpg'
import Vector from '../../../assets/about/Vector.svg'
import { ArrowRight } from "lucide-react";

const ContactForm = () => {
    const [phone, setPhone] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div className="contact-page">
            <div className="contact-container">
                <div className="image-section">
                    <img src={img} alt="Contact Page Visual" />
                </div>

                <div className="form-section">
                    <h2>Get In <span className="touch-icon"><img src={Vector} alt="" /></span> Touch!</h2>
                    <p>
                        Please feel free to get in touch at any time. <br />
                        <span> You can reach us anytime via <a href="mailto:obw@clinic.com">obw@clinic.com</a> </span> 
                    </p>

                    <form>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" placeholder="Your name" />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="you@company.com" />
                        </div>

                        <div className="form-group">
                            <label>Phone Number</label>
                            <PhoneInput
                                country={"in"}
                                value={phone}
                                onChange={(phone) => setPhone(phone)}
                                placeholder="+(91) 00000 - 00000"
                            />
                        </div>

                        <div className="form-group date-group">
                            <label>Date</label>
                            <div className="date-input-wrapper">
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={(date) => setSelectedDate(date)}
                                    dateFormat="dd/MM/yyyy"
                                    placeholderText="dd/mm/yyyy"
                                    className="custom-date-picker"
                                />
                                <svg className="calendar-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#454545" fill="none">
                                    <path d="M18 2V4M6 2V4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11.9955 13H12.0045M11.9955 17H12.0045M15.991 13H16M8 13H8.00897M8 17H8.00897" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M3.5 8H20.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M3 8H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <div className="form-group radio-section">
                            <label>Outlet</label>
                            <div className="radio-options">
                                <label><input type="radio" name="outlet" /> R.R Nagar</label>
                                <label><input type="radio" name="outlet" /> Kodipalya</label>
                                <label><input type="radio" name="outlet" /> Kankpura Road</label>
                                <label><input type="radio" name="outlet" /> Mangalwar Street</label>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Message</label>
                            <textarea placeholder="Write your message..."></textarea>
                        </div>

                        
                        <button type="submit" className="submit-btn"> Book Now<ArrowRight className="arrow-icon" size={16} strokeWidth={3} /></button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;

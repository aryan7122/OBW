import React, { useState } from "react";
import "./BookAppointment.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ArrowRight } from "lucide-react";

const BookAppointment = ({ onClose }) => {
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <button className="close-button" onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
                        <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                <h2 className="modal-title">Book Appointment Now</h2>
                <p className="modal-subtitle">
                    Please complete the form with all the necessary details, and we will
                    review your submission and get back to you as soon as possible.
                </p>
                <form className="modal-form">
                    <div className="form-row">
                        <div className="form_group">
                            <label>Name</label>
                            <input type="text" placeholder="Enter your name" />
                        </div>

                        <div className="form_group">
                            <label>Company Name</label>
                            <input type="text" placeholder="Enter your company name" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form_group">
                            <label>Email</label>
                            <input type="email" placeholder="Enter your email" />
                        </div>

                        <div className="form_group date-group">
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
                    </div>

                    <div className="form-row">
                        <div className="form_group">
                            <label>Location</label>
                            <select>
                                <option value="">Select Location</option>
                                <option>Kodipalya</option>
                                <option>R.R Nagar</option>
                                <option>Kankapua Road</option>
                            </select>
                        </div>

                        <div className="form_group">
                            <label>Treatment</label>
                            <select>
                                <option value="">Select Treatment</option>
                                <option>Skin/Face Care</option>
                                <option>Scalp/Hair Care</option>
                                <option>Body Care</option>
                                <option>Beautifying/Cosmetic Surgery</option>
                            </select>
                        </div>
                    </div>

                    <div className="form_group textarea-group">
                        <label>How can we help?</label>
                        <textarea rows="4" placeholder="Briefly tell us how we can help"></textarea>
                        {/* <span className="textarea-span">Please be specific</span>
                        <span className="textarea-span">Maximum 500 characters</span> */}
                    </div>


                    <button type="submit" className="book-now">
                        Book Now <ArrowRight className="arrow-icon" size={20} strokeWidth={3} />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BookAppointment;

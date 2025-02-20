import React, { useState } from "react";
import "./BookAppointment.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";

const BookAppointment = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        MoNumber: "",
        email: "",
        date: null,
        location: "",
        treatment: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, MoNumber, email, date, location, treatment, message } = formData;

        // Validation Check
        if (!name || !MoNumber || !email || !date || !location || !treatment || !message) {
            toast.error("Please fill all required fields!");
            return;
        }

        // Success Message
        toast.success("Appointment booked successfully!");

        console.log("Form Submitted:", formData);

        // Modal Close after 1.5s
        setTimeout(() => {
            onClose();
        }, 1500);
    };

    return (
        <motion.div className="modal-overlay">
            <motion.div
                className="modal-container"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true, amount: 0.1 }}
            >
                <button className="close-button" onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
                        <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <h2 className="modal-title">Book Appointment Now</h2>
                <p className="modal-subtitle">
                    Kindly fill out the form with all required details, and we’ll review your submission and reach out to you shortly.
                </p>
                <form className="modal-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form_group">
                            <label>Name</label>
                            <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
                        </div>

                        <div className="form_group">
                            <label>Mo. Number</label>
                            <input type="text" name="MoNumber" placeholder="Enter your Mo. Number" value={formData.MoNumber} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form_group">
                            <label>Email</label>
                            <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
                        </div>

                        <div className="form_group date-group">
                            <label>Date - Time</label>
                            <div className="date-input-wrapper">
                                {/* <DatePicker
                                    selected={formData.date}
                                    onChange={(date) => setFormData({ ...formData, date })}
                                    dateFormat="dd/MM/yyyy"
                                    placeholderText="dd/mm/yyyy"
                                    className="custom-date-picker"
                                /> */}
                                <input type="datetime-local" className="custom-date-picker" />
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form_group">
                            <label>Location</label>
                            <select name="location" value={formData.location} onChange={handleChange}>
                                <option value="">Select Location</option>
                                <option>Banashankari 6th Stage</option>
                                <option>Kanakapura Main Road</option>
                                <option>Rajarajeshwari Nagar</option>
                                <option>Kodipalya Road</option>
                            </select>
                        </div>

                        <div className="form_group">
                            <label>Treatment</label>
                            <select name="treatment" value={formData.treatment} onChange={handleChange}>
                                <option value="">Select Treatment</option>
                                <option>Skin/Face Care</option>
                                <option>Scalp/Hair Care</option>
                                <option>Body Care</option>
                                <option>Beautifying/Cosmetic Surgery</option>
                            </select>
                        </div>
                    </div>

                    <div className="form_group textarea-group">
                        <label>Note</label>
                        <textarea
                            rows="4"
                            name="message"
                            placeholder="Briefly tell us how we can help"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <button type="submit" className="book-now">
                        Book Now <ArrowRight className="arrow-icon" size={20} strokeWidth={3} />
                    </button>
                </form>
                <Toaster
                    position="top-center"
                    reverseOrder={true}
                />
            </motion.div>
        </motion.div>
    );
};

export default BookAppointment;

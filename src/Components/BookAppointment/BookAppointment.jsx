import React, { useState } from "react";
import "./BookAppointment.scss";
import "react-datepicker/dist/react-datepicker.css";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import Select from "react-select";
import { clinicalData } from "../../Pages/ClinicalConcerns/ClinicalConcerns";



  
const BookAppointment = ({ onClose, preSelectedTreatment = "" }) => {
    
    const allTags = [];

    Object.values(clinicalData).forEach(category => {
        category.forEach(t => {
            t.tags.forEach(tag => {
                if (!allTags.includes(tag)) {
                    allTags.push(tag);
                }
            });
        });
    });
    
    const treatmentOptions = allTags.map(tag => ({ label: tag, value: tag }));


    const [formData, setFormData] = useState({
        name: "",
        MoNumber: "",
        email: "",
        date: '',
        location: "",
        treatment: preSelectedTreatment,
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, MoNumber, email, date, location, treatment, message } = formData;

        // Validation Check
        if (!name || !MoNumber) {
            toast.error("Please fill all required fields!");
            return;
        }

        // Success Message
        toast.success("Appointment booked successfully!");

        console.log("Form Submitted:", formData);
        // EmailJS se email send karna
        const templateParams = {
            to_email: "obwellness1@gmail.com", // Jis email pe bhejna hai
            name,
            MoNumber,
            email,
            date,
            location,
            treatment,
            message,
        };

        emailjs
            .send(
                "service_zwhrgv1", // Replace with your EmailJS service ID
                "template_go8s6bk", // Replace with your EmailJS template ID
                templateParams,
                "dnG0LC_cuxIZMOgLu" // Replace with your EmailJS Public Key
            )
            .then(
                (response) => {
                    console.log("SUCCESS!", response.status, response.text);
                    toast.success("Appointment booked successfully! ✅");
                    setTimeout(() => {
                        onClose();
                    }, 1500);
                },
                (err) => {
                    console.log("FAILED...", err);
                    toast.error("Failed to send email! ❌");
                }
            );

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
                {/* <p className="modal-subtitle">
                    Kindly fill out the form with all required details, and we’ll review your submission and reach out to you shortly.
                </p> */}
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
                                <input
                                    type="datetime-local"
                                    className="custom-date-picker"
                                    value={formData.date}
                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                />
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
                                <option>Kodipalya</option>
                            </select>
                        </div>
                        <div className="form_group">
                            <label>Treatment</label>
                            <Select
                                className="react-select-container"
                                classNamePrefix="react-select"
                                name="treatment"
                                value={treatmentOptions.find(option => option.value === formData.treatment)}
                                onChange={(selectedOption) =>
                                    setFormData({ ...formData, treatment: selectedOption.value })
                                }
                                options={treatmentOptions}
                                isSearchable
                                placeholder="Select Treatment"
                            />
                        </div>

                        {/* <div className="form_group">
                            <label>Treatment</label>
                            <select name="treatment" value={formData.treatment} onChange={handleChange}>
                                <option value="">Select Treatment</option>
                                <option>Skin/Face Care</option>
                                <option>Scalp/Hair Care</option>
                                <option>Body Care</option>
                                <option>Beautifying/Cosmetic Surgery</option>
                            </select>
                        </div> */}
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

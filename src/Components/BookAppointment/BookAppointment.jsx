import React, { useEffect, useState } from "react";
import "./BookAppointment.scss";
import "react-datepicker/dist/react-datepicker.css";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import Select from "react-select";
import { clinicalData } from "../../Pages/ClinicalConcerns/ClinicalConcerns";
import { bookClinicAppointment } from "../../features/clinic/clinicAppointmentSlice";
import { useDispatch, useSelector } from "react-redux";




const BookAppointment = ({ onClose, preSelectedTreatment = "" }) => {
    const dispatch = useDispatch();
    const { loading, data, error } = useSelector(state => state.clinicAppointment);

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
    if (!allTags.includes("Other")) {
        allTags.push("Other");
    }

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

    const [errors, setErrors] = useState({
        name: false,
        MoNumber: false,
    });

    function formatDateForBackend(inputDateTime) {
        if (!inputDateTime) return "";

        const date = new Date(inputDateTime);

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0"); // Month starts at 0
        const year = date.getFullYear();

        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");

        return `${day}-${month}-${year} ${hours}:${minutes}:00`;
    }
    const formattedDate = formatDateForBackend(formData.date);

    const payload = {
        name: formData.name,
        contact_number: formData.MoNumber,
        email: formData.email,
        date_time: formattedDate,
        location: formData.location,
        treatment: formData.treatment,
        note: formData.message,
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });

        // Reset error on typing
        if (value.trim() !== "") {
            setErrors((prev) => ({ ...prev, [name]: false }));
        }
    };



    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, MoNumber, email, date, location, treatment, message } = formData;
        const newErrors = {
            name: !name.trim(),
            MoNumber: !MoNumber.trim(),
        };

        setErrors(newErrors);

        // Validation Check
        if (!name || !MoNumber) {
            toast.error("Please fill all required  fields!");
            return;
        }

        // Success Message

        // EmailJS se email send karna

        try {
            await toast.promise(
                Promise.all([
                    dispatch(bookClinicAppointment(payload)).unwrap(),
                    // emailjs.send(
                    //     "service_zwhrgv1", // Replace with your EmailJS service ID
                    //     "template_go8s6bk", // Replace with your EmailJS template ID
                    //     templateParams,
                    //     "dnG0LC_cuxIZMOgLu" // Replace with your EmailJS Public Key
                    // ),

                ]),
                {
                    loading: "📤 Sending request...",
                    success: " Sended successfully!",
                    error: "Failed to send request.",
                }
            );

            // Reset form
            setFormData({
                name: "",
                MoNumber: "",
                email: "",
                date: '',
                location: "",
                treatment: preSelectedTreatment,
                message: "",
            });

            setTimeout(() => {
                onClose();
            }, 5000);
        } catch (err) {
            console.error("Error:", err);
        }




    };
    const handleOverlayClick = (e) => {
        // Only close if the click is directly on the overlay, not its children
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <motion.div className="modal-overlay" onClick={handleOverlayClick}>
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
                            <input className={errors.name ? "error-border" : ""}
                                type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
                        </div>

                        <div className="form_group">
                            <label>Contact Number</label>
                            <input className={errors.MoNumber ? "error-border" : ""}
                                type="text" name="MoNumber" placeholder="Enter your Mo. Number" value={formData.MoNumber} onChange={handleChange} />
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
                        Book Now
                        {/* <ArrowRight className="arrow-icon" size={20} strokeWidth={2} /> */}
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

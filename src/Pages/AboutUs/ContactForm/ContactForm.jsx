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
import { toast, Toaster } from "react-hot-toast"; // Import toast

const ContactForm = () => {
    const [phone, setPhone] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        location: "",
    });

    // Handle Input Change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle Form Submission
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Form Data Submitted:", formData);

        // Validation
        if (!formData.name || !formData.email || !phone || !selectedDate || !formData.message || !formData.location) {
            toast.error("🙏 Please fill all the fields!"),{
                // duration: 5000,
            };
            return;
        }

        // Success Message
        toast.success("Form submitted successfully! 🎉");

        // Reset Form
        setFormData({
            name: "",
            email: "",
            message: "",
            location: "",
        });
        setPhone("");
        setSelectedDate(null);
    };

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

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@company.com" />
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
                                <FaCalendarAlt className="calendar-icon" />
                            </div>
                        </div>

                        <div className="form-group radio-section">
                            <label>Our Location</label>
                            <div className="radio-options">
                                {["Banashankari", "Kanakapura Main Road", "Rajarajeshwari Nagar", "Kodipalya Road"].map((loc) => (
                                    <label key={loc}>
                                        <input
                                            type="radio"
                                            name="location"
                                            value={loc}
                                            checked={formData.location === loc}
                                            onChange={handleChange}
                                        /> {loc}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Message</label>
                            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Write your message..."></textarea>
                        </div>

                        <button type="submit" className="submit-btn">
                            Book Now <ArrowRight className="arrow-icon" size={16} strokeWidth={3} />
                        </button>
                    </form>
                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={true}
            />
        </div>
    );
};

export default ContactForm;

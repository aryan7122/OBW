import React, { useState } from "react";
import "./ContactForm.scss";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa"; // Calendar icon
import Vector from '../../../assets/about/Vector.svg'
import { ArrowRight } from "lucide-react";
import { toast, Toaster } from "react-hot-toast"; // Import toast
import emailjs from "@emailjs/browser";

// const img = "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/Contact/es04fxmgloqufdmxlpnt"
import img from '../../../assets/about/Radiant South Asian Woman with Circular Glasses.png'

const ContactForm = () => {
    const [phone, setPhone] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: phone,
        selectedDate: selectedDate,
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

        console.log("📩 Form Data Submitted:", formData);
        console.log("📞 Phone:", phone);
        console.log("📅 Selected Date:", selectedDate);

        // Validation
        if (!formData.name || !phone) {
            toast.error("🙏 Please fill all the fields!"), {
                // duration: 5000,
            };
            return;
        }

        // Success Message
        toast.success("Form submitted successfully! 🎉");




        // EmailJS se email send karna
        // EmailJS se email send karna
        const templateParams = {
            to_email: "obwellness1@gmail.com", // Jis email pe bhejna hai
            name: formData.name,
            MoNumber: phone,
            email: formData.email,
            date: selectedDate ? selectedDate.toLocaleDateString("en-GB") : "",
            location: formData.location,
            // treatment: "General Consultation", // Agar treatment select karwana ho toh alag se field add karo
            message: formData.message,
        };


        emailjs
            .send(
                "service_zwhrgv1", // Replace with your EmailJS service ID
                "template_np3exoh", // Replace with your EmailJS template ID
                templateParams,
                "dnG0LC_cuxIZMOgLu" // Replace with your EmailJS Public Key
            )
            .then(
                (response) => {
                    console.log("SUCCESS!", response.status, response.text);
                    toast.success("Appointment booked successfully! ✅");
                },
                (err) => {
                    console.log("FAILED...", err);
                    toast.error("Failed to send email! ❌");
                }
            );

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
                    <div className="di">
                        <h2>Get In <span className="touch-icon"><img src={Vector} alt="" /></span> Touch!</h2>
                        <p>
                            {/* Please feel free to get in touch at any time. <br /> */}
                            <span> You can reach us anytime via <a href="mailto:info@obwclinic.com">info@obwclinic.com</a> </span>
                        </p>
                   </div>
                    <form onSubmit={handleSubmit} className="form_card">
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
                                onChange={(phone) => {
                                    setPhone(phone);
                                    setFormData((prev) => ({ ...prev, phone }));
                                }}
                                placeholder="+(91) 00000 - 00000"
                            />

                        </div>

                        {/* <div className="form-group date-group">
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
                        </div> */}

                        <div className="form-group radio-section">
                            <label>Our Location</label>
                            <div className="radio-options">
                                {["Banashankari", "Kanakapura Main Road", "Rajarajeshwari Nagar", "Kodipalya"].map((loc) => (
                                    <label key={loc}>
                                        <input
                                        className="radio1"
                                            type="radio"
                                            name="location"
                                            value={loc}
                                            checked={formData.location === loc}
                                            onChange={handleChange}
                                            style={{width:'17px',padding:'0',height:'17px'}}
                                        /> {loc}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Message</label>
                            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Write your message..."></textarea>
                        </div>

                        <button type="submit" className="submit-btn btn">
                            <span>
                                
                           Submit
                        </span>
                            {/* <ArrowRight className="arrow-icon" size={16} strokeWidth={2} /> */}
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

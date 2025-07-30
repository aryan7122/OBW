import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { CheckCircle2, Mail, Phone } from 'lucide-react';
import './SalonContactUs.scss';

// Make sure this path is correct for your project structure
import contactImage from '../../../assets/SALON/hero/contact-image.webp';

const SalonContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        outlet: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.firstName || !formData.email || !formData.mobileNumber || !formData.message) {
            toast.error('Please fill out all required fields.');
            return;
        }
        console.log('Form Submitted Data:', formData);
        toast.success('Thank you! Your message has been sent.');
        setFormData({
            firstName: '', lastName: '', email: '',
            mobileNumber: '', outlet: 'Kodipalya road', message: ''
        });
    };

    const features = [
        "Clean, safe, and peaceful place to relax ",
        "Clear prices and only trusted products used ",
        "Modern machines that give real, visible results"
    ];

    return (
        <div className="salon-contact-page">
            <Toaster position="top-center" />

            <header className="contact-header">
                <h1>We’re Just a Message Away!</h1>
                <p className="subtitle">
                   Taking care of your beauty isn’t just about looks; it’s about feeling amazing in your skin. Let’s connect and help you glow from the inside out.
                </p>
                <div className="features-bar">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-item">
                            <CheckCircle2 size={18} className="feature-icon" />
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>
            </header>

            <div className="contact-main-container">
                <div className="form-section">
                    <h2>Get in touch <span className="handwritten-text">with us</span></h2>
                    <p className="form-subheading">We’re here to help with any questions or feedback</p>

                    <form onSubmit={handleSubmit} noValidate>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">First name</label>
                                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last name</label>
                                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="mobileNumber">Mobile Number</label>
                            <input type="tel" id="mobileNumber" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="outlet">Outlet</label>
                            <select id="outlet" name="outlet" value={formData.outlet} onChange={handleChange}>
                                <option value="Kodipalya road">Kodipalya road</option>
                                <option value="Indiranagar">Indiranagar</option>
                                <option value="Koramangala">Koramangala</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
                        </div>

                        <button type="submit" className="submit-button">Submit Now</button>
                    </form>
                </div>

                <div className="info-section">
                    <div className="image-wrapper">
                        <div className="image-bg-pattern"></div>
                        <img src={contactImage} alt="Woman in a salon chair" />
                    </div>
                    <div className="contact-details-box">
                        <div className="contact-detail-item">
                            <span className="contact-icon">

                                <Mail size={20} />
                            </span>
                            <div>
                                <strong>Email</strong>
                                <p>Office : contact@obw.salon.co</p>
                            </div>
                        </div>
                        <div className="contact-detail-item">
                            <span className="contact-icon">

                                <Phone size={20} />
                            </span>
                            <div>
                                <strong>Phone</strong>
                                <p>Office : +91-99720 11222</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SalonContactUs;
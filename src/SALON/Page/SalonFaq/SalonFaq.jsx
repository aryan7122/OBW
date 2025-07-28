import React, { useState } from "react";
import { ChevronDown, ChevronUp, Sparkle } from "lucide-react";
import "./SalonFaq.scss";

// Import your images - make sure the paths are correct
import faqImage1 from "../../../assets/SALON/hero/faq/faq-image-1.jpg";
import faqImage2 from "../../../assets/SALON/hero/faq/faq-image-2.jpg";
import str3 from "../../../assets/SALON/hero/str.png";

// Store FAQ data in an array for easy management
const faqData = [
    {
        question: "How do I book an appointment online?",
        answer:
            "You can easily book an appointment by clicking the 'Book Now' button on our website. Select your desired service, branch, date, and time – then enter your details to confirm. It takes less than a minute!",
    },
    {
        question: "Can I reschedule or cancel my appointment?",
        answer:
            "Yes! You can modify or cancel your appointment up to 2 hours before your scheduled time. Use the link in your confirmation SMS or WhatsApp, or contact our support team.",
    },
    {
        question: "Are walk-ins allowed?",
        answer:
            "Yes, walk-ins are welcome, but we highly recommend booking in advance to avoid wait times – especially during weekends and evenings.",
    },
    {
        question: "Do I need to pay in advance to book an appointment?",
        answer:
            "Most services can be booked without prepayment. However, for select treatments or offers, a small advance may be required to confirm your slot.",
    },
    {
        question: "Are your products and equipment safe for sensitive skin?",
        answer:
            "Absolutely. We use only dermatologically tested, premium products and ensure top hygiene standards for all skin types, including sensitive skin.",
    },
];

const SalonFaq = () => {
    // State to keep track of the currently open accordion item index
    // We set it to 0 so the first item is open by default, as in the design
    const [openIndex, setOpenIndex] = useState(0);

    // Function to toggle the accordion items
    const handleToggle = (index) => {
        // If the clicked item is already open, close it. Otherwise, open the new one.
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="salon-faq-page">
            <div className="faq_titles">
                <div>
                    <span className="badge">
                        FAQ'S
                        <img src={str3} />{" "}
                    </span>
                    <h1>Ask Anything, We Have Answer For You</h1>
                </div>
                <p>
                    We're serving glow-ups across Bangalore. Choose a location that's closest to you and get pampered.
                </p>
            </div>
            <div className="salon-faq-container">
                {/* Left Column: FAQ Content */}
                <div className="salon-faq-content">
                    <div className="accordion">
                        {faqData.map((item, index) => (
                            <div
                                key={index}
                                className={`accordion-item ${openIndex === index ? "open" : ""
                                    }`}
                            >
                                <div
                                    className="accordion-header"
                                    onClick={() => handleToggle(index)}
                                >
                                    <span className="question-number">{index + 1}.</span>
                                    <span className="question-text">{item.question}</span>
                                    <div className="accordion-icon">
                                        {openIndex === index ? (
                                            <ChevronUp size={24} />
                                        ) : (
                                            <ChevronDown size={24} />
                                        )}
                                    </div>
                                </div>
                                <div className="accordion-content">
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Sidebar */}
                <aside className="salon-faq-sidebar">
                    <div className="image-stack">
                        <img className="img_f_1" src={faqImage1} alt="Woman receiving a facial treatment" />
                        <img className="img_f_2" src={faqImage2} alt="Skincare product application" />
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default SalonFaq;

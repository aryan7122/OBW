import React, { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import "./FAQSection.scss";
import faqImg from '../../assets/faq/Rectangle 3463667.png'

const faqs = [
    {
        question: "What services does OBW offer?",
        answer:
            "OBW offers a variety of services including web development, digital marketing, and IT consulting to help businesses thrive in the digital landscape.",
    },
    { question: "How do I book an appointment?", answer: "You can book it via our website or contact us directly." },
    { question: "Are the products used safe?", answer: "Yes, all products are tested and certified for safety." },
    { question: "Can I change my appointment?", answer: "Yes, you can reschedule through your account portal." },
    { question: "What safety measures are in place?", answer: "We follow all industry-standard safety protocols." },
    { question: "Do you offer group bookings?", answer: "Yes, we provide customized packages for group bookings." },
];

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="faq-container">
            <div className="faq-left">
                <h6 className="FAQ’s">FAQ’s</h6>
                <h2>Frequently Asked Questions</h2>
                <p>Got questions? We’re here to help! Chat with our team anytime or check our FAQ for common inquiries.</p>
                <button className="get-in-touch">Get In Touch<ArrowRight className="arrow-icon" size={20} strokeWidth={3} /></button>
            </div>

            <div className="faq-right">
                {faqs.map((faq, index) => (
                    <div key={index} className={`faq-card ${activeIndex === index ? "active" : ""}`} onClick={() => toggleFAQ(index)}>
                        <div className="faq-question">
                            <span>{faq.question}</span>
                            <div className="icon_round">
                                {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                            </div>
                        </div>
                        {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;

import React, { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import "./FAQSection.scss";
import faqImg from '../../assets/faq/Rectangle 3463667.png'
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

const faqs = [
    {
        question: "What services does OBW Clinic offer? ",
        answer: "We offer a wide range of aesthetic and wellness treatments, including skin brightening, anti-aging solutions, laser treatments, chemical peels, PRP therapy, HydraFacial, body contouring, and more. ",
    },
    {
        question: "Are OBW Clinic treatments safe?",
        answer: "Yes! All our treatments are FDA-approved, performed by trained professionals, and use clinically tested, dermatologically safe products. "
    },
    {
        question: "What skin treatments do you offer? ",
        answer: "We offer Clinical Medi Facial, chemical peels, skin brightening, laser treatments, and more."
    },
    {
        question: "Do you provide hair loss solutions?",
        answer: "Yes, we offer Hair PRP, Hair GFC, and advanced hair rejuvenation treatments. "
    },
    {
        question: "Is the Clinical Medi Facial safe for sensitive skin? ",
        answer: "Absolutely! Our Clinical Medi Facial is gentle and customizable for all skin types."
    },
    {
        question: "How many sessions are needed for laser hair reduction?",
        answer: "Typically, 6-8 sessions are recommended for optimal results. "
    },
    {
        question: "Do you offer skin brightening treatments?",
        answer: "Yes, we provide advanced skin-brightening solutions for a radiant glow."
    },
    {
        question: "Is there downtime after chemical peels?",
        answer: "Mild peels have minimal downtime, while deeper peels may need a few days of recovery."
    },
    {
        question: "How soon will I see results from hair treatments?",
        answer: "Visible improvements typically start within 3-6 months, depending on the treatment. "
    },
    {
        question: "Do you offer free consultations?",
        answer: "Yes, we provide personalized consultations to understand your skin and hair needs."
    },
    {
        question: "Where is the OBW Clinic located?",
        answer: "We have multiple branches for your convenience. You can check our website or contact us for the nearest location."
    },
];

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };
    const navigate = useNavigate();
    const HandleNavigation = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    return (
        <div className="faq-container">
            <div className="faq-left">
                <h6 className="FAQ’s">FAQ’s</h6>
                <h2>Frequently Asked Questions</h2>
                <p>Got questions? We’re here to help! Chat with our team anytime or check our FAQ for common inquiries.</p>
                <button className="get-in-touch" onClick={() => HandleNavigation("/contact")}
                >Get In Touch<ArrowRight className="arrow-icon" size={20} strokeWidth={3} /></button>
            </div>

            <div className="faq-right">
                {faqs.map((faq, index) => (
                    <div key={index} className={`faq-card ${activeIndex === index ? "active" : ""}`} onClick={() => toggleFAQ(index)}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, amount: 0.4 }}

                    >
                        <div className="faq-question"

                        >
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

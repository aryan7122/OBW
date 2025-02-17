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
        question: " How do I book an appointment? ",
        answer: "To schedule your appointment, you can call us, visit our website, or message us on WhatsApp or social media. "
    },
    {
        question: "How many sessions are required for visible results?",
        answer: "Results vary based on the treatment and individual skin type. Our experts will provide a personalized treatment plan tailored to your needs during your consultation. "
    },
    {
        question: "Do you offer consultations before treatment? ",
        answer: "Yes, we provide personalized consultations to understand your concerns and recommend the best treatment options."
    },
    {
        question: "Is there any downtime after treatments?",
        answer: "Most of our treatments have minimal to no downtime, allowing you to resume daily activities quickly. Our team will guide you on post-care based on your procedure. "
    },
    {
        question: "Do you offer customized treatment plans?",
        answer: "Absolutely! We assess your skin and aesthetic goals to create a tailor-made treatment plan for the best results. "
    },
    {
        question: "What products do you use for treatments?",
        answer: "We use premium, dermatologist-approved skincare, and aesthetic products to ensure safety and effectiveness. "
    },
    {
        question: "Can I get a treatment done on the same day as my consultation? ",
        answer: "Yes, in most cases, you can start your treatment immediately after consultation, depending on the procedure. "
    },
    {
        question: "Where is the OBW Clinic located? ",
        answer: "We have multiple branches for your convenience. You can check our website or contact us for the nearest location. "
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
                    <motion.div key={index} className={`faq-card ${activeIndex === index ? "active" : ""}`} onClick={() => toggleFAQ(index)}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, amount: 0.4 }}

                    >
                        <motion.div className="faq-question"

                        >
                            <span>{faq.question}</span>
                            <div className="icon_round">
                                {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                            </div>
                        </motion.div>
                        {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;

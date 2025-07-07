import React from 'react';
import './FaqC.scss'; // Import your SCSS
import { ArrowRight } from 'lucide-react';

const faqData = [
    {
        question: 'What treatments does OBW offer?',
        answer:
            'We offer a comprehensive range of skin, hair, and body treatments including chemical peels, PRP therapy, laser hair reduction, microneedling, Botox, fillers, IV drips, and more. All services are customized based on your specific concerns and skin type.',
    },
    {
        question: 'Are your treatments safe for all skin types?',
        answer:
            'Yes, our treatments are designed to be safe and effective for all skin types. Before any procedure, our specialists conduct a detailed consultation and skin analysis to ensure the best approach for your unique needs.',
    },
    {
        question: 'How do I book an appointment?',
        answer:
            'You can book an appointment directly through our website using the "Book Now" button. You can also call us or visit any of our branches.',
    },
    {
        question: 'How much do treatments cost?',
        answer:
            'Treatment costs vary depending on the procedure and the area being treated. You can view our detailed pricing on the website or speak with our clinic team for personalized quotes.',
    },
    {
        question: 'Can I cancel or reschedule my appointment?',
        answer:
            'Yes. We request at least 24 hours\' notice for cancellations or rescheduling. This allows us to accommodate other clients and manage slots effectively.',
    },
];

const FaqC = () => {
    return (
        <div className="faq-page">
            <div className="faq-header">
                <p className="faq-tag">FAQ'S</p>
                <h1 className="main-title">Frequently asked Questions</h1>
            </div>

            <div className="faq-list">
                {faqData.map((item, index) => (
                    <div className="faq-item" key={index}>
                        <div className="faq-question-text">
                            <h3>{`${index + 1}. ${item.question}`}</h3>
                        </div>
                        <div className="faq-answer-text">
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="still-have-questions">
                <div>
                    <p>Still have questions?</p>
                    <span>Contact us for more information</span>
                </div>
                <a href="#" className="book-now btn">
                    Contact Us
                    <span className="arrow-icon">
                         <ArrowRight className="arrow-icon" size={20} strokeWidth={3}/>
                    </span>
                </a>
            </div>
        </div>
    );
};

export default FaqC;
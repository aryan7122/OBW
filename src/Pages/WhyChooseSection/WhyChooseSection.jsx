import React from "react";
import "./WhyChooseSection.scss";
import { motion } from 'framer-motion';
// import 'react-lazy-load-image-component/src/effects/blur.css';
import WebPImage from "../../util/WebPImage";
import img1 from '../../assets/WhyChooseSection/007A0853_11zon.jpg'
import img2 from '../../assets/WhyChooseSection/Personalized Solutions_11zon.jpg'
import img3 from '../../assets/WhyChooseSection/0K6A5904_11zon.jpg'
import icon1 from '../../assets/WhyChooseSection/ok.svg'
const WhyChooseSection = () => {
    // const img2= "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/WhyChooseSection/eimccgamvas1fxy1vy"
    // const img1="https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/WhyChooseSection/upimjxgdcs7vitbylan9"
    // const img3="https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/WhyChooseSection/xir8lh6mqwa8q1iwjukk"
    // const icon1 = "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/WhyChooseSection/cwlr9yev7jiiwy7575u0"

    return (
        <section className="why-choose-section">
            <div className="content-container">
                <h2 className="title">
                Why OBW is      
                    {' '}
                    <img src={icon1}
                       />  {' '}the Right Choice
                </h2>
                <p className="description">
                    {/* At OBW Clinic, we are committed to providing expert-driven, result-oriented aesthetic treatments tailored to your unique needs. Our team of skilled dermatologists and specialists uses cutting-edge technology to ensure safe, effective, and long-lasting results. We believe in a holistic approach to beauty and wellness, combining science-backed treatments with personalized care. Our clinic uses premium, dermatologically tested products, ensuring the highest quality standards for your skin and body. With a luxurious and comfortable ambiance, we strive to make every visit a rejuvenating experience.
                    <br />
                    <br />
                    Experience the OBW difference—where beauty meets confidence! */}
                    Discover the Benefits of Choosing OBW clinic: Your Path to Excellence!
                </p>
                <div className="image-grid">
                    <div
                        className="image-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <WebPImage src={img1} alt="Happy Woman" />
                        <p>Advanced Treatments</p>
                    </div>

                    <div
                        className="image-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }} // Adjusted delay for staggered effect
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <WebPImage src={img2} alt="Care Image" />
                        <p>Expert care</p>
                    </div>

                    <div
                        className="image-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }} // Adjusted delay for staggered effect
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <WebPImage src={img3} alt="Care Image" />
                        <p>Personalized Solutions</p>
                    </div>
                </div>

                <div className="info-grid">
                    <div className="info-card green"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true, amount: 0.2 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" color="#000000" fill="none">
                            <path d="M14.9805 7.01556C14.9805 7.01556 15.4805 7.51556 15.9805 8.51556C15.9805 8.51556 17.5687 6.01556 18.9805 5.51556" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.99491 2.02134C7.49644 1.91556 5.56618 2.20338 5.56618 2.20338C4.34733 2.29053 2.01152 2.97385 2.01154 6.96454C2.01156 10.9213 1.9857 15.7993 2.01154 17.7439C2.01154 18.932 2.74716 21.7033 5.29332 21.8518C8.38816 22.0324 13.9628 22.0708 16.5205 21.8518C17.2052 21.8132 19.4847 21.2757 19.7732 18.7956C20.0721 16.2263 20.0126 14.4407 20.0126 14.0157" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M21.9999 7.01556C21.9999 9.77698 19.7592 12.0156 16.9951 12.0156C14.231 12.0156 11.9903 9.77698 11.9903 7.01556C11.9903 4.25414 14.231 2.01556 16.9951 2.01556C19.7592 2.01556 21.9999 4.25414 21.9999 7.01556Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M6.98053 13.0156H10.9805" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M6.98053 17.0156H14.9805" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                        <h3>Recognized and Certified Clinic</h3>
                        <p>
                            OBW Clinical Services is certified by leading dermatology and cosmetic boards, ensuring that we meet the highest standards in the industry
                        </p>
                    </div>
                    <div className="info-card purple"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true, amount: 0.2 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" color="#000000" fill="none">
                            <path d="M15 7.5C15 7.5 15.5 7.5 16 8.5C16 8.5 17.5882 6 19 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M22 7C22 9.76142 19.7614 12 17 12C14.2386 12 12 9.76142 12 7C12 4.23858 14.2386 2 17 2C19.7614 2 22 4.23858 22 7Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M3.60746 21.0095L4.07229 20.4209L3.60746 21.0095ZM3.0528 20.4875L3.61262 19.9884L3.0528 20.4875ZM20.9472 20.4875L20.3874 19.9884L20.9472 20.4875ZM20.3925 21.0095L19.9277 20.4209L20.3925 21.0095ZM3.60746 6.99127L3.14263 6.40268L3.60746 6.99127ZM3.0528 7.5133L3.61262 8.0124L3.0528 7.5133ZM22.75 13.2445C22.7493 12.8302 22.4129 12.495 21.9987 12.4958C21.5845 12.4965 21.2493 12.8329 21.25 13.2471L22.75 13.2445ZM9.06582 6.75292C9.48003 6.75057 9.81391 6.41289 9.81157 5.99869C9.80922 5.58448 9.47154 5.2506 9.05734 5.25294L9.06582 6.75292ZM13.5 21.2504H10.5V22.7504H13.5V21.2504ZM10.5 21.2504C8.60311 21.2504 7.24353 21.2493 6.19895 21.1313C5.16816 21.0148 4.54359 20.7931 4.07229 20.4209L3.14263 21.5981C3.926 22.2168 4.86842 22.4905 6.03058 22.6218C7.17896 22.7515 8.63832 22.7504 10.5 22.7504V21.2504ZM1.25 14.0004C1.25 15.7493 1.24857 17.1321 1.38762 18.2226C1.52932 19.3337 1.82681 20.2394 2.49298 20.9866L3.61262 19.9884C3.22599 19.5547 2.99708 18.9856 2.87558 18.0328C2.75143 17.0593 2.75 15.789 2.75 14.0004H1.25ZM4.07229 20.4209C3.90545 20.2892 3.7517 20.1444 3.61262 19.9884L2.49298 20.9866C2.69068 21.2084 2.90811 21.4129 3.14263 21.5981L4.07229 20.4209ZM21.25 14.0004C21.25 15.789 21.2486 17.0593 21.1244 18.0328C21.0029 18.9856 20.774 19.5547 20.3874 19.9884L21.507 20.9866C22.1732 20.2394 22.4707 19.3337 22.6124 18.2226C22.7514 17.1321 22.75 15.7493 22.75 14.0004H21.25ZM13.5 22.7504C15.3617 22.7504 16.821 22.7515 17.9694 22.6218C19.1316 22.4905 20.074 22.2168 20.8574 21.5981L19.9277 20.4209C19.4564 20.7931 18.8318 21.0148 17.801 21.1313C16.7565 21.2493 15.3969 21.2504 13.5 21.2504V22.7504ZM20.3874 19.9884C20.2483 20.1444 20.0946 20.2892 19.9277 20.4209L20.8574 21.5981C21.0919 21.4129 21.3093 21.2084 21.507 20.9866L20.3874 19.9884ZM2.75 14.0004C2.75 12.2118 2.75143 10.9415 2.87558 9.96799C2.99708 9.01519 3.22599 8.44606 3.61262 8.0124L2.49298 7.0142C1.82681 7.76141 1.52932 8.66709 1.38762 9.77825C1.24857 10.8687 1.25 12.2515 1.25 14.0004H2.75ZM3.14263 6.40268C2.90811 6.58789 2.69068 6.79245 2.49298 7.0142L3.61262 8.0124C3.7517 7.8564 3.90545 7.71161 4.07229 7.57986L3.14263 6.40268ZM22.75 14.0004C22.75 13.7412 22.7504 13.4875 22.75 13.2445L21.25 13.2471C21.2504 13.4885 21.25 13.7376 21.25 14.0004H22.75ZM9.05734 5.25294C7.64978 5.26091 6.50411 5.29333 5.56558 5.44144C4.61301 5.59178 3.81862 5.86882 3.14263 6.40268L4.07229 7.57986C4.47956 7.25822 5.00124 7.04907 5.79942 6.92311C6.61164 6.79492 7.65139 6.76092 9.06582 6.75292L9.05734 5.25294Z" fill="currentColor" />
                            <path d="M10 18H11.5" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14.5 18L18 18" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M2.5 11H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <h3>Flexible Payment Options</h3>
                        <p>
                            To make our treatments accessible to everyone, we offer flexible payment plans and options, ensuring affordability without compromising quality.
                        </p>
                    </div>
                    <div className="info-card pink"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true, amount: 0.2 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" color="#000000" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8 15C8.91212 16.2144 10.3643 17 12 17C13.6357 17 15.0879 16.2144 16 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8.00897 9L8 9M16 9L15.991 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <h3>Post-Service Support</h3>
                        <p>
                            Our commitment doesn’t end with the treatment. We provide post-treatment care and guidance to ensure long-lasting results &address any concerns you
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection;

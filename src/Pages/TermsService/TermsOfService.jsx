import React, { useContext } from "react";
import "./PrivacyPolicy.scss";
import { TabContext } from "../../util/TabContext";

const TermsOfService = () => {
      const { pageTab, changeTab } = useContext(TabContext);
    
    return (
        <div className={`privacy-policy ${pageTab === "SALON" ? 'SALON-privacy-policy' :""}`}>
            <header>
                <h1>Terms of Service</h1>
                <p>
                    At OBW Clinical Services, your privacy is our top priority. This policy outlines how we collect, use,
                    and protect your personal information when you interact with our website, services, and clinic.
                </p>
                <p className="effective-date">Effective date: Jan 26, 2025</p>
            </header>

            <main>
                <section className="information-collect">
                    <h2>1. Services</h2>
                    <p>Our treatments are provided based on professional medical expertise. Individual results may vary, and we do not guarantee specific outcomes. Consultations are required to determine eligibility for certain procedures.</p>
                </section>

                <section className="use-information">
                    <h2>2. Booking and Appointments</h2>
                    <ul>
                        <li>Appointments must be scheduled in advance via our website, phone, or in person.</li>
                        <li>Rescheduling or cancellations require at least 24 hours’ notice. Late cancellations may incur a fee</li>
                    </ul>
                </section>

                <section className="data-protection">
                    <h2>3. Payments</h2>
                    <ul>
                        <li>All payments must be made in full before or at the time of service.</li>
                        <li>We accept major payment methods, including credit cards, debit cards, and online payment gateways.</li>
                        <li>Prices listed are exclusive of taxes unless otherwise stated.`</li>
                    </ul>
                </section>

                <section className="your-rights">
                    <h2>4. Refunds</h2>
                    <ul>
                        <li>Payments for completed treatments are non-refundable.</li>
                        <li>Prepaid packages or services are eligible for partial refunds only if unused, subject to management approval.</li>
                    </ul>
                </section>
                <section className="your-rights">
                    <h2>5. Client Responsibility</h2>
                    <p>Clients must provide accurate medical history and disclose any allergies or conditions prior to treatments.</p>
                </section>
                <section className="your-rights">
                    <h2>6. Privacy Policy</h2>
                    <p>Your personal and medical information will be kept confidential in accordance with our Privacy Policy. We do not share your information without your consent.</p>
                </section>
                <section className="your-rights">
                    <h2>7. Limitation of Liability</h2>
                    <p>OBW Clinical Services is not liable for any adverse reactions caused by undisclosed medical conditions or failure to follow aftercare instructions.</p>
                </section>
                <section className="your-rights">
                    <h2>8. Modifications to Terms</h2>
                    <p>We reserve the right to update these terms at any time. Continued use of our services constitutes acceptance of the revised terms</p>
                </section>

                <section className="contact-us">
                    <h2>Contact Us</h2>
                    <p>For questions or concerns about these terms, please contact us:</p>
                    <ul>
                        <li>Phone: [Your Contact Number]</li>
                        <li>Email: [Your Email Address]</li>
                        <li>Address: [Your Clinic Address]</li>
                    </ul>
                </section>
            </main>

            <footer>
                Thank you for choosing OBW Clinical Services. We look forward to helping you achieve your skincare and haircare goals!
            </footer>
        </div>
    );
};

export default TermsOfService;
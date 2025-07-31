import React, { useContext } from "react";
import "./PrivacyPolicy.scss";
import { TabContext } from "../../util/TabContext";

const PrivacyPolicy = () => {
          const { pageTab, changeTab } = useContext(TabContext);
    
    return (
        <div className={`privacy-policy ${pageTab === "SALON" ? 'SALON-privacy-policy' :""}`}>
            <header>
                <h1>Privacy Policy</h1>
                <p>
                    At OBW Clinical Services, your privacy is our top priority. This policy outlines how we collect, use,
                    and protect your personal information when you interact with our website, services, and clinic.
                </p>
                <p className="effective-date">Effective date: Jan 26, 2025</p>
            </header>

            <main>
                <section className="information-collect">
                    <h2>Information We Collect</h2>
                    
                        <p>Personal Information: Name, contact details, and appointment preferences provided during bookings or consultations.</p>
                        <p>Health Information: Shared during consultations to provide personalized treatments.</p>
                        <p>Usage Data: Information collected from your device when you visit our website (e.g., browser type, IP address).</p>
                    
                </section>

                <section className="use-information">
                    <h2>How We Use Your Information</h2>
                    <ul>
                        <li>To schedule appointments and provide clinical services.</li>
                        <li>To improve your experience on our website.</li>
                        <li>To send updates about your appointments, promotions, or service changes (with your consent).</li>
                    </ul>
                </section>

                <section className="data-protection">
                    <h2>Data Protection</h2>
                    <ul>
                        <li>Your information is stored securely and shared only with authorized personnel or partners to provide services.</li>
                        <li>We do not sell or share your personal data with third parties for marketing purposes.</li>
                    </ul>
                </section>

                <section className="your-rights">
                    <h2>Your Rights</h2>
                    <ul>
                        <li>Access, update, or delete your personal information by contacting us.</li>
                        <li>Opt out of receiving promotional communications at any time.</li>
                    </ul>
                </section>

                <section className="contact-us">
                    <h2>Contact Us</h2>
                    <p>For questions or concerns about these terms, please contact us:</p>
                    <ul>
                        <li>Phone: 9741143122</li>
                        <li>Email: Obwsalonmanager@gmail.com</li>
                        <li>Address: Complete Address 2- Shop No 6 & 7, 1, Kodipalya Rd, opp. Vasthugreens Apartments, near Gudde Anjineya Temple, Kengeri, Bengaluru, Karnataka 560060</li>
                    </ul>
                </section>
            </main>

            <footer>
                Thank you for choosing OBW Clinical Services. We look forward to helping you achieve your skincare and haircare goals!
            </footer>
        </div>
    );
};

export default PrivacyPolicy;
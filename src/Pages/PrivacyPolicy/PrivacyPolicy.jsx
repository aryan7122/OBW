import React, { useContext } from "react";
import "./PrivacyPolicy.scss";
import { TabContext } from "../../util/TabContext";

const PrivacyPolicy = ({ type }) => {
    const { pageTab, changeTab } = useContext(TabContext);
    const getServiceName = () => {
    if (type === "SALON") return " Salon ";
    if (type === "CLINIC") return " Clinical ";
    return "OBW Services";
  };
    return (
        <div className={`privacy-policy ${pageTab === "SALON" ? 'SALON-privacy-policy' : ""}`}>
            <header>
                <h1>Privacy Policy</h1>
                <p>
                    At OBW {getServiceName()} Services, your privacy is our top priority. This policy outlines how we collect, use,
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
                        <li>To schedule appointments and provide {getServiceName()} services.</li>
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
                {type === "SALON" && (
                    <section className="contact-u">
                       <h2>Contact Us</h2>
                        <p>For questions or concerns about these terms, please contact us:</p>
                        <ul>
                            <li>Phone: 9686627778</li>
                            <li>Email: Obwsalonmanager@gmail.com</li>
                            <li>Address: Kanakapura Rd. - No. 3, 2nd floor above tanishq jewellery, Near KSIT college, Raghuvanahalli KSIT junction - 560062 </li>
                        </ul>
                    </section>
                )}
                {type === "CLINIC" && (
                    <section className="contact-us">
                        <h2>Contact Us</h2>
                        <p>For questions or concerns about these terms, please contact us:</p>
                        <ul>
                            <li>Phone: 9900029910</li>
                            <li>Email: info@obwclinic.com</li>
                            <li>Address: Banashankari 6th Stage - 3rd block Road Chikkegowdanapalya Near, Polar Bear Ice Cream-560109</li>
                        </ul>
                    </section>
                )}

            </main>

            <footer>
                Thank you for choosing OBW {getServiceName()} Services. We look forward to helping you achieve your skincare and haircare goals!
            </footer>
        </div>
    );
};

export default PrivacyPolicy;
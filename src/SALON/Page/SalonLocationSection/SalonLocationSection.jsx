import React, { useState } from "react";
import { Sparkles } from 'lucide-react';
import "./SalonLocationSection.scss";
import str3 from "../../../assets/SALON/hero/str.png";

const locations = [
    {
        name: "Bhanshankari",
        address: "203, 100 Feet Rd, near Polar Bear Ice Cream, Banashankari 6th Stage 3rd Block, Banashankari Stage 6, Chikkegowdanapalya, Bengaluru, Karnataka 560109",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.790159491763!2d77.53585831482149!3d12.92117899088998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e1e6e3b5a7b%3A0x8c8f5f24449a7c3f!2sBanashankari%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1626352934278!5m2!1sen!2sin"
    },
    {
        name: "R.R Nagar",
        address: "No 2, Balarama Layout, Krishna Garden Main Road, near Happy Home Super Market, Rajarajeshwari Nagar, Bengaluru, Karnataka 560098",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.397693521235!2d77.51390331482173!3d12.94639399087349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e244b1b3b3b%3A0x2c6f1c7d6c6b3e3e!2sRajarajeshwari%20Nagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1626352984123!5m2!1sen!2sin"
    },
    {
        name: "Kankapura Main road",
        address: "No. 3 2nd floor, Kanakapura Main Rd, above Tanishq Jewellery, near KSIT college, Raghuvanahalli, KSIT junction, Bengaluru, Karnataka 560062",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.375836214342!2d77.54589801482103!3d12.8833339909139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae156b156b156b%3A0x156b156b156b156b!2sKanakapura%20Rd%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1626353023987!5m2!1sen!2sin"
    },
    {
        name: "Kodipalya Road",
        address: "Shop No 6 & 7, Opp Vasthugreens Apartments Near Gudde Anjineya Temple, 1, Kodipalya Rd, opposite to Vaastu Greens, Kengeri, Bengaluru,",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.001700424594!2d77.4766835148219!3d12.97159899085566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f2e2e2e2e2e%3A0x2e2e2e2e2e2e2e2e!2sKengeri%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1626353063543!5m2!1sen!2sin"
    }
];

const SalonLocationSection = () => {
    // State to manage the active location card and map URL
    const [activeIndex, setActiveIndex] = useState(0);

    const handleLocationClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <section className="salon-locations">
            <header className="salon-locations__header">
                <p className="salon-locations__label">
                    <img src={str3} /> LOCATIONS <img src={str3} />
                </p>
                <h2 className="salon-locations__title">Our Salon locations</h2>
            </header>

            <div className="salon-locations__grid">
                {locations.map((location, index) => (
                    <div
                        key={index}
                        className={`location-card ${activeIndex === index ? "location-card--active" : ""}`}
                        onClick={() => handleLocationClick(index)}
                    >
                        <h3 className="location-card__name">{location.name}</h3>
                        <p className="location-card__address">{location.address}</p>
                        <a
                            href={location.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="location-card__link"
                            onClick={(e) => e.stopPropagation()} // Prevents card click when link is clicked
                        >
                            View Map
                        </a>
                    </div>
                ))}
            </div>

            <div className="salon-locations__map-wrapper">
                <iframe
                    title="location-map"
                    src={locations[activeIndex].mapUrl}
                    className="salon-locations__map-iframe"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
};

export default SalonLocationSection;
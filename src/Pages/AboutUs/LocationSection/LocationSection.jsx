import React, { useState } from "react";
import "./LocationSection.scss";
import icon1 from '../../../assets/about/locationIcon.svg'
const locations = [
    {
        name: "Kodipalya",
        address: "Kodipalya, Bengaluru, Karnataka 560060",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15556.814936208113!2d77.48363884168423!3d12.894617265327124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f3c04b90dd1%3A0x7111e9e1c3f2c737!2sKodipalya%2C%20Bengaluru%2C%20Karnataka%20560060!5e0!3m2!1sen!2sin!4v1739163341793!5m2!1sen!2sin"
    },
    {
        name: "R.R Nagar",
        address: "123, 5th Stage, Rajarajeshwari Nagar, Bengaluru, Karnataka 560060",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d959.0013635174199!2d77.51387976821297!3d12.90478723680714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f084e1263a3%3A0xb70616db18b9e04!2s123%2C%205th%20Stage%2C%20Rajarajeshwari%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560060!5e0!3m2!1sen!2sin!4v1739163493679!5m2!1sen!2sin"
    },
    {
        name: "Kanakapura Road",
        address: "Kanakapura, Karnataka 562117",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25568.320604050605!2d77.40575001915674!3d12.547972578232416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae58514a06ef17%3A0x2b7a698976431240!2sKanakapura%2C%20Karnataka%20562117!5e0!3m2!1sen!2sin!4v1739163550354!5m2!1sen!2sin"
    }
];

const LocationSection = () => {
    const [activeMap, setActiveMap] = useState(locations[0].mapUrl); // Default first map
    const [activeIndex, setActiveIndex] = useState(0); // Default first card active

    const handleLocationClick = (index, mapUrl) => {
        setActiveMap(mapUrl);
        setActiveIndex(index);
    };

    return (
        <section className="location-section">
            <div className="text-content">
                <h5>Location</h5>
                <h2>
                    Our Salon <img src={icon1} /> Locations
                </h2>
                <p>
                    Welcome to our salon! With multiple locations, we offer a relaxing experience. Our skilled professionals
                    are dedicated to making you look and feel your best. Whether you need a haircut, color treatment, or spa
                    service, our friendly team is here for you.
                </p>
            </div>
            <div className="mapCard">
                <div className="location-list">
                    {locations.map((location, index) => (
                        <div
                            key={index}
                            className={`location-card ${activeIndex === index ? "locationActive" : ""}`}
                            onClick={() => handleLocationClick(index, location.mapUrl)}
                        >
                            <h3>{location.name}</h3>
                            <p>{location.address}</p>
                            <button>View Location</button>
                        </div>
                    ))}
                </div>
                <div className="map-container">
                    <iframe
                        title="location-map"
                        src={activeMap}
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default LocationSection;

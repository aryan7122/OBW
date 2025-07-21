import React, { useState } from "react";
import "./LocationSection.scss";
import icon1 from '../../../assets/about/locationIcon.svg'
const locations = [
    {
        name: "Banashankari",
        address: "203, 100 Feet Rd, near Polar Bear Ice Cream, Banashankari 6th Stage 3rd Block, Banashankari Stage 6, Chikkegowdanapalya, Bengaluru, Karnataka 560109",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27462.160178895465!2d77.50609012863052!3d12.877508413200026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f4ec1bdb403%3A0x9025e3ff7e907cbf!2sObw%20Salon%20%7C%20Hair%20%26%20Skin%20Clinic!5e0!3m2!1sen!2sin!4v1739600998644!5m2!1sen!2sin"
    },
    {
        name: "Kanakapura Main Road",
        address: "No. 3 2nd floor, Kanakapura Main Rd, above Tanishq Jewellery, near KSIT college, Raghuvanahalli, KSIT junction, Bengaluru, Karnataka 560062",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1237.4005569027722!2d77.54510188463037!3d12.879024934708173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f5bea81491d%3A0xacd55621ca8d33c2!2sObw%20Salon%20%7C%20Hair%20%26%20Skin%20Clinic!5e0!3m2!1sen!2sin!4v1739601210644!5m2!1sen!2sin"
    },
    {
        name: "Rajarajeshwari Nagar",
        address: "No 2, Balarama Layout, Krishna Garden Main Road, near Happy Home Super Market, Rajarajeshwari Nagar, Bengaluru, Karnataka 560098",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d328.89939542417466!2d77.50870152764773!3d12.915444510330301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f024bd73595%3A0x38a7ddf1d4ef624c!2s2%2C%20Balarama%20Layout%2C%20Rajarajeshwari%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560098!5e0!3m2!1sen!2sin!4v1739601355706!5m2!1sen!2sin"
    },
    {
        name: "Kodipalya Road",
        address: "Shop No 6 & 7, Opp Vasthugreens Apartments Near Gudde Anjineya Temple, 1, Kodipalya Rd, opposite to Vaastu Greens, Kengeri, Bengaluru, Karnataka 560060 ",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.042755642787!2d77.48615187461691!3d12.904972316336432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fb9fdaa0f69%3A0xc9a5398e6c62bee2!2sObw%20Salon%20%7C%20Hair%20%26%20Skin%20Clinic!5e0!3m2!1sen!2sin!4v1739601897930!5m2!1sen!2sin"
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
 Whether it's a body or haircare, we’re here to help you feel great!
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
                            <button>View Map</button>
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

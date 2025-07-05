import React from "react";
import "./Locations.scss";
import locationsIcon from '../../assets/location/locationIcon.svg';
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import img1 from '../../assets/location/Stylish Beauty Salon Interior 1.png';
import img2 from '../../assets/location/Frame 1597883095.png';
import img3 from '../../assets/location/Frame 1597883093.png';

const locations = [
    {
        name: "Banashankari",
        address: "203, 100 Feet Rd, near Polar Bear Ice Cream, Banashankari 6th Stage 3rd Block, Banashankari Stage 6, Chikkegowdanapalya, Bengaluru, Karnataka 560109",
        image: img1,
        mapUrl: "https://maps.app.goo.gl/UUwcadDUnnfNB3xh8"
    },
    {
        name: "Kanakapura Main Road",
        address: "No. 3 2nd floor, Kanakapura Main Rd, above Tanishq Jewellery, near KSIT college, Raghuvanahalli, KSIT junction, Bengaluru, Karnataka 560062",
        image: img2,
        mapUrl: "https://maps.app.goo.gl/er7oUmJp1YipQ2scA"
    },
    {
        name: "Rajarajeshwari Nagar",
        address: "No 2, Balarama Layout, Krishna Garden Main Road, near Happy Home Super Market, Rajarajeshwari Nagar, Bengaluru, Karnataka 560098",
        image: img3,
        mapUrl: "https://maps.app.goo.gl/y9JPc4vx7qQiMmEG9"
    },
    {
        name: "Kodipalya Road",
        address: "Shop No 6 & 7, Opp Vasthugreens Apartments Near Gudde Anjineya Temple, 1, Kodipalya Rd, opposite to Vaastu Greens, Kengeri, Bengaluru, Karnataka 560060 ",
        image: img3,
        mapUrl: "https://maps.app.goo.gl/JatdTaDU4vPAwkKQ6"
    }
];

const Locations = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    const handleNavigationOpen = (url) => {
        window.open(url, "_blank");
    };

    return (
        <div className="locations-container">
            <div className="locationsTitle">
                <h2>
                    Discover Our
                    <img
                        src={locationsIcon}
                        alt="icon"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, amount: 0.5 }}
                    />
                    Locations Close to You
                </h2>
                <p>
                    With multiple locations across Bangalore, we’re always within reach.
                    Visit any of our clinics for personalized care and exceptional treatments.
                </p>
            </div>
            <div className="cards">
                {locations.map((location, index) => (
                    <div className="card" key={index}>
                        <img src={location.image} alt={location.name} />
                        <div>
                            <h3>{location.name}</h3>
                            <p>{location.address}</p>
                            <button
                                className="button"
                                onClick={() => handleNavigationOpen(location.mapUrl)}
                            >
                                Get Directions <ArrowRight className="arrow-icon" size={20} strokeWidth={3} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="view-all"
                onClick={() => handleNavigation("/locations")}
            >
                View all locations <ArrowRight className="arrow-icon" size={20} strokeWidth={3} />
            </button>
        </div>
    );
};

export default Locations;

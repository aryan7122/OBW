import React from "react";
import "./Locations.scss";
import img1 from '../../assets/location/Stylish Beauty Salon Interior 1.png'
import img2 from '../../assets/location/Frame 1597883095.png'
import img3 from '../../assets/location/Frame 1597883093.png'
import locationsIcon from '../../assets/location/locationIcon.svg'
import { ArrowRight } from "lucide-react";

const Locations = () => {
    const locations = [
        {
            name: "Rajarajeshwar Nagar",
            address:
                "No. 3 2nd floor, Kanakapura Rd, above tanishq jewellery, near KSIT college, Raghuwanhalli, KSIT junction, Bengaluru, Karnataka 560062",
            image: img1,
        },
        {
            name: "",
            address:
                "",
            image: img2,
        },
        {
            name: "",
            address:
                "",
            image: img3,
        },
    ];

    return (
        <div
            className="locations-container"

        >
            <div className="locationsTitle">
                <h2>Discover Our  <img src={locationsIcon} alt="icon" /> Locations Close to You</h2>
                <p>
                    With four convenient locations across Bangalore, we’re always within reach.
                    Visit any of our clinics for personalized care and exceptional treatments
                    in a welcoming environment.
                </p>
            </div>
            <div className="cards">

                <div className="card">
                    <div className="Rajarajeshwar">
                        <h3>Rajarajeshwar Nagar</h3>
                        <p>No. 3 2nd floor, Kanakapura Rd, above tanishq jewellery, near KSIT college, Raghuwanhalli, KSIT junction, Bengaluru, Karnataka 560062</p>
                        <button className="button">
                            Get Directions <ArrowRight className="arrow-icon" size={20} strokeWidth={3} />
                        </button>
                    </div>
                    <img src={img1} />
                </div>
                <div className="card">
                    <img src={img2} />

                    <h3>Kodipalya</h3>
                    <p>Shop No 6 & 7, Opp Vasthugreens Apartments, Kodipalya Rd, near Gudde Anjaneya Temple, Bengaluru, Karnataka 560060</p>
                    <button className="button">
                        Get Directions <ArrowRight className="arrow-icon" size={20} strokeWidth={3} />
                    </button>

                </div>
                <div className="card">
                    <img src={img3} />

                    <h3>Kankapura Road</h3>
                    <p>No. 3 2nd floor, Kanakapura Rd, above tanishq jewellery, near KSIT college, Raghuwanhalli, KSIT junction, Bengaluru, Karnataka 560062</p>
                    <button className="button">
                        Get Directions <ArrowRight className="arrow-icon" size={20} strokeWidth={3} />
                    </button>
                </div>

            </div>
            <button className="view-all">View all locations  <ArrowRight className="arrow-icon" size={20} strokeWidth={3} /></button>
        </div>
    );
};

export default Locations;

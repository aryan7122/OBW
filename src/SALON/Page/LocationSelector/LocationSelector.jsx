import React, { useState } from "react";
import "./LocationSelector.scss";
import { ArrowRight, ArrowLeft } from "lucide-react";
import LocationImg1 from '../../../assets/SALON/hero/location.png';

const locations = [
    {
        id: 1,
        name: "Banashankari",
        phone: "+91 99720 11222",
        address:
            "203, 100 Feet Rd, near Polar Bear Ice Cream, Banashankari 6th Stage 3rd Block, Chikkegowdanapalya, Bengaluru, Karnataka",
        image:
            LocationImg1,
        color: "#c7bfff",
    },
    {
        id: 2,
        name: "Rajarjeswari nagar",
        phone: "+91 98234 11122",
        address:
            "Some address line here for Rajarjeswari Nagar in full format.",
        image:
            LocationImg1,
        color: "#d9ffb3",
    },
    {
        id: 3,
        name: "Kankapura Main road",
        phone: "+91 99445 22333",
        address: "Kankapura Main road full formatted address goes here.",
        image:
            LocationImg1,
        color: "#b3f6ff",
    },
    {
        id: 4,
        name: "Kodipalya Road",
        phone: "+91 99100 33445",
        address: "Kodipalya Road address nicely structured.",
        image:
            LocationImg1,
        color: "#ffc3e0",
    },
    {
        id: 5,
        name: "Coming soon",
        phone: "—",
        address: "Stay tuned. We're launching soon at your nearby area.",
        image:
            LocationImg1,
        color: "#ffd6b3",
    },
];

const LocationSelector = () => {
    const [active, setActive] = useState(locations[0]);

    return (
        <section className="location-section">
            <div className="locations-header">
                <div>
                    <h2>Find a Location Near You</h2>
                    <p>
                        We’re serving glow-ups across Bangalore. Choose a location that’s
                        closest to you and get pampered.
                    </p>
                </div>
                <button className="book-btn btn">
                    <span>
                        Book Appointment <ArrowRight className="arrow-icon" size={16} />
                    </span>
                </button>
            </div>



            <div className="location-content">
                {locations.map((loc, i) => (
                    <>
                        <div className={`location-card ${active.id === loc.id ? "active" : ""}`} key={i}
                        //  style={{ backgroundColor: active.id === loc.id ? loc.color : "#fff" }}
                        >
                            {/* {loc.id} */}
                            <div className="location-card-content">
                                <div className="location-image">

                                    <img src={active.image} alt={active.name} />
                                    <div className="location-info">
                                        <span className="phone">Contact: <strong>{active.phone}</strong></span>
                                        <p className="address">{active.address}</p>
                                        <a className="directions" href="#" target="_blank" rel="noreferrer">
                                            Get directions <ArrowRight size={14} />
                                        </a>
                                    </div>
                                </div>
                                <div className="right_tex">
                                    <h3>
                                        {loc.name}
                                    </h3>
                                    {active.id !== loc.i && (
                                        <div className="dot" style={{ backgroundColor: loc.color }} >
                                            <ArrowLeft size={16} className="active-arrow" />
                                        </div>

                                    )}
                                </div>
                            </div>
                        </div>
                        <div className={`location-tabs ${active.id === loc.id ? "active_tab" : ""}`} >
                            <div
                                key={loc.id}
                                className={`tab ${active.id === loc.id ? "active" : ""}`}
                                style={{ backgroundColor: active.id === loc.id ? loc.color : "#fff" }}
                                onClick={() => setActive(loc)}
                            >
                                <h3>{loc.name}</h3>
                                {active.id !== loc.id && (
                                    <div className="dot" style={{ backgroundColor: loc.color }} >
                                        <ArrowLeft size={16} className="active-arrow" />
                                    </div>

                                )}
                                {active.id === loc.id && (
                                    <ArrowLeft size={16} className="active-arrow" />
                                )}
                            </div>
                        </div>

                    </>
                ))}
            </div>
        </section>
    );
};

export default LocationSelector;

import React, { useState } from "react";
import "./LocationSelector.scss";
import { ArrowRight, ArrowLeft, Phone } from "lucide-react";
import LocationImg1 from '../../../assets/SALON/hero/Location/Banashankari (2).webp';
import LocationImg12 from '../../../assets/SALON/hero/Location/banakshari.webp';
import LocationImg2 from '../../../assets/SALON/hero/Location/Rr nagar.webp';
import LocationImg22 from '../../../assets/SALON/hero/Location/Rr nagar2.webp';
import LocationImg3 from '../../../assets/SALON/hero/Location/Kanakapura.webp';
import LocationImg32 from '../../../assets/SALON/hero/Location/Kanakapura2.webp';
import LocationImg4 from '../../../assets/SALON/hero/Location/Kodipalya Road.webp';
import LocationImg42 from '../../../assets/SALON/hero/Location/kodipalya2.webp';
import SalonBookAppointment from "../../Components/SalonBookAppointment/SalonBookAppointment";
import WebPImage from "../../../util/WebPImage";
import ImageWithBlur from "../../../util/ImageWithBlur";

const locations = [
    {
        id: 1,
        name: "Banashankari",
        phone: "+91 99000 29910",
        address: "203, 100 Feet Rd, near Polar Bear Ice Cream, Banashankari 6th Stage 3rd Block, Banashankari Stage 6, Chikkegowdanapalya, Bengaluru, Karnataka 560109",
        googleMapsSearchUrl: "https://www.google.com/maps/search/?q=203,+100+Feet+Rd,+near+Polar+Bear+Ice+Cream,+Banashankari+6th+Stage+3rd+Block,+Banashankari+Stage+6,+Chikkegowdanapalya,+Bengaluru,+Karnataka+560109",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27462.160178895465!2d77.50609012863052!3d12.877508413200026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f4ec1bdb403%3A0x9025e3ff7e907cbf!2sObw%20Salon%20%7C%20Hair%20%26%20Skin%20Clinic!5e0!3m2!1sen!2sin!4v1739600998644!5m2!1sen!2sin",
        image:
            LocationImg1,
        image2:
            LocationImg12,
        color: "#c7bfff",
    },
    {
        id: 2,
        name: "Rajarjeswari nagar",
        phone: "+91 9972011222",
        address: "No 2, Balarama Layout, Krishna Garden Main Road, near Happy Home Super Market, Rajarajeshwari Nagar, Bengaluru, Karnataka 560098",
        googleMapsSearchUrl: "https://www.google.com/maps/search/?q=No+2,+Balarama+Layout,+Krishna+Garden+Main+Road,+near+Happy+Home+Super+Market,+Rajarajeshwari+Nagar,+Bengaluru,+Karnataka+560098",

        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d328.89939542417466!2d77.50870152764773!3d12.915444510330301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f024bd73595%3A0x38a7ddf1d4ef624c!2s2%2C%20Balarama%20Layout%2C%20Rajarajeshwari%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560098!5e0!3m2!1sen!2sin!4v1739601355706!5m2!1sen!2sin",
        image:
            LocationImg2,
        image2:
            LocationImg22,
        color: "#d9ffb3",
    },
    {
        id: 3,
        name: "Kankapura Main road",
        phone: "+91 9686627778",
        address: "No. 3 2nd floor, Kanakapura Main Rd, above Tanishq Jewellery, near KSIT college, Raghuvanahalli, KSIT junction, Bengaluru, Karnataka 560062",
        googleMapsSearchUrl: "https://www.google.com/maps/search/?q=No.+3+2nd+floor,+Kanakapura+Main+Rd,+above+Tanishq+Jewellery,+near+KSIT+college,+Raghuvanahalli,+KSIT+junction,+Bengaluru,+Karnataka+560062",

        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1237.4005569027722!2d77.54510188463037!3d12.879024934708173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f5bea81491d%3A0xacd55621ca8d33c2!2sObw%20Salon%20%7C%20Hair%20%26%20Skin%20Clinic!5e0!3m2!1sen!2sin!4v1739601210644!5m2!1sen!2sin",
        image:
            LocationImg3,
        image2:
            LocationImg32,
        color: "#b3f6ff",
    },
    {
        id: 4,
        name: "Kodipalya Road",
        phone: "+91 9108031222",
        address: "Shop No 6 & 7, Opp Vasthugreens Apartments Near Gudde Anjineya Temple, 1, Kodipalya Rd, opposite to Vaastu Greens, Kengeri, Bengaluru, Karnataka 560060 ",
        googleMapsSearchUrl: "https://www.google.com/maps/search/?q=Shop+No+6+%26+7,+Opp+Vasthugreens+Apartments+Near+Gudde+Anjineya+Temple,+1,+Kodipalya+Rd,+opposite+to+Vaastu+Greens,+Kengeri,+Bengaluru,+Karnataka+560060",

        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.042755642787!2d77.48615187461691!3d12.904972316336432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fb9fdaa0f69%3A0xc9a5398e6c62bee2!2sObw%20Salon%20%7C%20Hair%20%26%20Skin%20Clinic!5e0!3m2!1sen!2sin!4v1739601897930!5m2!1sen!2sin",
        image:
            LocationImg4,
        image2:
            LocationImg42,
        color: "#ffc3e0",
    },
    // {
    //     id: 5,
    //     name: "Coming soon",
    //     phone: "—",
    //     address: "Stay tuned. We're launching soon at your nearby area.",
    //     image:
    //         LocationImg1,
    //     color: "#ffd6b3",
    // },
];

const LocationSelector = () => {
    const [active, setActive] = useState(locations[0]);
    const [showModal, setShowModal] = useState(false);

    const handleBookNowClick = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };
    return (
        <section className="location-section">
            {showModal && <SalonBookAppointment  onClose={closeModal} />}

            <div className="locations-header">
                <div>
                    <h2>Find a Location Near You</h2>
                    <p>
                        We’re serving glow-ups across Bangalore. Choose a location that’s
                        closest to you and get pampered.
                    </p>
                </div>
                <button className="book-btn btn" onClick={()=>handleBookNowClick()}>
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

                                    <div className="imges_l">
                                        <ImageWithBlur src={active.image} alt={active.name} />
                                        <ImageWithBlur className="img2" src={active.image2} alt={active.name} />
                                    </div>
                                    <div className="location-info">

                                        <p className="">{active.address}</p>
                                        <div className="directions_card">
                                            <a className="phone" href={`tel:${active.phone}`}>
                                                <Phone size={18} /> <strong>{active.phone}</strong>
                                            </a>
                                            {active.id !== loc.i && (

                                                <a className="directions" href={active.googleMapsSearchUrl} target="_blank" rel="noreferrer">
                                                    Get directions
                                                    <div className="dot" style={{ backgroundColor: loc.color }} >
                                                        <ArrowLeft size={16} className="active-arrow" />
                                                    </div>
                                                </a>

                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="right_tex">
                                    <h3>
                                        {loc.name}
                                    </h3>

                                </div>
                            </div>
                        </div>
                        <div className={`location-tabs ${active.id === loc.id ? "active_tab" : ""}`} >
                            <div
                                key={loc.id}
                                className={`tab ${active.id === loc.id ? "active" : ""}`}
                                style={{ backgroundColor: active.id === loc.id ? loc.color : "#fff" }}
                                onMouseMove={() => setActive(loc)}
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

import React, { useEffect, useState } from "react";
import "./Locations.scss";
import img1 from '../../assets/location/Stylish Beauty Salon Interior 1.png'
import img2 from '../../assets/location/Frame 1597883095.png'
import img3 from '../../assets/location/Frame 1597883093.png'
import locationsIcon from '../../assets/location/locationIcon.svg'
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

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
    const navigate = useNavigate();
    const HandleNavigation = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };
    const HandleNavigationopen = (url) => {
        window.open(url, "_blank"); // `_blank` se link new tab me open hoga
    };


  

    return (

        <div
            className="locations-container"

        >
            <div className="locationsTitle">
                <h2>Discover Our
                    <motion.img src={locationsIcon} alt="icon"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, amount: 0.5 }}
                        
                    /> Locations Close to You</h2>
                <motion.p
                    
                >
                    With four convenient locations across Bangalore, we’re always within reach.
                    Visit any of our clinics for personalized care and exceptional treatments
                    in a welcoming environment.
                </motion.p>
            </div>
            <div className="cards">

                <div className="card">
                    <div className="Rajarajeshwar">
                        <h3>Rajarajeshwar Nagar</h3>
                        <p>No. 3 2nd floor, Kanakapura Rd, above tanishq jewellery, near KSIT college, Raghuwanhalli, KSIT junction, Bengaluru, Karnataka 560062</p>
                        <button className="button" onClick={() => HandleNavigationopen("https://www.google.com/maps/dir//123+5th+Stage,+Rajarajeshwari+Nagar+Bengaluru,+Karnataka+560060/@12.9043937,77.514056,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae3f084e1263a3:0xb70616db18b9e04!2m2!1d77.514056!2d12.9043937?entry=ttu&g_ep=EgoyMDI1MDIxMS4wIKXMDSoASAFQAw%3D%3D")}>
                            Get Directions <ArrowRight className="arrow-icon" size={20} strokeWidth={3} />
                        </button>
                    </div>
                    <img src={img1} />
                </div>
                <div className="card">
                    <img src={img2} />

                    <h3>Kodipalya</h3>
                    <p>Shop No 6 & 7, Opp Vasthugreens Apartments, Kodipalya Rd, near Gudde Anjaneya Temple, Bengaluru, Karnataka 560060</p>
                    <button className="button" onClick={() => HandleNavigationopen("https://www.google.com/maps/dir//Kodipalya,+Bengaluru,+Karnataka+560060/@12.894597,77.493939,14z/data=!4m18!1m8!3m7!1s0x3bae3f3c04b90dd1:0x7111e9e1c3f2c737!2sKodipalya,+Bengaluru,+Karnataka+560060!3b1!8m2!3d12.8984666!4d77.4906807!16s%2Fg%2F1vmq_v35!4m8!1m0!1m5!1m1!1s0x3bae3f3c04b90dd1:0x7111e9e1c3f2c737!2m2!1d77.4906807!2d12.8984666!3e2?hl=en&entry=ttu&g_ep=EgoyMDI1MDIxMS4wIKXMDSoASAFQAw%3D%3D")}>
                        Get Directions <ArrowRight className="arrow-icon" size={20} strokeWidth={3} />
                    </button>

                </div>
                <div className="card">
                    <img src={img3} />

                    <h3>Kankapura Road</h3>
                    <p>No. 3 2nd floor, Kanakapura Rd, above tanishq jewellery, near KSIT college, Raghuwanhalli, KSIT junction, Bengaluru, Karnataka 560062</p>
                    <button className="button" onClick={() => HandleNavigationopen("https://www.google.com/maps/dir//Kanakapura+Karnataka+562117/@12.5462442,77.4198823,13z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3bae58514a06ef17:0x2b7a698976431240")}>
                        Get Directions <ArrowRight className="arrow-icon" size={20} strokeWidth={3} />
                    </button>
                </div>

            </div>
            <button className="view-all" onClick={() => HandleNavigation("/locations")}
            >View all locations  <ArrowRight className="arrow-icon" size={20} strokeWidth={3} /></button>
        </div>
    );
};

export default Locations;

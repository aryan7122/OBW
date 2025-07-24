// File: ServicesSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import './ServicesSection.scss';
import str3 from '../../../assets/SALON/hero/str.png';
import { ChevronDown, ChevronUp } from 'lucide-react';

// 
import mensHairCut from '../../../assets/SALON/hero/services/mens-hair-cut.webp';
import shave from '../../../assets/SALON/hero/services/Shave.webp';
import blowdry from '../../../assets/SALON/hero/services/blowdry.webp';
import womensHairCut from '../../../assets/SALON/hero/services/womens-hair-cut.jpg';
import ironing from '../../../assets/SALON/hero/services/ironing.jpg';
import womensBlowdry from '../../../assets/SALON/hero/services/womenblowdry.jpg';
import tonging from '../../../assets/SALON/hero/services/tonging.jpg';
// 
import Manicure from '../../../assets/SALON/hero/services/Manicure.jpg';
// 
import menColoring from '../../../assets/SALON/hero/services/menColoring.webp';
import womenColoring from '../../../assets/SALON/hero/services/womenColoring.webp';
// 
import Botoxtreatment from '../../../assets/SALON/hero/services/Botoxtreatment.webp';
import SmootheningRebounding from '../../../assets/SALON/hero/services/SmootheningRebounding.webp';
import Hairfibertreatment from '../../../assets/SALON/hero/services/Hairfibertreatment.webp';
// 
import Menborntreatment from '../../../assets/SALON/hero/services/Menborntreatment.webp';
import Menborentreatment from '../../../assets/SALON/hero/services/Menborntreatment (2).webp';
import Menessentialtreatment from '../../../assets/SALON/hero/services/Menessentialtreatment.webp';
import Womenessentialtreatment from '../../../assets/SALON/hero/services/Womenessentialtreatment.jpg';
// 
import Pedicure from '../../../assets/SALON/hero/services/Pedicure.webp';
// 
import NailExtension from '../../../assets/SALON/hero/services/NailExtension.webp';
// 
import Premiumrollon from '../../../assets/SALON/hero/services/Premium roll on.jpg';
import Brazilianstripples from '../../../assets/SALON/hero/services/Brazilian stripples.jpg';
import Ricaregular from '../../../assets/SALON/hero/services/Rica regular.jpg';
// 
import DetanBleach from '../../../assets/SALON/hero/services/DetanBleach.jpg';
// 
import Threading from '../../../assets/SALON/hero/services/Threading.jpg';
// 
import Refreshingcleanup from '../../../assets/SALON/hero/services/Refreshing clean up.webp';
import Premiumfacial from '../../../assets/SALON/hero/services/Premium facial.webp';
import Gensyldermasylhydrafacial from '../../../assets/SALON/hero/services/Gensyl & dermasyl hydra facial.webp';
import Aminusignaturetreatment from '../../../assets/SALON/hero/services/Aminu signature treatment.jpg';
// Reflexology
import Reflexology from '../../../assets/SALON/hero/services/Reflexology.webp';

// 
import ServicesSlider from './ServicesSlider';

export const tabs = [
    'Styling',
    'Coloring',
    'Hair Treatment',
    'Bonacure spa',
    'Manicure',
    'Pedicure',
    'Nail Extension',
    
    'Waxing',
    'Detan & Bleach',
    'Threading',
    'Facial’s',
    'Reflexology'
];

const services = [
    {
        title: "Men's Hair cut",
        price: '1200',
        image: mensHairCut,
        category: 'Styling'
    },
    {
        title: 'Shave',
        price: '1350',
        image: shave,
        category: 'Styling'
    },
    {
        title: 'Blowdry',
        price: '1500',
        image: blowdry,
        category: 'Styling'
    },
    {
        title: "Women's Hair cut",
        price: '1600',
        image: womensHairCut,
        category: 'Styling'
    },
    {
        title: 'Ironing without wash',
        price: '1750',
        image: ironing,
        category: 'Styling'
    },
    {
        title: "Women's Blowdry",
        price: '1900',
        image: womensBlowdry,
        category: 'Styling'
    },
    {
        title: 'Tonging without wash',
        price: '2000',
        image: tonging,
        category: 'Styling'
    },
    // 
    {
        title: 'Manicure',
        price: '1200',
        image: Manicure,
        category: 'Manicure'
    },
    // 
    {
        title: `Men's Coloring`,
        price: '1200',
        image: menColoring,
        category: 'Coloring'
    },
    {
        title: `Women's coloring`,
        price: '1200',
        image: womenColoring,
        category: 'Coloring'
    },
    // Hair Treatment
    {
        title: `Hair fiber treatment`,
        price: '1200',
        image: Hairfibertreatment,
        category: 'Hair Treatment'
    },
    {
        title: `Smoothening / Rebounding`,
        price: '1200',
        image: SmootheningRebounding,
        category: 'Hair Treatment'
    },
    {
        title: `Botox treatment`,
        price: '1200',
        image: Botoxtreatment,
        category: 'Hair Treatment'
    },
    // 
    {
        title: `Men's re-born treatment`,
        price: '1200',
        image: Menborntreatment,
        category: 'Bonacure spa'
    },
    {
        title: `Women's re-born treatment`,
        price: '1350',
        image: Menborentreatment,
        category: 'Bonacure spa'
    },
    {
        title: `Men's essential treatment`,
        price: '1500',
        image: Menessentialtreatment,
        category: 'Bonacure spa'
    },
    {
        title: `Women's essential treatment`,
        price: '1500',
        image: Womenessentialtreatment,
        category: 'Bonacure spa'
    },
    // 
    {
        title: `Pedicure`,
        price: '1200',
        image: Pedicure,
        category: 'Pedicure'
    },
    // 
    {
        title: `Nail Extension`,
        price: '1200',
        image: NailExtension,
        category: 'Nail Extension'
    },
    // Waxing
    {
        title: `Premium roll on`,
        price: '1200',
        image: Premiumrollon,
        category: 'Waxing'
    },
    {
        title: `Brazilian stripples`,
        price: '1350',
        image: Brazilianstripples,
        category: 'Waxing'
    },
    {
        title: `Rica regular`,
        price: '1350',
        image: Ricaregular,
        category: 'Waxing'
    },
    // 
    {
        title: `Detan & Bleach`,
        price: '1200',
        image: DetanBleach,
        category: 'Detan & Bleach'
    },
    // Threading
    {
        title: `Threading`,
        price: '1200',
        image: Threading,
        category: 'Threading'
    },
    // Facial’s
    {
        title: `Refreshing clean up`,
        price: '1200',
        image: Refreshingcleanup,
        category: 'Facial’s'
    },
    {
        title: `Premium facial`,
        price: '1350',
        image: Premiumfacial,
        category: 'Facial’s'
    },
    {
        title: `Gensyl & dermasyl hydra facial `,
        price: '1500',
        image: Gensyldermasylhydrafacial,
        category: 'Facial’s'
    },
    {
        title: `Aminu signature treatment `,
        price: '1500',
        image: Aminusignaturetreatment,
        category: 'Facial’s'
    },
    // Reflexology
    {
        title: `Reflexology `,
        price: '1200',
        image: Reflexology,
        category: 'Reflexology'
    },

];


const ServicesSection = () => {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [visibleTabs, setVisibleTabs] = useState([]);
    const [dropdownTabs, setDropdownTabs] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const containerRef = useRef(null);
    const calculateVisibleTabs = () => {
        const screenWidth = window.innerWidth;
        let visibleCount = 6; // default for >= 1400px

        if (screenWidth < 400) {
            visibleCount = 2;
        } else if (screenWidth < 600) {
            visibleCount = 2;
        } else if (screenWidth < 1000) {
            visibleCount = 3;
        } else if (screenWidth < 1200) {
            visibleCount = 4;
        } else if (screenWidth < 1400) {
            visibleCount = 5;
        }

        const tempVisible = tabs.slice(0, visibleCount);
        const tempDropdown = tabs.slice(visibleCount);

        setVisibleTabs(tempVisible);
        setDropdownTabs(tempDropdown);
    };



    useEffect(() => {
        calculateVisibleTabs();
        window.addEventListener('resize', calculateVisibleTabs);
        return () => window.removeEventListener('resize', calculateVisibleTabs);
    }, []);


    return (
        <section className="services-section">

            <div className="section-header">
                <h5 className="small-title">
                    SERVICES <img src={str3} alt="icon" />
                </h5>
                <h2 className="main-title">
                   Take a look at everything we offer
                </h2>
            </div>

            <div className="tabs-container" ref={containerRef}>
                {visibleTabs.map((tab, index) => (
                    <button
                        key={tab}
                        className={`tab-button ${tab === activeTab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}

                    >
                        {tab}
                    </button>
                ))}

                {dropdownTabs.length > 0 && (
                    <div className="dropdown-wrapper">
                        <button
                            className={`more-button ${(dropdownOpen || dropdownTabs.includes(activeTab)) ? 'more-active' : ''}`}
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            More
                            {dropdownOpen ?
                                <ChevronUp size={16} />
                                :
                                <ChevronDown size={16} />
                            }
                        </button>

                        {dropdownOpen && (
                            <div className="dropdown-menu">
                                {dropdownTabs.map((tab) => (
                                    <div
                                        key={tab}
                                        className={`dropdown-item ${tab === activeTab ? 'active' : ''}`}

                                        onClick={() => {
                                            setActiveTab(tab);
                                            setDropdownOpen(false);
                                        }}
                                    >
                                        {tab}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>

            <ServicesSlider services={services.filter(service => service.category === activeTab)} />

        </section>
    );
};

export default ServicesSection;

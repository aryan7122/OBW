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
import SalonBookAppointment from '../../Components/SalonBookAppointment/SalonBookAppointment';

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
        price: '300',
        image: mensHairCut,
        category: 'Styling',
        services: [
            { title: 'Senior Artist (35 Min)', price: '₹400' },
            { title: 'Top Artist (45 Min)', price: '₹500' },
            { title: 'Hair Cut (Boys Upto 8 Years) (35 Min)', price: '₹300' },
            { title: 'Hair Wash & Dry (15 Min)', price: '₹200' },
        ]
    },
    {
        title: 'Shave',
        price: '200',
        image: shave,
        category: 'Styling',
        services: [
            { title: 'Beard Trim (10 Min)', price: '₹200' },
            { title: 'Beard Shape-Up (25 Min)', price: '₹250' },
            { title: 'Regular Clean Shave (20 Min)', price: '₹250' },
            { title: 'Head Shave (30 Min)', price: '₹350' },
        ]
    },
    {
        title: "Women's Hair cut",
        price: '400',
        image: womensHairCut,
        category: 'Styling',
        services: [
            { title: 'Senior Artist (45 Min)', price: '₹1100' },
            { title: 'Top Artist (50 Min)', price: '₹1400' },
            { title: 'Hair Cut (Girls Upto 8 Years) (30 Min)', price: '₹500' },
            { title: 'Fringe (15 Min)', price: '₹400' },
            { title: 'Hair Trimming (without wash) (20 Min)', price: '₹700' },
        ]
    },
    {
        title: 'Blowdry',
        price: '500',
        image: blowdry,
        category: 'Styling',
        services: [
            { title: 'Wash & Blast Dry (20 Min)', price: '₹500 ',Onwards:'Onwards' },
            { title: 'Straight Blow Dry with Wash (30 Min)', price: '₹800 ',Onwards:'Onwards' },
            { title: 'In Curl / Out Curl with Wash (35 Min)', price: '₹900 ',Onwards:'Onwards' },
        ]
    },
    {
        title: 'Ironing without wash',
        price: '1000',
        image: ironing,
        category: 'Styling',
        services: [
            { title: 'Shoulder Length (30 Min)', price: '₹1000' },
            { title: 'Below Shoulder (35 Min)', price: '₹1300' },
            { title: 'Extra Long (60 Min)', price: '₹1600' },
        ]
    },
    {
        title: "Women's Blowdry",
        price: '500',
        image: womensBlowdry,
        category: 'Styling',
        services: [
            { title: 'Wash & Blast Dry (20 Min)', price: '₹500 ',Onwards:'Onwards' },
            { title: 'Straight Blow Dry with Wash (30 Min)', price: '₹800 ',Onwards:'Onwards' },
            { title: 'In Curl / Out Curl with Wash (35 Min)', price: '₹900 ',Onwards:'Onwards' },
        ]
    },
    {
        title: 'Tonging without wash',
        price: '1300',
        image: tonging,
        category: 'Styling',
        services: [
            { title: 'Shoulder Length (35 Min)', price: '₹1300' },
            { title: 'Below Shoulder (45 Min)', price: '₹1500' },
            { title: 'Extra Long (60 Min)', price: '₹1800' },
        ]
    },
    // 
    {
        title: 'Manicure',
        image: Manicure,
        category: 'Manicure',
        services: [
            { title: 'Nail Polish (10 Min)', price: '₹150' },
            { title: 'Cut & Filing (10 Min)', price: '₹200' },
            { title: 'Classic Manicure (25 Min)', price: '₹500' },
            { title: 'Paraffin Manicure (30 Min)', price: '₹900' },
            { title: 'Crystal Manicure (40 Min)', price: '₹1100' },
            { title: 'Pedilogix Manicure (45 Min)', price: '₹1350' },
            { title: 'Bombini Luxury Manicure (60 Min)', price: '₹1500' }
        ]
    },

    //    coloring

    {
        title: `Men's Coloring`,
        price: '600',
        image: menColoring,
        category: 'Coloring',
        services: [
            { title: 'Re - Growth With Ammonia (50 Min)', price: '₹1000 ',Onwards:'Onwards' },
            { title: 'Re - Growth Zero AMM (50 Min)', price: '₹1200 ',Onwards:'Onwards' },
            { title: 'Fashion Color (50 Min)', price: '₹1500 ',Onwards:'Onwards' },
            { title: 'Cap Highlights (60 Min)', price: '₹2500 ',Onwards:'Onwards' },
            { title: 'Beard Color (45 Min)', price: '₹600 ',Onwards:'Onwards' },
        ]
    },
    {
        title: `Women's Coloring`,
        price: '550',
        image: womenColoring,
        category: 'Coloring',
        services: [
            { title: 'Re - Growth With Ammonia (60 Min)', price: '₹1100 ',Onwards:'Onwards' },
            { title: 'Re - Growth Zero AMM (60 Min)', price: '₹1300 ',Onwards:'Onwards' },
            { title: 'Fashion Color (60 Min)', price: '₹1600 ',Onwards:'Onwards' },
            { title: 'Global Base Color (90 Min)', price: '₹3999 ',Onwards:'Onwards' },
            { title: 'Global Fashion Color (120 Min)', price: '₹4500 ',Onwards:'Onwards' },
            { title: 'Highlight Per-Streak (50 Min)', price: '₹550 ',Onwards:'Onwards' },
            { title: 'Highlights-Streaks - Full Head (180 Min)', price: '₹4999 ',Onwards:'Onwards' },
            { title: 'Highlights-Streaks - Crown Section (100 Min)', price: '₹3500 ',Onwards:'Onwards' },
            { title: 'Color Change/Correction (170 Min)', price: '₹3500 ',Onwards:'Onwards' },
            { title: 'Pre Light/ Toner (Price On Consultation)', price: 'Price On Consultation' },
            { title: 'Advance Technique (Balayage, Ombré, Money piece) (210 Min)', price: '₹5500 ',Onwards:'Onwards' },
        ]
    },
    // Hair Treatment
    {
        title: `Hair fiber treatment`,
        price: '700',
        image: Hairfibertreatment,
        category: 'Hair Treatment',
        services: [
            { title: 'Fiber Clinix Treatment (45 Min)', price: '₹1950 ',Onwards:'Onwards' },
            { title: 'Fiber Plex Treatment (50 Min)', price: '₹1950 ',Onwards:'Onwards' },
            { title: 'Add On Global Hair Colour With Fiber Plex', price: '₹700' },
            { title: 'Add On Straightening With Fiber Plex', price: '₹1000' },
            { title: 'Add On Highlights With Fiber Plex', price: '₹800' },
        ]
    },
    {
        title: `Smoothening / Rebounding`,
        price: '5500',
        image: SmootheningRebounding,
        category: 'Hair Treatment',
        services: [
            { title: 'Crown Section (90 Min)', price: '₹3500 ',Onwards:'Onwards' },
            { title: 'Upto Neck (180 Min)', price: '₹5500 ',Onwards:'Onwards' },
            { title: 'Shoulder length (210 Min)', price: '₹6800 ',Onwards:'Onwards' },
            { title: 'Below Shoulder (240 Min)', price: '₹8000 ',Onwards:'Onwards' },
            { title: 'Upto Waist (280 Min)', price: '₹11000 ',Onwards:'Onwards' },
        ]
    },
    {
        title: `Botox treatment`,
        price: '6500',
        image: Botoxtreatment,
        category: 'Hair Treatment',
        services: [
            { title: 'Upto Neck (150 Min)', price: '₹6500 ',Onwards:'Onwards' },
            { title: 'Shoulder length (180 Min)', price: '₹7500 ',Onwards:'Onwards' },
            { title: 'Below Shoulder (210 Min)', price: '₹9000 ',Onwards:'Onwards' },
            { title: 'Upto Waist (240 Min)', price: '₹12000 ',Onwards:'Onwards' },
        ]
    },

    // Bonacure spa
    {
        title: "Men's Re-Born Treatment",
        image: Menborntreatment,
        category: "Bonacure spa",
        services: [
            { title: 'Anti-Hair Fall Treatment (30 Min)', price: '₹1450 ',Onwards:'Onwards' },
            { title: 'Anti-Dandruff Treatment (30 Min)', price: '₹1300 ',Onwards:'Onwards' }
        ]
    },
    {
        title: "Men's Essential Treatment",
        image: Menessentialtreatment,
        category: "Bonacure spa",
        services: [
            { title: 'Frizz Control Hair Spa (25 Min)', price: '₹1000 ',Onwards:'Onwards' },
            { title: 'Colour Lock Hair Spa (25 Min)', price: '₹1000 ',Onwards:'Onwards' },
            { title: 'Keratin Hair Spa (25 Min)', price: '₹1200 ',Onwards:'Onwards' }
        ]
    },
    {
        title: "Women's Re-Born Treatment",
        image: Menborentreatment,
        category: "Bonacure spa",
        services: [
            { title: 'Anti-Hair Fall Treatment (50 Min)', price: '₹2000 ',Onwards:'Onwards' },
            { title: 'Anti-Dandruff Treatment (50 Min)', price: '₹1900 ',Onwards:'Onwards' }
        ]
    },
    {
        title: "Women's Essential Treatment",
        image: Womenessentialtreatment,
        category: "Bonacure spa",
        services: [
            { title: 'Deep Conditioning (15 Min)', price: '₹1000 ',Onwards:'Onwards' },
            { title: 'Frizz Control Hair Spa (45 Min)', price: '₹1700 ',Onwards:'Onwards' },
            { title: 'Colour Lock Hair Spa (45 Min)', price: '₹1600 ',Onwards:'Onwards' },
            { title: 'Keratin Hair Spa (45 Min)', price: '₹1800 ',Onwards:'Onwards' },
            { title: 'Repair Hair Spa (45 Min)', price: '₹1800 ',Onwards:'Onwards' }
        ]
    },
    // Pedicure
    {
        title: 'Pedicure',
        image: Pedicure,
        category: 'Pedicure',
        services: [
            { title: 'Nail Polish (10 Min)', price: '₹150' },
            { title: 'Cut & Filing (10 Min)', price: '₹200' },
            { title: 'Classic Pedicure (30 Min)', price: '₹650' },
            { title: 'Paraffin Pedicure (45 Min)', price: '₹1100' },
            { title: 'Crystal Pedicure (60 Min)', price: '₹1300' },
            { title: 'Pedilogix Pedicure (70 Min)', price: '₹1500' },
            { title: 'Bombini Luxury Pedicure (80 Min)', price: '₹1900' },
            { title: 'Heel Peel Treatment (60 Min)', price: '₹2000' }
        ]
    },

    // Nail Extension
    {
        title: `Nail Extension`,
        price: '50',
        image: NailExtension,
        category: 'Nail Extension',
        services: [
            { title: 'Acrylic Extension (120 Min)', price: '₹2800' },
            { title: 'Temporary Nail (60 Min)', price: '₹1500' },
            { title: 'Per Nail Extension (15 Min)', price: '₹350' },
            { title: 'Nail Infills (90 Min)', price: '₹1400' },
            { title: 'Per Nail Infill (15 Min)', price: '₹260' },
            { title: 'Gel Polish (40 Min)', price: '₹700' },
            { title: 'Gel Polish French (50 Min)', price: '₹900' },
            { title: 'Gel Polish Removal (25 Min)', price: '₹400' },
            { title: 'Nail Removal (45 Min)', price: '₹900' },
            { title: 'Jewellery Per Stone', price: '₹50' },
            { title: 'Per Nail Glitter', price: '₹100' }
        ]
    },
    // Waxing
    {
        title: `Premium roll on`,
        price: '550',
        image: Premiumrollon,
        category: 'Waxing',
        services: [
            { title: 'Half Arms (10 Min)', price: '₹550' },
            { title: 'Full Arms (20 Min)', price: '₹650' },
            { title: 'Half Legs (20 Min)', price: '₹700' },
            { title: 'Full Legs (30 Min)', price: '₹850' },
            { title: 'Stomach (15 Min)', price: '₹800' },
            { title: 'Full Back (15 Min)', price: '₹1100' },
            { title: 'Full Body (80 Min)', price: '₹3800' }
        ]
    },
    {
        title: `Brazilian stripples`,
        price: '110',
        image: Brazilianstripples,
        category: 'Waxing',
        services: [
            { title: 'Upper Lip (10 Min)', price: '₹110' },
            { title: 'Chin (10 Min)', price: '₹110' },
            { title: 'Sides (15 Min)', price: '₹300' },
            { title: 'Full Face (30 Min)', price: '₹550' },
            { title: 'Under Arms (10 Min)', price: '₹300' },
            { title: 'Bikini (30 Min)', price: '₹2200' }
        ]
    },
    {
        title: `Rica regular`,
        price: '200',
        image: Ricaregular,
        category: 'Waxing',
        services: [
            { title: 'Under Arms (10 Min)', price: '₹200' },
            { title: 'Half Arms (10 Min)', price: '₹450' },
            { title: 'Full Arms (20 Min)', price: '₹550' },
            { title: 'Half Legs (20 Min)', price: '₹500' },
            { title: 'Full Legs (30 Min)', price: '₹700' },
            { title: 'Stomach (15 Min)', price: '₹600' },
            { title: 'Full Back (20 Min)', price: '₹1000' },
            { title: 'Full Body (90 Min)', price: '₹3200' },
            { title: 'Bikini (30 Min)', price: '₹2200' }
        ]
    },
    // 
    {
        title: `Detan & Bleach`,
        price: '350',
        image: DetanBleach,
        category: 'Detan & Bleach',
        services: [
            { title: 'Face & Neck (20 Min)', price: '₹650' },
            { title: 'Blouse Line (20 Min)', price: '₹550' },
            { title: 'Under Arms (20 Min)', price: '₹350' },
            { title: 'Feet (20 Min)', price: '₹350' },
            { title: 'Full Back (30 Min)', price: '₹1200' },
            { title: 'Half Arms (25 Min)', price: '₹600' },
            { title: 'Full Arms (30 Min)', price: '₹900' },
            { title: 'Half Legs (30 Min)', price: '₹900' },
            { title: 'Full Legs (35 Min)', price: '₹1300' },
            { title: 'Full Body Detan Including Face (120 Min)', price: '₹2600' }
        ]
    },
    // Threading
    {
        title: `Threading`,
        price: '30',
        image: Threading,
        category: 'Threading',
        services: [
            { title: 'Eyebrow (15 Min)', price: '₹60' },
            { title: 'Forehead (10 Min)', price: '₹40' },
            { title: 'Upper Lip (10 Min)', price: '₹30' },
            { title: 'Lower Lip (10 Min)', price: '₹30' },
            { title: 'Chin (10 Min)', price: '₹40' },
            { title: 'Side (15 Min)', price: '₹150' },
            { title: 'Full Face (20 Min)', price: '₹400' }
        ]
    },
    // Facial’s
    {
        title: `Refreshing clean up`,
        price: '1000',
        image: Refreshingcleanup,
        category: 'Facial’s',
        services: [
            {
                title: 'Hydrating (25 Min)',
                price: '₹1000',
                description: 'Removes impurities, leaving your skin fresh and hydrated'
            },
            {
                title: 'Purifying (25 Min)',
                price: '₹1000',
                description: 'It rejuvenates and refines your skin by exfoliating dead cells, extracting dust and pollutants, and infusing minerals and moisturisers into your skin'
            },
            {
                title: 'Whitening (25 Min)',
                price: '₹1000',
                description: 'It brightens skin tone, reduces dullness and other damage due to the sun and promotes an even-toned complexion. It makes your skin feel softer and more supple'
            }
        ]
    },
    {
        title: `Premium facial`,
        price: '2500',
        image: Premiumfacial,
        category: 'Facial’s',
        services: [
            {
                title: 'Furutsu Soothing & Sensitive Correction (60 Min)',
                price: '₹2500',
                description: 'With high content of antioxidants in the form of vitamins A, C and E as well as zinc which are great for the skin, Ash pumpkin facial heals skin that is damaged from environmental conditions such as overexposure to the sun'
            },
            {
                title: 'Furutsu Tangerine Whitening (60 Min)',
                price: '₹2500',
                description: 'Smoothes and moisturises the skin, Citrus Tangerine brightneing facial ultimately enhances the skin’s microbiome. Its aim is to treat blemishes, redness and uneven texture'
            },
            {
                title: 'Furutsu Glow & Tan Removal (60 Min)',
                price: '₹2800',
                description: 'Enriched with microbiome-beneficial ingredients, Green Coconut Glow & Tan Removal facial kit gives the skin an amazing amount of antioxidant and disinfecting properties'
            },
            {
                title: 'Furutsu Glow & Shine (60 Min)',
                price: '₹3000',
                description: 'This innovative recipe is created with a blend of powerful plant-based ingredients such as Omega-3 rich Avocado, strengthening Ceramides, calming Allontoin & rice milk to help strengthen & recover blemished, irritated, inflamed, acne prone & compromised skin'
            },
            {
                title: 'Furutsu Quinoa Whitening & Brightening (80 Min)',
                price: '₹3500',
                description: 'Drawing inspiration from the most effective dermatological treatments, Kanpeki Labs research & development laboratories has curated a highly effective preventative and corrective approach for the treatment of aging or sunspots'
            }
        ]
    },
    {
        title: `Gensyl & dermasyl hydra facial `,
        price: '4100',
        image: Gensyldermasylhydrafacial,
        category: 'Facial’s',
        services: [
            {
                title: 'Chauv (60 Min)',
                price: '₹4100',
                description: 'Detoxifies | Brightens | Energizes | Smooth and well-moisturized skin is a must for everyone! Formulating this potent skincare regimen for men & women, this sequence of result-oriented products have remained popular among skin therapists'
            },
            {
                title: 'Papaya & Marshmallow (90 Min)',
                price: '₹4500',
                description: 'This restful enzyme inspired organic facial deeply soothes & nourishes the skin and helps support fragile & sensitive skin. The deeply hydrating seed facial mask is powered by 23 seeds known for repairing the skin’s functional barrier & preventing moisture loss'
            },
            {
                title: 'Jamaican Sorell (90 Min)',
                price: '₹4500',
                description: 'Formulated with plant-based, nutrient-dense sorells and natural sugar derived prebiotic, Jamaican Sorell skincare system helps to replenish the vital hydrating nourishment for a former, firmer and glowing skin'
            },
            {
                title: 'Blanch (90 Min)',
                price: '₹5300',
                description: 'Blanch is an innovative line designed for the treatment of dark spots and hyperpigmentation. The line is based on a unique combination of high-quality ingredients that work in synergy to provide a visible lightening effect'
            },
            {
                title: 'Sensi - Ace (90 Min)',
                price: '₹5300',
                description: 'This line is an effective, therapeutic product designed to calm and treat couperose & sensitive skin. It further helps in eliminating inflammatory skin disease symptoms, such as psoriasis, seborrhoea, atopic dermatitis and rosacea'
            }
        ]
    },
    {
        title: `Aminu signature treatment `,
        price: '5900',
        image: Aminusignaturetreatment,
        category: 'Facial’s',
        services: [
            {
                title: 'City Life Hydration Treatment (100 Min)',
                price: '₹5900',
                description: 'This treatment protects from several kinds of oxidative stress & photo damage, repairs broken skin barrier, reduces signs of fatigue, detoxifies, stimulates the epidermis, soothes prevents premature aging and reoxygenates the skin tissue for skin freshness and hydration'
            },
            {
                title: 'Radiance Antiox treatment (110 Min)',
                price: '₹6500',
                description: 'The Radiance Antiox treatment works at the cellular level and has a the rejuvenating effect that accelerates skin\'s natural renewal processes, to give you a brighter even tone, smooth texture & reduce the intensity of dark spots and marks. All this without any collateral damage to the skin'
            }
        ]
    },
    // Reflexology
    {
        title: `Reflexology `,
        price: '250',
        image: Reflexology,
        category: 'Reflexology',
        services: [
            {
                title: 'Add On Signature Oil Shots Hair Fall/Dandruff (5 Min)',
                price: '₹250',
                description: 'Relaxing treatment for stress relief and improved circulation. Add-On Signature Oil Shots - Nourishing scalp treatment for enhanced hair health. Hair Fall/Dandruff Treatment - Targeted solutions for stronger, flake-free hair'
            },
            {
                title: 'Foot Reflexology (30 Min)',
                price: '₹800',
                description: 'A foot treatment that uses pressure on specific points of the foot to stimulate the central nervous system and improve the body\'s functioning'
            },
            {
                title: 'Head Oil Massage (Men) (30 Min)',
                price: '₹550',
                description: 'A head massage helps soothe muscle tension across the hairline, behind the ears, and in the neck. Regularly treating yourself to this calming experience can lead to lower blood pressure, reduce stress also increases blood flow'
            },
            {
                title: 'Head Oil Massage (Women) (30 Min)',
                price: '₹650',
                description: 'A head massage helps soothe muscle tension across the hairline, behind the ears, and in the neck. Regularly treating yourself to this calming experience can lead to lower blood pressure, reduce stress also increases blood flow'
            },
            {
                title: 'Face Massage (20 Min)',
                price: '₹800',
                description: 'A face massages increase blood flow to the face which delivers oxygen and nutrient to skin cells and elasticity. This can help with regeneration and repair, reduce stress'
            },
            {
                title: 'Back Massage (30 Min)',
                price: '₹1000',
                description: 'A back massage can have many benefits, including pain relief back massage can help with both acute & chronic back pain they can help loosen tense muscles and restore joint flexibility also reduces stress'
            },
            {
                title: 'Steam Bath (25 Min)',
                price: '₹600',
                description: 'It\'s relax and detoxify with soothing steam therapy, Boost circulation and relieve muscle tension & Rejuvenate skin for a glowing, refreshed look'
            },
            {
                title: 'Balinese Therapy (60 Min)',
                price: '₹2300',
                description: 'A balinese therapy is a traditional healing techniques which helps to harmonizes the mind and body. Relieves joint pain & muscle strains, Soothes damaged tissues, Improves blood circulation, Releases stress, Enhances mood & Repairs muscle damage'
            },
            {
                title: 'Aroma Therapy (60 Min)',
                price: '₹2300',
                description: 'Aromatherapy is the practise of using the scent of essential oils for healing and wellness. Aromatherapy is often used as a complementary therapy with the goal of reducing stress and anxity, improving sleep and relieving joint pain'
            },
            {
                title: 'Swedish Therapy (60 Min)',
                price: '₹2300',
                description: 'Swedish massage is a gentle full-body massage, ideal for those who are new to massage, stressed, and sensitive to touch. Swedish massage helps to release muscle tension and is a good choice when you want to completely relax during a massage'
            },
            {
                title: 'Deep Tissue Therapy (60 Min)',
                price: '₹2500',
                description: 'Deep tissue massage removes toxins and sends blood and key nutrients to injured areas to promote faster recovery and proper healing. It can even break up scar tissue and encourage your body to restart the healing process in older injuries'
            },
            {
                title: 'Full Body Polish (120 Min)',
                price: '₹3700',
                description: 'Body polish is good for the skin. It helps to remove dead skin cells, unclog pores, and improve skin texture, leaving the skin looking brighter, smoother, and more even. Additionally, body polish can help to nourish and hydrate the skin'
            }
        ]
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
        <section className="services-section" id='Services'>

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

            <ServicesSlider tab={activeTab} services={services.filter(service => service.category === activeTab)} />

        </section>
    );
};

export default ServicesSection;

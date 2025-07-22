import React, { useEffect, useRef, useState } from 'react';
import './AllTreatments.scss';
import icon1 from '../../../assets/TrendingTreatments/skin.png';
import icon2 from '../../../assets/TrendingTreatments/hairs.png';
import icon3 from '../../../assets/TrendingTreatments/body.png';
import icon4 from '../../../assets/TrendingTreatments/bue.png';
import { ArrowRight, ChevronDown, ChevronUp, Search } from 'lucide-react';
import BookAppointment from '../../../Components/BookAppointment/BookAppointment';
import WebPImage from '../../../util/WebPImage'; // Assuming this utility exists

// Import default placeholder image
import defaultLazyLoadImage from '../../../assets/TrendingTreatments/LazyLoadImage.png';

import imgPhototherapy from '../../../assets/TrendingTreatments/Phototherapy.jpg';
import imgAcneTargeting from '../../../assets/TrendingTreatments/Acne Targeting peels.jpg';
import imgAcneregime from '../../../assets/TrendingTreatments/Anti acne facials.jpg';
import imgskinregime from '../../../assets/TrendingTreatments/Acne skin care  regime.jpg';
import imgCarbonLasers from '../../../assets/TrendingTreatments/Carbon Laser.png';
import imgOxygenjet from '../../../assets/TrendingTreatments/Oxygen jet peel.jpg';
import imgDermapen from '../../../assets/TrendingTreatments/Dermapen.jpg';

import imgMesobotox from '../../../assets/TrendingTreatments/Meso botox.jpg';
import imgAcneSkincareRegime from '../../../assets/TrendingTreatments/img (8).jpg';
import imgMicroNeedling from '../../../assets/TrendingTreatments/img (6).jpg';
import imgLipolyticInjection from '../../../assets/TrendingTreatments/Lipolytic Injections.jpg';
import imgChemicalPeel from '../../../assets/TrendingTreatments/Excellence in Aesthetics-min.jpg';
import imgDimpleplasty1 from '../../../assets/TrendingTreatments/img (12).jpg';
import imgMicroBotoxTherapy from '../../../assets/TrendingTreatments/img (14).jpg';
import imgSkinTighteningLasers from '../../../assets/TrendingTreatments/img (5).jpg';
import imgGFC from '../../../assets/TrendingTreatments/img (1).png';
import imgPRP from '../../../assets/TrendingTreatments/img13.jpg';
import imgIVFatLossTherapy from '../../../assets/TrendingTreatments/IV Fatloss therapy.png';
import imgCarbonLaser from '../../../assets/TrendingTreatments/img (13).jpg';
// import imgDermapen from '../../../assets/TrendingTreatments/img (6).jpg';
import imgThreadLifts from '../../../assets/TrendingTreatments/img (9).jpg';
import imgMinorSurgicalExcision from '../../../assets/TrendingTreatments/img (11).jpg';
import imgDermalFillers from '../../../assets/TrendingTreatments/img (12).jpg';
import imgLobuloplasty1 from '../../../assets/TrendingTreatments/img (7).jpg';
import imgDimpleplasty2 from '../../../assets/TrendingTreatments/dimpleplasty.jpg';
import imgDimpleplasty3 from '../../../assets/TrendingTreatments/dimpleplasty.jpg';


import imgSurgicalExcision from '../../../assets/TrendingTreatments/img0.jpg';
import imgLobuloplasty2 from '../../../assets/TrendingTreatments/Earlobe-Repair-Header.bak.jpg';
import imgLipolyticInjection2 from '../../../assets/TrendingTreatments/Laser liplolysis.jpg';

import imgLaserLipolysis from '../../../assets/TrendingTreatments/img (6).jpg';
import imgOzempicInjections from '../../../assets/TrendingTreatments/Ozempic injections.jpg';
import imgBotoxForSweating from '../../../assets/TrendingTreatments/Botox for sweating.webp';
import imgRFCautery from '../../../assets/TrendingTreatments/RF Cautery.jpg';
import imgDermapenMicroneedling2 from '../../../assets/TrendingTreatments/DermapenMicroneedling.jpg';
import imgTCACross from '../../../assets/TrendingTreatments/TCA Cross.png';
import imgScarCross from '../../../assets/TrendingTreatments/Scar excision.jpg';
import imgKeloidTreatments from '../../../assets/TrendingTreatments/Keloid Treatments.png';
import imgHydratingPeels from '../../../assets/TrendingTreatments/Hydrating Peels.jpg';
import imgLipPeel from '../../../assets/TrendingTreatments/Lip Peel.jpg';
import imgHydratingtreatments from '../../../assets/TrendingTreatments/img (11).jpg';
import imgSkinBooster from '../../../assets/TrendingTreatments/Skin Boosters.jpg';
import imgUnderpeels from '../../../assets/TrendingTreatments/Under Eye peels.jpg';
import imgUndereye from '../../../assets/TrendingTreatments/Under eye collagen therapy.jpg';
import imgDeepChemicalPeels from '../../../assets/TrendingTreatments/Deep chemical peels.jpg';
import imgNeckPeelBodyPigmentation from '../../../assets/TrendingTreatments/Neck peel Body pigmentation.png';
import imgKneePeelBodyPigmentation from '../../../assets/TrendingTreatments/img (5).jpg';
import imgFullArmsBodyPigmentation from '../../../assets/TrendingTreatments/img (10).jpg';
import imgFullFace from '../../../assets/TrendingTreatments/Full face laser hair reduction.png';
import imgFullBodyLaserHairReduction from '../../../assets/TrendingTreatments/Full body laser hair reduction.jpg';
import imgKneePeelLaserHairReduction from '../../../assets/TrendingTreatments/Full leg laser hair reduction.jpg';
import imgFullArmsLaserHairReduction from '../../../assets/TrendingTreatments/Full arms laser hair reduction.jpg';
import imgFullLegsLaserHairReduction from '../../../assets/TrendingTreatments/img (12).jpg';

import imgPRPTreatment from '../../../assets/TrendingTreatments/PRP for hair.jpg';
import imgScalpPhototherapy from '../../../assets/TrendingTreatments/img (7).jpg';
import imgGFCTreatment from '../../../assets/TrendingTreatments/GFC Treatment.png';
import imgTrichoScalpTherapy from '../../../assets/TrendingTreatments/Tricho scalp therapy.jpg';
import imgQR678Treatment from '../../../assets/TrendingTreatments/QR 678 Treatment.jpg';
import imgHairRegrowthIVTherapy from '../../../assets/TrendingTreatments/Hair regrowth IV Therapy.jpg';
import imgExosomeTherapy from '../../../assets/TrendingTreatments/Exosome therapy.png';
import imgCosmeticHairTransplantation from '../../../assets/TrendingTreatments/Cosmetic hair transplantation.jpg';
import imgScalpMesotherapy from '../../../assets/TrendingTreatments/img (10).jpg';
import imgScalpMicropigmentation from '../../../assets/TrendingTreatments/img (5).jpg';


const treatmentData = [
    {
        category: 'Skin care',
        title: 'Phototherapy',
        des: '',
        Concerns: [],
        SkinType: [],
        imgUrl: imgPhototherapy,
    },
    {
        category: 'Skin care',
        title: 'Acne Targeting peels',
        des: '',
        Concerns: [],
        SkinType: [],
        imgUrl: imgAcneTargeting,
    },
    {
        category: 'Skin care',
        title: 'Acne skin care  regime',
        des: '',
        Concerns: [],
        SkinType: [],
        imgUrl: imgskinregime,
    },
    {
        category: 'Skin care',
        title: 'Anti acne facials',
        des: '',
        Concerns: [],
        SkinType: [],
        imgUrl: imgAcneregime,
    },
    {
        category: 'Skin care',
        title: 'Carbon Laser',
        des: '',
        Concerns: [],
        SkinType: [],
        imgUrl: imgCarbonLasers,
    },
    {
        category: 'Skin care',
        title: 'Oxygen jet peel',
        des: '',
        Concerns: [],
        SkinType: [],
        imgUrl: imgOxygenjet,
    },
    {
        category: 'Skin care', // Changed to Skin care as per image
        title: 'Dermapen', // Matched image text
        des: '',
        Concerns: ['Fine Lines & Wrinkles', 'Dark spots', 'Saggy skin', 'Enlarged pores'],
        SkinType: [],
        imgUrl: imgDermapen,
    },
    {
        category: 'Skin care', // Changed to Skin care as per image
        title: 'Meso botox',
        des: '',
        Concerns: [],
        SkinType: [],
        imgUrl: imgMesobotox,
    },
    {
        category: 'Skin care', // Changed to Skin care as per image
        title: 'TCA Cross', // Matched image text
        des: '',
        Concerns: ['Dark spots', 'Melasma'],
        SkinType: ['Oily Skin', 'Dry Skin', 'Combination Skin'],
        imgUrl: imgTCACross,
    },
    {
        category: 'Skin care', // Changed to Skin care as per image
        title: 'Scar excision', // Matched image text
        des: '',
        Concerns: ['Dark spots', 'Melasma'],
        SkinType: ['Oily Skin', 'Dry Skin', 'Combination Skin'],
        imgUrl: imgScarCross,
    },
    {
        category: 'Skin care', // Changed to Skin care as per image
        title: 'Keloid Treatments', // Matched image text
        des: '',
        Concerns: ['Dark spots', 'Melasma'],
        SkinType: ['Oily Skin', 'Dry Skin', 'Combination Skin'],
        imgUrl: imgKeloidTreatments,
    },
    {
        category: 'Skin care', // Changed to Skin care as per image
        title: 'Hydrating Peels', // Matched image text
        des: '',
        Concerns: ['Dark spots', 'Melasma'],
        SkinType: ['Oily Skin', 'Dry Skin', 'Combination Skin'],
        imgUrl: imgHydratingPeels,
    },
    {
        category: 'Skin care', // Changed to Skin care as per image
        title: 'Lip Peel', // Matched image text
        des: '',
        Concerns: ['Dark spots', 'Melasma'],
        SkinType: ['Oily Skin', 'Dry Skin', 'Combination Skin'],
        imgUrl: imgLipPeel,
    },
    {
        category: 'Skin care', // Changed to Skin care as per image
        title: 'Skin Booster', // Matched image text
        des: '',
        Concerns: ['Dark spots', 'Melasma'],
        SkinType: ['Oily Skin', 'Dry Skin', 'Combination Skin'],
        imgUrl: imgSkinBooster,
    },
    {
        category: 'Skin care', // Changed to Skin care as per image
        title: 'Under Eye peels', // Matched image text
        des: '',
        Concerns: ['Dark spots', 'Melasma'],
        SkinType: ['Oily Skin', 'Dry Skin', 'Combination Skin'],
        imgUrl: imgUnderpeels,
    },
    {
        category: 'Skin care', // Changed to Skin care as per image
        title: 'Under eye collagen therapy', // Matched image text
        des: '',
        Concerns: ['Dark spots', 'Melasma'],
        SkinType: ['Oily Skin', 'Dry Skin', 'Combination Skin'],
        imgUrl: imgUndereye,
    },
    {
        category: 'Skin & Face care',
        title: 'Acne Skin Care Regime',
        des: '',
        Concerns: ['Active Acne'],
        SkinType: ['Sensitive Skin'],
        imgUrl: imgAcneSkincareRegime,
    },
    {
        category: 'Skin & Face care',
        title: 'Micro-Needling',
        des: 'A Powerful Treatment For Signs Of Aging, Fine Lines, Pigmentation, And Scars. It Boosts Collagen Production For Youthful, Radiant Skin.',
        Concerns: ['Fine Lines & Wrinkles', 'Saggy skin', 'Enlarged pores'],
        SkinType: [],
        imgUrl: imgMicroNeedling,
    },

    {
        category: 'Skin & Face care',
        title: 'Chemical Peel',
        des: 'A Chemical Peel Treats Aging Signs, Improves Stretch Marks And Acne Scars, And Boosts Collagen For Smoother Skin.',
        Concerns: ['Dark spots', 'Melasma'],
        SkinType: ['Oily Skin', 'Dry Skin'],
        imgUrl: imgChemicalPeel,
    },

    {
        category: 'Skin & Face care',
        title: 'Micro-Botox Therapy',
        des: 'A Diluted Botox Injection Smoothing Fine Lines And Enlarged Pores For An Airbrushed Look Without Freezing Your Expressions.',
        Concerns: ['Fine Lines & Wrinkles', 'Enlarged pores'],
        SkinType: [],
        imgUrl: imgMicroBotoxTherapy,
    },
    {
        category: 'Skin & Face care',
        title: 'Skin Tightening Lasers',
        des: 'Non-Invasive Laser Technology That Firms Collagen, Treats And Lifts Sagging Skin For A More Youthful Appearance.',
        Concerns: ['Saggy skin'],
        SkinType: [],
        imgUrl: imgSkinTighteningLasers,
    },
    // body
    {
        category: 'Body care',
        title: 'Lipolytic Injections', // Renamed to match the image text precisely
        des: '',
        Concerns: ['Dryness'], // Assuming this is for fat reduction/body contouring concern
        SkinType: [],
        imgUrl: imgLipolyticInjection, // Reusing the specific img for Lipolytic Injection
    },

    {
        category: 'Body care',
        title: 'Laser liplolysis',
        des: 'An Effective Lipolytic Injection That Reduces Fine Lines, Pigmentation, And Scars While Boosting Collagen For Smoother Skin.',
        Concerns: ['Dryness'],
        SkinType: [],
        imgUrl: imgLipolyticInjection2,
    },
    {
        category: 'Body care',
        title: 'IV Fat Loss Therapy',
        des: 'A Drip Infused With Nutrients That Boost Metabolism And Aid In Fat Burning.',
        Concerns: [],
        SkinType: [],
        imgUrl: imgIVFatLossTherapy,
    },
    {
        category: 'Body care',
        title: 'Ozempic Injections',
        des: '',
        Concerns: [],
        SkinType: [],
        imgUrl: imgOzempicInjections,
    },
    {
        category: 'Body care',
        title: 'Botox for Sweating',
        des: '',
        Concerns: [],
        SkinType: [],
        imgUrl: imgBotoxForSweating,
    },
    {
        category: 'Body care',
        title: 'RF Cautery',
        des: 'A Rejuvenation Treatment Using Concentrated Growth Factors From Your Blood To Enhance Cell Repair.',
        Concerns: [],
        SkinType: [],
        imgUrl: imgRFCautery,
    },
    {
        category: 'Body care',
        title: 'Dermapen/Microneedling',
        des: 'A Rejuvenation Treatment Using Concentrated Growth Factors From Your Blood To Enhance Cell Repair.',
        Concerns: [],
        SkinType: [],
        imgUrl: imgDermapenMicroneedling2,
    },
    {
        category: 'Body care',
        title: 'Deep chemical peels',
        des: 'A Rejuvenation Treatment Using Concentrated Growth Factors From Your Blood To Enhance Cell Repair.',
        Concerns: [],
        SkinType: [],
        imgUrl: imgDeepChemicalPeels,
    },






    {
        category: 'Body care',
        title: 'Neck peel Body pigmentation',
        des: '',
        Concerns: ['Dark spots', 'Melasma'], // Assuming for pigmentation concerns
        SkinType: [],
        imgUrl: imgNeckPeelBodyPigmentation,
    },
    {
        category: 'Body care',
        title: 'Knee peel Body pigmentation',
        des: '',
        Concerns: ['Dark spots', 'Melasma'],
        SkinType: [],
        imgUrl: imgKneePeelBodyPigmentation,
    },
    {
        category: 'Body care',
        title: 'Full arms Body pigmentation',
        des: '',
        Concerns: ['Dark spots', 'Melasma'],
        SkinType: [],
        imgUrl: imgFullArmsBodyPigmentation,
    },
    {
        category: 'Body care',
        title: 'Full face laser hair reduction',
        des: '',
        Concerns: [],
        SkinType: [],
        imgUrl: imgFullFace,
    },
    {
        category: 'Body care',
        title: 'Full body laser hair reduction',
        des: '',
        Concerns: [],
        SkinType: [],
        imgUrl: imgFullBodyLaserHairReduction,
    },
    {
        category: 'Body care',
        title: 'Knee leg laser hair reduction',
        des: '',
        Concerns: [],
        SkinType: [],
        imgUrl: imgKneePeelLaserHairReduction,
    },
    {
        category: 'Body care',
        title: 'Full arms laser hair reduction',
        des: '',
        Concerns: [],
        SkinType: [],
        imgUrl: imgFullArmsLaserHairReduction,
    },
    {
        category: 'Body care',
        title: 'Full legs laser hair reduction',
        des: '',
        Concerns: [],
        SkinType: [],
        imgUrl: imgFullLegsLaserHairReduction,
    },

    // body

    {
        category: 'Skin & Face care',
        title: 'Carbon Laser',
        des: 'A Gentle Laser Facial With Activated Carbon That Cleanses, Exfoliates Skin, And Leaves Your Complexion Glowing.',
        Concerns: ['Dark spots', 'Enlarged pores'],
        SkinType: [],
        imgUrl: imgCarbonLaser,
    },
    {
        category: 'Skin & Face care',
        title: 'Dermapen',
        des: 'A Microneedling Treatment That Boosts Collagen, Treats Fine Lines, And Minimizes Scars And Fine Lines.',
        Concerns: ['Fine Lines & Wrinkles', 'Dark spots', 'Saggy skin'],
        SkinType: [],
        imgUrl: imgDermapen,
    },
    {
        category: 'Skin & Face care',
        title: 'Thread Lifts',
        des: 'A Non-Surgical Facelift Using Dissolvable Threads To Lift Loose Skin And Boost Collagen For A Natural Look.',
        Concerns: ['Saggy skin'],
        SkinType: [],
        imgUrl: imgThreadLifts,
    },

    {
        category: 'Skin & Face care',
        title: 'Dermal Fillers',
        des: 'Injectable Gels Restore Volume, Smooth Wrinkles, And Enhance Features For A Youthful Appearance.',
        Concerns: ['Fine Lines & Wrinkles'],
        SkinType: [],
        imgUrl: imgDermalFillers,
    },
    {
        category: 'Beautifying/cosmetic surgery',
        title: 'Surgical excision',
        des: '',
        Concerns: [],
        SkinType: [],
        imgUrl: imgSurgicalExcision,
    },
    {
        category: 'Beautifying/cosmetic surgery',
        title: 'Lobuloplasty',
        des: 'A Quick Surgery To Fix Torn Earlobes, Restoring Their Shape For Safe Earring Wear.',
        Concerns: [],
        SkinType: [],
        imgUrl: imgLobuloplasty1,
    },
    {
        category: 'Beautifying/cosmetic surgery',
        title: 'Dimpleplasty',
        des: 'A Cosmetic Procedure That Creates Natural Dimples By Making A Small Incision In The Mouth.',
        Concerns: [],
        SkinType: [],
        imgUrl: imgDimpleplasty2,
    },
    // Add treatments from 'Screenshot 2025-07-08 103731.png'




    // Add treatments from 'Screenshot 2025-07-08 103708.jpg'
    {
        category: 'Scalp & Hair care',
        title: 'PRP Treatment',
        des: '',
        Concerns: [],
        SkinType: [],
        imgUrl: imgPRPTreatment,
    },
    {
        category: 'Scalp & Hair care',
        title: 'Scalp phototherapy',
        des: '',
        Concerns: [],
        SkinType: [],
        imgUrl: imgScalpPhototherapy,
    },
    {
        category: 'Scalp & Hair care',
        title: 'GFC Treatment',
        des: '',
        Concerns: [],
        SkinType: [],
        imgUrl: imgGFCTreatment,
    },
    {
        category: 'Scalp & Hair care',
        title: 'Tricho scalp therapy',
        des: '',
        Concerns: [],
        SkinType: [],
        imgUrl: imgTrichoScalpTherapy,
    },
    {
        category: 'Scalp & Hair care',
        title: 'QR 678 Treatment',
        des: '',
        Concerns: [],
        SkinType: [],
        imgUrl: imgQR678Treatment,
    },
    {
        category: 'Scalp & Hair care',
        title: 'Hair regrowth IV Therapy',
        des: '',
        Concerns: ['IV Therapy'],
        SkinType: [],
        imgUrl: imgHairRegrowthIVTherapy,
    },
    {
        category: 'Scalp & Hair care',
        title: 'Exosome therapy',
        des: '',
        Concerns: [],
        SkinType: [],
        imgUrl: imgExosomeTherapy,
    },
    {
        category: 'Scalp & Hair care',
        title: 'Cosmetic hair transplantation',
        des: '',
        Concerns: [],
        SkinType: [],
        imgUrl: imgCosmeticHairTransplantation,
    },
    {
        category: 'Scalp & Hair care',
        title: 'Scalp Mesotherapy',
        des: '',
        Concerns: [],
        SkinType: [],
        imgUrl: imgScalpMesotherapy,
    },
    {
        category: 'Scalp & Hair care',
        title: 'Scalp Micropigmentation',
        des: '',
        Concerns: [],
        SkinType: [],
        imgUrl: imgScalpMicropigmentation,
    },
].map(treatment => ({ // Map over the array to ensure default image if missing
    ...treatment,
    imgUrl: treatment.imgUrl || defaultLazyLoadImage // Use default if imgUrl is blank/null/undefined
}));


const categories = [
    { name: 'All Treatments', icon: null },
    { name: 'Skin care', icon: icon1 },
    { name: 'Scalp & Hair care', icon: icon2 },
    { name: 'Body care', icon: icon3 },
    { name: 'Beautifying/cosmetic surgery', icon: icon4 },
];

const allConcerns = [
    'Active Acne', 'Fine Lines & Wrinkles', 'Dryness', 'Dark circles',
    'Dark spots', 'Saggy skin', 'Melasma', 'Enlarged pores',
    'Lip Pigmentation', 'IV Therapy', 'Hyperpigmentation'
];

const allSkinTypes = [
    'Sensitive Skin', 'Oily Skin', 'Dry Skin', 'Combination Skin'
];

const AllTreatments = () => {
    const [selectedCategory, setSelectedCategory] = useState('All Treatments');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedConcerns, setSelectedConcerns] = useState([]);
    const [selectedSkinTypes, setSelectedSkinTypes] = useState([]);
    const [showConcernsDropdown, setShowConcernsDropdown] = useState(false);
    const [showSkinTypeDropdown, setShowSkinTypeDropdown] = useState(false);

    const concernsRef = useRef(null);
    const skinTypeRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (concernsRef.current && !concernsRef.current.contains(event.target)) {
                setShowConcernsDropdown(false);
            }
            if (skinTypeRef.current && !skinTypeRef.current.contains(event.target)) {
                setShowSkinTypeDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleConcernChange = (concern) => {
        setSelectedConcerns(prev =>
            prev.includes(concern)
                ? prev.filter(c => c !== concern)
                : [...prev, concern]
        );
    };

    const handleSkinTypeChange = (skinType) => {
        setSelectedSkinTypes(prev =>
            prev.includes(skinType)
                ? prev.filter(st => st !== skinType)
                : [skinType] // Radio button behavior: only one can be selected
        );
    };

    const filteredData = treatmentData.filter(item => {
        const matchesCategory = selectedCategory === 'All Treatments' || item.category.toLowerCase().includes(selectedCategory.toLowerCase());
        const matchesSearchTerm = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (item.des && item.des.toLowerCase().includes(searchTerm.toLowerCase()));

        const matchesConcerns = selectedConcerns.length === 0 ||
            selectedConcerns.every(concern => item.Concerns.includes(concern));

        const matchesSkinTypes = selectedSkinTypes.length === 0 ||
            selectedSkinTypes.every(skinType => item.SkinType.includes(skinType));

        return matchesCategory && matchesSearchTerm && matchesConcerns && matchesSkinTypes;
    });

    const [showModal, setShowModal] = useState(false);
    const handleBookNowClick = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };

    const [visibleCount, setVisibleCount] = useState(8);
    const [itemsPerLoad, setItemsPerLoad] = useState(8);
    const [initialCount, setInitialCount] = useState(8);
    const buttonRef = useRef(null);

    useEffect(() => {
        const updateItemsPerLoad = () => {
            if (window.innerWidth < 568) {
                setVisibleCount(4);
                setItemsPerLoad(4);
                setInitialCount(4);
            } else {
                setVisibleCount(8);
                setItemsPerLoad(8);
                setInitialCount(8);
            }
        };

        updateItemsPerLoad();
        window.addEventListener("resize", updateItemsPerLoad);
        return () => window.removeEventListener("resize", updateItemsPerLoad);
    }, []);

    const handleLoadMore = () => {
        setVisibleCount((prevCount) => prevCount + itemsPerLoad);
    };
    const handleLoadLess = () => {
        setVisibleCount(initialCount);
        setTimeout(() => {
            buttonRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
    };

    return (
        <div className="treatments-page">
            <header className="treatment-header">
                <h1>All Treatments</h1>
                <p>
                    Get personalized treatments tailored to your unique needs.
                </p>
            </header>

            <div className="sectionCard">


                <div className="navtab">
                    <nav className="treatment-filters">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={selectedCategory === category.name ? 'active' : ''}
                                onClick={() => setSelectedCategory(category.name)}
                            >
                                {category.icon && <img src={category.icon} alt={category.name} className="category-icon" />}
                                <span style={{ fontSize: "18px" }}> {category.name}</span>
                            </button>
                        ))}
                    </nav>
                </div>

                <div className="filters-container">
                    <div className="search-bar">
                        <Search className="search-icon" size={20} />
                        <input
                            type="text"
                            placeholder="Search treatment name, type"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="filter-dropdown-wrapper">
                        <div className="filter-dropdown" ref={concernsRef}>
                            <button className="dropdown-button" onClick={() => setShowConcernsDropdown(!showConcernsDropdown)}>
                                Concerns {selectedConcerns.length > 0 && `(${selectedConcerns.length})`}
                                <span className="arrow">{showConcernsDropdown ?
                                    <ChevronUp strokeWidth={1.25} />
                                    :
                                    <ChevronDown strokeWidth={1.25} />
                                }</span>
                            </button>
                            {showConcernsDropdown && (
                                <div className="dropdown-content">
                                    {allConcerns.map((concern, index) => (
                                        <label key={index} className="dropdown-item">
                                            <input
                                                type="checkbox"
                                                checked={selectedConcerns.includes(concern)}
                                                onChange={() => handleConcernChange(concern)}
                                                className='checkbox-input'
                                            />
                                            {concern}
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="filter-dropdown" ref={skinTypeRef}>
                            <button className="dropdown-button" onClick={() => setShowSkinTypeDropdown(!showSkinTypeDropdown)}>
                                Skin type
                                {/* {selectedSkinTypes.length > 0 && `(${selectedSkinTypes[0]})`} */}
                                {/* Display selected skin type */}
                                <span className="arrow">{showSkinTypeDropdown ?
                                    <ChevronUp strokeWidth={1.25} />
                                    :
                                    <ChevronDown strokeWidth={1.25} />
                                }</span>
                            </button>
                            {showSkinTypeDropdown && (
                                <div className="dropdown-content radio-group">
                                    {allSkinTypes.map((skinType, index) => (
                                        <label key={index} className="dropdown-item radio-item">
                                            <input
                                            className='radio-input'
                                                type="radio"
                                                name="skinType"
                                                value={skinType}
                                                checked={selectedSkinTypes.includes(skinType)}
                                                onChange={() => handleSkinTypeChange(skinType)}
                                            />
                                            {skinType}
                                        </label>
                                    ))}
                                    {selectedSkinTypes.length > 0 && (
                                        <button className="clear-filter-btn" onClick={() => setSelectedSkinTypes([])}>Clear Selection</button>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="treatment-cards">
                    {filteredData.length > 0 ? (
                        filteredData.slice(0, visibleCount).map((item, index) => (
                            <div className="treatment-card" key={index}>
                                <div className="img">
                                    <WebPImage
                                        src={item.imgUrl}
                                        once={true}
                                        alt={item.title}
                                    />
                                </div>
                                <div className="about_action">
                                    <h3>{item.title}</h3>
                                    <p>{item.des}</p>
                                    <button onClick={handleBookNowClick} className="book-now btn">
                                        <span>
                                            Book Now
                                        </span>
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="no-results">No treatments found matching your criteria.</p>
                    )}
                </div>
                {filteredData.length > initialCount && ( // Only show Load More if there are actually more items
                    <button ref={buttonRef} className="LoadMoreTreatments" onClick={visibleCount < filteredData.length ? handleLoadMore : handleLoadLess}>
                        {visibleCount < filteredData.length ? "Load More Treatments" : "Load Less Treatments"}
                        <ArrowRight className="arrow-icon" size={20} strokeWidth={2} />
                    </button>
                )}
            </div>
            {showModal && <BookAppointment onClose={closeModal} />}
        </div>
    );
};

export default AllTreatments;
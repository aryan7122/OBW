import React, { useState } from "react";
import "./ClinicalConcerns.scss";
// icon
import IconAdd from '../../assets/Clinical Concerns/icon/add.svg';
import SkinIcon from '../../assets/Clinical Concerns/icon/skin-care.svg';
import ScalpIcon from '../../assets/Clinical Concerns/icon/like_5498753 1.svg';
import BodyIcon from '../../assets/Clinical Concerns/icon/slim_6381900.svg';
import BeautifyingIcon from '../../assets/Clinical Concerns/icon/pedicure_3461923.svg';
// img
import SkinImg1 from '../../assets/Clinical Concerns/Enlarged Pores & Uneven Texture-min.jpg';
import UnwantedImg2 from '../../assets/Clinical Concerns/Unwanted Hairs-min.jpg';
import EnlargedImg3 from '../../assets/Clinical Concerns/Close-up of Human Face.png';
import PigmentationImg4 from '../../assets/Clinical Concerns/Close-up Portrait with Emphasis on Skin.png';
import DoubleImg5 from '../../assets/Clinical Concerns/Double Chin (Face)-min.jpg';
import DrynessImg6 from '../../assets/Clinical Concerns/Close-up Portrait with Skincare Focus.png';
import AcneImg7 from '../../assets/Clinical Concerns/closeup-young-woman-with-towel-head-pimples-face.png';
import none from '../../assets/Clinical Concerns/none1.png';
import HairImg1 from '../../assets/Clinical Concerns/woman-getting-hair-loss-treatment-clinic.png';
import AlopeciaImg2 from '../../assets/Clinical Concerns/Serene and Thoughtful.png';
import ConditionsImg3 from '../../assets/Clinical Concerns/Elegant and Intricate Hairstyle with Jewel-Studded Headband.png';
import StubbornImg1 from '../../assets/Clinical Concerns/Confident Woman in Teal Tracksuit against Yellow Backdrop.png';
import SweatingImg2 from '../../assets/Clinical Concerns/Thoughtful Young Man with Geometric Backdrop (1).png';
import StretchImg3 from '../../assets/Clinical Concerns/close-up-woman-with-stretch-marks.png';
import bImg1 from '../../assets/Clinical Concerns/dermatologist-latex-gloves-holding-dermatoscope-while-examining-attractive- (1).png';
import bImg2 from '../../assets/Clinical Concerns/dermatologist-latex-gloves-holding-dermatoscope-while-examining-attractive- (2).png';
import bImg3 from '../../assets/Clinical Concerns/dermatologist-latex-gloves-holding-dermatoscope-while-examining-attractive- (3).png';
import bImg4 from '../../assets/Clinical Concerns/dermatologist-latex-gloves-holding-dermatoscope-while-examining-attractive- (4).png';
import bImg5 from '../../assets/Clinical Concerns/dermatologist-latex-gloves-holding-dermatoscope-while-examining-attractive- (5).png';
import bImg6 from '../../assets/Clinical Concerns/dermatologist-latex-gloves-holding-dermatoscope-while-examining-attractive- (6).png';
import { motion } from 'framer-motion';

const iconsMap = {
    "Skin/Face Care": <img src={SkinIcon} alt="Skin Care" />,
    "Scalp/Hair Care": <img src={ScalpIcon} alt="Scalp Care" />,
    "Body Care": <img src={BodyIcon} alt="Body Care" />,
    "Beautifying/Cosmetic Surgery": <img src={BeautifyingIcon} alt="Beautifying Care" />
};




const clinicalData = {
    "Skin/Face Care": [
        {
            title: "Anti-Aging",
            description: {
                "For fine lines & wrinkles": [
                    "Botulinum toxin injection",
                    "Dermal fillers",
                    "Dermapen/micro-needling treatments"
                ],
                "For Saggy Skin": ["Thread lifts", "HIFU (High-Intensity Focused Ultrasound)", "Skin tightening lasers"]
            },
            imageUrl: SkinImg1
        },
        {
            title: "Unwanted Hairs",
            description: {
                "Concerns": ["Unwanted facial and body hair"],
                "Treatments": ["Laser Hair Reduction (LHR)"]
            },
            imageUrl: UnwantedImg2
        },
        {
            title: "Enlarged Pores & Uneven Texture",
            description: {
                "Concerns": ["Open pores", "Rough skin texture"],
                "Treatments": [
                    "Carbon peel laser",
                    "Hydra-pen treatments",
                    "Retinol-based treatments",
                    "Dermaplaning",
                    "Medi-facials",
                    "Skin peels"
                ]
            },
            imageUrl: EnlargedImg3
        },
        {
            title: "Pigmentation & Uneven Skin Tone",
            description: {
                "Concerns": ["Dark spots", "Sun damage", "Melasma", "Post-inflammatory hyperpigmentation"],
                "Treatments": [
                    "Laser resurfacing",
                    "Chemical peels",
                    "Vitamin C facials",
                    "Skin peels",
                    "Topical lightening agents",
                    "Laser toning",
                    // "Micro-needling",
                    // "Medical-grade skincare"
                ]
            },
            imageUrl: PigmentationImg4
        },
        {
            title: "Double Chin (Face)",
            description: {
                "Concerns": ["Excess fat in the chin area"],
                "Treatments": ["Fat-dissolving injections", "Lipolytic injections"]
            },
            imageUrl: DoubleImg5
        },
        {
            title: "Dryness & Dehydration",
            description: {
                "Concerns": ["Dry, dehydrated skin"],
                "Treatments": ["Hydra-medi facials", "Hydrating peels", "Mesotherapy"]
            },
            imageUrl: DrynessImg6
        },
        {
            title: "",
            description: '',
            imageUrl: ''
        },
        {
            title: "Acne & Acne Scars",
            description: {
                "Concerns": ["Active acne", "Acne scars"],
                "Treatments": [
                    "Phototherapy",
                    "Acne-targeting peels",
                    "Acne skincare regimens",
                    "Anti-acne facials",
                    "Dermapen/micro-needling with PRP",
                    "Fractional CO2 laser",
                    "Subcision"
                ]
            },
            imageUrl: AcneImg7
        },
    ],
    "Scalp/Hair Care": [
        {
            title: "Hair Thinning",
            description: {
                "Concerns": ["Hair thinning", "Hair fall"],
                "Treatments": [
                    "LLLT phototherapy",
                    "Micro-needling pen",
                    "Platelet Rich Plasma (PRP)",
                    "GFC",
                    "Specialized topical treatments"
                ]
            },
            imageUrl: HairImg1
        },
        {
            title: "Alopecia / Baldness",
            description: {
                "Concerns": ["Severe hair loss", "Baldness"],
                "Treatments": [
                    "Scalp mesotherapy",
                    "Corticosteroid injections",
                    "Anti-DHT therapy",
                    "QR678 treatment",
                    "Exosome therapy",
                    "Hair transplantation surgery"
                ]
            },
            imageUrl: AlopeciaImg2
        },
        {
            title: "Other Scalp Conditions",
            description: {
                "Concerns": ["Dandruff", "Telogen effluvium", "Seborrheic dermatitis"],
                "Treatments": ["Targeted medical scalp treatments"]
            },
            imageUrl: ConditionsImg3
        },
    ],
    "Body Care": [
        {
            title: "Stubborn Body Fat",
            description: {
                "Concerns": ["Excess fat in the belly, thighs, and arms"],
                "Treatments": [
                    "Lipolytic injections",
                    "Laser Lipolysis",
                    "CoolSculpting"
                ]
            },
            imageUrl: StubbornImg1
        },
        {
            title: "Excessive Sweating",
            description: {
                "Concerns": ["Hyperhidrosis (Excessive sweating)"],
                "Treatments": ["Botox for sweating"]
            },
            imageUrl: SweatingImg2
        },
        {
            title: "Sun Tan & Body Texture",
            description: {
                "Concerns": ["Sun-tan", "Uneven skin texture"],
                "Treatments": ["Chemical peels", "Skin-brightening IV injections"]
            },
            imageUrl: SweatingImg2
        },
        {
            title: "Stretch Marks",
            description: {
                "Concerns": ["Stretch marks"],
                "Treatments": ["Skin-resurfacing treatments", "Targeted peels"]
            },
            imageUrl: StretchImg3
        },
    ],
    "Beautifying/Cosmetic Surgery": [
        {
            title: "Skin Tags, Moles, Milia Removal",
            description: {
                "Concerns": ["Unwanted skin tags, moles, milia"],
                "Treatments": ["Laser removal", "Minor surgical excision"]
            },
            imageUrl: bImg1
        },
        {
            title: "Face & Scalp Cyst Removal",
            description: {
                "Concerns": ["Cysts on the face or scalp"],
                "Treatments": ["Surgical cyst removal"]
            },
            imageUrl: bImg2
        },
        {
            title: "Lobuloplasty",
            description: {
                "Concerns": ["Torn or stretched earlobes"],
                "Treatments": ["Surgical correction of earlobes"]
            },
            imageUrl: bImg3
        },
        {
            title: "Scar Reduction",
            description: {
                "Concerns": ["Scars from injury or surgery"],
                "Treatments": ["Laser resurfacing", "Subcision", "Surgical revisions"]
            },
            imageUrl: bImg4
        },
        {
            title: "Dimpleplasty (Face)",
            description: {
                "Concerns": ["Desire for dimples"],
                "Treatments": ["Cosmetic surgery to create dimples"]
            },
            imageUrl: bImg5
        },
        {
            title: "Bichectomy (Face)",
            description: {
                "Concerns": ["Excess cheek fat"],
                "Treatments": ["Permanent removal of excessive fat from the cheek region"]
            },
            imageUrl: bImg6
        },
    ],
};

console.log(clinicalData["Skin/Face Care"])
function ClinicalConcerns() {
    const [selectedTab, setSelectedTab] = useState("Skin/Face Care");

    return (
        <div className="clinical-concerns">
            <h1>Clinical <img src={IconAdd} alt="add-icon" />  Concerns</h1>
            <div id="tabs">
                <div className="tabs">
                    {Object.keys(clinicalData).map((tab) => (
                        <motion.button
                            whileHover={{ scale: 1.0 }}
                            whileTap={{ scale: 0.95 }}
                            whileDrag={{ scale: 0.9, rotate: 10 }}
                            // drag
                            key={tab}
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, amount: 0.5 }}
                            className={`tab-button ${selectedTab === tab ? "active-tab" : ""}`}
                            onClick={() => setSelectedTab(tab)}
                        >
                            {iconsMap[tab]} {tab}
                        </motion.button>
                    ))}
                </div>
            </div>
            {/* <div className="card-container">
                {clinicalData[selectedTab].map((card, index) => (
                    <div className="card" key={index}>
                        <img src={card.imageUrl} alt={card.title} className="card-image" />
                        <div className="card-overlay">
                            <h3 className="card-title">{card.title}</h3>
                            <div className="card-description">
                                {Object.keys(card.description).map((category) => (
                                    <div key={category} className="description-category">
                                        <strong>{category}</strong>
                                        <ul>
                                            {card.description[category].map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div> */}

            {selectedTab == 'Skin/Face Care' &&
                <div className="card-container">
                    {/* Column 1 */}
                    <div className="column">
                        {clinicalData[selectedTab]
                            .filter((_, index) => index % 3 === 0)
                            .filter((card) => card && Object.keys(card.description || {}).length > 0)
                            .map((card, index) => (
                                <div className="card col1" key={index}>
                                    <motion.img
                                        src={card?.imageUrl}
                                        alt={card?.title}
                                        className="card-image"
                                        initial={{ opacity: 0, y: -20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        viewport={{ once: false, amount: 0.1 }}
                                    />
                                    <div className="card-overlay">
                                        <motion.h3 className="card-title"
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.6 }}
                                            viewport={{ once: true, amount: 0.5 }}
                                        >
                                            {card.title}

                                        </motion.h3>
                                        <div className="card-description">
                                            <h3 className="card-title2">Treatments</h3>
                                            {Object.keys(card.description).map((category) => (
                                                <div key={category} className="description-category">
                                                    <strong>{category}</strong>
                                                    <ul>
                                                        {card.description[category].map((item, i) => (
                                                            <li key={i}>{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>

                    {/* Column 2 */}
                    <div className="column">
                        {clinicalData[selectedTab]
                            .filter((_, index) => index % 3 === 1)
                            .filter((card) => card && Object.keys(card.description || {}).length > 0)
                            .map((card, index) => (
                                <div className="card col2" key={index}>
                                    <motion.img
                                        src={card?.imageUrl}
                                        alt={card?.title}
                                        className="card-image"
                                        initial={{ opacity: 0, y: -20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        viewport={{ once: false, amount: 0.1 }}
                                    />
                                    <div className="card-overlay">
                                        <motion.h3 className="card-title"
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.6 }}
                                            viewport={{ once: true, amount: 0.5 }}
                                        >
                                            {card.title}

                                        </motion.h3>
                                        <div className="card-description">
                                            <h3 className="card-title2">Treatments</h3>
                                            {Object.keys(card.description).map((category) => (
                                                <div key={category} className="description-category">
                                                    <strong>{category}</strong>
                                                    <ul>
                                                        {card.description[category].map((item, i) => (
                                                            <li key={i}>{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>

                    {/* Column 3 */}
                    <div className="column">
                        {clinicalData[selectedTab]
                            .filter((_, index) => index % 3 === 2)
                            .filter((card) => card && Object.keys(card.description || {}).length > 0)
                            .map((card, index) => (
                                <div className="card col3" key={index}>
                                    <motion.img
                                        src={card?.imageUrl}
                                        alt={card?.title}
                                        className="card-image"
                                        initial={{ opacity: 0, y: -20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        viewport={{ once: false, amount: 0.2 }}
                                    />
                                    <div className="card-overlay">
                                        <motion.h3 className="card-title"
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.6 }}
                                            viewport={{ once: true, amount: 0.5 }}
                                        >
                                            {card.title}

                                        </motion.h3>
                                        <div className="card-description">
                                            <h3 className="card-title2">Treatments</h3>
                                            {Object.keys(card.description).map((category) => (
                                                <div key={category} className="description-category">
                                                    <strong>{category}</strong>
                                                    <ul>
                                                        {card.description[category].map((item, i) => (
                                                            <li key={i}>{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            }
            {selectedTab == 'Scalp/Hair Care' &&
                <div className="card-container ScalpHairCare">
                    {clinicalData[selectedTab].map((card, index) => (
                        <div className="card" key={index}>
                            <motion.img
                                src={card?.imageUrl}
                                alt={card?.title}
                                className="card-image"
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                viewport={{ once: false, amount: 0.1 }}
                            />
                            <div className="card-overlay">
                                <motion.h3 className="card-title"
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                >
                                    {card.title}

                                </motion.h3>
                                <div className="card-description">
                                    <h3 className="card-title2">Treatments</h3>
                                    {Object.keys(card.description).map((category) => (
                                        <div key={category} className="description-category">
                                            <strong>{category}</strong>
                                            <ul>
                                                {card.description[category].map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            }
            {selectedTab == 'Body Care' &&
                <div className="card-container BodyCare">
                    {clinicalData[selectedTab].map((card, index) => (
                        <div className="card" key={index}>
                            <motion.img
                                src={card?.imageUrl}
                                alt={card?.title}
                                className="card-image"
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                viewport={{ once: false, amount: 0.1 }}
                            />
                            <div className="card-overlay">
                                <motion.h3 className="card-title"
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                >
                                    {card.title}

                                </motion.h3>
                                <div className="card-description">
                                    <h3 className="card-title2">Treatments</h3>
                                    {Object.keys(card.description).map((category) => (
                                        <div key={category} className="description-category">
                                            <strong>{category}</strong>
                                            <ul>
                                                {card.description[category].map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            }
            {selectedTab == 'Beautifying/Cosmetic Surgery' &&
                <div className="card-container Beautifying">
                    {clinicalData[selectedTab].map((card, index) => (
                        <div className="card" key={index}>
                            <motion.img
                                src={card?.imageUrl}
                                alt={card?.title}
                                className="card-image"
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                viewport={{ once: false, amount: 0.1 }}
                            />
                            <div className="card-overlay">
                                <motion.h3 className="card-title"
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                >
                                    {card.title}

                                </motion.h3>
                                <div className="card-description">
                                    <h3 className="card-title2">Treatments</h3>
                                    {Object.keys(card.description).map((category) => (
                                        <div key={category} className="description-category">
                                            <strong>{category}</strong>
                                            <ul>
                                                {card.description[category].map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            }

        </div>
    );
}

export default ClinicalConcerns;
//
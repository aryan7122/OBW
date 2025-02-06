import React, { useState } from "react";
import "./ClinicalConcerns.scss";
// icon
import IconAdd from '../../assets/Clinical Concerns/icon/add.svg';
import SkinIcon from '../../assets/Clinical Concerns/icon/skin-care.svg';
import ScalpIcon from '../../assets/Clinical Concerns/icon/like_5498753 1.svg';
import BodyIcon from '../../assets/Clinical Concerns/icon/slim_6381900.svg';
import BeautifyingIcon from '../../assets/Clinical Concerns/icon/pedicure_3461923.svg';
// img
import SkinImg1 from '../../assets/Clinical Concerns/Elegant Mature Woman with Skincare.png';
import UnwantedImg2 from '../../assets/Clinical Concerns/Intimate Beauty Portrait.png';
import EnlargedImg3 from '../../assets/Clinical Concerns/Close-up of Human Face.png';
import PigmentationImg4 from '../../assets/Clinical Concerns/Close-up Portrait with Emphasis on Skin.png';
import DoubleImg5 from '../../assets/Clinical Concerns/portrait-young-caucasian-female-with-m.png';
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
                "For Saggy Skin": ["Thread lifts", "HIFU", "Skin tightening lasers"]
            },
            imageUrl: SkinImg1
        },
        {
            title: "Unwanted Hairs",
            description: {
                "---": [
                    "--",
                ],

            },
            imageUrl: UnwantedImg2
        },

        {
            title: "Enlarged Pores & Uneven Texture",
            description: {
                "---": [
                    "--",
                ],


            }, imageUrl: EnlargedImg3
        },
        {
            title: "Pigmentation & Uneven Skin Tone",
            description: {
                "---": [
                    "--",
                ],


            },
            imageUrl: PigmentationImg4
        },

        {
            title: "Double Chin (Face)",
            description: {
                "---": [
                    "--",
                ],


            },
            imageUrl: DoubleImg5
        },
        {
            title: "Dryness & Dehydration",
            description: {
                "---": [
                    "--",
                ],


            }, imageUrl: DrynessImg6
        },
        {
            title: "",
            description: '',
            imageUrl: ''
        },
        {
            title: "Acne & Acne Scars",
            description: {
                "---": [
                    "--",
                ],

            },
            imageUrl: AcneImg7
        },

    ],
    "Scalp/Hair Care": [
        {
            title: "Hair Thinning",
            description: {
                "": [
                    "LLLT phototherapy",
                    "Micro Needling",
                    "Platelet Rich Plasma",
                    "GFC",
                    "Specialized topical treatments",
                ],

            },
            imageUrl: HairImg1
        },
        {
            title: "Alopecia /  Baldness",
            description: {
                "": [
                    "",

                ],

            },
            imageUrl: AlopeciaImg2
        },
        {
            title: "Other Scalp Conditions",
            description: {
                "": [
                    "",

                ],

            },
            imageUrl: ConditionsImg3
        },
    ],
    "Body Care": [
        {
            title: "Stubborn body fat",
            description: {
                "": [
                    "Lipolytic injections",
                    "Laser Lipolysis",
                    "Cool sculpting",
                ],

            },
            imageUrl: StubbornImg1
        },
        {
            title: "Excessive Sweating",
            description: {
                "": [
                    "",
                    "",

                ],

            },
            imageUrl: SweatingImg2
        },
        {
            title: "Sun tan & Body texture",
            description: {
                "": [
                    "",
                    "",

                ],

            },
            imageUrl: SweatingImg2
        },
        {
            title: "Stretch Marks",
            description: {
                "": [
                    "",
                    "",

                ],

            },
            imageUrl: StretchImg3
        },
    ],
    "Beautifying/Cosmetic Surgery": [
        {
            title: "Skin Tags, Moles, Milia Removal",
            description: {
                "": [
                    "Laser removal",
                    "minor surgical excision",
                ],

            },
            imageUrl: bImg1
        },
        {
            title: "Face & Scalp Cyst Removal",
            description: {
                "": [
                    "",
                    "",
                ],

            },
            imageUrl: bImg2
        },
        {
            title: "Lobuloplasty",
            description: {
                "": [
                    "",
                    "",
                ],

            },
            imageUrl: bImg3
        },
        {
            title: "Scar Reduction",
            description: {
                "": [
                    "",
                    "",
                ],

            },
            imageUrl: bImg4
        },
        {
            title: "Dimpleplasty (Face)",
            description: {
                "": [
                    "",
                    "",
                ],

            },
            imageUrl: bImg5
        },
        {
            title: "Bichectomy (Face)",
            description: {
                "": [
                    "",
                    "",
                ],

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
            <div className="tabs">
                {Object.keys(clinicalData).map((tab) => (
                    <button
                        key={tab}
                        className={`tab-button ${selectedTab === tab ? "active-tab" : ""}`}
                        onClick={() => setSelectedTab(tab)}
                    >
                        {iconsMap[tab]} {tab}
                    </button>
                ))}
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
                                <div className="card" key={index}>
                                    <img src={card?.imageUrl} alt={card?.title} className="card-image" />
                                    <div className="card-overlay">
                                        <h3 className="card-title">{card.title}</h3>
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
                                <div className="card" key={index}>
                                    <img src={card?.imageUrl} alt={card?.title} className="card-image" />
                                    <div className="card-overlay">
                                        <h3 className="card-title">{card.title}</h3>
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
                                <div className="card" key={index}>
                                    <img src={card?.imageUrl} alt={card?.title} className="card-image" />
                                    <div className="card-overlay">
                                        <h3 className="card-title">{card.title}</h3>
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
                            <img src={card.imageUrl} alt={card.title} className="card-image" />
                            <div className="card-overlay">
                                <h3 className="card-title">{card.title}</h3>
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
                            <img src={card.imageUrl} alt={card.title} className="card-image" />
                            <div className="card-overlay">
                                <h3 className="card-title">{card.title}</h3>
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
                            <img src={card.imageUrl} alt={card.title} className="card-image" />
                            <div className="card-overlay">
                                <h3 className="card-title">{card.title}</h3>
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
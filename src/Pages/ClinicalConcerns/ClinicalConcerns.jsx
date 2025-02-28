import React, { useState } from "react";
import "./ClinicalConcerns.scss";
// icon
import IconAdd from "../../assets/Clinical Concerns/icon/add.svg";
import SkinIcon from "../../assets/Clinical Concerns/icon/skin-care.svg";
import ScalpIcon from "../../assets/Clinical Concerns/icon/like_5498753 1.svg";
import BodyIcon from "../../assets/Clinical Concerns/icon/slim_6381900.svg";
import BeautifyingIcon from "../../assets/Clinical Concerns/icon/cosmetic-surgery_5506893.png";
// img
import placeholderImg from "../../assets/TrendingTreatments/LazyLoadImage.png";

import SkinImg1 from "../../assets/Clinical Concerns/Enlarged Pores & Uneven Texture-min.jpg";
import UnwantedImg2 from "../../assets/Clinical Concerns/woman-shaving-her-face-by-razor-min.jpg";
import SunTunImg from "../../assets/Clinical Concerns/Sun Tan & Body Texture-min.jpg";
import EnlargedImg3 from "../../assets/Clinical Concerns/young-woman-being-confident-with-her-acne-min.jpg";
import PigmentationImg4 from "../../assets/Clinical Concerns/Pigmentation & Uneven Skin Tone-min.jpg";
import DoubleImg5 from "../../assets/Clinical Concerns/Double Chin (Face)-min.jpg";
import DrynessImg6 from "../../assets/Clinical Concerns/Dryness & Dehydration-min.jpg";
import AcneImg7 from "../../assets/Clinical Concerns/Acne & Acne Scars.jpg";
import none from "../../assets/Clinical Concerns/none1.png";
import HairImg1 from "../../assets/Clinical Concerns/woman-getting-hair-loss-treatment-clinic.png";
import AlopeciaImg2 from "../../assets/Clinical Concerns/adult-male-looking-his-hair-min.jpg";
import ConditionsImg3 from "../../assets/Clinical Concerns/woman-with-comb-dandruff-her-dark-hair-color-background-closeup-min.jpg";
import StubbornImg1 from "../../assets/Clinical Concerns/Stubborn Body Fat-min.jpg";
import SweatingImg2 from "../../assets/Clinical Concerns/Excessive Sweating-min.jpg";
import StretchImg3 from "../../assets/Clinical Concerns/close-up-woman-with-stretch-marks.png";
import bImg1 from "../../assets/Clinical Concerns/dermatologist-latex-gloves-holding-dermatoscope-while-examining-attractive- (1).png";
import bImg2 from "../../assets/Clinical Concerns/dermatologist-latex-gloves-holding-dermatoscope-while-examining-attractive- (2).png";
import bImg3 from "../../assets/Clinical Concerns/dermatologist-latex-gloves-holding-dermatoscope-while-examining-attractive- (3).png";
import bImg4 from "../../assets/Clinical Concerns/dermatologist-latex-gloves-holding-dermatoscope-while-examining-attractive- (4).png";
import bImg5 from "../../assets/Clinical Concerns/dermatologist-latex-gloves-holding-dermatoscope-while-examining-attractive- (5).png";
import bImg6 from "../../assets/Clinical Concerns/dermatologist-latex-gloves-holding-dermatoscope-while-examining-attractive- (6).png";
// import { motion } from "framer-motion";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";
// import WebPImage from "../../util/WebPImage";

const iconsMap = {
  "Skin/Face Care": <img src={SkinIcon} alt="Skin Care" />,
  "Scalp/Hair Care": <img src={ScalpIcon} alt="Scalp Care" />,
  "Body Care": <img src={BodyIcon} alt="Body Care" />,
  "Beautifying/Cosmetic Surgery": (
    <img src={BeautifyingIcon} alt="Beautifying Care" />
  ),
};

const clinicalData = {
  "Skin/Face Care": [
    {
      title: "Anti-Aging",
      description: {
        "For fine lines & wrinkles": [
          "Botulinum toxin injection",
          "Dermal fillers",
          "Dermapen/micro-needling treatments",
        ],
        "For Saggy Skin": [
          "Thread lifts",
          "HIFU (High-Intensity Focused Ultrasound)",
          "Skin tightening lasers",
        ],
      },
      imageUrl:"https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/ClinicalConcerns2/zhldwzmwa2r0ptwlt3of"
     
    },
    {
      title: "Unwanted Hairs",
      description: {
        Concerns: ["Unwanted facial and body hair"],
        Treatments: ["Laser Hair Reduction (LHR)"],
      },
      imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/ClinicalConcerns2/feztzv9t51uejexgu0am",
    },
    {
      title: "Enlarged Pores & Uneven Texture",
      description: {
        Concerns: ["Open pores", "Rough skin texture"],
        Treatments: [
          "Carbon peel laser",
          "Hydra-pen treatments",
          "Retinol-based treatments",
          "Dermaplaning",
          "Medi-facials",
          "Skin peels",
        ],
      },
      imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/ClinicalConcerns2/dqzb2zffkozk3vxlau90",
    },
    {
      title: "Pigmentation & Uneven Skin Tone",
      description: {
        Concerns: [
          "Dark spots",
          "Sun damage",
          "Melasma",
          "Post-inflammatory hyperpigmentation",
        ],
        Treatments: [
          "Laser resurfacing",
          "Chemical peels",
          "Vitamin C facials",
          "Skin peels",
          "Topical lightening agents",
          "Laser toning",
          // "Micro-needling",
          // "Medical-grade skincare"
        ],
      },
      imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/ClinicalConcerns2/wqhu7kdozglk1ix9jbkk",
    },
    {
      title: "Double Chin (Face)",
      description: {
        Concerns: ["Excess fat in the chin area"],
        Treatments: ["Fat-dissolving injections", "Lipolytic injections"],
      },
      imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/ClinicalConcerns2/bsxzxshlig0xxknjvyek",
    },
    {
      title: "Dryness & Dehydration",
      description: {
        Concerns: ["Dry, dehydrated skin"],
        Treatments: ["Hydra-medi facials", "Hydrating peels", "Mesotherapy"],
      },
      // imageUrl: DrynessImg6,
      imageUrl:"https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/ClinicalConcerns2/l9n7mnrydd5k1joo19nt"
    },
    {
      title: "",
      description: "",
      imageUrl: "",
    },
    {
      title: "Acne & Acne Scars",
      description: {
        Concerns: ["Active acne", "Acne scars"],
        Treatments: [
          "Phototherapy",
          "Acne-targeting peels",
          "Acne skincare regimens",
          "Anti-acne facials",
          "Dermapen/micro-needling with PRP",
          "Fractional CO2 laser",
          "Subcision",
        ],
      },
      imageUrl:"https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/ClinicalConcerns2/li658v9fm26ht6ufd0jc",
      
    },
  ],
  "Scalp/Hair Care": [
    {
      title: "Hair Thinning",
      description: {
        Concerns: ["Hair thinning", "Hair fall"],
        Treatments: [
          "LLLT phototherapy",
          "Micro-needling pen",
          "Platelet Rich Plasma (PRP)",
          "GFC",
          "Specialized topical treatments",
        ],
      },
      imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/ClinicalConcerns2/section2/ujwayfvzjpqjsfse7emz",
    },
    {
      title: "Alopecia / Baldness",
      description: {
        Concerns: ["Severe hair loss", "Baldness"],
        Treatments: [
          "Scalp mesotherapy",
          "Corticosteroid injections",
          "Anti-DHT therapy",
          "QR678 treatment",
          "Exosome therapy",
          "Hair transplantation surgery",
        ],
      },
      imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/ClinicalConcerns2/section2/btfzdgawgzmda7ovgbt8",
    },
    {
      title: "Other Scalp Conditions",
      description: {
        Concerns: ["Dandruff", "Telogen effluvium", "Seborrheic dermatitis"],
        Treatments: ["Targeted medical scalp treatments"],
      },
      imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/ClinicalConcerns2/section2/ez6zeti6s6cbsybzj5cf",
    },
  ],
  "Body Care": [
    {
      title: "Stubborn Body Fat",
      description: {
        Concerns: ["Excess fat in the belly, thighs, and arms"],
        Treatments: [
          "Lipolytic injections",
          "Laser Lipolysis",
          "CoolSculpting",
        ],
      },
      imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/ClinicalConcerns2/section3/xfkcixsjkycgnyorch3s",
    },
    {
      title: "Excessive Sweating",
      description: {
        Concerns: ["Hyperhidrosis (Excessive sweating)"],
        Treatments: ["Botox for sweating"],
      },
      imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/ClinicalConcerns2/section3/mxkzofxcdrrlpfb3ofos",
    },
    {
      title: "Sun Tan & Body Texture",
      description: {
        Concerns: ["Sun-tan", "Uneven skin texture"],
        Treatments: ["Chemical peels", "Skin-brightening IV injections"],
      },
      imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/ClinicalConcerns2/section3/jlmgozuas9hpxbvif7j6",
    },
    {
      title: "Stretch Marks",
      description: {
        Concerns: ["Stretch marks"],
        Treatments: ["Skin-resurfacing treatments", "Targeted peels"],
      },
      imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/ClinicalConcerns2/section3/ksu9a0rbejyj6pmcla8v",
    },
  ],
  // "Beautifying/Cosmetic Surgery": [
  //   {
  //     title: "Skin Tags, Moles, Milia Removal",
  //     description: {
  //       Concerns: ["Unwanted skin tags, moles, milia"],
  //       Treatments: ["Laser removal", "Minor surgical excision"],
  //     },
  //     imageUrl: bImg1,
  //   },
  //   {
  //     title: "Face & Scalp Cyst Removal",
  //     description: {
  //       Concerns: ["Cysts on the face or scalp"],
  //       Treatments: ["Surgical cyst removal"],
  //     },
  //     imageUrl: bImg2,
  //   },
  //   {
  //     title: "Lobuloplasty",
  //     description: {
  //       Concerns: ["Torn or stretched earlobes"],
  //       Treatments: ["Surgical correction of earlobes"],
  //     },
  //     imageUrl: bImg3,
  //   },
  //   {
  //     title: "Scar Reduction",
  //     description: {
  //       Concerns: ["Scars from injury or surgery"],
  //       Treatments: ["Laser resurfacing", "Subcision", "Surgical revisions"],
  //     },
  //     imageUrl: bImg4,
  //   },
  //   {
  //     title: "Dimpleplasty (Face)",
  //     description: {
  //       Concerns: ["Desire for dimples"],
  //       Treatments: ["Cosmetic surgery to create dimples"],
  //     },
  //     imageUrl: bImg5,
  //   },
  //   {
  //     title: "Bichectomy (Face)",
  //     description: {
  //       Concerns: ["Excess cheek fat"],
  //       Treatments: [
  //         "Permanent removal of excessive fat from the cheek region",
  //       ],
  //     },
  //     imageUrl: bImg6,
  //   },
  // ],
};


function ClinicalConcerns() {
  const [selectedTab, setSelectedTab] = useState("Skin/Face Care");

  return (
    <div className="clinical-concerns">
      <h1>
        Clinical <img src={IconAdd} alt="add-icon" /> Concerns
      </h1>
      <div id="tabs">
        <div className="tabs">
          {Object.keys(clinicalData).map((tab) => (
            <button
              whileHover={{ scale: 1.0 }}
              whileTap={{ scale: 0.95 }}
              whileDrag={{ scale: 0.9, rotate: 10 }}
              // drag
              key={tab}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.5 }}
              className={`tab-button ${selectedTab === tab ? "active-tab" : ""
                }`}
              onClick={() => setSelectedTab(tab)}>
              {iconsMap[tab]} {tab}
            </button>
          ))}
        </div>
      </div>

      {selectedTab == "Skin/Face Care" && (
        <div className="card-container">
          {/* Column 1 */}
          <div className="column">
            {clinicalData[selectedTab]
              .filter((_, index) => index % 3 === 0)
              .filter(
                (card) => card && Object.keys(card.description || {}).length > 0
              )
              .map((card, index) => (
                <div className="card col1" key={index}>
                  <img
                    src={card?.imageUrl}
                    alt={card?.title}
                    className="card-image"
                  />
                  <div className="card-overlay">
                    <h3
                      className="card-title"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true, amount: 0.5 }}>
                      {card.title}
                    </h3>
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
          </div>

          {/* Column 2 */}
          <div className="column">
            {clinicalData[selectedTab]
              .filter((_, index) => index % 3 === 1)
              .filter(
                (card) => card && Object.keys(card.description || {}).length > 0
              )
              .map((card, index) => (
                <div className="card col2" key={index}>
                  <img
                    src={card?.imageUrl}
                    alt={card?.title}
                    className="card-image"
                  />
                  <div className="card-overlay">
                    <h3
                      className="card-title"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true, amount: 0.5 }}>
                      {card.title}
                    </h3>
                    <div className="card-description">
                      {/* <h3 className="card-title2">Treatments</h3> */}
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
              .filter(
                (card) => card && Object.keys(card.description || {}).length > 0
              )
              .map((card, index) => (
                <div className="card col3" key={index}>
                  <img
                    src={card?.imageUrl}
                    alt={card?.title}
                    className="card-image"
                  />
                  <div className="card-overlay">
                    <h3
                      className="card-title"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true, amount: 0.5 }}>
                      {card.title}
                    </h3>
                    <div className="card-description">
                      {/* <h3 className="card-title2">Treatments</h3> */}
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
      )}
      {selectedTab == "Scalp/Hair Care" && (
        <div className="card-container ScalpHairCare">
          {clinicalData[selectedTab].map((card, index) => (
            <div className="card" key={index}>
              <img
                src={card?.imageUrl}
                alt={card?.title}
                className="card-image"
              />
              <div className="card-overlay">
                <h3
                  className="card-title"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, amount: 0.5 }}>
                  {card.title}
                </h3>
                <div className="card-description">
                  {/* <h3 className="card-title2">Treatments</h3> */}
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
      )}
      {selectedTab == "Body Care" && (
        <div className="card-container BodyCare">
          {clinicalData[selectedTab].map((card, index) => (
            <div className="card" key={index}>
              <img
                src={card?.imageUrl}
                alt={card?.title}
                className="card-image"
              />
              <div className="card-overlay">
                <h3
                  className="card-title"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, amount: 0.5 }}>
                  {card.title}
                </h3>
                <div className="card-description">
                  {/* <h3 className="card-title2">Treatments</h3> */}
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
      )}
      {selectedTab == "Beautifying/Cosmetic Surgery" && (
        <div className="card-container Beautifying">
          {clinicalData[selectedTab].map((card, index) => (
            <div className="card" key={index}>
              <img
                src={card?.imageUrl}
                alt={card?.title}
                className="card-image"
              />
              <div className="card-overlay">
                <h3
                  className="card-title"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, amount: 0.5 }}>
                  {card.title}
                </h3>
                <div className="card-description">
                  {/* <h3 className="card-title2">Treatments</h3> */}
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
      )}
    </div>
  );
}

export default ClinicalConcerns;

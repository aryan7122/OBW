import React, { useState } from "react";
import "./ClinicalConcerns.scss";
// icon
import SkinIcon from "../../assets/Clinical Concerns/icon/skin-care.svg";
import ScalpIcon from "../../assets/Clinical Concerns/icon/like_5498753 1.svg";
import BodyIcon from "../../assets/Clinical Concerns/icon/slim_6381900.svg";
import BeautifyingIcon from "../../assets/Clinical Concerns/icon/cosmetic-surgery_5506893.png";
// import StaticArrowDown from "../../assets/Clinical Concerns/icon/arrow-down.svg"; // Static arrow icon
// import CheckmarkIcon from "../../assets/Clinical Concerns/icon/checkmark.svg"; // Assuming you have a simple checkmark SVG
import IconAdd from "../../assets/Clinical Concerns/icon/add.svg";

// You might need to adjust these image imports based on your actual assets
// For 'Anti-Aging', the image in the design is larger and seems to be part of the card
// For other cards, the image is smaller and next to the arrow
// Ensure you have an appropriate image for the static arrow, e.g., an SVG or PNG.

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
      type: "detailed",
      title: "Anti-Aging",
      tags: [
        "Botulinum toxin injection",
        "Dermal fillers",
        "Micro-needling",
        "Thread lifts",
        "HIFU",
        "Skin tightening lasers",
      ],
      imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/v1740723356/ClinicalConcerns2/zhldwzmwa2r0ptwlt3of.webp",
    },
    {
      type: "simple",
      title: "Unwanted Hairs",
      tags: [
        "Laser hair removal",
        "Electrolysis",
        "IPL treatments",
        "Pain-free methods",
      ],
      imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/v1740723734/ClinicalConcerns2/feztzv9t51uejexgu0am.webp",
    },
    {
      type: "simple",
      title: "Pigmentation & Uneven Skin Tone",
      tags: [
        "Chemical peels",
        "Laser treatments",
        "Vitamin C serums",
        "Glutathione shots",
      ],
      imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/v1740723925/ClinicalConcerns2/wqhu7kdozglk1ix9jbkk.webp",
    },
    {
      type: "simple",
      title: "Acne & Acne Scars",
      tags: [
        "Acne extraction",
        "Salicylic acid peels",
        "Acne laser",
        "Scar revision",
      ],
      imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/v1740724076/ClinicalConcerns2/li658v9fm26ht6ufd0jc.webp",
    },
    {
      type: "simple",
      title: "Dryness & Dehydration",
      tags: [
        "Hydrafacial",
        "Skin boosters",
        "Moisture-lock therapy",
        "Hyaluronic infusions",
      ],
      imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/v1740725051/ClinicalConcerns2/l9n7mnrydd5k1joo19nt.webp",
    },
    {
      type: "simple",
      title: "Enlarged Pores & Uneven Texture",
      tags: [
        "Carbon peel",
        "Microdermabrasion",
        "Laser resurfacing",
        "Retinol treatments",
      ],
      imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/v1740724458/ClinicalConcerns2/dqzb2zffkozk3vxlau90.webp",
    },
    {
      type: "simple",
      title: "Double Chin (Face)",
      tags: [
        "Fat freezing",
        "Chin sculpting",
        "RF tightening",
        "Kybella injections",
      ],
      imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/v1740724195/ClinicalConcerns2/bsxzxshlig0xxknjvyek.webp",
    },
  ],

  "Scalp/Hair Care": [
    {
      type: "simple",
      title: "Hair Thinning",
      tags: [
        "PRP therapy",
        "Mesotherapy",
        "Hair vitamins",
        "Minoxidil solutions",
      ],
      imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/v1740725436/ClinicalConcerns2/section2/ujwayfvzjpqjsfse7emz.webp",
    },
    {
      type: "simple",
      title: "Alopecia / Baldness",
      tags: [
        "Hair transplant",
        "Stem cell therapy",
        "PRP+ treatments",
        "Microneedling",
      ],
      imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/v1740725592/ClinicalConcerns2/section2/btfzdgawgzmda7ovgbt8.webp",
    },
    {
      type: "simple",
      title: "Other Scalp Conditions",
      tags: [
        "Anti-dandruff therapy",
        "Scalp exfoliation",
        "Seborrheic dermatitis care",
        "Fungal treatments",
      ],
      imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/v1740725531/ClinicalConcerns2/section2/ez6zeti6s6cbsybzj5cf.webp",
    },
  ],

  "Body Care": [
    {
      type: "simple",
      title: "Stubborn Body Fat",
      tags: [
        "CoolSculpting",
        "Ultrasound cavitation",
        "Fat burning injections",
        "Body contouring",
      ],
      imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/v1740725723/ClinicalConcerns2/section3/xfkcixsjkycgnyorch3s.webp",
    },
    {
      type: "simple",
      title: "Excessive Sweating",
      tags: [
        "Botox for sweating",
        "Iontophoresis",
        "Medical deodorants",
        "Laser ablation",
      ],
      imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/v1740725818/ClinicalConcerns2/section3/mxkzofxcdrrlpfb3ofos.webp",
    },
    {
      type: "simple",
      title: "Sun Tan & Body Texture",
      tags: [
        "Body polishing",
        "Tan removal peels",
        "Vitamin C therapy",
        "Detan masks",
      ],
      imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/v1740725889/ClinicalConcerns2/section3/jlmgozuas9hpxbvif7j6.webp",
    },
    {
      type: "simple",
      title: "Stretch Marks",
      tags: [
        "Microneedling",
        "Laser stretch mark removal",
        "Collagen boosters",
        "Fractional RF",
      ],
      imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/v1740726009/ClinicalConcerns2/section3/ksu9a0rbejyj6pmcla8v.webp",
    },
  ],

  "Beautifying/Cosmetic Surgery": [
    {
      type: "simple",
      title: "Skin Tags, Moles, Milia Removal",
      tags: [
        "Cryotherapy",
        "RF cautery",
        "Laser removal",
        "Scarless removal",
      ],
      imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/ClinicalConcerns2/section4/gdfa0rttnhhfl44mcwl5",
    },
    {
      type: "simple",
      title: "Face & Scalp Cyst Removal",
      tags: [
        "Surgical excision",
        "Local anesthesia procedure",
        "Minimal scar technique",
        "Post-care support",
      ],
      imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/ClinicalConcerns2/section4/r1zggoxytzllzjsgdj8x",
    },
    {
      type: "simple",
      title: "Lobuloplasty",
      tags: [
        "Earlobe repair",
        "Split earlobe fix",
        "Non-surgical method",
        "Local anesthesia",
      ],
      imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/ClinicalConcerns2/section4/suyjlbkph0tkynl5csyf",
    },
    {
      type: "simple",
      title: "Scar Reduction",
      tags: [
        "Laser scar revision",
        "Scar creams",
        "Surgical scar removal",
        "Microneedling",
      ],
      imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/ClinicalConcerns2/section4/r20s1l16plxwynfseo3t",
    },
    {
      type: "simple",
      title: "Dimpleplasty (Face)",
      tags: [
        "Cosmetic dimple surgery",
        "Suture technique",
        "30-min procedure",
        "No visible scar",
      ],
      imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/ClinicalConcerns2/section4/dnmzaqvtaahrqacyovjw",
    },
    {
      type: "simple",
      title: "Bichectomy (Face)",
      tags: [
        "Buccal fat removal",
        "Slim face contouring",
        "Minor surgery",
        "Quick recovery",
      ],
      imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/ClinicalConcerns2/section4/xicvt2rnyxrhpg6ff68g",
    },
  ],
};


function ClinicalConcerns() {
  const [selectedTab, setSelectedTab] = useState("Skin/Face Care");
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);

  return (
    <div className="clinical-concerns-section">
      <div className="concerns-header">
        <span className="concerns-label">CONCERNS</span>
        <h2 className="section-title">
          Top Options To <img src={IconAdd} alt="add-icon" /> Concerns<span className="highlight-text">Meet All Your Requirements</span>
        </h2>
      </div>
      <div className="tabs_main">
        <div className="tabs-navigation">
          {Object.keys(clinicalData).map((tab) => (
            <button
              key={tab}
              className={`tab-button ${selectedTab === tab ? "active" : ""}`}
              onClick={() => {
                setSelectedTab(tab);
                setSelectedCardIndex(0);
              }
              }
            >
              {iconsMap[tab]}
              <span>{tab}</span>
            </button>
          ))}
        </div>
      </div>


      <div className="tab-content">
        {clinicalData[selectedTab].map((card, index) => (
          <div className={`concern-card ${selectedCardIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => setSelectedCardIndex(index)}
          >
            <div className="card-info">
              <div className="flex-tags">
                <div className="info-title">
                  <div className="card-number">{String(index + 1).padStart(2, "0")}.</div>
                  <h3 className="card-title">{card.title}</h3>
                </div>

                {/* ✅ SHOW TAGS IF SELECTED (for both simple + detailed) */}
                {selectedCardIndex === index && card.tags && (
                  <div className="card-tags">
                    {card.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag">
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.6033 0.396701C9.33696 0.130359 8.93774 0.130359 8.6714 0.396701L3.99997 5.06813L1.32854 2.3967C1.0622 2.13036 0.662982 2.13036 0.39664 2.3967C0.130298 2.66304 0.130298 3.06226 0.39664 3.3286L3.53538 6.46733C3.80172 6.73367 4.20094 6.73367 4.46728 6.46733L9.6033 1.33131C9.86964 1.06497 9.86964 0.665751 9.6033 0.396701Z" fill="#000" />
                        </svg>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div
                className={`card-media ${selectedCardIndex === index ? "card-media-active" : ""}`}

              >
                {/* ✅ Image dikhana only when selected */}
                {selectedCardIndex === index && card.imageUrl && (
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className={`card-image ${selectedCardIndex === index ? "large-image" : "small-image"}`}
                  />
                )}

                {/* ✅ Arrow dikhana only when NOT selected */}
                {selectedCardIndex !== index && (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" color="#9b9b9b" fill="none">
                    <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="#9b9b9b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                )}
              </div>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default ClinicalConcerns;
import React, { useState } from "react";
import "./ClinicalConcerns.scss";

// icon
import SkinIcon from "../../assets/Clinical Concerns/icon/skin-care.svg";
import ScalpIcon from "../../assets/Clinical Concerns/icon/like_5498753 1.svg";
import BodyIcon from "../../assets/Clinical Concerns/icon/slim_6381900.svg";
import BeautifyingIcon from "../../assets/Clinical Concerns/icon/cosmetic-surgery_5506893.png";
import IconAdd from "../../assets/Clinical Concerns/icon/add.svg";

// Assuming you have BookAppointment modal and toast setup
import toast, { Toaster } from 'react-hot-toast'; // Import Toaster and toast
import { ArrowRight, CircleArrowDown, SquareDashedMousePointer } from 'lucide-react'; // Import ArrowRight from lucide-react
import { useNavigate } from "react-router-dom"; // Import useNavigate
import BookAppointment from "../../Components/BookAppointment/BookAppointment";

// This map is good as is for tab icons
const iconsMap = {
  "Skin/Face Care": <img src={SkinIcon} alt="Skin Care" />,
  "Scalp/Hair Care": <img src={ScalpIcon} alt="Scalp Care" />,
  "Body Care": <img src={BodyIcon} alt="Body Care" />,
  "Beautifying/Cosmetic Surgery": (
    <img src={BeautifyingIcon} alt="Beautifying Care" />
  ),
};


import Anti_Aging_img from '../../assets/TrendingTreatments/Anti_Aging_img.png'
import Dark_circles_img from '../../assets/TrendingTreatments/Dark circles.jpg'
import active_anc_img from '../../assets/TrendingTreatments/active-anc.jpg'
import Lip_pegmentation_img from '../../assets/TrendingTreatments/Lip pegmentation.jpg'
import Dehydration_img from '../../assets/TrendingTreatments/Dehydration.jpg'
import Enlarged_pores_img from '../../assets/TrendingTreatments/Enlarged pores & uneven texture.jpg'
import Dark_spots_img from '../../assets/TrendingTreatments/Dark spots.jpg'
import Saggy_skin_img from '../../assets/TrendingTreatments/Saggy skin.jpg'
import Scar_reduction_img from '../../assets/TrendingTreatments/Scar Revision or Reduction-min.jpg'

// hair

import Hair_fall_img from '../../assets/TrendingTreatments/Scalp and hair concerns/Rectangle 3463672.png'
import hair_loss_img from '../../assets/TrendingTreatments/Scalp and hair concerns/2149106294 (Small).jpg'
import Baldness_img from '../../assets/TrendingTreatments/Scalp and hair concerns/man-with-hair-loss-problems-derma-roller-hair-loss-stop-balding-alopecia-isolated-white.jpg'
import alopecia_img from '../../assets/TrendingTreatments/Scalp and hair concerns/alopecia.jpg'
import dandruff_img from '../../assets/TrendingTreatments/Scalp and hair concerns/dandruff-woman-s-dark-hair (Small).jpg'
import psoriasis_img from '../../assets/TrendingTreatments/Scalp and hair concerns/closeup_psoriasis_on_nape_1604751312 (Small).jpg'
import scalp_irraition_img from '../../assets/TrendingTreatments/Scalp and hair concerns/scalp irraition  (Small).jpg'
import preterm_greyiong_img from '../../assets/TrendingTreatments/Scalp and hair concerns/preterm greyiong  (Small).jpg'
import Frizzy_img from '../../assets/TrendingTreatments/Scalp and hair concerns/frizzy  (Small).jpg'
// body care
import Body_r_img from '../../assets/TrendingTreatments/Body concerns/img1.jpg'
import tattoo_removal_img from '../../assets/TrendingTreatments/Body concerns/young-woman-undergoing-laser-tattoo-removal-procedure-salon-closeup (1).bak.jpg'
import sun_te_img from '../../assets/TrendingTreatments/Body concerns/img2.jpg'
import un_hair_img from '../../assets/TrendingTreatments/Body concerns/armpits-hairy-women.jpg'
import btl_chi_img from '../../assets/TrendingTreatments/Body concerns/cropped-shot-young-caucasian-woman-s-face-with-double-chin-isolated-white-background (1).jpg'
import Skin_Molesi_img from '../../assets/TrendingTreatments/Body concerns/img3.jpg'

import Lobuloplasty_img from '../../assets/TrendingTreatments/Body concerns/Earlobe-Repair-Header.bak.jpg'
import Face_removal_img from '../../assets/TrendingTreatments/Face & scalp cyst removal.jpg'
import dimpleplasty_img from '../../assets/TrendingTreatments/dimpleplasty.jpg'
import PMUimg from '../../assets/TrendingTreatments/PMU (Permanent Makeup)-min.jpg'

// Your clinicalData remains unchanged
// const clinicalData = {
//   "Skin/Face Care": [
//     {
//       type: "detailed",
//       title: "Anti-Aging",
//       tags: [
//         "Botulinum toxin injection",
//         "Dermal fillers",
//         "Micro-needling",
//         "Thread lifts",
//         "HIFU",
//         "Skin tightening lasers",
//       ],
//       // imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/v1740723356/ClinicalConcerns2/zhldwzmwa2r0ptwlt3of.webp",
//       imageUrl: Anti_Aging_img,
//     },
//     {
//       type: "simple",
//       title: "Unwanted Hairs",
//       tags: [
//         "Laser hair removal",
//         "Electrolysis",
//         "IPL treatments",
//         "Pain-free methods",
//       ],
//       imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/v1740723734/ClinicalConcerns2/feztzv9t51uejexgu0am.webp",
//     },
//     {
//       type: "simple",
//       title: "Pigmentation & Uneven Skin Tone",
//       tags: [
//         "Chemical peels",
//         "Laser treatments",
//         "Vitamin C serums",
//         "Glutathione shots",
//       ],
//       imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/v1740723925/ClinicalConcerns2/wqhu7kdozglk1ix9jbkk.webp",
//     },
//     {
//       type: "simple",
//       title: "Acne & Acne Scars",
//       tags: [
//         "Acne extraction",
//         "Salicylic acid peels",
//         "Acne laser",
//         "Scar revision",
//       ],
//       imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/v1740724076/ClinicalConcerns2/li658v9fm26ht6ufd0jc.webp",
//     },
//     {
//       type: "simple",
//       title: "Dryness & Dehydration",
//       tags: [
//         "Hydrafacial",
//         "Skin boosters",
//         "Moisture-lock therapy",
//         "Hyaluronic infusions",
//       ],
//       imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/v1740725051/ClinicalConcerns2/l9n7mnrydd5k1joo19nt.webp",
//     },
//     {
//       type: "simple",
//       title: "Enlarged Pores & Uneven Texture",
//       tags: [
//         "Carbon peel",
//         "Microdermabrasion",
//         "Laser resurfacing",
//         "Retinol treatments",
//       ],
//       imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/v1740724458/ClinicalConcerns2/dqzb2zffkozk3vxlau90.webp",
//     },
//     {
//       type: "simple",
//       title: "Double Chin (Face)",
//       tags: [
//         "Fat freezing",
//         "Chin sculpting",
//         "RF tightening",
//         "Kybella injections",
//       ],
//       imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/v1740724195/ClinicalConcerns2/bsxzxshlig0xxknjvyek.webp",
//     },
//   ],

//   "Scalp/Hair Care": [
//     {
//       type: "simple",
//       title: "Hair Thinning",
//       tags: [
//         "PRP therapy",
//         "Mesotherapy",
//         "Hair vitamins",
//         "Minoxidil solutions",
//       ],
//       imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/v1740725436/ClinicalConcerns2/section2/ujwayfvzjpqjsfse7emz.webp",
//     },
//     {
//       type: "simple",
//       title: "Alopecia / Baldness",
//       tags: [
//         "Hair transplant",
//         "Stem cell therapy",
//         "PRP+ treatments",
//         "Microneedling",
//       ],
//       imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/v1740725592/ClinicalConcerns2/section2/btfzdgawgzmda7ovgbt8.webp",
//     },
//     {
//       type: "simple",
//       title: "Other Scalp Conditions",
//       tags: [
//         "Anti-dandruff therapy",
//         "Scalp exfoliation",
//         "Seborrheic dermatitis care",
//         "Fungal treatments",
//       ],
//       imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/v1740725531/ClinicalConcerns2/section2/ez6zeti6s6cbsybzj5cf.webp",
//     },
//   ],

//   "Body Care": [
//     {
//       type: "simple",
//       title: "Stubborn Body Fat",
//       tags: [
//         "CoolSculpting",
//         "Ultrasound cavitation",
//         "Fat burning injections",
//         "Body contouring",
//       ],
//       imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/v1740725723/ClinicalConcerns2/section3/xfkcixsjkycgnyorch3s.webp",
//     },
//     {
//       type: "simple",
//       title: "Excessive Sweating",
//       tags: [
//         "Botox for sweating",
//         "Iontophoresis",
//         "Medical deodorants",
//         "Laser ablation",
//       ],
//       imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/v1740725818/ClinicalConcerns2/section3/mxkzofxcdrrlpfb3ofos.webp",
//     },
//     {
//       type: "simple",
//       title: "Sun Tan & Body Texture",
//       tags: [
//         "Body polishing",
//         "Tan removal peels",
//         "Vitamin C therapy",
//         "Detan masks",
//       ],
//       imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/v1740725889/ClinicalConcerns2/section3/jlmgozuas9hpxbvif7j6.webp",
//     },
//     {
//       type: "simple",
//       title: "Stretch Marks",
//       tags: [
//         "Microneedling",
//         "Laser stretch mark removal",
//         "Collagen boosters",
//         "Fractional RF",
//       ],
//       imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/v1740726009/ClinicalConcerns2/section3/ksu9a0rbejyj6pmcla8v.webp",
//     },
//   ],

//   "Beautifying/Cosmetic Surgery": [
//     {
//       type: "simple",
//       title: "Skin Tags, Moles, Milia Removal",
//       tags: [
//         "Cryotherapy",
//         "RF cautery",
//         "Laser removal",
//         "Scarless removal",
//       ],
//       imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/ClinicalConcerns2/section4/gdfa0rttnhhfl44mcwl5",
//     },
//     {
//       type: "simple",
//       title: "Face & Scalp Cyst Removal",
//       tags: [
//         "Surgical excision",
//         "Local anesthesia procedure",
//         "Minimal scar technique",
//         "Post-care support",
//       ],
//       imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/ClinicalConcerns2/section4/r1zggoxytzllzjsgdj8x",
//     },
//     {
//       type: "simple",
//       title: "Lobuloplasty",
//       tags: [
//         "Earlobe repair",
//         "Split earlobe fix",
//         "Non-surgical method",
//         "Local anesthesia",
//       ],
//       imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/ClinicalConcerns2/section4/suyjlbkph0tkynl5csyf",
//     },
//     {
//       type: "simple",
//       title: "Scar Reduction",
//       tags: [
//         "Laser scar revision",
//         "Scar creams",
//         "Surgical scar removal",
//         "Microneedling",
//       ],
//       imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/ClinicalConcerns2/section4/r20s1l16plxwynfseo3t",
//     },
//     {
//       type: "simple",
//       title: "Dimpleplasty (Face)",
//       tags: [
//         "Cosmetic dimple surgery",
//         "Suture technique",
//         "30-min procedure",
//         "No visible scar",
//       ],
//       imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/ClinicalConcerns2/section4/dnmzaqvtaahrqacyovjw",
//     },
//     {
//       type: "simple",
//       title: "Bichectomy (Face)",
//       tags: [
//         "Buccal fat removal",
//         "Slim face contouring",
//         "Minor surgery",
//         "Quick recovery",
//       ],
//       imageUrl: "https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/ClinicalConcerns2/section4/xicvt2rnyxrhpg6ff68g",
//     },
//   ],
// };

const clinicalData = {
  "Skin/Face Care": [
    {
      type: "detailed",
      title: "Fine Lines & Wrinkles",
      tags: [
        "Botulinum toxin injection",
        "Dermal Fillers",
        "PRP",
        "Face Mesotherapy"
      ],
      imageUrl: Anti_Aging_img
    },
    {
      type: "simple",
      title: "PMU for Face",
      tags: [
        "Lip Blush",
        "Eyebrow MicroPigmentation",
        "Microblading"
      ],
      imageUrl: PMUimg
    },
    {
      type: "simple",
      title: "Active Acne",
      tags: [
        "Phototherapy",
        "Acne Targeting Peels",
        "Anti-Acne Facials",
        "Acne Skin-Care Regime"
      ],
      imageUrl: active_anc_img
    },
    {
      type: "simple",
      title: "Dryness & Dehydration",
      tags: [
        "Hydra-Medi Facials",
        "Hydrating Peels",
        "Hydrapen Treatments",
        "Skin Booster (Volite/Skinvive)"
      ],
      imageUrl: Dehydration_img
    },
    {
      type: "simple",
      title: "Enlarged Pores & Uneven Texture",
      tags: [
        "Carbon Peel Laser",
        "Oxygen Jet Peel",
        "Retinol-Based Treatments",
        "Meso Botox"
      ],
      imageUrl: Enlarged_pores_img
    },
    {
      type: "simple",
      title: "Dark Circles",
      tags: [
        "Under Eye Peels",
        "Under Eye Collagen Therapy"
      ],
      imageUrl: Dark_circles_img
    },
    {
      type: "simple",
      title: "Lip Pigmentation",
      tags: [
        "Lip Peels",
        "Lip Neutralizing Treatment"
      ],
      imageUrl: Lip_pegmentation_img
    },
    {
      type: "simple",
      title: "Dark Spots & Sun damage",
      tags: [
        "Lip Peels",
        "Lip Neutralizing Treatment"
      ],
      imageUrl: Dark_spots_img
    },
    {
      type: "simple",
      title: "Melasma",
      tags: [
        "Lip Peels",
        "Lip Neutralizing Treatment"
      ],
      imageUrl: Lip_pegmentation_img
    },
    // {
    //   type: "simple",
    //   title: "Scar Reduction",
    //   tags: [
    //     "Dermapen/Microneedling",
    //     "Subcision with Fillers",
    //     "TCA Cross",
    //     "Keloid Treatments"
    //   ],
    //   imageUrl: Scar_reduction_img, // <- Add this image
    // },
    // {
    //   type: "simple",
    //   title: "Dark Spots",
    //   tags: [
    //     "Carbon Peel",
    //     "Microdermabrasion",
    //     "Laser Resurfacing",
    //     "Retinol Treatments"
    //   ],
    //   imageUrl: Dark_spots_img
    // },
    {
      type: "simple",
      title: "Saggy Skin",
      tags: [
        "Fat Freezing",
        "Chin Sculpting",
        "RF Tightening",
        "Kybella Injections"
      ],
      imageUrl: Saggy_skin_img,
    },
    {
      type: "simple",
      title: "IV  Therapy",
      tags: [
        "Fat Freezing",
        "Chin Sculpting",
        "RF Tightening",
        "Kybella Injections"
      ],
      imageUrl: Saggy_skin_img,
    }
  ]
,

  "Scalp/Hair Care": [
    {
      type: "simple",
      title: "Hair fall",
      tags: [
        "PRP therapy",
        "Mesotherapy",
        "Hair vitamins",
        "Minoxidil solutions",
      ],
      imageUrl: Hair_fall_img,
    },
    {
      type: "simple",
      title: "Hair loss",
      tags: [
        "Hair transplant",
        "Stem cell therapy",
        "PRP+ treatments",
        "Microneedling",
      ],
      imageUrl: hair_loss_img,
    },
    {
      type: "simple",
      title: "Baldness",
      tags: [
        "Anti-dandruff therapy",
        "Scalp exfoliation",
        "Seborrheic dermatitis care",
        "Fungal treatments",
      ],
      imageUrl: Baldness_img,
    },
    {
      type: "simple",
      title: "Alopecia",
      tags: [
        "Anti-dandruff therapy",
        "Scalp exfoliation",
        "Seborrheic dermatitis care",
        "Fungal treatments",
      ],
      imageUrl: alopecia_img,
    },
    {
      type: "simple",
      title: "Dandruff",
      tags: [
        "Anti-dandruff therapy",
        "Scalp exfoliation",
        "Seborrheic dermatitis care",
        "Fungal treatments",
      ],
      imageUrl: dandruff_img,
    },
    {
      type: "simple",
      title: "Scalp psoriasis",
      tags: [
        "Anti-dandruff therapy",
        "Scalp exfoliation",
        "Seborrheic dermatitis care",
        "Fungal treatments",
      ],
      imageUrl: psoriasis_img,
    },
    {
      type: "simple",
      title: "Scalp irritation",
      tags: [
        "Anti-dandruff therapy",
        "Scalp exfoliation",
        "Seborrheic dermatitis care",
        "Fungal treatments",
      ],
      imageUrl: scalp_irraition_img,
    },
    {
      type: "simple",
      title: "Preterm greying",
      tags: [
        "Anti-dandruff therapy",
        "Scalp exfoliation",
        "Seborrheic dermatitis care",
        "Fungal treatments",
      ],
      imageUrl: preterm_greyiong_img,
    },
    {
      type: "simple",
      title: "Frizzy hair",
      tags: [
        "Anti-dandruff therapy",
        "Scalp exfoliation",
        "Seborrheic dermatitis care",
        "Fungal treatments",
      ],
      imageUrl: Frizzy_img,
    },
  ],

  "Body Care": [
    {
      type: "simple",
      title: "Body fat reduction",
      tags: [
        "Lipolytic Injections",
        "Laser Lipolysis",
        "IV Fatloss Therapy",
        "Mounjaro / Ozempic Injections"
      ],
      imageUrl: Body_r_img,
    },
    {
      type: "simple",
      title: "Tatto removal",
      tags: [
        "PicoLaser"
      ],
      imageUrl: tattoo_removal_img,
    },
    {
      type: "simple",
      title: "Sun tan",
      tags: [
        'Sun tan'
      ],
      imageUrl: sun_te_img,
    },
    {
      type: "simple",
      title: "Skin tags & Moles",
      tags: [
        "RF Cautery"
      ],
      imageUrl: Skin_Molesi_img,
    },
    {
      type: "simple",
      title: "Unwanted Hair",
      tags: [
        "Full Body Laser",
        "Full Arms Laser",
        "Full Legs Laser",
        "Bikini Area Laser",
        "Face Laser",
        "Under Arms Laser",
        "Beard Line Laser",
        "Chin Laser",
        "Side Locks Laser",
        "Upper Lip Laser",
        "Abdomen Laser",
        "Back/Front Laser"
      ],
      imageUrl: un_hair_img,
    },
    {
      type: "simple",
      title: "Double Chin ",
      tags: [
        "Fat Dissolving Injections",
        "Lipolytic Injections"
      ],
      imageUrl: btl_chi_img,
    },
  ],

  "Beautifying/Cosmetic Surgery": [
    {
      type: "simple",
      title: "Face & scalp cyst removal",
      tags: [
        "Cryotherapy",
        "RF cautery",
        "Laser removal",
        "Scarless removal",
      ],
      imageUrl: Face_removal_img,
    },
    {
      type: "simple",
      title: "Lobuloplasty",
      tags: [
        "Surgical excision",
        "Local anesthesia procedure",
        "Minimal scar technique",
        "Post-care support",
      ],
      imageUrl: Lobuloplasty_img,
    },
    {
      type: "simple",
      title: "Dimpleplasty",
      tags: [
        "Earlobe repair",
        "Split earlobe fix",
        "Non-surgical method",
        "Local anesthesia",
      ],
      imageUrl: dimpleplasty_img,
    },

  ],
};


function ClinicalConcerns() {
  const [selectedTab, setSelectedTab] = useState("Skin/Face Care");
  const [selectedCardIndex, setSelectedCardIndex] = useState(0); // Which card is active/expanded
  // New state to track the *specific tag* selected within the active card
  const [selectedTagIndex, setSelectedTagIndex] = useState(null);
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const navigate = useNavigate(); // For navigation

  // Handler for clicking a card to expand/select it
  const handleCardClick = (index) => {
    setSelectedCardIndex(index);
    setSelectedTagIndex(null); // Deselect any tag when a new card is selected
  };

  // Handler for clicking a specific tag
  const handleTagClick = (tagIndex) => {
    if (selectedTagIndex === tagIndex) {
      setSelectedTagIndex(null);
    } else {
      setSelectedTagIndex(tagIndex);
    }
  };


  const handleBookAppointmentClick = () => {
    if (selectedTagIndex !== null) { // Only allow if a tag is selected
      setShowModal(true);
      toast.success("Opening booking form!");
    } else {
      toast.error("Please select a specific concern tag first!");
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleMoreClick = (e) => {
    e.stopPropagation(); // Prevent card selection when clicking "More >"
    navigate("/treatment"); // Navigate to /treatment page
    window.scrollTo(0, 0); // Scroll to top
  };

  return (
    <div className="clinical-concerns-section">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="concerns-header">
        <span className="concerns-label">CONCERNS</span>
        <h2 className="section-title">
          Top Options To <img src={IconAdd} alt="add-icon" /> Concerns <span className="highlight-text">Meet All Your Requirements</span>
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
                setSelectedCardIndex(0); // Reset to first card when tab changes
                setSelectedTagIndex(null); // Reset tag selection
              }}
            >
              {iconsMap[tab]}
              <span>{tab}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="tab-content">
        {clinicalData[selectedTab].map((card, cardIdx) => (
          <div
            className={`concern-card ${selectedCardIndex === cardIdx ? "active" : ""}`}
            key={cardIdx}
            onMouseEnter={() => handleCardClick(cardIdx)} // Use new handler
          >
            <div className="card-info">
              <div className="flex-tags">
                <div className="info-title">
                  <div className="card-number">{String(cardIdx + 1).padStart(2, "0")}.</div>
                  <h3 className="card-title">{card.title}</h3>
                </div>

                {/* SHOW TAGS AND "More >" IF CARD IS SELECTED */}
                {selectedCardIndex === cardIdx && card.tags && (
                  <div className="card-tags">
                    {card.tags.slice(0, 4).map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className={`tag ${selectedTagIndex === tagIdx ? "selected-tag" : ""}`}
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent card selection when clicking tag
                          handleTagClick(tagIdx);
                        }}
                      >
                        {/* Checkmark SVG for each tag, only if selected */}
                        {selectedTagIndex === tagIdx && (
                          <span>
                            ☑ {" "}
                          </span>
                        )}
                        {selectedTagIndex !== tagIdx && (
                          <span>
                            ▢  {" "}
                          </span>
                        )}
                        {tag}
                      </span>
                    ))}
                    {/* "More >" Tag */}
                    <span className="tag more-tag" onClick={handleMoreClick}>
                      More &gt;
                    </span>
                  </div>
                )}
              </div>
              <div
                className={`card-media ${selectedCardIndex === cardIdx ? "card-media-active" : ""}`}
              > {/* No more card-media-active class here */}
                {/* Image dikhana only when card selected */}
                {selectedCardIndex === cardIdx && card.imageUrl && (
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className={`card-image ${selectedCardIndex === cardIdx ? "large-image" : "small-image"}`}
                  />
                )}

                {/* Book Appointment Button - only if card and tag are selected */}
                {selectedCardIndex === cardIdx && ( // Button is visible if card is active
                  <button className="book-appointment-btn btn2" onClick={handleBookAppointmentClick}>
                    <span>
                      {selectedTagIndex !== null ? ( // If a tag is selected
                        <>
                          Book Appointment <ArrowRight className="arrow-icon" size={20} strokeWidth={3} />
                        </>
                      ) : ( // If no tag is selected
                        <>
                          Select Appointment <SquareDashedMousePointer className="arrow-icon" size={20} strokeWidth={3} />
                        </>
                      )}
                    </span>
                  </button>
                )}
                {/* Arrow dikhana only when NOT selected */}
                {selectedCardIndex !== cardIdx && (
                  <CircleArrowDown className="iconDown" size={40} strokeWidth={0.8} />
                )}

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Book Appointment Modal */}
      {showModal && <BookAppointment onClose={closeModal} />}
    </div>
  );
}
export default ClinicalConcerns;
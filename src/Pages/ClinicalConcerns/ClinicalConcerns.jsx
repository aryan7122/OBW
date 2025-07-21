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


import Anti_Aging_img from '../../assets/TrendingTreatments/fliii.jpg'
import Dark_circles_img from '../../assets/TrendingTreatments/Dark circles.webp'
import active_anc_img from '../../assets/TrendingTreatments/active-anc.webp'
import Lip_pegmentation_img from '../../assets/TrendingTreatments/Lip pegmentation.webp'
import Dehydration_img from '../../assets/TrendingTreatments/Dehydration.webp'
import Enlarged_pores_img from '../../assets/TrendingTreatments/Enlarged pores & uneven texture.webp'
import Dark_spots_img from '../../assets/TrendingTreatments/Dark spots.webp'
import Saggy_skin_img from '../../assets/TrendingTreatments/Saggy skin.jpg'
import Scar_reduction_img from '../../assets/TrendingTreatments/Scar Revision or Reduction-min.jpg'

// hair

import Hair_fall_img from '../../assets/TrendingTreatments/Scalp and hair concerns/Rectangle 3463672.png'
import hair_loss_img from '../../assets/TrendingTreatments/Scalp and hair concerns/2149106294 (Small).jpg'
import Baldness_img from '../../assets/TrendingTreatments/Scalp and hair concerns/man-with-hair-loss-problems-derma-roller-hair-loss-stop-balding-alopecia-isolated-white.webp'
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
import IVtherapy_img from '../../assets/TrendingTreatments/IV therapy.jpg'
import Melasma_img from '../../assets/TrendingTreatments/Melesma.jpg'


export  const clinicalData = {
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
        "Laser Toning",
        "Chemical Peels",
        "Vitamin C Facials",
        "Dermaplaning"
      ],
      imageUrl: Dark_spots_img
    },
    {
      type: "simple",
      title: "Melasma",
      tags: [
        "Cosmelan Peel ",
        "Skin Peels",
        "Topical Lightening Agents"    
      ],
      imageUrl: Melasma_img,
    },

    {
      type: "simple",
      title: "Saggy Skin",
      tags: [
        "Thread Lifts",
        "HIFU",
        "Skin Tightening Lasers",
        "Profhilo"
      ],
      imageUrl: Saggy_skin_img,
    },
    {
      type: "simple",
      title: "IV  Therapy",
      tags: [
        "Re-Glow Therapy",
        "Pro-Aging Therapy",
        "Beauty Drip",
        "Hydrating Drip"
      ],
      imageUrl: IVtherapy_img,
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
  const [selectedCardIndex, setSelectedCardIndex] = useState(null); // Which card is active/expanded
  // New state to track the *specific tag* selected within the active card
  const [selectedTagIndex, setSelectedTagIndex] = useState(null);
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const navigate = useNavigate(); // For navigation
  const [selectedTreatment, setSelectedTreatment] = useState("");

  // Handler for clicking a card to expand/select it
  const handleCardClick = (index) => {
    setSelectedCardIndex(index);
    setSelectedTagIndex(null); // Deselect any tag when a new card is selected
  };

  // Handler for clicking a specific tag
  const handleTagClick = (tagIndex, tagValue) => {
    if (selectedTagIndex === tagIndex) {
      setSelectedTagIndex(null);
      setSelectedTreatment("");
    } else {
      setSelectedTagIndex(tagIndex);
      setSelectedTreatment(tagValue);
    }
  };


  const handleBookAppointmentClick = () => {
    // if (selectedTagIndex !== null) { // Only allow if a tag is selected
      setShowModal(true);
  //     toast.success("Opening booking form!");
  //   } else {
  //     toast.error("Please select a specific concern tag first!");
  //   }
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
          {/* Top Options To Concerns <span className="highlight-text">Meet All Your Requirements</span> */}
        Crafted Care for  <img src={IconAdd} alt="add-icon" />      Every Part of You     
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
                          // handleTagClick(tagIdx);
                          handleTagClick(tagIdx, tag); 
                        }}
                      >
                        {/* Checkmark SVG for each tag, only if selected */}
                        {selectedTagIndex === tagIdx && (
                          <span>
                            ✓ {" "}
                          </span>
                        )}
                        {selectedTagIndex !== tagIdx && (
                          <span>
                            {/* ▢  {" "} */}
                          </span>
                        )}
                        {tag}
                      </span>
                    ))}
                    {/* "More >" Tag */}
                    {card.tags.length > 4 && (
                      <span className="tag more-tag" onClick={handleMoreClick}>
                        More &gt;
                      </span>
                    )}

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
                        <>
                          Book Appointment <ArrowRight className="arrow-icon" size={20} strokeWidth={2} />
                        </>
                     
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
      {showModal && <BookAppointment onClose={closeModal} preSelectedTreatment={selectedTreatment} />}
    </div>
  );
}
export default ClinicalConcerns;
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
import { ArrowRight, SquareDashedMousePointer } from 'lucide-react'; // Import ArrowRight from lucide-react
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

// Your clinicalData remains unchanged
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
    setSelectedTagIndex(tagIndex);
    // You can add a toast here if needed, but per "tag select kiye bia book opoment ka pop nhi ayega"
    // it means the modal should only come from the button click.
    // toast.success(`Selected tag: ${clinicalData[selectedTab][selectedCardIndex].tags[tagIndex]}`);
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
            onClick={() => handleCardClick(cardIdx)} // Use new handler
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
                    {card.tags.map((tag, tagIdx) => (
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
                          <>
                            ☑ {" "}
                          </>
                        )}
                        {selectedTagIndex !== tagIdx && (
                          <>
                            ▢  {" "}
                          </>
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
                  <button className="book-appointment-btn btn" onClick={handleBookAppointmentClick}>
                    <span>
                      {selectedTagIndex !== null ? ( // If a tag is selected
                        <>
                          Book Appointment <ArrowRight className="arrow-icon" size={20} strokeWidth={3} />
                        </>
                      ) : ( // If no tag is selected
                        <>
                            Select Appointment <SquareDashedMousePointer  className="arrow-icon" size={20} strokeWidth={3} />
                        </>
                      )}
                    </span>
                  </button>
                )}

                {/* Arrow dikhana only when NOT selected */}
                {selectedCardIndex !== cardIdx && (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" color="#9b9b9b" fill="none">
                    <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="#9b9b9b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
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
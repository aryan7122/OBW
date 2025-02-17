import React, { useState } from "react";
import "./ArticleDetail.scss";
import { FaAngleLeft } from "react-icons/fa";
import { FaLinkedin, FaFacebook, FaTwitter, FaLink } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

const ArticleDetail = () => {
    const data1 = {
        title: "Medi-Facials: The Ultimate Skin Rejuvenation Treatment",
        category: "Skin",
        author: "Aryan Solanki",
        date: "17 February 2025",
        coverImage: "https://s3-alpha-sig.figma.com/img/c08c/bca2/78b2d646e0acb22d61689f83b9d38feb?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ltGvqUU5GEKEhx0ci9-0C-6m2HQP6r0MYMG9H01XGaLeKtTlp0jXIuNSrUAh~m4i2Sg9s8n40McreWFub3K06Ptdz3qY8Q-bmppfarJtrFNOF2RANLptnEdnTiQKSEX2ruNW4zFTRSnBPj8YCSgkq5sOYcby9wIfJ97bcIpOgmhG5ZlRXwcNC~PJJWy5lAT6DZjlJb-Cd72psYv8Hww5hd9EIgBo1wBkGNKxcqgyCBRPuXlrG4C4~gNhpuA6niTg5uubo2x394C0kyGQUobNKoqTtSVDZWfFDDZkTqPpawD0qh0JIPIwxDw3r15Qonmn-2lM66kgHYp1KKxjfL9ANA__",
        sections: [
            {
                heading: "Introduction",
                content: "In today’s fast-paced world, our skin is constantly exposed to pollution, stress, and harsh weather conditions, leading to dullness, breakouts, and premature aging. Medi-facials are an advanced skincare treatment designed to address specific skin concerns using medical-grade ingredients and cutting-edge technology. At OBW Clinic, our medi-facials are customized to rejuvenate, hydrate, and restore your skin’s natural glow."
            },
            {
                heading: "How Do Medi-Facials Work?",
                content: "Unlike regular facials, medi-facials penetrate deeper into the skin using advanced technology like LED therapy, microdermabrasion, oxygen infusion, and chemical peels. These treatments stimulate collagen production, promote cell renewal, and deeply hydrate the skin."
            },
            {
                heading: "Benefits of Medi-Facials",
                list: [
                    "Deeply hydrates & nourishes skin",
                    "Reduces acne, pigmentation & fine lines",
                    "Boosts collagen production for firmer skin",
                    "Removes dead skin cells, leaving a radiant glow",
                    "Customizable for all skin types & concerns"
                ]
            },
            {
                heading: "What to Expect During a Medi-Facial Treatment at OBW Clinic?",
                content: "Your medi-facial session will begin with a skin analysis, followed by a deep cleanse, exfoliation, and treatment using customized serums and advanced technology. The session is relaxing, painless, and takes around 45-60 minutes."
            },
            {
                heading: "Conclusion",
                content: "If you’re looking for a safe, effective way to maintain healthy, youthful skin, book a Medi-Facial at OBW Clinic today!"
            }
        ],
        newsletter: {
            heading: "Subscribe to Newsletter",
            description: "Stay up-to-date with the latest skincare tips and articles by subscribing to our newsletter.",
            placeholder: "Enter your email",
            buttonText: "Subscribe"
        }
    };

    const data2 = {
        title: "Laser Hair Removal: The Hassle-Free Solution for Smooth Skin",
        category: "Skin",
        author: "Aryan Solanki",
        date: "25 January 2025",
        coverImage: "https://example.com/your-image-url.jpg", // Replace with actual image URL
        sections: [
            {
                heading: "Introduction",
                content: "Tired of shaving, waxing, and threading? Laser Hair Removal is a game-changing treatment that offers long-term hair reduction by targeting hair follicles with laser energy. At OBW Clinic, we use advanced laser technology to provide safe and effective results for all skin types."
            },
            {
                heading: "How Does Laser Hair Removal Work?",
                content: "Laser energy is absorbed by the melanin (pigment) in hair follicles, heating them to disable future growth. Multiple sessions ensure that all hair cycles are treated for the best results."
            },
            {
                heading: "Benefits of Laser Hair Removal",
                list: [
                    "Permanent hair reduction",
                    "No more ingrown hairs",
                    "Smooth, silky skin with minimal effort",
                    "Safe & effective for all areas",
                    "Saves time & money in the long run"
                ]
            },
            {
                heading: "What to Expect During Laser Hair Removal at OBW Clinic?",
                list: [
                    "Consultation & Patch Test to determine skin suitability",
                    "Laser Treatment with minimal discomfort",
                    "Post-Treatment Care including sun protection"
                ]
            },
            {
                heading: "Conclusion",
                content: "Ditch the razors and book your Laser Hair Removal sessions at OBW Clinic for smooth, hair-free skin!"
            }
        ],
        newsletter: {
            heading: "Subscribe to Newsletter",
            description: "Stay up-to-date with the latest skincare tips and articles by subscribing to our newsletter.",
            placeholder: "Enter your email",
            buttonText: "Subscribe"
        }
    };

    const data3 = {
        title: "IV Therapy for Skin, Hair & Body Wellness",
        category: "Wellness",
        author: "Aryan Solanki",
        date: "10 February 2025",
        coverImage: "https://img.freepik.com/free-photo/side-view-woman-getting-elbow-prp-treatment_23-2149404696.jpg?t=st=1739620769~exp=1739624369~hmac=e7ea251bb97e59eea402c8fb09a99e9286bc28f3120ede9cabd663d48e3c7fb0&w=1060",
        sections: [
            {
                heading: "Introduction",
                content: "Feeling drained, dehydrated, or struggling with dull skin? IV Therapy at OBW Clinic replenishes essential vitamins, minerals, and hydration directly into your bloodstream for instant rejuvenation."
            },
            {
                heading: "How Does IV Therapy Work?",
                content: "Unlike oral supplements, IV therapy ensures 100% absorption of nutrients, delivering them directly to your cells for maximum effectiveness."
            },
            {
                heading: "Benefits of IV Therapy",
                list: [
                    "Glowing, hydrated skin",
                    "Stronger hair & nails",
                    "Boosted immunity & energy levels",
                    "Detoxification & anti-aging benefits"
                ]
            },
            {
                heading: "What to Expect During IV Therapy at OBW Clinic?",
                content: "A relaxing 30-60 minute session where you receive a customized IV drip while comfortably seated."
            },
            {
                heading: "Conclusion",
                content: "Recharge your skin, hair, and body with IV Therapy at OBW Clinic!"
            }
        ],
        newsletter: {
            heading: "Subscribe to Newsletter",
            description: "Stay informed about the latest health and wellness trends by subscribing to our newsletter.",
            placeholder: "Enter your email",
            buttonText: "Subscribe"
        }
    };

    const data4 = {
        title: "Carbon Laser Peel: The Secret to Flawless Skin",
        category: "Skin",
        author: "Aryan Solanki",
        date: "15 February 2025",
        coverImage: "https://img.freepik.com/free-photo/girl-with-black-mask-lies-table-spa-saloon_8353-5670.jpg?t=st=1739620246~exp=1739623846~hmac=fa5c83525da73d3cb2b601c8094ff55e8cc9d6797416413f95ebd48ecd741070&w=1060",
        sections: [
            {
                heading: "Introduction",
                content: "Struggling with acne, enlarged pores, or oily skin? The Carbon Laser Peel, also known as the Hollywood Peel, deeply cleanses, exfoliates, and brightens your skin. At OBW Clinic, we offer this advanced treatment to enhance your natural glow."
            },
            {
                heading: "How Does Carbon Laser Peel Work?",
                content: "A layer of activated carbon is applied to your skin, absorbing dirt and oil. A laser then vaporizes the carbon, removing impurities and dead skin cells."
            },
            {
                heading: "Benefits of Carbon Laser Peel",
                list: [
                    "Deep cleans pores & controls acne",
                    "Reduces oil production",
                    "Brightens skin & evens tone",
                    "No downtime – walk out glowing!"
                ]
            },
            {
                heading: "What to Expect During Carbon Laser Peel at OBW Clinic?",
                content: "A quick 30-minute treatment that feels warm but painless."
            },
            {
                heading: "Conclusion",
                content: "Get flawless, radiant skin with a Carbon Laser Peel at OBW Clinic!"
            }
        ],
        newsletter: {
            heading: "Subscribe to Newsletter",
            description: "Stay informed about the latest skincare trends and treatments by subscribing to our newsletter.",
            placeholder: "Enter your email",
            buttonText: "Subscribe"
        }
    };

    const data5 = {
        title: "Hair GFC & PRP: The Most Effective Hair Growth Solutions",
        category: "Hair",
        author: "Aryan Solanki",
        date: "15 February 2025",
        coverImage: "https://img.freepik.com/free-photo/young-woman-hair-care-salon_8353-4357.jpg?t=st=1739623323~exp=1739626923~hmac=5b8d0d9530b1707410345e174515d38fdb9920d0fa78fa787ec83bba835228b6&w=1060",
        sections: [
            {
                heading: "Introduction",
                content: "Hair loss can be stressful and frustrating. At OBW Clinic, we offer Hair GFC (Growth Factor Concentrate) & PRP (Platelet-Rich Plasma) Therapy, the latest innovations for natural hair regrowth."
            },
            {
                heading: "How Do Hair GFC & PRP Work?",
                content: "These treatments use growth factors from your blood to stimulate hair follicles and improve scalp health."
            },
            {
                heading: "Benefits of Hair GFC & PRP",
                list: [
                    "Stimulates hair regrowth",
                    "Strengthens weak hair follicles",
                    "Reduces hair thinning & shedding",
                    "Non-surgical & safe"
                ]
            },
            {
                heading: "What to Expect During Hair GFC & PRP at OBW Clinic?",
                content: "Blood is drawn & processed to extract growth factors. The serum is injected into the scalp. Mild redness may occur but fades quickly."
            },
            {
                heading: "Conclusion",
                content: "Restore your hair’s thickness & strength with GFC & PRP Therapy at OBW Clinic!"
            }
        ],
        newsletter: {
            heading: "Subscribe to Newsletter",
            description: "Stay informed about the latest hair care treatments and tips by subscribing to our newsletter.",
            placeholder: "Enter your email",
            buttonText: "Subscribe"
        }
    };

    const data6 = {
        title: "PMU (Permanent Makeup): Enhancing Natural Beauty with Long-Lasting Results",
        category: "Beauty",
        author: "Aryan Solanki",
        date: "17 February 2025",
        coverImage: "https://img.freepik.com/free-photo/beautiful-woman-getting-makeup_1150-13215.jpg?t=st=1739623323~exp=1739626923~hmac=12e8b3185f76a0559978a82d913f1743215b09b525dba3331e5fe71e4a7a36bf&w=1380",
        sections: [
            {
                heading: "Introduction",
                content: "Imagine waking up every day with perfectly shaped brows, defined eyes, and beautifully tinted lips—without spending hours in front of the mirror! Permanent Makeup (PMU) is an advanced cosmetic tattooing technique that enhances facial features by replicating the look of makeup with natural pigments. At OBW Clinic, we specialize in safe, high-quality PMU procedures to help you achieve effortless beauty that lasts for years."
            },
            {
                heading: "How Does PMU Work?",
                content: "PMU involves implanting semi-permanent pigments into the skin using a fine needle or microblade. Unlike traditional tattoos, PMU pigments are designed to fade gradually over time, ensuring a soft, natural appearance."
            },
            {
                heading: "PMU Treatments Offered at OBW Clinic",
                content: "At OBW Clinic, we offer a variety of PMU treatments:",
                list: [
                    "Microblading & Powder Brows – Creates natural, fuller brows",
                    "Eyeliner Tattoo – Defines your eyes with a subtle or bold line",
                    "Lip Blush Tattoo – Enhances lip color & shape for a soft tint",
                    "Scalp Micropigmentation (SMP) – Fills in thinning hair for a denser look"
                ]
            },
            {
                heading: "Benefits of PMU",
                content: "PMU provides several advantages for those seeking long-lasting beauty:",
                list: [
                    "Saves time – No more daily makeup application",
                    "Smudge-proof & waterproof – Always look your best",
                    "Natural-looking results – Enhances your facial features subtly",
                    "Long-lasting – Enjoy 1-3 years of flawless beauty",
                    "Customizable – Choose the shape, color, and style that suits you"
                ]
            },
            {
                heading: "What to Expect During a PMU Session at OBW Clinic?",
                content: "Here's what you can expect during your PMU procedure at OBW Clinic:",
                list: [
                    "Consultation: Our experts assess your facial structure and discuss your desired look.",
                    "Prepping & Numbing: A numbing cream is applied for a comfortable experience.",
                    "Pigment Application: The selected pigment is carefully applied to create a natural effect.",
                    "Healing Process: Mild redness or swelling may occur, but it fades within a few days. A touch-up session may be needed for optimal results."
                ]
            },
            {
                heading: "Conclusion",
                content: "Say goodbye to smudged eyeliner, faded brows, and pale lips! PMU at OBW Clinic is your go-to solution for natural, long-lasting beauty."
            }
        ],
        newsletter: {
            heading: "Subscribe to Newsletter",
            description: "Stay informed about the latest beauty and PMU treatments by subscribing to our newsletter.",
            placeholder: "Enter your email",
            buttonText: "Subscribe"
        }
    };

    const data7 = {
        title: "Skin Brightening: Achieve a Radiant and Even Complexion",
        category: "Skin Brightening",
        author: "Jyoti Jain",
        authorImg: "https://s3-alpha-sig.figma.com/img/fd3d/4c48/a8b689cbbfb343fe22651fcb4dc1c2e0?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Uwb09X8QnrTuT06L7dJd8u5sxBw3oHbOIAU1g1pI~9ECmNkSoBykaf-BY4qOo-WgI0rXokuLYqDaZmAsw3CjcanoV~be1rMIqzpGOdpI8LiMTi9FKiBoXoDHnw5zsIk2qxYEQoHcXzQeqfshBjnb02-DykjfD1VhShrvhcA-1xaLGibRv9qWGsvxEhjP3ppdWTILsUydlP~oMKTSzto~2~tEpiMC6BwjcHP9cyNtKz3g3bEalvUj2hnVZzgT4x6N0X8NWZ9D9J5x4cytjmtB44WXr9qHLgqeUIwtR27m9N0MXTRXybVpOPVQqbfK0K5x-OtGZq9tff6V6Yjc-SA6Wg__",
        date: "Feb 17, 2025",
        coverImage: "https://s3-alpha-sig.figma.com/img/3146/b8f3/4c0dbeeedf9e12561734bcc0ef61f4f3?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=G0vg4rAzRXyispWi3rSdGcg5i0RuGCPk8f86FaINB2PDGce5jOQ8qf9XihpQPZvByz4UVMiCyCpbO2t6FArIs6Bkh2ZKzo07CCxEXZAYv6OoPLiWBWys81yvHHuDeiP91MJrmnx8RRiE6QikbZYwuwJs-JWzlMVtV1CXIJKkyPezfpEsLLSi1spAtAtX6CJI85jXWIzkV0aeYnbU5uvDCUni71wspR8IwH4HNSnjBUZt6ftAQKKCMl9GpSuK7VrwfoeYsf2ZfY6jmtDelCH6Zt-hcJGh4u7OGkSMojcx3PkiDtyBWNM3FJ~0s9~pcqkTwWSB6mzKgux3kOzCY37ZyA__",
        sections: [
            {
                heading: "Introduction",
                content: "Dull, uneven skin tone and dark spots can affect your confidence and make you feel less radiant. Skin brightening treatments at OBW Clinic are designed to target hyperpigmentation, dark spots, and uneven skin tone, helping you achieve a clear, luminous complexion. We use advanced technologies and products to revitalize your skin and restore its natural glow."
            },
            {
                heading: "How Does Skin Brightening Work?",
                content: "Skin brightening treatments work by exfoliating dead skin cells, boosting collagen production, and targeting melanin production to reduce dark spots and uneven tone. At OBW Clinic, we offer a variety of skin-brightening treatments, including chemical peels, mesotherapy, and laser therapy, each customized to address your skin’s specific needs."
            },
            {
                heading: "Benefits of Skin Brightening",
                content: "Skin brightening treatments provide numerous benefits, including:",
                list: [
                    "Even skin tone",
                    "Reduced dark spots and pigmentation",
                    "Enhanced skin radiance and glow",
                    "Stimulates collagen for firmer skin",
                    "Safe and effective for all skin types"
                ]
            },
            {
                heading: "What to Expect During Treatment at OBW Clinic?",
                content: "During your treatment, our experts will assess your skin and guide you through the following steps:",
                list: [
                    "Consultation: Our experts assess your skin and recommend the most suitable treatment.",
                    "Procedure: Depending on the treatment, we’ll perform a gentle exfoliation, laser treatment, or mesotherapy.",
                    "Post-Treatment Care: You may experience mild redness, which fades within a few hours. Regular sun protection is essential during and after treatment."
                ]
            },
            {
                heading: "Conclusion",
                content: "Achieving glowing, even skin has never been easier! Book your skin brightening treatment at OBW Clinic today and let us help you reveal your natural radiance."
            }
        ],
        newsletter: {
            heading: "Subscribe to Our Newsletter",
            description: "Stay updated on the latest anti-aging treatments and skincare tips by subscribing to our newsletter.",
            placeholder: "Enter your email",
            buttonText: "Subscribe"
        }
    };

    const data8 = {
        title: "Hair Transplant: Restore Your Hair, Restore Your Confidence",
        category: "Hair",
        author: "Jyoti Jain",
        date: "08 January 2025",
        coverImage: "https://s3-alpha-sig.figma.com/img/c682/789a/bc9885ea9ae0b68e3e508f7a1c9998b5?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RPj9cYCYavAKTT~ikAnn8c0kUmofVfH9TqDokQHG09NXVdkz0As7IwgnSXl0i-opFPPjnyExupmFgYWlimkyGwjsVywQH8Gsd1SAOGj5rn94-ZH5EYDvZmOFrFOIwC-XbOhG9AX-Naa7xZ31QQ-4Lrmv6mSiRYWbheUfpAMQQIHIaEWAHAMsbXkdVXvxOC7-XDvzf5YHB7vIAA1jkS~t49vejmmp~wh~cryqC~zDmp2ShFFKeggwEif-zK5cnwnsU6OL3~ixBal96do743bKE4EW09j~dV8kpGalDPI0UJqNAwcjPZLmT25S6wXjrMuKvDp82htVRVg1qe8R4sO9Og__",
        sections: [
            {
                heading: "Introduction",
                content: "Hair loss can significantly impact your confidence and self-esteem. At OBW Clinic, we offer hair transplant solutions to help you regain a fuller, natural-looking head of hair. Whether you’re experiencing male or female pattern baldness, our experienced specialists use advanced techniques to provide you with permanent, natural results."
            },
            {
                heading: "How Does Hair Transplant Work?",
                content: "Hair transplant involves transferring hair follicles from a donor area (usually the back or sides of your head) to areas with thinning or no hair. We offer FUE (Follicular Unit Extraction) and FUT (Follicular Unit Transplantation) methods, depending on your condition and preferences."
            },
            {
                heading: "Benefits of Hair Transplant",
                content: "Hair transplants offer numerous benefits, including:",
                list: [
                    "Permanent hair restoration",
                    "Natural-looking results",
                    "Minimal scarring",
                    "Boosts self-confidence",
                    "Low maintenance once healed"
                ]
            },
            {
                heading: "What to Expect During Treatment at OBW Clinic?",
                content: "Here’s what you can expect during a typical hair transplant session at OBW Clinic:",
                list: [
                    "Consultation & Assessment: Our experts evaluate your hair loss pattern and determine the best treatment plan.",
                    "Procedure: The procedure takes about 6-8 hours and is performed under local anesthesia for your comfort.",
                    "Post-Treatment Care: You may experience some swelling or redness, but this will subside within a few days. The results will gradually show in 3-6 months."
                ]
            },
            {
                heading: "Conclusion",
                content: "Don’t let hair loss hold you back. OBW Clinic’s hair transplant treatments can help you achieve the fuller, healthier hair you’ve always wanted."
            }
        ],
        newsletter: {
            heading: "Subscribe to Newsletter",
            description: "Stay updated with the latest beauty and skincare trends by subscribing to our newsletter.",
            placeholder: "Enter your email",
            buttonText: "Subscribe"
        }
    };
    const data9 = {
        title: "Anti-DHT Mesotherapy: Prevent Hair Loss and Promote Hair Growth",
        category: "Hair",
        author: "Aryan Sawant",
        date: "08 January 2025",
        coverImage: "https://s3-alpha-sig.figma.com/img/2bd4/315f/8e3dca5d199aeacf8ee8bba9d452a626?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=t~qDotPnJ8u7GzBUY0vxWwZ5TraxYfm5caH2befT2JYzIDy2R3al8WFr6PWHrKTGfFMFze6SnAnIoQaoK1Ji4UiM3gc8coGk-D1JMSNWiX0zra8n5RSJ9QdmB3FrrlAyCsfy79BsA0Jp2F~gx9Se16ZVJKs4GagAXm~rHV0s32jsN4TStEfrNKMpZIzyHIgJ~si7kxY-65nSueOiZqcqSARLFDsfKOhOepHRVQCrk0WZnyrWhF6~wR0LztUsC0GeVMrmmRprFX7Qh8SwYrORn6oxk9JiyIVotC4veavHE8~SDRkWIiSBh5XZdjr6qRNpW9kqUGh9Q-ZkyLrxDkPZ~w__",
        sections: [
            {
                heading: "Introduction",
                content: "Hair thinning and hair loss can occur due to DHT (dihydrotestosterone), a hormone responsible for weakening hair follicles. At OBW Clinic, we offer Anti-DHT Mesotherapy to block DHT production, stimulate hair follicles, and prevent further hair loss. This treatment is an effective solution for both men and women experiencing thinning hair or pattern baldness."
            },
            {
                heading: "How Does Anti-DHT Mesotherapy Work?",
                content: "Anti-DHT mesotherapy involves injecting micronutrients, vitamins, and DHT blockers directly into the scalp. These injections target the root cause of hair loss and encourage hair regeneration by improving circulation and nourishing hair follicles."
            },
            {
                heading: "Benefits of Anti-DHT Mesotherapy",
                content: "Anti-DHT Mesotherapy offers several benefits, including:",
                list: [
                    "Prevents hair loss",
                    "Stimulates new hair growth",
                    "Strengthens weak hair follicles",
                    "Improves scalp health",
                    "Safe, non-surgical treatment"
                ]
            },
            {
                heading: "What to Expect During Treatment",
                content: "The treatment process includes:",
                list: [
                    "Consultation & Evaluation: We will assess your scalp condition to create a personalized treatment plan.",
                    "Injection Procedure: The procedure takes about 30 minutes and involves minimal discomfort.",
                    "Post-Treatment Care: Mild redness or tenderness may occur, but this usually subsides within a few hours."
                ]
            },
            {
                heading: "Conclusion",
                content: "Take control of your hair growth with Anti-DHT Mesotherapy at OBW Clinic. Let us help you prevent hair loss and restore a healthy scalp for thicker, stronger hair."
            }
        ],
        newsletter: {
            heading: "Subscribe to Newsletter",
            description: "Stay updated with the latest hair care tips and treatments by subscribing to our newsletter.",
            placeholder: "Enter your email",
            buttonText: "Subscribe"
        }
    };
    const data10 = {
        title: "Scar Revision or Reduction Treatments: Smooth and Refined Skin",
        category: "Skin",
        author: "Aryan Sawant",
        date: "08 January 2025",
        coverImage: "https://s3-alpha-sig.figma.com/img/b186/ae0c/1b929aec1b8cf3edd0f5e549406ce70d?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XhjHyTeifZPHaOzJR9HmLMzDJcPR3ry6zKcj7MAVouQXBPvdY88GbN-3Z3DenIxByX4jzgH2pdR9J1JGPugi7VzSzr6e4ckq34MLN5U5U3BZqzdcPGUqwvHAI6ePd-jV39SESvIygVjgJZqXrMIcsSgQPAa1FXcegJ-4V1SwyrFktHqBArsrSelujGR6XMumIsZfU2ANwh-ntIzZJ7-p5myDvEA-dVCWBOpmGMKFgjXAcdQ4WaevH36watjOl-GCr8IAIzosnsVp4jku-MDL1SMFgOVKnMRwVFYRM0-h7BnNSdvmK4aW7Biq-k9XwjzxJhgp0sor67YFzw3tJeQ53Q__",
        sections: [
            {
                heading: "Introduction",
                content: "Scars from acne, surgery, or injury can often leave behind unwanted marks on your skin. At OBW Clinic, we offer advanced scar revision and reduction treatments to help you achieve smooth, flawless skin. Using the latest techniques, we aim to reduce the appearance of scars and improve your skin’s texture."
            },
            {
                heading: "How Do Scar Revision Treatments Work?",
                content: "We use a combination of laser therapies, microneedling, and dermal fillers to break down scar tissue, promote collagen production, and smoothen the skin. The type of treatment varies depending on the size, depth, and age of the scar."
            },
            {
                heading: "Benefits of Scar Revision Treatments",
                content: "These treatments offer the following benefits:",
                list: [
                    "Reduces the appearance of scars",
                    "Improves skin texture and tone",
                    "Promotes natural collagen production",
                    "Boosts skin regeneration",
                    "Minimally invasive with little downtime"
                ]
            },
            {
                heading: "What to Expect During Scar Revision Treatments at OBW Clinic?",
                content: "Here’s what you can expect during your treatment:",
                list: [
                    "Consultation & Assessment: We’ll evaluate your scars and suggest the most suitable treatment.",
                    "Procedure: Depending on the scar type, we may use lasers or microneedling to treat the area.",
                    "Post-Treatment Care: Some redness and swelling may occur, but this will subside within a few days."
                ]
            },
            {
                heading: "Conclusion",
                content: "Say goodbye to visible scars with scar revision treatments at OBW Clinic. Achieve smooth, even skin and boost your confidence today!"
            }
        ],
        newsletter: {
            heading: "Subscribe to Newsletter",
            description: "Stay updated with the latest skincare tips and treatments by subscribing to our newsletter.",
            placeholder: "Enter your email",
            buttonText: "Subscribe"
        }
    };
    const data11 = {
        title: "Laser Resurfacing Treatments: Smooth, Youthful Skin in No Time",
        category: "Skin",
        author: "Aryan Sawant",
        date: "08 January 2025",
        coverImage: "https://s3-alpha-sig.figma.com/img/b186/ae0c/1b929aec1b8cf3edd0f5e549406ce70d?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XhjHyTeifZPHaOzJR9HmLMzDJcPR3ry6zKcj7MAVouQXBPvdY88GbN-3Z3DenIxByX4jzgH2pdR9J1JGPugi7VzSzr6e4ckq34MLN5U5U3BZqzdcPGUqwvHAI6ePd-jV39SESvIygVjgJZqXrMIcsSgQPAa1FXcegJ-4V1SwyrFktHqBArsrSelujGR6XMumIsZfU2ANwh-ntIzZJ7-p5myDvEA-dVCWBOpmGMKFgjXAcdQ4WaevH36watjOl-GCr8IAIzosnsVp4jku-MDL1SMFgOVKnMRwVFYRM0-h7BnNSdvmK4aW7Biq-k9XwjzxJhgp0sor67YFzw3tJeQ53Q__",
        sections: [
            {
                heading: "Introduction",
                content: "Laser resurfacing is one of the most effective treatments for reducing wrinkles, fine lines, and skin blemishes. At OBW Clinic, we use fractional CO2 laser technology to target damaged skin layers, stimulate collagen production, and reveal smoother, more youthful skin."
            },
            {
                heading: "How Does Laser Resurfacing Work?",
                content: "Laser resurfacing involves using a focused beam of light to remove damaged skin layers, stimulating the body’s natural healing process to produce fresh, rejuvenated skin. This treatment can be customized to address various concerns, including wrinkles, pigmentation, and acne scars."
            },
            {
                heading: "Benefits of Laser Resurfacing Treatments",
                content: "These treatments offer the following benefits:",
                list: [
                    "Reduces wrinkles, fine lines, and blemishes",
                    "Improves skin texture and tone",
                    "Stimulates collagen production",
                    "Minimally invasive with quick recovery time",
                    "Safe and effective for all skin types"
                ]
            },
            {
                heading: "What to Expect During Laser Resurfacing at OBW Clinic?",
                content: "Here’s what you can expect during your treatment:",
                list: [
                    "Consultation & Evaluation: We’ll assess your skin concerns and recommend the appropriate treatment.",
                    "Procedure: The treatment typically takes 30-60 minutes, with a mild sensation of warmth.",
                    "Post-Treatment Care: Mild redness and peeling may occur, but this will subside within a few days. Results will improve gradually over 2-4 weeks."
                ]
            },
            {
                heading: "Conclusion",
                content: "For smoother, younger-looking skin, choose Laser Resurfacing at OBW Clinic. Book your treatment today and reveal a fresher, radiant complexion!"
            }
        ],
        newsletter: {
            heading: "Subscribe to Newsletter",
            description: "Stay updated with the latest skincare tips and treatments by subscribing to our newsletter.",
            placeholder: "Enter your email",
            buttonText: "Subscribe"
        }
    };



    const data0 = {
        title: " Not Found This page",
        category: "",
        author: "--",
        authorImg: "",
        date: "--",
        coverImage: "https://img.freepik.com/free-vector/no-data-concept-illustration_114360-626.jpg?t=st=1739623432~exp=1739627032~hmac=3de6e9d64703e8febb50e16ce40786018484b0e98f1e60d292d6445279a54f8f&w=1060",
        sections: [

            {
                heading: "",
                content: ""
            }
        ],
        newsletter: {
            heading: "Subscribe to Our Newsletter",
            description: "Stay updated on the latest anti-aging treatments and skincare tips by subscribing to our newsletter.",
            placeholder: "Enter your email",
            buttonText: "Subscribe"
        }
    };






    const { id } = useParams();
    console.log("Raw articleId:", id);
    const formattedcaaptionImg = decodeURIComponent(id)
        .replace(/-/g, " ") // Hyphen (-) ko space me replace karega
        .replace(/\b\w/g, char => char.toUpperCase()); // Har word ka pehla letter capital karega
    // ✅ URL Slug ko normal text me convert karo
    const formattedId = decodeURIComponent(id).toLowerCase();
    // const formattedId = decodeURIComponent(id).replace(/-/g, " ").toLowerCase();

    console.log("Formatted articleId:", formattedId);

    const getArticleData = () => {
        if (formattedId === "medi-facials:-the-ultimate-skin-rejuvenation-treatment") {
            return data1;
        } else if (formattedId === "laser-hair-removal:-the-hassle-free-solution-for-smooth-skin") {
            return data2;
        } else if (formattedId === "iv-therapy-for-skin,-hair-&-body-wellness") {
            return data3;
        } else if (formattedId === "carbon-laser-peel:-the-secret-to-flawless-skin") {
            return data4;
        } else if (formattedId === "hair-gfc-&-prp:-the-most-effective-hair-growth-solutions") {
            return data5;
        } else if (formattedId === "pmu-(permanent-makeup):-enhancing-natural-beauty-with-long-lasting-results") {
            return data6;
        } else if (formattedId === "skin-brightening:-achieve-a-radiant-and-even-complexion") {
            return data7;
        } else if (formattedId === "hair-transplant:-restore-your-hair,-restore-your-confidence") {
            return data8;
        } else if (formattedId === "anti-dht-mesotherapy:-prevent-hair-loss-and-promote-hair-growth") {
            return data9;
        } else if (formattedId === "scar-revision-or-reduction-treatments:-smooth-and-refined-skin") {
            return data10;
        } else if (formattedId === "laser-resurfacing-treatments:-smooth,-youthful-skin-in-no-time") {
            return data11;
        } else {
            return data0;
        }
    };

    const article = getArticleData();

    const blogs = [

        {
            title: "Top 5 Anti-Aging Treatments for Timeless Beauty",
            p: "Explore the most effective anti-aging solutions, from Botox to fillers, and discover how they help reduce fine lines, restore elasticity, and enhance your natural glow",
            author: "Sameer Devale",
            authorImg:
                "https://s3-alpha-sig.figma.com/img/fd3d/4c48/a8b689cbbfb343fe22651fcb4dc1c2e0?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Uwb09X8QnrTuT06L7dJd8u5sxBw3oHbOIAU1g1pI~9ECmNkSoBykaf-BY4qOo-WgI0rXokuLYqDaZmAsw3CjcanoV~be1rMIqzpGOdpI8LiMTi9FKiBoXoDHnw5zsIk2qxYEQoHcXzQeqfshBjnb02-DykjfD1VhShrvhcA-1xaLGibRv9qWGsvxEhjP3ppdWTILsUydlP~oMKTSzto~2~tEpiMC6BwjcHP9cyNtKz3g3bEalvUj2hnVZzgT4x6N0X8NWZ9D9J5x4cytjmtB44WXr9qHLgqeUIwtR27m9N0MXTRXybVpOPVQqbfK0K5x-OtGZq9tff6V6Yjc-SA6Wg__",
            date: "Jan 14, 2025",
            image:
                "https://s3-alpha-sig.figma.com/img/912c/a837/117c9d64bb86b26a60b5c99bb8b860b8?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ooh36m6ePlF-K-zwS7eGiRgZ~VgJx288VKARbH7EIkJH~F1SWBYePMBt3nt68XpLTPgx6n3MjJN4w6UoBzwY7sIw-mE1fr-NpwxpXC2EJfKN3vm2eQxEyC~HisS8pwfXFcoJDKoCWQvAs-HcZKesZuQhtoJXjOsFbyZ~ODz3~mrbc61cKxcv4skFyc8SNl8j6bMApAzcoeulYwHAxjZ7bYxIWRfnHKLi9o6v2oGTwjm39QZz48ZZC~jzKhEeFJ0xgFV9TPHItxLz6b5NCdWJSeNaIR5nn~8ScfCLNlcpSILoykBA46HueeiKOyKgahXAw~Fq~s-r8vG~NZjQjxg7Xg__", // Replace with your image URL
            category: "Anti-aging",
        },
        {
            title: "Laser Hair Removal: Is it Right for You?",
            p: "Find out everything about laser hair reduction, including how it works, what to expect during sessions, and why it’s a long-term solution for smooth, hair-free skin",
            author: "Jyoti Jain",
            authorImg:
                "https://s3-alpha-sig.figma.com/img/fd3d/4c48/a8b689cbbfb343fe22651fcb4dc1c2e0?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Uwb09X8QnrTuT06L7dJd8u5sxBw3oHbOIAU1g1pI~9ECmNkSoBykaf-BY4qOo-WgI0rXokuLYqDaZmAsw3CjcanoV~be1rMIqzpGOdpI8LiMTi9FKiBoXoDHnw5zsIk2qxYEQoHcXzQeqfshBjnb02-DykjfD1VhShrvhcA-1xaLGibRv9qWGsvxEhjP3ppdWTILsUydlP~oMKTSzto~2~tEpiMC6BwjcHP9cyNtKz3g3bEalvUj2hnVZzgT4x6N0X8NWZ9D9J5x4cytjmtB44WXr9qHLgqeUIwtR27m9N0MXTRXybVpOPVQqbfK0K5x-OtGZq9tff6V6Yjc-SA6Wg__",
            date: "Jan 08, 2025",
            image:
                "https://s3-alpha-sig.figma.com/img/81d9/3752/ba48f7db28f925a9ca9103acbc0f213c?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hrlS5rKjrrnhPXRi~Xn3fE5YYcBMqOl~iRs3i86fxKVuZeWlnAEdBinqT4qU7LVq1iR71oeNNJiAc5N7pRHuE0gT0Dfcn0W~J2iObKVUF440a~X~T-BqBMmrrxXWMTOrY14nqHpIJFLM8o6oyAiflHpcgtv1G7IRsIu2xDYdPHGRtdyyG6F60lrZ0V4O3Wwn~yhf468vECZrjIuY0ozB6IehAgU6VVyQ6IDRqw-QOo3llpqnf0RCwOiaO0xVJYikAJvPnnMgpOW2Z41uSf5lyLi7sADnOMyjjPjIBnbn9XADFkuEKGF-n8odbhGowHHttS05CG4vAEq3x~IRwzRXYg__", // Replace with your image URL
            category: "Hair",
        },
        {
            title:
                "Botox and Fillers Demystified: A Beginner's Guide to Anti-Aging Treatments",
            p: "Struggling with thinning hair? This blog compares PRP and GFC treatments, detailing their benefits, procedures, and results to help you make an informed choice for luscious locks.",
            author: "Jyoti Jain",
            authorImg:
                "https://s3-alpha-sig.figma.com/img/fd3d/4c48/a8b689cbbfb343fe22651fcb4dc1c2e0?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Uwb09X8QnrTuT06L7dJd8u5sxBw3oHbOIAU1g1pI~9ECmNkSoBykaf-BY4qOo-WgI0rXokuLYqDaZmAsw3CjcanoV~be1rMIqzpGOdpI8LiMTi9FKiBoXoDHnw5zsIk2qxYEQoHcXzQeqfshBjnb02-DykjfD1VhShrvhcA-1xaLGibRv9qWGsvxEhjP3ppdWTILsUydlP~oMKTSzto~2~tEpiMC6BwjcHP9cyNtKz3g3bEalvUj2hnVZzgT4x6N0X8NWZ9D9J5x4cytjmtB44WXr9qHLgqeUIwtR27m9N0MXTRXybVpOPVQqbfK0K5x-OtGZq9tff6V6Yjc-SA6Wg__",
            date: "Jan 08, 2025",
            image:
                "https://s3-alpha-sig.figma.com/img/3146/b8f3/4c0dbeeedf9e12561734bcc0ef61f4f3?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=G0vg4rAzRXyispWi3rSdGcg5i0RuGCPk8f86FaINB2PDGce5jOQ8qf9XihpQPZvByz4UVMiCyCpbO2t6FArIs6Bkh2ZKzo07CCxEXZAYv6OoPLiWBWys81yvHHuDeiP91MJrmnx8RRiE6QikbZYwuwJs-JWzlMVtV1CXIJKkyPezfpEsLLSi1spAtAtX6CJI85jXWIzkV0aeYnbU5uvDCUni71wspR8IwH4HNSnjBUZt6ftAQKKCMl9GpSuK7VrwfoeYsf2ZfY6jmtDelCH6Zt-hcJGh4u7OGkSMojcx3PkiDtyBWNM3FJ~0s9~pcqkTwWSB6mzKgux3kOzCY37ZyA__",
            category: "Botox",
        },
    ];


    const handleCopyUrl = () => {
        navigator.clipboard.writeText(url);
        alert("URL copied to clipboard!");
    };

    const handleShare = (platform) => {
        const encodedUrl = encodeURIComponent(url);
        let shareUrl = "";

        switch (platform) {
            case "linkedin":
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
                break;
            case "twitter":
                shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}`;
                break;
            case "facebook":
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
                break;
            default:
                return;
        }

        window.open(shareUrl, "_blank");
    };
    const navigate = useNavigate();
    const HandleNavigation = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };
    const HandleNavigation2 = (title) => {
        const formattedTitle = title.toLowerCase().replace(/\s+/g, "-"); // Slug conversion
        window.scrollTo(0, 0);
        navigate(`/blog-detail/${formattedTitle}`);
    };

// 
    const [email, setEmail] = useState("");

    // Email validation function
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Handle form submit
    const handleSubscribe = (e) => {
        e.preventDefault();

        // Validation check
        if (!email) {
            toast.error("Please enter your email!");
            return;
        }

        if (!isValidEmail(email)) {
            toast.error("Please enter a valid email address!");
            return;
        }

        // Success message
        toast.success("Subscribed successfully!");

        // Console log for debugging
        console.log("Subscribed Email:", email);

        // Reset email input
        setEmail("");
    };
    return (
        <>
            <Toaster position="top-center" />
            <div className="article-detail">
                <button onClick={() => HandleNavigation('/blogs')} className="allBlg"> <FaAngleLeft />All Posts</button>
                <div className="ct-tm">
                    <h3>{article?.category}</h3>
                    <h4>{article?.category ? '5 min read' : ''}</h4>
                </div>
                <div className="header">
                    <h1>{article.title}</h1>

                    <div className="cover-image">
                        <img src={article.coverImage} alt="Cover image" />
                    </div>
                    <div className="meta">
                        <div className="meta-info">
                            <p>
                                Written by <strong>{article.author}</strong>
                            </p>
                            <p>
                                Published on <strong>{article.date}</strong>
                            </p>
                        </div>
                        <div className="meta-icons">
                            <FaLink
                                onClick={handleCopyUrl}
                                className="icon"
                                title="Copy URL"
                            />
                            <FaLinkedin
                                onClick={() => handleShare("linkedin")}
                                className="icon"
                                title="Share on LinkedIn"
                            />
                            <FaTwitter
                                onClick={() => handleShare("twitter")}
                                className="icon"
                                title="Share on Twitter"
                            />
                            <FaFacebook
                                onClick={() => handleShare("facebook")}
                                className="icon"
                                title="Share on Facebook"
                            />
                        </div>
                    </div>

                </div>
                <div className="blog-data-detail">
                    <div className="content">
                        {article.sections.map((section, index) => (
                            <section key={index} className="section">
                                <h2>{section.heading}</h2>
                                <p>{section.content}</p>
                                {section.image &&
                                    <>
                                        <img src={section.image} alt={section.heading} className="section-image" />
                                        <div className="caption_img_">{formattedcaaptionImg}</div>
                                    </>
                                }
                                {section.list && (
                                    <ul>
                                        {section.list.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </section>
                        ))}
                    </div>

                    {/* <aside className="sidebar">
                        <div className="newsletter">
                            <h3>{article.newsletter.heading}</h3>
                            <p>{article.newsletter.description}</p>
                            <input type="email" placeholder={article.newsletter.placeholder} />
                            <button>{article.newsletter.buttonText}</button>
                            <p>By subscribing you agree to with our <a href="">Privacy Policy</a>.</p>
                        </div>
                    </aside> */}
                    <aside className="sidebar">
                        <div className="newsletter">
                            <h3>{article.newsletter.heading}</h3>
                            <p>{article.newsletter.description}</p>

                            <form onSubmit={handleSubscribe}>
                                <input
                                    type="email"
                                    placeholder={article.newsletter.placeholder}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button type="submit">{article.newsletter.buttonText}</button>
                            </form>

                            <p>
                                By subscribing you agree to our{" "}
                                <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
            <div className="article-wrapper">
                <div className="title-all-bg">
                    <h3>Related Posts</h3>
                    <button onClick={() => HandleNavigation("/blogs")}
                        className="btn-view-all">View all</button>
                </div>
                <div className="article-cards">
                    {blogs.map((blog, index) => (
                        <div key={index} className="article-card">
                            <img
                                src={blog.image}
                                alt={blog?.title}
                                className="card-image"
                            />
                            <div className="ct-tm">
                                <h3>{blog?.category}</h3>
                                <h4>5 min read</h4>
                            </div>
                            <h3 className="card-title">{blog?.title}</h3>
                            <h3 className="card-p">{blog?.p}</h3>
                            <div className="author">
                                <div className="aut_text-img">
                                    <img src={blog?.authorImg} />
                                    <div className="aut_text">
                                        <p className="card-author">{blog?.author}</p>
                                        <p className="card-date">{blog?.date}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => HandleNavigation2(`${blog?.title}`)}
                                    className="read-more-btn">
                                    Read Full Blog
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </>
    );
};

export default ArticleDetail;

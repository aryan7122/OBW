import React, { useState } from "react";
import "./ArticleDetail.scss";
import { FaAngleLeft } from "react-icons/fa";
import { FaLinkedin, FaFacebook, FaTwitter, FaLink } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

const ArticleDetail = () => {
    const data1 = {
        title: "The Science Behind Skin Peels: What You Need to Know",
        category: "Skin",
        author: "Aryan Solanki",
        date: "25 January 2025",
        coverImage: "https://s3-alpha-sig.figma.com/img/c08c/bca2/78b2d646e0acb22d61689f83b9d38feb?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ltGvqUU5GEKEhx0ci9-0C-6m2HQP6r0MYMG9H01XGaLeKtTlp0jXIuNSrUAh~m4i2Sg9s8n40McreWFub3K06Ptdz3qY8Q-bmppfarJtrFNOF2RANLptnEdnTiQKSEX2ruNW4zFTRSnBPj8YCSgkq5sOYcby9wIfJ97bcIpOgmhG5ZlRXwcNC~PJJWy5lAT6DZjlJb-Cd72psYv8Hww5hd9EIgBo1wBkGNKxcqgyCBRPuXlrG4C4~gNhpuA6niTg5uubo2x394C0kyGQUobNKoqTtSVDZWfFDDZkTqPpawD0qh0JIPIwxDw3r15Qonmn-2lM66kgHYp1KKxjfL9ANA__",
        sections: [
            {
                heading: "Introduction",
                content: "If you’re looking to rejuvenate your skin, improve texture, or address specific concerns like acne, pigmentation, or fine lines, skin peels could be your secret weapon. These treatments, performed by dermatologists, offer a range of solutions tailored to your skin type and needs. In this guide, we’ll walk you through the different types of skin peels, their benefits, and how to choose the right one for you"
            },
            {
                heading: "What Are Skin Peels?",
                content: "Skin peels, also known as chemical peels, involve applying a solution to the skin to exfoliate its top layers. This process promotes cell turnover, revealing fresher, smoother, and more radiant skin underneath. Depending on the type of peel, they can address various skin concerns, from acne scars to uneven tone.",
                image: "https://s3-alpha-sig.figma.com/img/eefb/2e44/219a501e9aa570ed081638ea5b1db6e3?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sqEGDEjtn2so8~9rSJ9I4LArWWir-hLf-unLbwTu~zbICAVcOrT0XQtMWj4-6cHhlrhn0tHTDMh0I235ZGR~F3WoqdWZwpb8Gwq4Mu8pqo~ts6M9N0uShVxAD6m0m2O-j1Ly4rFRCWOi55p6Z8PPOOOTttcGhSDTqeU3G~Ife3hCVhOV2LI-1eINk2Co3~G1FMWfS-4K3VXXcIy1dKC3DVER32HZIoxwMNNpv5rfqlhMvA6E2Oeu6oB0kJnvF8yKBIAkU9h0rH8H4gAd~yGmr1RrkbczppMGhIcMb67Ps7sZyAYucH4NhZQO2J8QLjaWI43aF6J8T0kwzesiwjuxkA__"
            },
            {
                heading: "How to Choose the Right Peel for You",
                content: "Selecting the perfect peel depends on your skin type, concerns, and goals. Here are some factors to consider:",
                list: [
                    "Skin Concerns: Identify your primary issue, such as acne, pigmentation, or aging.",
                    "Skin Type: Sensitive skin may benefit from gentler options like lactic peels, while oily skin can handle stronger peels like salicylic acid.",
                    "Downtime: Some peels, like TCA, require recovery time, whereas lighter peels have minimal downtime.",
                    "Professional Guidance: Always consult with a dermatologist to ensure the chosen peel is safe and effective for your skin.",
                ]
            },
            {
                heading: "What to Expect During a Skin Peel Treatment",
                content: "Here’s a quick rundown of what typically happens during a skin peel treatment:",
                list: [
                    "Consultation: Your dermatologist will examine your skin and recommend the appropriate peel.",
                    "Preparation: Your skin will be cleansed and prepped for the application.",
                    "Application: The peeling solution is applied and left on for a specific duration."
                ]
            },
            {
                heading: "Conclusion",
                content: `Results depend on the type of peel. Lighter peels may show immediate improvements, while deeper peels require a few days to a week for full effects to appear. Regular sessions can amplify results over time.
                            
                           Skin peels are a transformative treatment that can address various skin concerns and leave you with radiant, youthful skin. By understanding the types of peels and working with a professional, you can achieve your desired results safely and effectively.
                            Ready to embark on your journey to better skin? Book a consultation with OBW Clinical Services today and let us help you glow like never before!`
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
        title: "Laser Hair Removal: Say Goodbye to Unwanted Hair Forever",
        category: "Skin",
        author: "Aryan Solanki",
        date: "25 January 2025",
        coverImage: "https://img.freepik.com/free-photo/silly-adorable-girl-showing-quotation-marks-gesture-smiling-happy_176420-20776.jpg?t=st=1739618135~exp=1739621735~hmac=448c2e55fe5a3976818a52005706bb589dcabeef93980da6d9f9fab2090f9d1e&w=1060",
        sections: [
            {
                heading: "Introduction",
                content: "Unwanted hair can be a persistent problem, requiring constant shaving, waxing, or threading. These methods can be time-consuming, painful, and temporary. At OBW Clinic, we offer advanced Laser Hair Removal, a safe and long-lasting solution to remove unwanted hair and achieve silky smooth skin. "
            },
            {
                heading: "How Does Laser Hair Removal Work?",
                content: "Laser Hair Removal uses concentrated light beams to target and destroy hair follicles. The pigment in the hair absorbs the laser energy, which effectively prevents future growth. Since hair grows in cycles, multiple sessions are required for optimal results. ",
                image: "https://img.freepik.com/free-photo/beautiful-young-girl-beauty-salon_1157-21117.jpg?t=st=1739617778~exp=1739621378~hmac=dd6391869acf5cba251ef056820e9b1c6121692a1f17d918549968d24af398cf&w=1060"
            },
            {
                heading: "Benefits of Laser Hair Removal at OBW Clinic:",
                content: "At OBW Clinic, our expert dermatologists provide customized laser treatments based on your skin type and hair color, ensuring the best results. ",
                list: [
                    "Long-Term Hair Reduction – Say goodbye to frequent shaving and waxing.",
                    "No More Ingrown Hairs – Unlike waxing or shaving, laser treatment reduces ingrown hairs.",
                    "Painless & Quick – Our advanced laser technology ensures minimal discomfort and no downtime.",
                    "Suitable for All Skin Types – Our lasers are safe and effective for various skin tones.",
                    "Saves Time & Money – No need to spend on razors, waxing appointments, or depilatory creams.",
                ]
            },
            {
                heading: "What to Expect During a Skin Peel Treatment",
                content: "Here’s a quick rundown of what typically happens during a skin peel treatment:",
                list: [
                    "Consultation: Your dermatologist will examine your skin and recommend the appropriate peel.",
                    "Preparation: Your skin will be cleansed and prepped for the application.",
                    "Application: The peeling solution is applied and left on for a specific duration."
                ]
            },
            {
                heading: "Conclusion",
                content: `Results depend on the type of peel. Lighter peels may show immediate improvements, while deeper peels require a few days to a week for full effects to appear. Regular sessions can amplify results over time.
                            
                           Skin peels are a transformative treatment that can address various skin concerns and leave you with radiant, youthful skin. By understanding the types of peels and working with a professional, you can achieve your desired results safely and effectively.
                            Ready to embark on your journey to better skin? Book a consultation with OBW Clinical Services today and let us help you glow like never before!`
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
        title: "IV Therapy: The Ultimate Wellness Boost for Your Body",
        category: "Wellness",
        author: "Aryan Solanki",
        date: "10 February 2025",
        coverImage: "https://img.freepik.com/free-photo/side-view-woman-getting-elbow-prp-treatment_23-2149404696.jpg?t=st=1739620769~exp=1739624369~hmac=e7ea251bb97e59eea402c8fb09a99e9286bc28f3120ede9cabd663d48e3c7fb0&w=1060",
        sections: [
            {
                heading: "Introduction",
                content: "Do you often feel tired, dehydrated, or low on energy? Our bodies require essential vitamins and minerals to function at their best. At OBW Clinic, we offer IV Therapy, a quick and effective way to rejuvenate your body, boost energy, and improve overall health.",
                image: 'https://img.freepik.com/free-photo/close-up-woman-getting-prp-treatment_23-2149404690.jpg?t=st=1739621096~exp=1739624696~hmac=769e9b8d84bfc426094d68e204bb79a911e7e3f98cdc60f2ca666125d625ed11&w=1060'
            },
            {
                heading: "How Does IV Therapy Work?",
                content: "IV Therapy delivers essential nutrients directly into your bloodstream, bypassing the digestive system for immediate absorption. Whether you're looking to rehydrate, boost immunity, or recover from fatigue, IV drips can help."
            },
            {
                heading: "Benefits of IV Therapy at OBW Clinic:",
                list: [
                    "Instant Hydration – Replenishes lost fluids and electrolytes.",
                    "Increases Energy Levels – Infuses the body with vital vitamins like B12 and C.",
                    "Strengthens Immunity – Helps fight infections and supports immune function.",
                    "Enhances Skin Health – Hydrates and brightens the skin from within.",
                    "Speeds Up Recovery – Ideal for post-workout recovery, hangovers, and chronic fatigue."
                ]
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
        title: "Carbon Laser Peel: The Ultimate Treatment for Clear & Radiant Skin",
        category: "Skin",
        author: "Aryan Solanki",
        date: "15 February 2025",
        coverImage: "https://img.freepik.com/free-photo/girl-with-black-mask-lies-table-spa-saloon_8353-5670.jpg?t=st=1739620246~exp=1739623846~hmac=fa5c83525da73d3cb2b601c8094ff55e8cc9d6797416413f95ebd48ecd741070&w=1060",
        sections: [
            {
                heading: "Introduction",
                content: "Is acne, enlarged pores, or dull skin affecting your confidence? The Carbon Laser Peel, also known as the 'Hollywood Peel,' is a revolutionary treatment that deeply cleanses the skin, minimizes pores, and enhances your natural glow. At OBW Clinic, we specialize in Carbon Laser Peel to give you flawless, youthful skin."
            },
            {
                heading: "How Does Carbon Laser Peel Work?",
                content: "A layer of medical-grade carbon is applied to the skin, allowing it to absorb oil, dirt, and impurities. A specialized laser then heats and removes the carbon, taking impurities along with it. The result? Instantly refreshed and rejuvenated skin.",
                image: "https://img.freepik.com/free-photo/composition-with-wooden-natural-toothbrushes-black-teeth-whitening-powder-orchid-flower-copy-space_169016-10828.jpg?t=st=1739620719~exp=1739624319~hmac=31c73e27e5f318cd37e48d7f736bd401b57888216822856c50cebce11e75844d&w=1060"
            },
            {
                heading: "Benefits of Carbon Laser Peel",
                list: [
                    "Deep Cleansing – Removes dirt, oil, and dead skin cells.",
                    "Controls Acne & Oil Production – Reduces breakouts and blackheads.",
                    "Brightens & Evens Skin Tone – Instantly enhances your glow.",
                    "Quick & Painless – No downtime, making it perfect for busy schedules.",
                    "Boosts Collagen Production – Improves skin elasticity and smoothness."
                ]
            },
            {
                heading: "Conclusion",
                content: "At OBW Clinic, we ensure that our Carbon Laser Peel treatments are tailored to your skin type, giving you the best possible results. Book your appointment today and experience the magic of clear, radiant skin!"
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
        title: "Understanding the Power of Retinol: A Complete Guide",
        category: "Skin",
        author: "Aryan Solanki",
        date: "10 February 2025",
        coverImage: "https://img.freepik.com/free-photo/young-woman-doing-skin-care_1268-21285.jpg?t=st=1739623323~exp=1739626923~hmac=12e8b3185f76a0559978a82d913f1743215b09b525dba3331e5fe71e4a7a36bf&w=1380",
        sections: [
            {
                heading: "Introduction",
                content: "Retinol has gained immense popularity in the skincare industry, often touted as a miracle ingredient for anti-aging, acne treatment, and overall skin rejuvenation. But what exactly is retinol, and how does it work? In this comprehensive guide, we will break down the benefits, usage, and precautions of incorporating retinol into your skincare routine."
            },
            {
                heading: "What is Retinol?",
                content: "Retinol is a derivative of Vitamin A that promotes skin cell turnover, unclogs pores, boosts collagen production, and reduces fine lines and wrinkles. It is widely used in anti-aging and acne treatments due to its ability to improve skin texture and tone.",
                image: "https://img.freepik.com/free-photo/portrait-beautiful-young-woman-standing_114579-81565.jpg?t=st=1739623345~exp=1739626945~hmac=6a53bf79abf05f27f19dc654b5fbebbaa2d38452dcd6d2030085eeb529e2bd83&w=1060"
            },
            {
                heading: "How to Use Retinol Safely",
                content: "To maximize the benefits of retinol while minimizing irritation, follow these key steps:",
                list: [
                    "Start Slowly: Use retinol 2-3 times a week before gradually increasing frequency.",
                    "Apply at Night: Retinol makes the skin more sensitive to sunlight, so it’s best applied before bed.",
                    "Use Sunscreen: Always wear sunscreen during the day to prevent damage from UV exposure.",
                    "Hydrate: Pair retinol with a good moisturizer to reduce dryness and irritation."
                ]
            },
            {
                heading: "Common Side Effects and How to Manage Them",
                content: "Retinol can cause some initial side effects, especially for beginners. Here’s what to expect and how to handle them:",
                list: [
                    "Dryness & Peeling: Use a hydrating serum or moisturizer to combat dryness.",
                    "Redness & Irritation: If irritation persists, reduce usage to once a week.",
                    "Purging: Some may experience breakouts initially; this is normal and should subside within a few weeks.",
                    "Sun Sensitivity: Never skip sunscreen when using retinol to protect your skin."
                ]
            },
            {
                heading: "Conclusion",
                content: `Retinol is a powerful skincare ingredient that can transform your skin when used correctly. From reducing fine lines and wrinkles to improving acne, its benefits are vast. However, patience is key—results often take weeks or even months to become visible.
                        
                        If you’re ready to take your skincare routine to the next level, consult a dermatologist to find the right retinol product for your skin type. Start slow, stay consistent, and embrace the journey to healthier, glowing skin!`
            }
        ],
        newsletter: {
            heading: "Subscribe to Newsletter",
            description: "Get the latest skincare insights and product recommendations straight to your inbox.",
            placeholder: "Enter your email",
            buttonText: "Subscribe"
        }
    };
    const data6 = {
        title: "Laser Hair Removal: Is it Right for You?",
        category: "Hair",
        author: "Jyoti Jain",
        date: "08 January 2025",
        coverImage: "https://s3-alpha-sig.figma.com/img/81d9/3752/ba48f7db28f925a9ca9103acbc0f213c?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hrlS5rKjrrnhPXRi~Xn3fE5YYcBMqOl~iRs3i86fxKVuZeWlnAEdBinqT4qU7LVq1iR71oeNNJiAc5N7pRHuE0gT0Dfcn0W~J2iObKVUF440a~X~T-BqBMmrrxXWMTOrY14nqHpIJFLM8o6oyAiflHpcgtv1G7IRsIu2xDYdPHGRtdyyG6F60lrZ0V4O3Wwn~yhf468vECZrjIuY0ozB6IehAgU6VVyQ6IDRqw-QOo3llpqnf0RCwOiaO0xVJYikAJvPnnMgpOW2Z41uSf5lyLi7sADnOMyjjPjIBnbn9XADFkuEKGF-n8odbhGowHHttS05CG4vAEq3x~IRwzRXYg__",
        sections: [
            {
                heading: "Introduction",
                content: "Find out everything about laser hair reduction, including how it works, what to expect during sessions, and why it’s a long-term solution for smooth, hair-free skin."
            },
            {
                heading: "What is Laser Hair Removal?",
                content: "Laser hair removal is a cosmetic procedure that uses laser light to target and destroy hair follicles, reducing hair growth over time. It is a popular method for achieving long-term hair reduction.",
                image: "https://s3-alpha-sig.figma.com/img/fd3d/4c48/a8b689cbbfb343fe22651fcb4dc1c2e0?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Uwb09X8QnrTuT06L7dJd8u5sxBw3oHbOIAU1g1pI~9ECmNkSoBykaf-BY4qOo-WgI0rXokuLYqDaZmAsw3CjcanoV~be1rMIqzpGOdpI8LiMTi9FKiBoXoDHnw5zsIk2qxYEQoHcXzQeqfshBjnb02-DykjfD1VhShrvhcA-1xaLGibRv9qWGsvxEhjP3ppdWTILsUydlP~oMKTSzto~2~tEpiMC6BwjcHP9cyNtKz3g3bEalvUj2hnVZzgT4x6N0X8NWZ9D9J5x4cytjmtB44WXr9qHLgqeUIwtR27m9N0MXTRXybVpOPVQqbfK0K5x-OtGZq9tff6V6Yjc-SA6Wg__"
            },
            {
                heading: "Benefits of Laser Hair Removal",
                content: "Laser hair removal offers several benefits, including:",
                list: [
                    "Long-term hair reduction with minimal maintenance.",
                    "Precision targeting of hair follicles without damaging surrounding skin.",
                    "Less painful compared to waxing or epilation.",
                    "Effective for various body areas, including face, legs, and arms."
                ]
            },
            {
                heading: "What to Expect During the Treatment?",
                content: "A typical laser hair removal session involves:",
                list: [
                    "Consultation: Discussing your skin type and hair removal goals with a specialist.",
                    "Preparation: Shaving the area to be treated and avoiding sun exposure.",
                    "Procedure: The laser is applied to the skin, targeting hair follicles with controlled light pulses."
                ]
            },
            {
                heading: "Conclusion",
                content: "Laser hair removal is a highly effective method for achieving smooth, hair-free skin. While multiple sessions may be required for optimal results, it offers long-term benefits compared to traditional hair removal methods. Consult a professional to determine if laser hair removal is right for you!"
            }
        ],
        newsletter: {
            heading: "Subscribe to Newsletter",
            description: "Stay informed about the latest beauty and hair care treatments by subscribing to our newsletter.",
            placeholder: "Enter your email",
            buttonText: "Subscribe"
        }
    };
    const data7 = {
        title: "Botox and Fillers Demystified: A Beginner's Guide to Anti-Aging Treatments",
        category: "Botox",
        author: "Jyoti Jain",
        authorImg: "https://s3-alpha-sig.figma.com/img/fd3d/4c48/a8b689cbbfb343fe22651fcb4dc1c2e0?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Uwb09X8QnrTuT06L7dJd8u5sxBw3oHbOIAU1g1pI~9ECmNkSoBykaf-BY4qOo-WgI0rXokuLYqDaZmAsw3CjcanoV~be1rMIqzpGOdpI8LiMTi9FKiBoXoDHnw5zsIk2qxYEQoHcXzQeqfshBjnb02-DykjfD1VhShrvhcA-1xaLGibRv9qWGsvxEhjP3ppdWTILsUydlP~oMKTSzto~2~tEpiMC6BwjcHP9cyNtKz3g3bEalvUj2hnVZzgT4x6N0X8NWZ9D9J5x4cytjmtB44WXr9qHLgqeUIwtR27m9N0MXTRXybVpOPVQqbfK0K5x-OtGZq9tff6V6Yjc-SA6Wg__",
        date: "Jan 08, 2025",
        coverImage: "https://s3-alpha-sig.figma.com/img/3146/b8f3/4c0dbeeedf9e12561734bcc0ef61f4f3?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=G0vg4rAzRXyispWi3rSdGcg5i0RuGCPk8f86FaINB2PDGce5jOQ8qf9XihpQPZvByz4UVMiCyCpbO2t6FArIs6Bkh2ZKzo07CCxEXZAYv6OoPLiWBWys81yvHHuDeiP91MJrmnx8RRiE6QikbZYwuwJs-JWzlMVtV1CXIJKkyPezfpEsLLSi1spAtAtX6CJI85jXWIzkV0aeYnbU5uvDCUni71wspR8IwH4HNSnjBUZt6ftAQKKCMl9GpSuK7VrwfoeYsf2ZfY6jmtDelCH6Zt-hcJGh4u7OGkSMojcx3PkiDtyBWNM3FJ~0s9~pcqkTwWSB6mzKgux3kOzCY37ZyA__",
        sections: [
            {
                heading: "Introduction",
                content: "Curious about Botox and fillers? These treatments are popular choices for those looking to reduce wrinkles, enhance facial features, and achieve a youthful look. In this guide, we’ll explain what Botox and fillers are, how they work, and what you should consider before getting them."
            },
            {
                heading: "What Are Botox and Fillers?",
                content: "Botox is a neurotoxin that temporarily relaxes facial muscles, reducing the appearance of wrinkles. Fillers, on the other hand, are gel-like substances injected to restore volume, smooth lines, and enhance facial contours."
            },
            {
                heading: "Choosing the Right Treatment",
                content: "Here are some factors to consider before choosing between Botox and fillers:",
                list: [
                    "Wrinkle Reduction: Botox is best for dynamic wrinkles caused by muscle movement.",
                    "Volume Restoration: Fillers are ideal for plumping areas like cheeks and lips.",
                    "Duration: Botox results last around 3-6 months, while fillers can last up to a year or more.",
                    "Professional Consultation: Always seek expert advice to determine which treatment suits your needs."
                ]
            },
            {
                heading: "What to Expect During the Procedure",
                content: "Here’s a brief overview of a typical Botox or filler treatment session:",
                list: [
                    "Consultation: Your provider will discuss your goals and recommend the best treatment.",
                    "Preparation: The area is cleansed, and a numbing agent may be applied.",
                    "Injection: The Botox or filler is injected into specific areas to achieve the desired results."
                ]
            },
            {
                heading: "Conclusion",
                content: "Botox and fillers can be game-changers for those seeking a refreshed appearance. By understanding the differences and consulting with a professional, you can make an informed decision. Ready to enhance your look? Book a consultation with OBW Clinical Services today!"
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
        title: "Laser Hair Reduction: Is It the Right Choice for You?",
        category: "Hair",
        author: "Jyoti Jain",
        date: "08 January 2025",
        coverImage: "https://s3-alpha-sig.figma.com/img/c682/789a/bc9885ea9ae0b68e3e508f7a1c9998b5?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RPj9cYCYavAKTT~ikAnn8c0kUmofVfH9TqDokQHG09NXVdkz0As7IwgnSXl0i-opFPPjnyExupmFgYWlimkyGwjsVywQH8Gsd1SAOGj5rn94-ZH5EYDvZmOFrFOIwC-XbOhG9AX-Naa7xZ31QQ-4Lrmv6mSiRYWbheUfpAMQQIHIaEWAHAMsbXkdVXvxOC7-XDvzf5YHB7vIAA1jkS~t49vejmmp~wh~cryqC~zDmp2ShFFKeggwEif-zK5cnwnsU6OL3~ixBal96do743bKE4EW09j~dV8kpGalDPI0UJqNAwcjPZLmT25S6wXjrMuKvDp82htVRVg1qe8R4sO9Og__",
        sections: [
            {
                heading: "Introduction",
                content: "Find out everything about laser hair reduction, including how it works, what to expect during sessions, and why it’s a long-term solution for smooth, hair-free skin."
            },
            {
                heading: "What is Laser Hair Reduction?",
                content: "Laser hair reduction is a popular cosmetic procedure that uses laser technology to remove unwanted hair. The laser emits light that is absorbed by the pigment in hair follicles, destroying them and reducing future hair growth.",
                image: "https://img.freepik.com/free-photo/laser-epilation-hair-removal-therapy_1303-23659.jpg?t=st=1739625300~exp=1739628900~hmac=7cbacc6fc2aa318334297fa1ecd15074f94e7d762c3e62fb54eaed5a13263d15&w=1060"
            },
            {
                heading: "Benefits of Laser Hair Reduction",
                content: "Laser hair reduction offers several benefits, including:",
                list: [
                    "Long-term hair reduction",
                    "Precision targeting of hair follicles",
                    "Smooth and soft skin",
                    "Minimal discomfort compared to traditional methods"
                ]
            },
            {
                heading: "What to Expect During Treatment",
                content: "A typical laser hair reduction session involves:",
                list: [
                    "Cleansing the treatment area",
                    "Applying a cooling gel",
                    "Using the laser to target hair follicles",
                    "A mild tingling sensation, similar to a rubber band snapping"
                ]
            },
            {
                heading: "Conclusion",
                content: `Laser hair reduction is an effective and convenient solution for those looking for long-term hair removal. It’s safe, efficient, and helps achieve smoother skin with fewer ingrown hairs.
                     
                     If you’re considering laser hair reduction, consult with OBW Clinical Services today to determine the best treatment plan for your needs!`
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
        title: "Hair Loss Solutions: PRP vs. GFC – What Works Best?",
        category: "Hair",
        author: "Aryan Sawant",
        date: "08 January 2025",
        coverImage: "https://s3-alpha-sig.figma.com/img/2bd4/315f/8e3dca5d199aeacf8ee8bba9d452a626?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=t~qDotPnJ8u7GzBUY0vxWwZ5TraxYfm5caH2befT2JYzIDy2R3al8WFr6PWHrKTGfFMFze6SnAnIoQaoK1Ji4UiM3gc8coGk-D1JMSNWiX0zra8n5RSJ9QdmB3FrrlAyCsfy79BsA0Jp2F~gx9Se16ZVJKs4GagAXm~rHV0s32jsN4TStEfrNKMpZIzyHIgJ~si7kxY-65nSueOiZqcqSARLFDsfKOhOepHRVQCrk0WZnyrWhF6~wR0LztUsC0GeVMrmmRprFX7Qh8SwYrORn6oxk9JiyIVotC4veavHE8~SDRkWIiSBh5XZdjr6qRNpW9kqUGh9Q-ZkyLrxDkPZ~w__",
        sections: [
            {
                heading: "Introduction",
                content: "Struggling with thinning hair? This guide explores PRP and GFC treatments, detailing their benefits, procedures, and results to help you make an informed choice for luscious locks."
            },
            {
                heading: "What Are PRP and GFC Treatments?",
                content: "PRP (Platelet-Rich Plasma) and GFC (Growth Factor Concentrate) are two innovative hair restoration therapies that use the body's natural growth factors to stimulate hair growth.",
                // image: "https://s3-alpha-sig.figma.com/img/fd3d/4c48/a8b689cbbfb343fe22651fcb4dc1c2e0?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Uwb09X8QnrTuT06L7dJd8u5sxBw3oHbOIAU1g1pI~9ECmNkSoBykaf-BY4qOo-WgI0rXokuLYqDaZmAsw3CjcanoV~be1rMIqzpGOdpI8LiMTi9FKiBoXoDHnw5zsIk2qxYEQoHcXzQeqfshBjnb02-DykjfD1VhShrvhcA-1xaLGibRv9qWGsvxEhjP3ppdWTILsUydlP~oMKTSzto~2~tEpiMC6BwjcHP9cyNtKz3g3bEalvUj2hnVZzgT4x6N0X8NWZ9D9J5x4cytjmtB44WXr9qHLgqeUIwtR27m9N0MXTRXybVpOPVQqbfK0K5x-OtGZq9tff6V6Yjc-SA6Wg__"
            },
            {
                heading: "PRP vs. GFC: Key Differences",
                content: "Understanding the differences between PRP and GFC can help you choose the best treatment for your hair concerns.",
                list: [
                    "PRP involves drawing blood, processing it, and injecting platelets back into the scalp.",
                    "GFC is a more refined version that extracts only the growth factors, leading to a more concentrated treatment.",
                    "PRP may require more sessions, while GFC often shows results in fewer treatments.",
                    "Both treatments are non-surgical and promote natural hair regrowth."
                ]
            },
            {
                heading: "What to Expect During Treatment",
                content: "Here’s what a typical PRP or GFC session involves:",
                list: [
                    "Consultation: A specialist examines your hair condition and suggests the best option.",
                    "Blood Draw: A small amount of blood is taken from your arm (for PRP or GFC).",
                    "Processing: The blood is processed to extract the required growth factors.",
                    "Injection: The prepared solution is injected into the scalp to stimulate hair growth."
                ]
            },
            {
                heading: "Conclusion",
                content: `Both PRP and GFC treatments are effective for hair regrowth, but the best choice depends on your hair loss severity and goals. GFC offers a more advanced approach with higher concentration, whereas PRP remains a reliable and widely used method.
                    
                    If you're experiencing hair thinning, consulting a dermatologist can help you determine the right treatment. Take the first step towards regaining your confidence with a personalized hair restoration plan!`
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
        title: "The Secret to Radiant Skin: Benefits of Skin Booster Treatments",
        category: "Skin",
        author: "Aryan Sawant",
        date: "08 January 2025",
        coverImage: "https://s3-alpha-sig.figma.com/img/b186/ae0c/1b929aec1b8cf3edd0f5e549406ce70d?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XhjHyTeifZPHaOzJR9HmLMzDJcPR3ry6zKcj7MAVouQXBPvdY88GbN-3Z3DenIxByX4jzgH2pdR9J1JGPugi7VzSzr6e4ckq34MLN5U5U3BZqzdcPGUqwvHAI6ePd-jV39SESvIygVjgJZqXrMIcsSgQPAa1FXcegJ-4V1SwyrFktHqBArsrSelujGR6XMumIsZfU2ANwh-ntIzZJ7-p5myDvEA-dVCWBOpmGMKFgjXAcdQ4WaevH36watjOl-GCr8IAIzosnsVp4jku-MDL1SMFgOVKnMRwVFYRM0-h7BnNSdvmK4aW7Biq-k9XwjzxJhgp0sor67YFzw3tJeQ53Q__",
        sections: [
            {
                heading: "Introduction",
                content: "Want glowing, hydrated skin? Explore the magic of skin boosters and find out how they can enhance your skin’s texture, elasticity, and overall radiance."
            },
            {
                heading: "What Are Skin Booster Treatments?",
                content: "Skin boosters are micro-injections of hyaluronic acid and other skin-rejuvenating ingredients. They hydrate the skin from within, improving its elasticity, smoothness, and radiance.",
                // image: "https://s3-alpha-sig.figma.com/img/fd3d/4c48/a8b689cbbfb343fe22651fcb4dc1c2e0?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Uwb09X8QnrTuT06L7dJd8u5sxBw3oHbOIAU1g1pI~9ECmNkSoBykaf-BY4qOo-WgI0rXokuLYqDaZmAsw3CjcanoV~be1rMIqzpGOdpI8LiMTi9FKiBoXoDHnw5zsIk2qxYEQoHcXzQeqfshBjnb02-DykjfD1VhShrvhcA-1xaLGibRv9qWGsvxEhjP3ppdWTILsUydlP~oMKTSzto~2~tEpiMC6BwjcHP9cyNtKz3g3bEalvUj2hnVZzgT4x6N0X8NWZ9D9J5x4cytjmtB44WXr9qHLgqeUIwtR27m9N0MXTRXybVpOPVQqbfK0K5x-OtGZq9tff6V6Yjc-SA6Wg__"
            },
            {
                heading: "Benefits of Skin Booster Treatments",
                content: "These treatments help in:",
                list: [
                    "Deep hydration and moisture retention.",
                    "Improving skin elasticity and firmness.",
                    "Reducing fine lines and wrinkles.",
                    "Enhancing overall skin radiance and glow."
                ]
            },
            {
                heading: "What to Expect During the Treatment?",
                content: "A skin booster session involves:",
                list: [
                    "Consultation with a skincare specialist to assess your needs.",
                    "Application of numbing cream for comfort.",
                    "Micro-injections of skin-boosting ingredients into targeted areas.",
                    "Post-treatment care to maximize results."
                ]
            },
            {
                heading: "Conclusion",
                content: `Skin booster treatments offer a revolutionary way to rejuvenate your skin by providing deep hydration and nourishment from within.
                
            If you want to achieve a naturally glowing complexion, this treatment could be the perfect solution. Consult with a skincare expert today and take the first step towards radiant skin!`
            }
        ],
        newsletter: {
            heading: "Subscribe to Newsletter",
            description: "Stay up-to-date with the latest skincare tips and articles by subscribing to our newsletter.",
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
        if (formattedId === "the-science-behind-skin-peels:-what-you-need-to-know") {
            return data1;
        } else if (formattedId === "laser-hair-removal:-say-goodbye-to-unwanted-hair-forever") {
            return data2;
        } else if (formattedId === "iv-therapy:-the-ultimate-wellness-boost-for-your-body") {
            return data3;
        } else if (formattedId === "carbon-laser-peel:-the-ultimate-treatment-for-clear-&-radiant-skin") {
            return data4;
        } else if (formattedId === "top-5-anti-aging-treatments-for-timeless-beauty") {
            return data5;
        } else if (formattedId === "laser-hair-removal:-is-it-right-for-you") {
            return data6;
        } else if (formattedId === "botox-and-fillers-demystified:-a-beginner's-guide-to-anti-aging-treatments") {
            return data7;
        } else if (formattedId === "laser-hair-reduction:-is-it-the-right-choice-for-you") {
            return data8;
        } else if (formattedId === "hair-loss-solutions:-prp-vs.-gfc-–-what-works-best") {
            return data9;
        } else if (formattedId === "the-secret-to-radiant-skin:-benefits-of-skin-booster-treatments") {
            return data10;
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

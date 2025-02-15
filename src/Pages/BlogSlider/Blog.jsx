import React, { useEffect, useState } from "react";
import "./Blog.scss";
import Frame from "../../assets/about/Frame.svg";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Blog() {
    const [selectedCategory, setSelectedCategory] = useState("View all");
    const [currentIndex, setCurrentIndex] = useState(0);
    // const itemsPerPage = 7; 
    const [itemsPerPage, setBlogsPerPage] = useState(8);

    useEffect(() => {
        const updateBlogsPerPage = () => {
            if (window.innerWidth <= 700) {
                setBlogsPerPage(4);
            } else if (window.innerWidth <= 1000) {
                setBlogsPerPage(7);
            } else {
                setBlogsPerPage(9);
            }
        };

        updateBlogsPerPage();
        window.addEventListener("resize", updateBlogsPerPage);
        return () => window.removeEventListener("resize", updateBlogsPerPage);
    }, []);


    const blogs = [
        {
            title: "The Science Behind Skin Peels: What You Need to Know",
            p: "Dive deep into the transformative world of skin peels. Learn about their benefits, how they work, and why they’re a go-to solution for acne scars, pigmentation, and rejuvenation.",
            author: "Aryan Sawant",
            authorImg:
                "https://s3-alpha-sig.figma.com/img/fd3d/4c48/a8b689cbbfb343fe22651fcb4dc1c2e0?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Uwb09X8QnrTuT06L7dJd8u5sxBw3oHbOIAU1g1pI~9ECmNkSoBykaf-BY4qOo-WgI0rXokuLYqDaZmAsw3CjcanoV~be1rMIqzpGOdpI8LiMTi9FKiBoXoDHnw5zsIk2qxYEQoHcXzQeqfshBjnb02-DykjfD1VhShrvhcA-1xaLGibRv9qWGsvxEhjP3ppdWTILsUydlP~oMKTSzto~2~tEpiMC6BwjcHP9cyNtKz3g3bEalvUj2hnVZzgT4x6N0X8NWZ9D9J5x4cytjmtB44WXr9qHLgqeUIwtR27m9N0MXTRXybVpOPVQqbfK0K5x-OtGZq9tff6V6Yjc-SA6Wg__",
            date: "Jan 16, 2025",
            image:
                "https://s3-alpha-sig.figma.com/img/c08c/bca2/78b2d646e0acb22d61689f83b9d38feb?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=T-T90hIYR-~mawSZZI5nzpVm3L8kaTNnog0TFpaQ5M3jdveuA7uBkcdoBi1Fyk4-20LwGSgh0LZqXv9Xf7L1GAyc8AKmkCpWZsX2UXq~6acWBgRdFsnkNABLWUyt2VbOneupV1rSaRRg0p3ItwMDcoLRkrKlcvXsYlSBNVdYsW2Cigq1gyFhslrulcEyDcy8DAP6uyBVPHzh4PWP0D1sbQFToasBPhfOo6LVcXOH1a5OOQJjFPuYl3uz7h9UHFPsRfC5fCdu1JeMv9xiJYQK9LSPgAComi6XmejMLXPGWlNoQpOvi9JPnM3105aGRtYk-JL8EyUrGZ5MQ0rXV-kHPw__", // Replace with your image URL
            category: "Skin",
        },
        {
            title: "Laser Hair Removal: Say Goodbye to Unwanted Hair Forever",
            p: "Discover how Laser Hair Removal at OBW Clinic can help you achieve silky smooth skin with a painless and long-lasting solution.",
            author: "Aryan Solanki",
            authorImg: "https://img.freepik.com/free-photo/portrait-smiling-man-eyeglasses_23-2149374636.jpg?t=st=1739619000~exp=1739622600~hmac=6a8b6890be53b7a1a2a51d7a6cde2de89dc2f2e86d5d1699a19df9e6b1b76a1f&w=1060",
            date: "25 January 2025",
            image: "https://img.freepik.com/free-photo/silly-adorable-girl-showing-quotation-marks-gesture-smiling-happy_176420-20776.jpg?t=st=1739618135~exp=1739621735~hmac=448c2e55fe5a3976818a52005706bb589dcabeef93980da6d9f9fab2090f9d1e&w=1060",
            category: "Skin"
        },
        {
            title: "IV Therapy: The Ultimate Wellness Boost for Your Body",
            p: "Discover the benefits of IV Therapy and how it can instantly boost your energy, hydration, and overall wellness.",
            author: "Aryan Sawant",
            authorImg: "https://s3-alpha-sig.figma.com/img/fd3d/4c48/a8b689cbbfb343fe22651fcb4dc1c2e0?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Uwb09X8QnrTuT06L7dJd8u5sxBw3oHbOIAU1g1pI~9ECmNkSoBykaf-BY4qOo-WgI0rXokuLYqDaZmAsw3CjcanoV~be1rMIqzpGOdpI8LiMTi9FKiBoXoDHnw5zsIk2qxYEQoHcXzQeqfshBjnb02-DykjfD1VhShrvhcA-1xaLGibRv9qWGsvxEhjP3ppdWTILsUydlP~oMKTSzto~2~tEpiMC6BwjcHP9cyNtKz3g3bEalvUj2hnVZzgT4x6N0X8NWZ9D9J5x4cytjmtB44WXr9qHLgqeUIwtR27m9N0MXTRXybVpOPVQqbfK0K5x-OtGZq9tff6V6Yjc-SA6Wg__",
            date: "Feb 5, 2025",
            image: "https://img.freepik.com/free-photo/woman-sportwear-holds-fruits_1157-37384.jpg?t=st=1739619694~exp=1739623294~hmac=9bd1599b839f4a4c34782a3c284b3f035462eed5041e686ecf813f68e96160d5&w=1060",
            category: "Wellness",
        },
        {
            title: "Carbon Laser Peel: The Ultimate Treatment for Clear & Radiant Skin",
            p: "Discover how Carbon Laser Peel can give you flawless, glowing skin by removing impurities and boosting collagen production.",
            author: "Aryan Sawant",
            authorImg: "https://img.freepik.com/free-photo/girl-with-black-mask-lies-table-spa-saloon_8353-5670.jpg?t=st=1739620246~exp=1739623846~hmac=fa5c83525da73d3cb2b601c8094ff55e8cc9d6797416413f95ebd48ecd741070&w=1060",
            date: "Feb 15, 2025",
            image: "https://img.freepik.com/free-photo/girl-with-black-mask-lies-table-spa-saloon_8353-5670.jpg?t=st=1739620246~exp=1739623846~hmac=fa5c83525da73d3cb2b601c8094ff55e8cc9d6797416413f95ebd48ecd741070&w=1060",
            category: "Skin"
        },
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
        {
            title: "Laser Hair Reduction: Is It the Right Choice for You?",
            p: "Find out everything about laser hair reduction, including how it works, what to expect during sessions, and why it’s a long-term solution for smooth, hair-free skin",
            author: "Jyoti Jain",
            authorImg:
                "https://s3-alpha-sig.figma.com/img/fd3d/4c48/a8b689cbbfb343fe22651fcb4dc1c2e0?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Uwb09X8QnrTuT06L7dJd8u5sxBw3oHbOIAU1g1pI~9ECmNkSoBykaf-BY4qOo-WgI0rXokuLYqDaZmAsw3CjcanoV~be1rMIqzpGOdpI8LiMTi9FKiBoXoDHnw5zsIk2qxYEQoHcXzQeqfshBjnb02-DykjfD1VhShrvhcA-1xaLGibRv9qWGsvxEhjP3ppdWTILsUydlP~oMKTSzto~2~tEpiMC6BwjcHP9cyNtKz3g3bEalvUj2hnVZzgT4x6N0X8NWZ9D9J5x4cytjmtB44WXr9qHLgqeUIwtR27m9N0MXTRXybVpOPVQqbfK0K5x-OtGZq9tff6V6Yjc-SA6Wg__",
            date: "Jan 08, 2025",
            image:
                "https://s3-alpha-sig.figma.com/img/c682/789a/bc9885ea9ae0b68e3e508f7a1c9998b5?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RPj9cYCYavAKTT~ikAnn8c0kUmofVfH9TqDokQHG09NXVdkz0As7IwgnSXl0i-opFPPjnyExupmFgYWlimkyGwjsVywQH8Gsd1SAOGj5rn94-ZH5EYDvZmOFrFOIwC-XbOhG9AX-Naa7xZ31QQ-4Lrmv6mSiRYWbheUfpAMQQIHIaEWAHAMsbXkdVXvxOC7-XDvzf5YHB7vIAA1jkS~t49vejmmp~wh~cryqC~zDmp2ShFFKeggwEif-zK5cnwnsU6OL3~ixBal96do743bKE4EW09j~dV8kpGalDPI0UJqNAwcjPZLmT25S6wXjrMuKvDp82htVRVg1qe8R4sO9Og__",
            category: "Hair",
        },
        {
            title: "Hair Loss Solutions: PRP vs. GFC – What Works Best?",
            p: "Struggling with thinning hair? This blog compares PRP and GFC treatments, detailing their benefits, procedures, and results to help you make an informed choice for luscious locks.",
            author: "Aryan sawant",
            authorImg:
                "https://s3-alpha-sig.figma.com/img/fd3d/4c48/a8b689cbbfb343fe22651fcb4dc1c2e0?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Uwb09X8QnrTuT06L7dJd8u5sxBw3oHbOIAU1g1pI~9ECmNkSoBykaf-BY4qOo-WgI0rXokuLYqDaZmAsw3CjcanoV~be1rMIqzpGOdpI8LiMTi9FKiBoXoDHnw5zsIk2qxYEQoHcXzQeqfshBjnb02-DykjfD1VhShrvhcA-1xaLGibRv9qWGsvxEhjP3ppdWTILsUydlP~oMKTSzto~2~tEpiMC6BwjcHP9cyNtKz3g3bEalvUj2hnVZzgT4x6N0X8NWZ9D9J5x4cytjmtB44WXr9qHLgqeUIwtR27m9N0MXTRXybVpOPVQqbfK0K5x-OtGZq9tff6V6Yjc-SA6Wg__",
            date: "Jan 08, 2025",
            image:
                "https://s3-alpha-sig.figma.com/img/2bd4/315f/8e3dca5d199aeacf8ee8bba9d452a626?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=t~qDotPnJ8u7GzBUY0vxWwZ5TraxYfm5caH2befT2JYzIDy2R3al8WFr6PWHrKTGfFMFze6SnAnIoQaoK1Ji4UiM3gc8coGk-D1JMSNWiX0zra8n5RSJ9QdmB3FrrlAyCsfy79BsA0Jp2F~gx9Se16ZVJKs4GagAXm~rHV0s32jsN4TStEfrNKMpZIzyHIgJ~si7kxY-65nSueOiZqcqSARLFDsfKOhOepHRVQCrk0WZnyrWhF6~wR0LztUsC0GeVMrmmRprFX7Qh8SwYrORn6oxk9JiyIVotC4veavHE8~SDRkWIiSBh5XZdjr6qRNpW9kqUGh9Q-ZkyLrxDkPZ~w__",
            category: "Hair",
        },
        {
            title: "The Secret to Radiant Skin: Benefits of Skin Booster Treatments",
            p: "Want glowing, hydrated skin? Explore the magic of skin boosters and find out how they can enhance your skin’s texture, elasticity, and overall radiance",
            author: "Aryan sawant",
            authorImg:
                "https://s3-alpha-sig.figma.com/img/fd3d/4c48/a8b689cbbfb343fe22651fcb4dc1c2e0?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Uwb09X8QnrTuT06L7dJd8u5sxBw3oHbOIAU1g1pI~9ECmNkSoBykaf-BY4qOo-WgI0rXokuLYqDaZmAsw3CjcanoV~be1rMIqzpGOdpI8LiMTi9FKiBoXoDHnw5zsIk2qxYEQoHcXzQeqfshBjnb02-DykjfD1VhShrvhcA-1xaLGibRv9qWGsvxEhjP3ppdWTILsUydlP~oMKTSzto~2~tEpiMC6BwjcHP9cyNtKz3g3bEalvUj2hnVZzgT4x6N0X8NWZ9D9J5x4cytjmtB44WXr9qHLgqeUIwtR27m9N0MXTRXybVpOPVQqbfK0K5x-OtGZq9tff6V6Yjc-SA6Wg__",
            date: "Jan 08, 2025",
            image:
                "https://s3-alpha-sig.figma.com/img/b186/ae0c/1b929aec1b8cf3edd0f5e549406ce70d?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XhjHyTeifZPHaOzJR9HmLMzDJcPR3ry6zKcj7MAVouQXBPvdY88GbN-3Z3DenIxByX4jzgH2pdR9J1JGPugi7VzSzr6e4ckq34MLN5U5U3BZqzdcPGUqwvHAI6ePd-jV39SESvIygVjgJZqXrMIcsSgQPAa1FXcegJ-4V1SwyrFktHqBArsrSelujGR6XMumIsZfU2ANwh-ntIzZJ7-p5myDvEA-dVCWBOpmGMKFgjXAcdQ4WaevH36watjOl-GCr8IAIzosnsVp4jku-MDL1SMFgOVKnMRwVFYRM0-h7BnNSdvmK4aW7Biq-k9XwjzxJhgp0sor67YFzw3tJeQ53Q__",
            category: "Skin",
        },
    ];


    const categories = ["View all", "Skin", "Hair", "Anti-aging"];

    // const filteredBlogs =
    //     selectedCategory === "View all"
    //         ? blogs
    //         : blogs.filter((blog) => blog.category === selectedCategory);
    const navigate = useNavigate();
    // const HandleNavigation = (path) => {
    //     navigate(path);
    // };
    const HandleNavigation = (title) => {
        const formattedTitle = title.toLowerCase().replace(/\s+/g, "-"); // Slug conversion
        window.scrollTo(0, 0);
        navigate(`/blog-detail/${formattedTitle}`);
    };
    // 

    // Category filtering logic
    const filteredBlogs = selectedCategory === "View all"
        ? blogs
        : blogs.filter(blog => blog.category === selectedCategory);

    // Pagination logic
    const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
    const visibleBlogs = filteredBlogs.slice(currentIndex, currentIndex + itemsPerPage);

    // Navigation handlers
    const goNext = () => {
        if (currentIndex + itemsPerPage < filteredBlogs.length) {
            setCurrentIndex(currentIndex + itemsPerPage);
        }
    };

    const goPrev = () => {
        if (currentIndex - itemsPerPage >= 0) {
            setCurrentIndex(currentIndex - itemsPerPage);
        }
    };
    return (
        <>
            <div className="blog-page">
                <div className="content_top">
                    <div>
                        <h3 className="blog_title">BLOG</h3>
                        <h2 className="slider-heading">
                            Latest <img src={Frame} alt="" /> Insights
                        </h2>
                        <p className="slider-subheading">
                            Explore in-depth expert advice, insightful tips, and the most
                            current trends in skincare, haircare, and a variety of aesthetic
                            treatments to enhance your beauty routine.
                        </p>
                    </div>
                </div>
                {/* Category Filter */}
                <div className="blogs_card_page">
                    <div className="categories-filter">
                        <h3>Blog Categories</h3>
                        <ul>
                            {categories.map((category) => (
                                <li
                                    key={category}
                                    className={selectedCategory === category ? "active" : ""}
                                    onClick={() => setSelectedCategory(category)}>
                                    {category}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Blog List */}
                    <div className="blog-wrapper">
                        <div className="blog-cards">
                            {visibleBlogs.map((blog, index) => (
                                <div key={index} className="blog-card">
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
                                            onClick={() => HandleNavigation(`${blog?.title}`)}
                                            className="read-more-btn">
                                            Read Full Blog
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Pagination Controls */}
            <div className="pagination">
                <button onClick={goPrev} disabled={currentIndex === 0}>
                    <FaArrowLeft /> Prev
                </button>
                <span> Page {currentIndex / itemsPerPage + 1} of {totalPages} </span>
                <button onClick={goNext} disabled={currentIndex + itemsPerPage >= filteredBlogs.length}>
                    Next <FaArrowRight />
                </button>
            </div>
        </>
    );
}

export default Blog;

import React, { useEffect } from "react";
import "./OurTeam.scss";
import img1 from '../../../assets/TrendingTreatments/img1.jpeg'
import img2 from '../../../assets/TrendingTreatments/img2.jpeg'
import img3 from '../../../assets/TrendingTreatments/img3.jpeg'
import img4 from '../../../assets/TrendingTreatments/img4.jpeg'
import { ArrowRight, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
import fallStr from '../../../assets/about/team.svg'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineDribbble } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";

const data = [
    {
        title: "Mohd Hadi",
        lastName: "Pedicure",
        image: 'https://s3-alpha-sig.figma.com/img/de3e/4daa/293a8968ad076a95934e2d8ac6d37174?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=crSuoPRF7Gy4IJQGAp87jSj999cQx3Wsp70U4h7w8dcMt7skk~mN5u675l3sX-DO5SyA0-lkeBoekwrVbmyT6Y7jh~relNG9Hf7dNK~RKS98PUOxGHVm038IMFpa6gXk7DAEhMohTpymoJPF526rbRHyiwBKLWvnug--0MNzrMGQYAaC5H0dKQkFgw44vZWFpQ8c8vIxJ8vSiMVxEGErihR9Dtd6~OvYWVNtsSL-8ulbrI3tYaMks1kooR57heRNtexoSZDt4XtnLNDEuMhXz12NsOvLdP04QVNQBWjywIjC77ki3C8ahrMCBfZenV0hlqhmMruU-qdMxHN7bILqmw__',
        mediaLink: ['', '', '']
    },
    {
        title: "Nandan Raikwar",
        lastName: "Scalp Treatments",
        image: 'https://s3-alpha-sig.figma.com/img/18f7/db27/726e822e90743bb9fa3e048ccbfe2928?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ucm1xttHD14gvEiIGsKdKt-vMfb6zQAoXAfeL8epSumfySdnueHsNgcZuRxnC61yrkYcMD-SKfjPubCnROXMLRtQghLgIIk7poJy0u8kAcduJdhYnmtql8Cs23xQVRtyQa3wLH5jcKd-uHmDrIum3b1CUIj3gru-xEvzdzqYS4KE07lOf00vTC9TlUhZN~7Ru~fBBIFnoQRHUWi6bGQupvqWR7HNkNxP0DbP9vUh2J0MSeLz~RsretIAR1GkfoXC4cg9seaasKVEBHO8ZOjXgYCtmOWfJrUAMNnXp-Rt-EnS3-quI8aO2nTuvLvMwPoVdOzgvmI6l3Ulbv0JHJbNhQ__',
        mediaLink: ['', '', '']
    },
    {
        title: "Amardeep Singh",
        lastName: "Organic Treatments",
        image: 'https://s3-alpha-sig.figma.com/img/6373/0ee1/eb3b581c208849b40a445919c36bfa90?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tcHJZIfMByW3uUjaF7jlkQhWhPryMJmwwJrkvRVqVblioMVmXSMYls2CHG~Mzei3KkPySpQl0w7LCeSfMvdO9G84ZC6vGxd4cw~rumCaa77VjV7XqSbbJIr57uFrblwo-01ZmxrArtrzY~4MLLlVaPwcs1ewOrt6PJfFfeXqW6~TuNPTqNnZfkWgiF-mtm5kN~z5s~CfCRR~H2E33DxXDk37K~E3ymVQlEZBqsbuBoNzp9K1WgI2t77VzwlNB0ioCNjShLpZLcnuVgigd0~MrcPeUFT79tMnDXsQ92gd248VKFwGnP2uaYP4gwdbnjgrfRaQlVOk1fBmSCxzuTEdxQ__',
        mediaLink: ['', '', '']
    },
    {
        title: "Shalini Jain",
        lastName: "Shave",
        image: 'https://s3-alpha-sig.figma.com/img/b3dc/146d/65e54d82ce17f70fbc6ff98238739126?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uXuJF2IV2qD0DjnKYP0c1XPlbzVl~3h4lm9RCQG3p3tawIQNVK0jIImMEs7K-lMVKru1DPcitjXFJ0ZG2xdRgqSD95z~iCPX5Ma74gnsxm3LFgQiR7efbOIXjvWbQzwzfi6fY~fK4QiGwOnDipzKhtFVe43ueVxHhMJg4KzJaE6tQjFUF6ZoAdmi0wco4E-za9VLpHx-pGm2pRsQE0RncHfg1ZPDEJCOwIAoCP1IXVZJz9ydtLpOvIKEPM8M-twgdLr37ixXsJRLvfZk2QbdUqF7Dso9PmqzLbV2c4pjAEcBZ1lN4j3T5AKPLHK~GIhYaUFRUL~8a3G3AbnXmOOM4w__',
        mediaLink: ['', '', '']
    },
    {
        title: "Hillery Moses",
        lastName: "Facials",
        image: 'https://s3-alpha-sig.figma.com/img/607d/6565/2262ba52bb797aa28132481d22e9ee9d?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=n9GpKS412VFYvAskXVs3wdnDLiNGCc6TPSYYrcCo2IsnH8hoWlmTeApE4T6MvYV2YPt~3Njg5NdKWI8o7Gy86OYxkIz-1Vh6-ON2DuzGMISXTbNhWySZnQ54f1kaC7qTzXLl7ysStGYxsU1EeWphOm4LguodiZ1TFwKqTMjQtbuRSj7RAibGR3RJsaQRf5MocBuQ0vWajIrE4kSx0KYqcAiyjy6Pon-pxzoxnTLNECV1ICrGQHEuRp0bzT5HqTllWYuhqmVcmi9sOrwpZ1Ib-4Be1MpiBxwWIzrHtYZstkfBM8-C98aBe4VIM0n03jB6SUwvR6JKtbKPzWxaKhARmQ__',
        mediaLink: ['', '', '']
    },
    {
        title: "Paartho Ghosh",
        lastName: "Perming",
        image: 'https://s3-alpha-sig.figma.com/img/3788/e20a/7bf3f24f397aa80a726685c93c9bfed5?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=j~SQF81s3~FDfcHzCJxjiFINZdmQ-DY4aDweFLFZbvwrw3Smn1U4PVKB1Xl7AJ4GjTpVrj4uajGxEvD~8BsrMCtXFedT2Mkb4NNlGDb4znDL~h~odtWyEIUCu-ap8uXY86KyiGU6tIhkQpKQzVcxKw5V5NEIGW9~i~F20yu8LMCp-lfNjWkOyi~PRRpn~QSdQFShWsL1WltNCHSE2WIgLXhgC6C-cVhUHNuUxSs30G6EaFY2vX0FEu9fPhbaZzQA3dDi82gf~w-5MXM8muAxKAa-jPuW~tYHW17HRv4jMouEtT99iK~ekUw8pEAeBGKJiPuEhxILjPKPIKSP5sA0hQ__',
        mediaLink: ['', '', '']
    },
    {
        title: "Rahul Choudhary",
        lastName: "Cut and Hair Care",
        image: 'https://s3-alpha-sig.figma.com/img/2a8e/1c73/7e8a9313f52dd3d651dc6249be3bfb93?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SOTxK8wUYbtD2pP-Bik-8lrL-GGlWVk8tul9Ycwi3DzpN70Avn8rdsAzbEha76NnSHSUI1NdrsuIzeYtKKYHUo90~oC5HMjipWsm8jBz7N04BY4f-kNFncb3ScwVSFhuaLp~i4cbbEjQNiYWDc9SFuM7VAoOrgQvwk91qUHe6mv9djr3iHwqsv8OS-HZI73GeZ7hqY~M31tvJs3gFV9vSLCDoXM6kzkufJ9LnClDF7iiYGcTwea7Tk1pxQ8P5VEnOUDQadvHT4usy1YT8TNC0AHWi~FuheSRjtdvY2vKBavoz8dT0y1WIA9SRt1QJfUiiNHMDN6ZsZg2qT-HaHbqXg__',
        mediaLink: ['', '', '']
    },
    {
        title: "Bhavna Goyal",
        lastName: "Beard Colour",
        image: 'https://s3-alpha-sig.figma.com/img/3c19/f708/6bb84b5b692a9b23e4dc49b6b4a5c417?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VBdecwP6AfVVmT7QxZNcVy92zZFkFBos8AQscTFUFxRmVPpltEuHfeAmhLGUguD5sOs6YevCKz2coJWRxyHhbAQLjD0kjRTtLvrrfpXT7AXzKjTBuim5OVSblOcSb1KGIINSZAE0mZ-XG8nY~xtzzfk57C1158jcXbvN7a6KuewweRi1pNs07a2HbvEDO5fkvvJQGlUPXSt6oR5TKadGJu1PU~OPGqM8~dpmuR9jCWXjeeOWPAFtJQeIlxQ~ri2G0FiX8jbKEwU4KMnJhjfzlTrPC04HZ8KTBVjEvznU71PXcKOaF6SzTeLmkrg83ySj1hxvA~jN2rX6T9J-amsTdg__',
        mediaLink: ['', '', '']
    },
];

const OurTeam = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    const navigate = useNavigate();
    const HandleNavigation = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };
    return (
        <div className="OurTeam-" id="meet-section">
            <div className="title-sbt">Our Team</div>
            <header className="heading-section">
                <div>
                    <h1 className="trending-title">
                        Meet Of  <span className="heart">  <img src={fallStr} /></span> experts
                    </h1>
                    <p className="lastName">
                        Meet our team of experts who are dedicated to providing you with the best solutions. With years of experience in their respective fields, they are here to share their knowledge and insights to help you succeed. Get to know them and discover how they can assist you on your journey!
                    </p>
                </div>
                <button onClick={() => HandleNavigation("/contact")} className="Contact-Now">Contact us now  <ArrowRight className="arrow-icon" size={20} strokeWidth={3} /></button>
            </header>

            <div className="cards-container">
                {data.map((treatment, index) => (
                    <div key={index} className="card">
                        <div className="card-image">
                            <img src={treatment.image} alt={treatment.title} className="" />
                        </div>
                        <h3 className="card-title">{treatment.title}</h3>
                        <p className="card-lastName">{treatment.lastName}</p>
                        <div className="media">
                            <FaLinkedin className="icon" />
                            <FaXTwitter className="icon" />
                            <AiOutlineDribbble className="icon" />
                        </div>
                    </div>
                ))}
            </div>

            <footer className="footer-section-">
                <div>
                    <h3>We’re hiring!</h3>
                    <p>Our team is growing fast and we’re always looking for smart people.</p>
                </div>
                <button className="Book-Now" onClick={() => HandleNavigation("/contact")}>View open roles  <ArrowRight className="arrow-icon" size={20} strokeWidth={3} /></button>
                {/* <div className="next-btn"><a href="">Next</a> <ChevronRight color="#5B2F2F" /> </div> */}
            </footer>
        </div>
    );
};

export default OurTeam;

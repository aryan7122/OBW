import { ArrowRight } from "lucide-react";
import React, { useEffect } from "react";
import "./OurTeam.scss";
// import { Button } from "@/components/ui/button";
import { AiOutlineDribbble } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import fallStr from '../../../assets/about/team.svg';

const data = [
    {
        title: "Mohd Hadi",
        lastName: "Pedicure",
        image: 'https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/MeetOfExperts/ndmpband05e7zveuwmvw',
        mediaLink: ['', '', '']
    },
    {
        title: "Nandan Raikwar",
        lastName: "Scalp Treatments",
        image: 'https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/MeetOfExperts/n8g7dy1jislpz4ww8182',
        mediaLink: ['', '', '']
    },
    {
        title: "Amardeep Singh",
        lastName: "Organic Treatments",
        image: 'https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/MeetOfExperts/j5mgku4ciydn3ihvnjmf',
        mediaLink: ['', '', '']
    },
    {
        title: "Shalini Jain",
        lastName: "Shave",
        image: 'https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/MeetOfExperts/z4fqmdcox7wpjhe5sjmw',
        mediaLink: ['', '', '']
    },
    {
        title: "Hillery Moses",
        lastName: "Facials",
        image: 'https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/MeetOfExperts/ez8i0srbe2irqobdn8b9',
        mediaLink: ['', '', '']
    },
    {
        title: "Paartho Ghosh",
        lastName: "Perming",
        image: 'https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/MeetOfExperts/ff5sbmxbo1ctjzyjz1vt',
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
                        Meet Of  <span className="heart">  <img src={fallStr} /></span> Experts
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

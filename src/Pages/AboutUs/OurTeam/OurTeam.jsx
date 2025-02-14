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
        image: 'https://s3-alpha-sig.figma.com/img/de3e/4daa/293a8968ad076a95934e2d8ac6d37174?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eZSw3~KG4uMVGkOGv2prOmCgydItdu~UDk02REN0HrYxSaAASi517DELyxU2bptNoP2gi-~3~yZEaUglj1P9mOCj4yXg2Fo2mF4GVIZ~4dO-Zf8fv5k~uMO9RsSgrT2CGOOw~ujlXZIyMRV6C5qhzstXOMPvEicCIRwza8tmQD6EZ9EOSqYiLLIpMp8IZzRVhwdTqTNZIgIK4f~F9sA-2YSub~5oa0-CVvfkyBQhY7AxDdkteRyO4VoPOhLgFCqk81zYqqFfqoOkTLyNYI3Yikot1Buz3~bfAwgmHIEDBJD3iN2FhtS8FXTBzQ3jesQBnkI1lY0E-24P2lS4RmMB4w__',
        mediaLink: ['', '', '']
    },
    {
        title: "Nandan Raikwar",
        lastName: "Scalp Treatments",
        image: 'https://s3-alpha-sig.figma.com/img/18f7/db27/726e822e90743bb9fa3e048ccbfe2928?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MtOIXoUd5MLA1tsZSrkeTzi1k3jDMUdAFf~F-J09CDjJQ1X8GuQMvP~jtJ0gdpiTDT3vydWGx1c8L9R1fwZ3MdeB9bZ44kVQv6IFXvE9cXmSpGyf9v40yJdB~8V9zEg4dd7HrUec2a0v~f3OLL0Nr0Je9j~JRc0USZrER6L6rDFgjO7HswDO2qr4mp92vbe8b9UP4y0P8vdKqw3E4rgJxqq0j57U1xz7~5odvMdYgPG~X1JflUAN9KcO91jCx6p9ViyBPPl8zb6Horj-hk7BN~Q7nELI9HfhGG5OrkvRhxNt42AJFJ5MJzXx-bc97jaeyWlM~aKyiWdPYR6XFroiAw__',
        mediaLink: ['', '', '']
    },
    {
        title: "Amardeep Singh",
        lastName: "Organic Treatments",
        image: 'https://s3-alpha-sig.figma.com/img/6373/0ee1/eb3b581c208849b40a445919c36bfa90?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ir36Oc80SrxXSIxooRCbONxpztbeFA3d~5HmFgvurvGIB5AStHOJkgtiZpKstkOeHDEscWm-HmS1XcqYATUtbNB6oZi4ugmIKhgGrBYHRccgXMRi-ABsN1pDVW-80KDoysWLBkGkeb~mpMbr2BQoawnSX8nmbcYkI1blSH39omkP3r6BZf~Pg6a~yDehAVMAffi-1iOoHFDaC8KVYh2vuYatxdh2qha6pYCUAD8hQhoIWRQII1N9v-ATZsxJzgNQHiWjJkkZEr62NmSBBQycof53JTa~wLAods2Zxm4nPm5nJmHiNW9kkrnH0sK4rvaPidZOKqifWNe12wW~ubrhOw__',
        mediaLink: ['', '', '']
    },
    {
        title: "Shalini Jain",
        lastName: "Shave",
        image: 'https://s3-alpha-sig.figma.com/img/b3dc/146d/65e54d82ce17f70fbc6ff98238739126?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UWspRTfi~0D8-xLRXzwUWUT3PabO-4OM4--yvd-ZLYSvS5dopLxztX7tTQ8VsVTnpiHKf5GpbJcebUtHG6ZTGYqEkAqHOf4ZGe0qU2~swrKkDHRboRemeE1dIpc4yRhY3rSU1pNCROEtoHQ~N1tUDTSwOozJRclDor5QpVRwtZGVc9FiodpBb88syKZHNo-~cmUOKm0owrk42JtYzNupC66pUKwWdy4qiuDZm-5uqIBRdQLi9I7RROx5PnbUD8AjXJRdHfuFJ9Sb3hmdli3ECeD4bzv3gS2bTLl44HQTOoqxMRYG5urAQrIcFerKky9-24xPc6YIzb2iDKHJR2nfCg__',
        mediaLink: ['', '', '']
    },
    {
        title: "Hillery Moses",
        lastName: "Facials",
        image: 'https://s3-alpha-sig.figma.com/img/607d/6565/2262ba52bb797aa28132481d22e9ee9d?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VtKUL~KEf2f4PrDdTUlVvw4J-3Jzxjj-ip4vK8zAJKrFdT6HKlx65W23fs8vRROY2e9p9pB4PgwMTJYAIXjnnod2xpuWpZnR2mF~EyHgFR214o1M4C37MmrpQiTPhw~Ha6ZkXcRYcrf~G1zant8bLn8~5mNQZCUUQqezgc-wPY2Zrg2-wzgtER3JdauZ4sNmcdRnEdgDyT25T~J-3qjDvwtGLWMKJ7WkuOKAwNgpWpB-8D~ERVu6cxe79QQy12fhjcXebUUdgTxILQ0eK5k~saUlVprsz72527Fsr5wnEVrCsuQ6bXe37jUD7-vUHGtTpaOwfYp5kMNbkNM9KdeI9A__',
        mediaLink: ['', '', '']
    },
    {
        title: "Paartho Ghosh",
        lastName: "Perming",
        image: 'https://s3-alpha-sig.figma.com/img/2a8e/1c73/7e8a9313f52dd3d651dc6249be3bfb93?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qktRYwbn1SfwW7lfPKnQfTeOzRjm9RbemOv7gG2O8ayb4734tTwopElMg6SarZTPRZaNXuhUNYFsM4qdxudU58kCcJ7CD~al4S-hJCkKc0ndeHyvk6Vrr~Y6jo8wEnUuR~X2v9Wq4-9Ukx4apJarlogvoVw6gbC0qBKIKI4kzjyWte-qNQ3t3u~eiIH1CpvXjhMw~m8BM04048XqZ6M25faul3i1IpuwwxWHJOdtiMNcn1gjOowhkRlsp68bq3eZUKEER7yYyIQQxTpQUYe-HATk7R9ticlH9t~kjPZ6vBAj8cqBOcwFiGvzFSzpfLYAMWOmwSNrhGqPJvcLAYqQAw__',
        mediaLink: ['', '', '']
    },
    {
        title: "Rahul Choudhary",
        lastName: "Cut and Hair Care",
        image: 'https://s3-alpha-sig.figma.com/img/3788/e20a/7bf3f24f397aa80a726685c93c9bfed5?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LnOtRykJtMx975wOEL7h3xd3y1Ki5Kt9Jr2dt-nCrybQPQZUZoSLryXjd050t2XtiVPl8lieDE4d8PiMKAMVyR122ddNm-NJhXs1V3H3bNJ6PL384m48jkws-16I4IP9IGD8AL6P~viNL1CkabINbzVBhA6guyFI~67zQnAvUraNFzYsq8aRf4jB7OPzup8ni4xP48bLo5Ti~3GdfItkF00tKqdxGqXTuDpcp5VT7ws6u-MtGXY2g1TfULOQLTq~CP06MneuszInFuNEEqM4LjUdniQF3MGO78FzPAlJlZH0SVUtRJFzl18JgP1gwgkrZPcB67ix1lh~wHWxhWvNbQ__',
        mediaLink: ['', '', '']
    },
    {
        title: "Bhavna Goyal",
        lastName: "Beard Colour",
        image: 'https://s3-alpha-sig.figma.com/img/3c19/f708/6bb84b5b692a9b23e4dc49b6b4a5c417?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RcGi~tF5wef0U3JR6Nmgjj2BppP-mkcEcyVUERKXn4LBgbSi8emYaunKhcHQkt~l6EtYhe8zXTdW~D88hBAvSCgiELm~zkbWxNNwBjhrUKytPX~XvqlcQaewfWWl9-axpiVEw6IVKnXl2Em0HTuW2V1-VFZcvGKMNsCSAWARSFE6rqABMDlgU6I8AIuo7MBwSxyHS4BNyxokAOJCKJ1Ae1NbOv8OXu68UsYK16hKC4vmBHqySiXw-7BxxPAPi1F~eq3VmpasNc6IbvwX-gbe6cAAESvw3DuMh-t-8p771qer-O6R1MEdxnU8WDJiPaVJgRIGMeMA1zybo8w-g0lM~Q__',
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

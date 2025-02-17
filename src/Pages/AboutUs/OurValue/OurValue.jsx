import React from "react";
import "./OurValue.scss";
import img1 from '../../../assets/TrendingTreatments/img1.jpeg'
import img2 from '../../../assets/TrendingTreatments/img2.jpeg'
import img3 from '../../../assets/TrendingTreatments/img3.jpeg'
import img4 from '../../../assets/TrendingTreatments/img4.jpeg'
import { ArrowRight, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
import fallStr from '../../../assets/about/fallStr.svg'
import { useNavigate } from "react-router-dom";
const treatments = [
    {
        title: "Excellence in Aesthetics",
        description: "We combine advanced technology with expert care to deliver high-quality, result-driven treatments. ",
        image: 'https://s3-alpha-sig.figma.com/img/b38f/ae75/841ab6368f6b4e6d3eb5a7f19757eeda?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KrQ8WZ2Wq~LXIBvK-DsKL8ciZJX-eUzgLlVLd6wyzgo-n6fK-seqcN2e-bvDN~y9pmeHLkDJd1qIyMDTPcG1fIfn~NEJQzEvPVqZL39F9djw31yPcm62Dhv8f2vxHPSi~wZr3j4xkQdz4eTaGe4Xc12dI4VTT2iKQRONxm9dOeQwD~ZMwt8ITVkhYvthBZo0Vqjh~xdDllC8jQTU3a5iQ5KLooSFywbUrf7kDnVwxENVh29y9QS1nVGwHc3tLCFvRBKZoqabE32MJN0sgTrBeruPC~915~uq7PFaLIG9dlZxJPRYye5iSYEXd4h08ZIH6d10ex03r54GUk7o2w~5JA__',
    },
    {
        title: "Personalized & Holistic Approach",
        description: "Every client is unique, and we customize our treatments to meet individual beauty and wellness goals. ",
        image: 'https://s3-alpha-sig.figma.com/img/6283/2809/84f687ae559e541ed4cea11d5462230c?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MmvvaKhRZ1BCK-VwolhTx18qKPwQwFBIRvKt8UyIqg-PBCSPRx8GPncBwWjVGVrRXi4exSDOJ9gBMHsldSwFawQBKoopLRZx1TZjOefRaA7DDVPTSVN2WuT7JbG4-YD05Ly5rulozvxs158-Xa5ZynByaHkeeq20u-TMY1rSronoTBRBoXET-c8jONeNhAmAUvw~A6W1TVjjaFaamfecc02iPnEZoa~1CAxcDJSqMeF3fzXUTYtcbM-bw~LYhvJxOHRi2QWJLG4eze1qeyB01OfkI0g~3326YgNZ1I6q13WzAJCjwfUFMu0v8jdJSjBDTJvqbOSbQpLNSv~jKaq9-A__',
    },
    {
        title: "Commitment to Safety & Quality ",
        description: "We use only clinically tested, dermatologically safe products and FDA-approved procedures to ensure the best care.",
        image: 'https://s3-alpha-sig.figma.com/img/9cd6/43b9/e3d4068fb1d8de500a768ea3c0dac166?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=q3hlvxg6TpYasJXKSNANnrZIiVLmpxOdid9PBJ4XB4-dgvImKFXPYgr-82xev~DqTdfEEFmKoQdp4v6MKLwwPJmLZpEOw9i8ITUJPT5G0pWGdHnTCiRpj-tXu-ot1XcTfq881CuDMhzPwh3fC4voQ6CpPdcxVYBEh1BDJo1C5f9qZcI0Tu~LIPQH1R7I85OkRpg5CyAUfNbjCQwwCNp1at~3D3HMrB0kVv9oUQInWmOtNF88W6RQZqCojs6rO7WNqCA58qpQCl4UxzYPskziKlquUi7ttvTePwegORBY0P-nPN8CCcV~XFGyKJnf26slZ1~WZqfnxVhF8kIHR~PU3Q__',
    },
];

const OurValue = () => {
    const navigate = useNavigate();
    const HandleNavigation = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };
    return (
        <div className="OurValue-treatments">
            <div className="title-sbt">Our Values</div>
            <header className="heading-section">
                <h1 className="trending-title">
                    What We  <span className="heart"><img src={fallStr} alt="" /></span>      Stand For
                </h1>
                <p className="description">
                    At OBW Clinic, we believe in delivering exceptional care, transformative results, and a holistic approach to beauty and wellness. Our mission is to provide safe, effective, and personalized treatments that enhance confidence and well-being.
                </p>
            </header>

            <div className="cards-container">
                {treatments.map((treatment, index) => (
                    <div key={index} className="card_">
                        <div className="card-image">
                            <img src={treatment.image} alt={treatment.title} className="" />
                        </div>
                        <h3 className="card-title">{treatment.title}</h3>
                        <p className="card-description">{treatment.description}</p>
                    </div>
                ))}
            </div>

            <footer className="footer-section">
                <button className="Book-Now" onClick={() => HandleNavigation("/contact")}>Get in touch now  <ArrowRight className="arrow-icon" size={20} strokeWidth={3} /></button>
                {/* <div className="next-btn"><a href="">Next</a> <ChevronRight color="#5B2F2F" /> </div> */}
            </footer>
        </div>
    );
};

export default OurValue;

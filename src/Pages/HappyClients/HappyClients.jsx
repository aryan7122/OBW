import React, { useState } from 'react';
import './HappyClients.scss';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import happyImg from '../../assets/HappyClients/happy.svg'
import { useNavigate } from 'react-router-dom';
const data = [
    {
        name: "Lalita Thakur",
        location: "Mumbai",
        image: "https://s3-alpha-sig.figma.com/img/73e4/07de/671e93ceca888c6d577d00f110d09b9f?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cAnVkPgi5~NfhHbOq0cFV9-fo04Sfbe1m6b9hJCH0g1ff1rHLyQyKbFghDvOsV9MK98Ram~MAHFR~9w~IQ0Big78frsg8MdJb0PdK5Dmt3nScY3GIxERE28by-MbroCM53fRUJm3cX4EkPUtfLnev86hOFUa0PVSCGV1asisF3z213VR7K1Wi83y5Plp37ILSptXK83a80RuoRIukVBIEsdtp4E018SRdSaR6e73Xnq2-mKtgkahyvGhlURt5LuO6QH3OlV6Dbzec4Glpump2Tbv5sx6JSFDbhHTsmAAaOf4Rs1lIZt2arfeVHCwx2c-UNlXdMyUr~V4-2rjs52urw__", // Replace with your image URL
        star: 3,
    },
    {
        name: "Sheetal Trivedi",
        location: "Bengaluru",
        image: "https://s3-alpha-sig.figma.com/img/2c57/ec52/5c4130705ab505bc70d55013754612bf?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QX7KTsfNO3SdSM9mc8M7WWkrlvJiWb2fWdeKLV9fHkDFscgMVLbOEMd3Mv6Lh-rMbIfqmXBn~5Ie6bJNAb~QDnzFoxKMSLwIYm3ABQWc~0E13czMhJj~9tgY~WpRLtMLBbFNxGOtoiRC4~Lhc14aFVnYL5zP5LFC8h2OP5WiTCnddgzWwN-jO5W7ZgGSIU5NQwF9PNq5Yy8qdSeGNlHY7WbdyQnGhoDMekziNJrUCXZLz7S2y5voSD~GdWqafw~xA2wVqugW2rS6wJtHI6Wv~ZaNmF6lMzGCgxidZB02K3xECtFiayeIdNkx8zRjhcgGgigmn38UfwagJ4E70gRH1g__", // Replace with your image URL
        star: 3.5,
    },
    {
        name: "Vishwas Patel",
        location: "Bengaluru",
        image: "https://s3-alpha-sig.figma.com/img/b9e5/4b80/1b535ac760e9750f3824617048afac21?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VE1OPyVn0VGDllWpORrVxovLD9ToVYwR5WcuBDEz~DeAj7w~U7oET6YfYobksqPbILzADsg89X4xYae9qastxBbzUax2Mm9N8O87mJ-hWstdgzSH2mkmrhfYZEBAT9Xx3Helzhuqn5duYTJ4nsqlFI8z6ls5Jl5JcOkIFJBPoHfIWTa1Wa8MJQXHOyg-CdzEJ0znRuyMYt5c8mndNX7lceu4OKFHfoD4QMTrcb523BGoYWN8oFgVT3OTA1lOrAUO64U4jbABLhrYJMwvI0t9KaJPCmPToeWtlKlFNmI62TI5wZYrhrNlkRPJxTUKejwYMsJYnxbg8pw8sOwg1HwfDg__", // Replace with your image URL
        star: 5,
    },

];

const HappyClients = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCards = 1;

    const handleNext = () => {
        if (currentIndex < data.length - visibleCards) {
            setCurrentIndex(currentIndex + 2);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 2);
        }
    };
    const navigate = useNavigate();
    const HandleNavigation = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    return (
        <div className="happy-slider-container">
            <div className="content_top">
                <div>
                    <h2 className="slider-heading">Hear From Our Happy  <img src={happyImg} />     Clients</h2>
                    <p className="slider-subheading">
                        Discover the insights and feedback from our valued clients as they share their personal experiences and stories about working with us! Their testimonials highlight the positive impact we've made and the exceptional service we strive to provide.
                    </p>
                </div>
                <button className="view-all" onClick={() => HandleNavigation("/contact")}
                >Get In touch  <ArrowRight className="arrow-icon" size={20} strokeWidth={3} /></button>
            </div>


            <div className="blog-slider-wrapper">

                <div className="slider-cards" style={{ transform: `translateX(-${currentIndex * 300}px)` }}>
                    {data.map((blog, index) => (
                        <div key={index} className="slider-card">
                            <img src={blog.image} alt={blog?.title} className="card-image" />
                            <div className="card_blur">
                                <div className='aut_text-img'>
                                    <div className='aut_text'>
                                        <p className="card-name">{blog?.name}</p>
                                        <p className="card-location">{blog?.location}</p>

                                        {/* Stars display */}
                                        <div className="stars">
                                            {Array.from({ length: 5 }).map((_, index) => (
                                                <span key={index}>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width="24"
                                                        height="24"
                                                        fill={index < blog?.star ? "#C8CF00" : "#c8cf0038"}
                                                    >
                                                        <path d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z" />
                                                    </svg>
                                                </span>
                                            ))}

                                        </div>
                                    </div>
                                </div>
                                <button className="action_btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#ffffff" fill="none">
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
                                    <path d="M15.9453 12.3948C15.7686 13.0215 14.9333 13.4644 13.2629 14.3502C11.648 15.2064 10.8406 15.6346 10.1899 15.4625C9.9209 15.3913 9.6758 15.2562 9.47812 15.0701C9 14.6198 9 13.7465 9 12C9 10.2535 9 9.38018 9.47812 8.92995C9.6758 8.74381 9.9209 8.60868 10.1899 8.53753C10.8406 8.36544 11.648 8.79357 13.2629 9.64983C14.9333 10.5356 15.7686 10.9785 15.9453 11.6052C16.0182 11.8639 16.0182 12.1361 15.9453 12.3948Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                                </svg></button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <div className="progress">
                <div className="progress-bar-wrapper">
                    <div
                        className="progress-bar"
                        style={{ width: `${((currentIndex + 1) / data.length) * 100}%` }}
                    ></div>
                </div>
                <button className="nav-btn left" onClick={handlePrevious} disabled={currentIndex === 0}>
                    <ArrowLeft className="arrow-icon" size={20} strokeWidth={3} />
                </button>
                <button className="nav-btn right" onClick={handleNext} disabled={currentIndex >= data.length - visibleCards}>
                    <ArrowRight className="arrow-icon" size={20} strokeWidth={3} />
                </button>
            </div>
        </div>
    );
};

export default HappyClients;

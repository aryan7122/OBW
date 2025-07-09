import React, { useEffect, useRef, useState } from 'react';
import './HappyClients.scss';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import happyImg from '../../assets/HappyClients/happy.svg'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import bimg1 from '../../assets/HappyClients/bimg1.png'
import bimg2 from '../../assets/HappyClients/bimg2.png'
import bimg3 from '../../assets/HappyClients/bimg3.png'
import bimg4 from '../../assets/HappyClients/bimg4.png'
import { desc } from 'motion/react-client';

const data = [
    {
        name: "Sheetal Trivedi",
        location: "Bengaluru",
        description: `I used OBW clinical services, and it was fantastic! The staff was attentive, making everything easy.I felt supported, and the results were great.Highly recommend!`,
        image: bimg4,
        video: "https://v1.pinimg.com/videos/mc/expMp4/39/db/f0/39dbf047286eec239080f13f4b1116c2_t1.mp4",
        star: 3.5,
    },
    {
        name: "Vishwas Patel",
        location: "Bengaluru",
        image: bimg1,
        video: "https://v1.pinimg.com/videos/mc/720p/a2/bd/0d/a2bd0db20d6ee7ccf500390b798dcb58.mp4",
        star: 5,
    },
    {
        name: "Arjun Verma",
        location: "Hyderabad",
        image: bimg2,
        video: "https://v1.pinimg.com/videos/mc/720p/a2/bd/0d/a2bd0db20d6ee7ccf500390b798dcb58.mp4",
        star: 5,
    },
    {
        name: "Vishwas Patel",
        location: "Bengaluru",
        image: bimg3,
        video: "https://v1.pinimg.com/videos/mc/720p/a2/bd/0d/a2bd0db20d6ee7ccf500390b798dcb58.mp4",
        star: 5,
    },
    {
        name: "Client Five",
        location: "Bengaluru",
        image: "https://s3-alpha-sig.figma.com/img/b9e5/4b80/1b535ac760e9750f3824617048afac21?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VE1OPyVn0VGDllWpORrVxovLD9ToVYwR5WcuBDEz~DeAj7w~U7oET6YfYobksqPbILzADsg89X4xYae9qastxBbzUax2Mm9N8O87mJ-hWstdgzSH2mkmrhfYZEBAT9Xx3Helzhuqn5duYTJ4nsqlFI8z6ls5Jl5JcOkIFJBPoHfIWTa1Wa8MJQXHOyg-CdzEJ0znRuyMYt5c8mndNX7lceu4OKFHfoD4QMTrcb523BGoYWN8oFgVTnOTA1lOrAUO64U4jbABLhrYJMwvI0t7KaJPCmPToeWtlKlFNmI62TI5wZYrhrNlkRPJxTUKejwYMsJYnxbg8pw8sOwg1HwfDg__",
        video: "https://v1.pinimg.com/videos/mc/720p/a2/bd/0d/a2bd0db20d6ee7ccf500390b798dcb58.mp4",
        star: 5,
    },
    {
        name: "Lalita Thakur",
        location: "Mumbai",
        image: "https://s3-alpha-sig.figma.com/img/73e4/07de/671e93ceca888c6d577d00f110d09b9f?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cAnVkPgi5~NfhHbOq0cFV9-fo04Sfbe1m6b9hJCH0g1ff1rHLyQyKbFghDvOsV9MK98Ram~MAHFR~9w~IQ0Big78frsg8MdJb0PdK5Dmt3nScY3GIjERE28by-MbroCM53fRUJm3cX4EkPUtfLnev86hOFUa0PVSCGV1asisF3z213VR7K1Wi83yP1p37ILSptXK83a80RuoRIukVBIEsdtp4E018SRdSaR6e73Xnq2-mKtgkahyvGhlURt5LuO6QH3OlV6Dbzec4Glpump2Tbv5sx6JSFDbhHTsmAAOOf4Rs1lIZt2arfeVHCwx2c-UNlXdMyUr~V4-2rjs52urw__",
        video: "https://v1.pinimg.com/videos/mc/expMp4/66/ec/49/66ec49735ba470355110c7b430185eb2_t1.mp4",
        star: 5,
    },
];

const HappyClients = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardSize, setCardSize] = useState(307); // Default width + margin-right from SCSS (287px width + 20px margin-right)
    const [visibleCardsCount, setVisibleCardsCount] = useState(1); // How many cards fit in view

    const sliderWrapperRef = useRef(null); // Ref for the wrapper to determine its width
    const videoRefs = useRef([]); // Ref for individual video elements

    useEffect(() => {
        const calculateVisibleCards = () => {
            if (sliderWrapperRef.current) {
                const wrapperWidth = sliderWrapperRef.current.offsetWidth;
                const firstCard = sliderWrapperRef.current.querySelector('.slider-card');
                if (firstCard) {
                    const cardStyle = getComputedStyle(firstCard);
                    const cardWidth = parseFloat(cardStyle.width);
                    const cardMarginRight = parseFloat(cardStyle.marginRight);
                    const totalCardSpace = cardWidth + cardMarginRight;
                    setCardSize(totalCardSpace);

                    // Calculate how many cards can be fully visible
                    const count = Math.floor(wrapperWidth / totalCardSpace);
                    setVisibleCardsCount(count > 0 ? count : 1); // Ensure at least 1 visible card
                }
            }
        };

        calculateVisibleCards();
        window.addEventListener('resize', calculateVisibleCards);

        return () => window.removeEventListener('resize', calculateVisibleCards);
    }, []);

    const pauseAllVideos = () => {
        isPlaying.forEach((playing, index) => {
            if (playing && videoRefs.current[index]) {
                videoRefs.current[index].pause();
            }
        });
        setIsPlaying(Array(data.length).fill(false));
    };

    const handleNext = () => {
        pauseAllVideos(); // Pause any playing video before navigating
        const maxIndex = data.length - visibleCardsCount;
        if (currentIndex < maxIndex) {
            setCurrentIndex(prevIndex => prevIndex + 1);
        } else {
            setCurrentIndex(maxIndex); // Ensure we don't go beyond the last valid slide
        }
    };

    const handlePrevious = () => {
        pauseAllVideos(); // Pause any playing video before navigating
        if (currentIndex > 0) {
            setCurrentIndex(prevIndex => prevIndex - 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const navigate = useNavigate();
    const HandleNavigation = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    const [isPlaying, setIsPlaying] = useState(Array(data.length).fill(false));

    const handlePlayPause = (index) => {
        const video = videoRefs.current[index];
        if (!video) return;

        const updatedPlayingState = [...isPlaying];

        if (updatedPlayingState[index]) {
            // If the clicked video is already playing, pause it
            video.pause();
            updatedPlayingState[index] = false;
        } else {
            // Pause any other currently playing video
            const currentlyPlayingIndex = updatedPlayingState.findIndex(state => state === true);
            if (currentlyPlayingIndex !== -1) {
                videoRefs.current[currentlyPlayingIndex]?.pause();
                updatedPlayingState[currentlyPlayingIndex] = false;
            }

            // Play the new video
            video.play();
            updatedPlayingState[index] = true;
        }

        setIsPlaying(updatedPlayingState);

        video.onended = () => {
            setIsPlaying(prev => {
                const newState = [...prev];
                newState[index] = false;
                return newState;
            });
        };
    };

    // Calculate progress bar width
    const progressBarWidth = ((currentIndex + visibleCardsCount) / data.length) * 100;
   
    const totalScrollablePositions = data.length - visibleCardsCount + 1;
    const currentProgress = (currentIndex / (totalScrollablePositions - 1)) * 100;
    // Handle edge case where totalScrollablePositions is 1 (all cards fit)
    const finalProgressBarWidth = isNaN(currentProgress) ? 100 : Math.min(100, currentProgress);


    return (
        <div className="happy-slider-container">
            <div className="content_top">
                <div>
                    <h2 className="slider-heading">Hear From Our Happy
                        <motion.img
                            src={happyImg}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, amount: 0.2 }}
                            alt="Happy Clients"
                        />
                        Clients</h2>
                </div>
               
            </div>
            <div className="blog-slider-wrapper" ref={sliderWrapperRef}>
                <div className="slider-cards"
                    style={{
                        transform: `translateX(-${currentIndex * cardSize * 1.2}px)`
                    }}>
                    {data.map((blog, index) => (
                        <motion.div key={index} className="slider-card"
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, amount: 0.1 }}>

                            <div className="img_flex">

                                <img className="card-image"
                                    src={blog.image} alt="" />
                                <div className="des_">
                                    <p className="card-name">{blog?.description}</p>
                                </div>
                            </div>


                            <div className={`card_blur ${isPlaying[index] ? 'isPlaying' : ''} `}>
                                <div className='aut_text-img'>
                                    <div className='aut_text'>
                                        <p className="card-name">{blog?.name}</p>
                                        <p className="card-location">
                                            {blog?.location}
                                        </p>

                                        <div className="stars">
                                            {Array.from({ length: 5 }).map((_, starIndex) => (
                                                <motion.span
                                                    key={starIndex}
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{
                                                        duration: 0.6,
                                                        delay: starIndex * 0.1,
                                                    }}
                                                    viewport={{ once: true, amount: 0.2 }}
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width="18"
                                                        height="18"
                                                        fill={starIndex < blog?.star ? "#C8CF00" : "#c8cf0038"}
                                                    >
                                                        <path d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z" />
                                                    </svg>
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                                {/* <button className="action_btn video_play_push" onClick={() => handlePlayPause(index)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#ffffff" fill="none">
                                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                                        {isPlaying[index] ? (
                                            <>
                                                <rect x="9" y="8" width="2" height="8" fill="currentColor" />
                                                <rect x="13" y="8" width="2" height="8" fill="currentColor" />
                                            </>
                                        ) : (
                                            <path d="M15.9453 12.3948C15.7686 13.0215 14.9333 13.4644 13.2629 14.3502C11.648 15.2064 10.8406 15.6346 10.1899 15.4625C9.9209 15.3913 9.6758 15.2562 9.47812 15.0701C9 14.6198 9 13.7465 9 12C9 10.2535 9 9.38018 9.47812 8.92995C9.6758 8.74381 9.9209 8.60868 10.1899 8.53753C10.8406 8.36544 11.648 8.79357 13.2629 9.64983C14.9333 10.5356 15.7686 10.9785 15.9453 11.6052C16.0182 11.8639 16.0182 12.1361 15.9453 12.3948Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                        )}
                                    </svg>
                                </button> */}
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>

            <hr />
            {/* Progress bar and navigation buttons */}
            <div className="progress">
                <div className="progress-bar-wrapper">
                    <div
                        className="progress-bar"
                        style={{ width: `${finalProgressBarWidth}%` }}
                    ></div>
                </div>
                <button className="nav-btn left btn" onClick={handlePrevious} disabled={currentIndex === 0}>
                    <span>
                        <ArrowLeft className="arrow-icon" size={20} strokeWidth={3} />
                    </span>
                </button>
                <button className="nav-btn right btn" onClick={handleNext} disabled={currentIndex >= data.length - visibleCardsCount}>
                    <span>
                        <ArrowRight className="arrow-icon" size={20} strokeWidth={3} />
                    </span>
                </button>
            </div>

        </div>
    );
};

export default HappyClients;
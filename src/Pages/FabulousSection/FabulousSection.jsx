import React, { useRef, useState, useEffect } from "react";
import "./FabulousSection.scss";
import { MoveRight } from 'lucide-react';
import thumbnail from '../../assets/TrendingTreatments/AllTreatments.jpg'; // Your thumbnail image

const FabulousSection = () => {
    // --- Video Player State and Refs ---
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [showPauseBtn, setShowPauseBtn] = useState(false);
    const [isVideoLoading, setIsVideoLoading] = useState(false);
    const [isMuted, setIsMuted] = useState(true); // Default to muted
    const [progress, setProgress] = useState(0);
    const videoRef = useRef(null);
    let timer = null;

    // --- Video Player Handlers ---
    const handlePlay = () => {
        setIsVideoLoading(true);
        setIsPlaying(true);
        setIsPaused(false);
        setTimeout(() => {
            videoRef.current?.play();
        }, 0);
    };

    const handlePause = () => {
        videoRef.current?.pause();
        setIsPaused(true);
    };

    const handleResume = () => {
        videoRef.current?.play();
        setIsPaused(false);
    };

    const handleHover = () => {
        if (isPlaying && !isPaused) {
            setShowPauseBtn(true);
            clearTimeout(timer);
            timer = setTimeout(() => {
                setShowPauseBtn(false);
            }, 4000);
        }
    };

    const handleVideoEnd = () => {
        setIsPlaying(false);
        setIsPaused(false);
        if (videoRef.current) {
           videoRef.current.currentTime = 0;
        }
    };

    // --- Effect for Progress Bar ---
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const updateProgress = () => {
            const percent = (video.currentTime / video.duration) * 100;
            setProgress(percent);
        };

        video.addEventListener('timeupdate', updateProgress);
        return () => {
            if (video) {
               video.removeEventListener('timeupdate', updateProgress);
            }
        };
    }, [isPlaying]); // Re-run effect if video starts playing

    return (
        <section className="fabulous-section">
            <div className="cont-card">
                {/* Updated Media Container with Video Player */}
                <div className="media-container" onMouseEnter={handleHover}>
                    <div className="video-wrapper">
                        {!isPlaying && (
                            <img
                                src={thumbnail}
                                alt="Video Thumbnail"
                                className="video-thumbnail"
                                onClick={handlePlay}
                            />
                        )}

                        <video
                            ref={videoRef}
                            src='https://asset.cloudinary.com/dvu9zrnsp/7bb0a3208e606ab47c1bd548b4bd68ff' // Using placeholder video URL
                            muted={isMuted}
                            playsInline
                            controls={false}
                            onLoadedData={() => setIsVideoLoading(false)}
                            onPlaying={() => setIsVideoLoading(false)}
                            onWaiting={() => setIsVideoLoading(true)}
                            onEnded={handleVideoEnd}
                            style={{ display: isPlaying ? 'block' : 'none' }} // Hide video element until play
                        />

                        {/* --- Player Overlays --- */}
                        <div className="progress-bar-container">
                            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                        </div>

                        {isVideoLoading && (
                            <div className="video-loader">
                                <div className="spinner"></div>
                            </div>
                        )}

                        {isPlaying && (
                             <div onClick={() => setIsMuted(!isMuted)} className="mute-toggle center">
                                {isMuted ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#ffffff" fill="none"><path d="M14 14.8135V9.18646C14 6.04126 14 4.46866 13.0747 4.0773C12.1494 3.68593 11.0603 4.79793 8.88232 7.02192C7.75439 8.17365 7.11085 8.42869 5.50604 8.42869C4.10257 8.42869 3.40084 8.42869 2.89675 8.77262C1.85035 9.48655 2.00852 10.882 2.00852 12C2.00852 13.118 1.85035 14.5134 2.89675 15.2274C3.40084 15.5713 4.10257 15.5713 5.50604 15.5713C7.11085 15.5713 7.75439 15.8264 8.88232 16.9781C11.0603 19.2021 12.1494 20.3141 13.0747 19.9227C14 19.5313 14 17.9587 14 14.8135Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M18 10L22 14M18 14L22 10" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#ffffff" fill="none"><path d="M14 14.8135V9.18646C14 6.04126 14 4.46866 13.0747 4.0773C12.1494 3.68593 11.0603 4.79793 8.88232 7.02192C7.75439 8.17365 7.11085 8.42869 5.50604 8.42869C4.10257 8.42869 3.40084 8.42869 2.89675 8.77262C1.85035 9.48655 2.00852 10.882 2.00852 12C2.00852 13.118 1.85035 14.5134 2.89675 15.2274C3.40084 15.5713 4.10257 15.5713 5.50604 15.5713C7.11085 15.5713 7.75439 15.8264 8.88232 16.9781C11.0603 19.2021 12.1494 20.3141 13.0747 19.9227C14 19.5313 14 17.9587 14 14.8135Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M17 9C17.6254 9.81968 18 10.8634 18 12C18 13.1366 17.6254 14.1803 17 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M20 7C21.2508 8.36613 22 10.1057 22 12C22 13.8943 21.2508 15.6339 20 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                )}
                            </div>
                        )}

                        {!isPlaying && !isVideoLoading && (
                            <div onClick={handlePlay} className="play-button center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64" color="#ffffff" fill="none"><circle cx="12" cy="12" r="10" stroke="#ffffff" strokeWidth="1.5"></circle><path d="M9.5 11.1998V12.8002C9.5 14.3195 9.5 15.0791 9.95576 15.3862C10.4115 15.6932 11.0348 15.3535 12.2815 14.6741L13.7497 13.8738C15.2499 13.0562 16 12.6474 16 12C16 11.3526 15.2499 10.9438 13.7497 10.1262L12.2815 9.32594C11.0348 8.6465 10.4115 8.30678 9.95576 8.61382C9.5 8.92086 9.5 9.6805 9.5 11.1998Z" fill="#ffffff"></path></svg>
                            </div>
                        )}

                        {isPaused ? (
                            <div onClick={handleResume} className="play-button center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64" color="#ffffff" fill="none"><circle cx="12" cy="12" r="10" stroke="#ffffff" strokeWidth="1.5"></circle><path d="M9.5 11.1998V12.8002C9.5 14.3195 9.5 15.0791 9.95576 15.3862C10.4115 15.6932 11.0348 15.3535 12.2815 14.6741L13.7497 13.8738C15.2499 13.0562 16 12.6474 16 12C16 11.3526 15.2499 10.9438 13.7497 10.1262L12.2815 9.32594C11.0348 8.6465 10.4115 8.30678 9.95576 8.61382C9.5 8.92086 9.5 9.6805 9.5 11.1998Z" fill="#ffffff"></path></svg></div>
                        ) : (
                            showPauseBtn && <div onClick={handlePause} className="play-button center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64" color="#ffffff" fill="none"><circle cx="12" cy="12" r="10" stroke="#ffffff" strokeWidth="1.5"></circle><path d="M9.5 9L9.5 15M14.5 9V15" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
                        )}
                    </div>
                </div>

                <div className="content-container">
                    <span className="label">VALUES</span>
                    <h2 className="title">Step Into Your Most Confident Self</h2>
                    <p className="description">
                        More than a space, it’s a feeling. At OBW, we celebrate individuality, elegance, and the power of feeling truly you
                    </p>
                    <ul className="features">
                        <li><span className="arrow"><MoveRight /></span> Thoughtfully designed, calming interiors</li>
                        <li><span className="arrow"><MoveRight /></span> Impeccable hygiene standards you can trust</li>
                        <li><span className="arrow"><MoveRight /></span> Located in premium, well-connected areas</li>
                        <li><span className="arrow"><MoveRight /></span> A luxurious vibe that feels like home</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default FabulousSection;
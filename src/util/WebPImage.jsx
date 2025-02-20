import { useState, useEffect } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import placeholderImg from '../assets/TrendingTreatments/LazyLoadImage.png'

const WebPImage = ({ src, alt, className }) => {
    // const [webpSrc, setWebpSrc] = useState(null);

    // useEffect(() => {
    //     if (!src) return;
    //     const img = new Image();
    //     img.src = src;
    //     img.crossOrigin = "anonymous";
    //     img.onload = () => {
    //         const canvas = document.createElement("canvas");
    //         const ctx = canvas.getContext("2d");
    //         canvas.width = img.width;
    //         canvas.height = img.height;
    //         ctx.drawImage(img, 0, 0);
    //         const webpDataUrl = canvas.toDataURL("image/webp", 0.8); // 80% quality
    //         setWebpSrc(webpDataUrl);
    //     };
    // }, [src]);

    return <LazyLoadImage effect="blur" once={true} placeholderSrc={placeholderImg} src={src || src} alt={alt} className={className} loading="lazy" wrapperProps={{
        style: { transitionDelay: "0.1s" },
    }} />;
};

export default WebPImage;

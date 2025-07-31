import { useState } from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";
import placeholderImg from "../assets/TrendingTreatments/LazyLoadImage.png";
import "./WebPImage.scss";
const WebPImage = ({ src, alt, className }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        < >
            {/* {!imageLoaded && (
                <img
                    src={placeholderImg}
                    alt="Loading..."
                    className="placeholder"
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        zIndex: 1, // ✅ Ensuring it's above the real image initially
                        transition: "opacity 0.3s ease-in-out",
                        opacity: imageLoaded ? 0 : 1, // ✅ Hide after image loads
                    }}
                />
            )} */}
            {!imageLoaded && <div className="shimmer-loader"></div>}

            <img
                effect="blur"
                src={src}
                alt={alt || ""}
                className={className || ""}
                loading="lazy"
                onLoad={() => setImageLoaded(true)} // ✅ Set state when image loads
                wrapperProps={{
                    style: { transitionDelay: "0.1s" },
                }}
            />
        </>
    );
};

export default WebPImage;

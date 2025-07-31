import React, { useState } from 'react';
import './ImageWithBlur.css';

const ImageWithBlur = ({ src, alt = '', className = '' }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`image-container ${className}`}>
      {!loaded && <div className="shimmer-loader" />}
      <img
        src={src}
        alt={alt}
        className={`main-image ${loaded ? 'fade-in' : 'hidden'}`}
        onLoad={() => setLoaded(true)}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

export default ImageWithBlur;

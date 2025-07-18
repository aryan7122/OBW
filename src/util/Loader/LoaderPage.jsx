import React from 'react';
import PropTypes from 'prop-types';
import './Loader.scss'; // SCSS file ka import

const LoaderPage = ({ loading }) => {
  if (!loading) {
    return null;
  }

  return (
    <div className="LoaderPage-overlay">
      
      {/* GOOEY EFFECT LOADER */}
      <div className="gooey-wrapper">
        <div className="LoaderPage-dot"></div>
        <div className="LoaderPage-dot"></div>
        <div className="LoaderPage-dot"></div>
        <div className="LoaderPage-dot"></div>
      </div>

      {/* Yeh SVG gooey effect ke liye zaroori hai. Ise render hona chahiye. */}
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'none' }}>
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="gooey" />
            <feBlend in="SourceGraphic" in2="gooey" />
          </filter>
        </defs>
      </svg>

    </div>
  );
};

LoaderPage.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default LoaderPage;
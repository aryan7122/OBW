// InfinityScrollBeautyGallery.jsx
import React from 'react';

import './InfinityScrollGallery.scss';
// import img1 from '../../../assets/InfinityScrollGallery/img (1).webp'
import img2 from '../../../assets/InfinityScrollGallery/img (2).webp'
import img3 from '../../../assets/InfinityScrollGallery/img (3).webp'
import img4 from '../../../assets/InfinityScrollGallery/img (4).webp'
import img5 from '../../../assets/InfinityScrollGallery/img (5).webp'
import img6 from '../../../assets/InfinityScrollGallery/img (6).webp'
import img7 from '../../../assets/InfinityScrollGallery/img (7).webp'
import img8 from '../../../assets/InfinityScrollGallery/img (8).webp'
import img9 from '../../../assets/InfinityScrollGallery/img (9).webp'
import img10 from '../../../assets/InfinityScrollGallery/img (10).webp'
// import img11 from '../../../assets/InfinityScrollGallery/img (11).webp'
// import img12 from '../../../assets/InfinityScrollGallery/img (12).webp'

const imageUrls = [
   img2, img3,img4,img5,img6,img7,img8,img9,img10
];

const InfinityScrollGallery = () => {
  return (
    <div className="gallery-wrapper">
          <div className="columns lefts">
        {[...imageUrls, ...imageUrls].map((url, index) => (
          <img className='imgS' key={`left-${index}`} src={url} alt="beauty" />
        ))}
      </div>
      <div className="columns rights">
        {[...imageUrls, ...imageUrls].map((url, index) => (
            <img className='imgS' key={`right-${index}`} src={url} alt="beauty" />
        ))}
      </div>
    </div>
  );
};

export default InfinityScrollGallery;

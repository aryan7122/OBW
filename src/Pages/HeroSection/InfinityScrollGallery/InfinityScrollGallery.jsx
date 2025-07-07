// InfinityScrollBeautyGallery.jsx
import React from 'react';

import './InfinityScrollGallery.scss';
import img1 from '../../../assets/InfinityScrollGallery/img (1).jpg'
import img2 from '../../../assets/InfinityScrollGallery/img (2).png'
import img3 from '../../../assets/InfinityScrollGallery/img (3).jpg'
import img4 from '../../../assets/InfinityScrollGallery/img (4).png'
import img5 from '../../../assets/InfinityScrollGallery/img (5).png'
import img6 from '../../../assets/InfinityScrollGallery/img (6).png'
import img7 from '../../../assets/InfinityScrollGallery/img (7).png'
import img8 from '../../../assets/InfinityScrollGallery/img (8).png'
import img9 from '../../../assets/InfinityScrollGallery/img (9).jpg'
import img10 from '../../../assets/InfinityScrollGallery/img (10).png'
import img11 from '../../../assets/InfinityScrollGallery/img (11).png'
import img12 from '../../../assets/InfinityScrollGallery/img (12).png'

const imageUrls = [
    img1, img2, img3,img4,img5,img6,img7,img8,img9,img10,img11,img12
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

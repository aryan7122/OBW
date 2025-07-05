// InfinityScrollBeautyGallery.jsx
import React from 'react';
import './InfinityScrollGallery.scss';
import img1 from '../../../assets/InfinityScrollGallery/img (1).jpg'
import img2 from '../../../assets/InfinityScrollGallery/img (2).jpg'
import img3 from '../../../assets/InfinityScrollGallery/img (3).jpg'
const imageUrls = [
  'https://content.jdmagicbox.com/comp/service_catalogue/bridal-makeup-020pxx20.xx20.190217183501.u5s5-zv28ope.jpg',
  'https://media.istockphoto.com/id/482679574/photo/making-a-change-of-look.jpg?s=612x612&w=0&k=20&c=Tr20-tCvPHLKh_W5pNUCymEGRUD_OfOJht97x35i8-o=',
  'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXR5JTIwc2Fsb258ZW58MHx8MHx8fDA%3D',
    'https://images.pexels.com/photos/1385478/pexels-photo-1385478.jpeg?cs=srgb&dl=pexels-qazi-1385478.jpg&fm=jpg',
    img1, img2, img3
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

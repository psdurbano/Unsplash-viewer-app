// ImageCard.js
import React from 'react';

const ImageCard = ({ image }) => {
  return (
    <div style={{ width: '30%', margin: '1%' }}>
      <div style={{
        backgroundImage: `url(${image.urls.regular})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '640px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '10px'
      }}>
        <h4>{image.alt_description}</h4>
        <p>{image.user.username}</p>
      </div>
    </div>
  );
};

export default ImageCard;

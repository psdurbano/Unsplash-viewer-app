import React, { useState, useEffect } from 'react';

const RandomImage = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      const res = await fetch('https://api.unsplash.com/photos/random?client_id=YOUR_ACCESS_KEY');
      const data = await res.json();
      setImageUrl(data.urls.regular);
    };
    fetchImage();
  }, []);

  return (
    <img src={imageUrl} alt="Random" />
  );
};

const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const promises = [];
      for (let i = 0; i < 9; i++) {
        promises.push(fetch('https://api.unsplash.com/photos/random?client_id=IaK8WhrPK4t1BglVY6oS1Bfy_uQFpYLKJXQSEdUdFtQ').then(res => res.json()));
      }
      const res = await Promise.all(promises);
      setImages(res.map(data => data.urls.regular));
    };
    fetchImages();
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {images.map(imageUrl => (
        <div key={imageUrl} style={{ width: '33.33%', padding: '5px' }}>
          <img src={imageUrl} alt="Random" style={{ width: '100%' }} />
        </div>
      ))}
    </div>
  );
};

export default App;
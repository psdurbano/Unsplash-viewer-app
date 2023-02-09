// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageCard from './ImageCard';
import Button from './Button';

const App = () => {
  const [images, setImages] = useState([]);

  const fetchData = async () => {
    const result = await axios(
      'https://api.unsplash.com/photos/random?count=12&client_id=FbQv8dWkvHoBA5a3D2EuJ14g-xIHiGY3IZQspYrM6FU'
    );
    setImages(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ width: '95%', margin: '0 auto', backgroundColor: 'white' }}>
      <Button fetchData={fetchData} />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
};

export default App;

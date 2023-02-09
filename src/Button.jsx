// Button.js
import React from 'react';

const Button = ({ fetchData }) => {
  return (
    <button style={{
      width: '100%',
      backgroundColor: 'white',
      color: 'black',
      borderRadius: '10px',
      padding: '10px',
      textAlign: 'center'
    }} onClick={fetchData}>
      Botón
    </button>
  );
};

export default Button;

import React from 'react';
import './productoStyles.css';

function Producto({ imgSrc, altText, description }) {
  return (
    <div className="producto">
      <img src={imgSrc} alt={altText} className="producto-img" />
      <h3 className="producto-description">{description}</h3>
    </div>
  );
}

export default Producto;

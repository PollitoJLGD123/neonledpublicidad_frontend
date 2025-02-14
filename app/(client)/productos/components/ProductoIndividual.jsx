import React from 'react';
import './productoStyles.css';

function Producto({ imgSrc, altText, description, route }) {
  return (
    <a href={route} className="producto-link flex justify-center">
      <div className="producto flex flex-col items-center text-center">
        <img src={imgSrc} alt={altText} className="producto-img" />
        <h3 className="producto-description">{description}</h3>
      </div>
    </a>
  );
}


export default Producto;

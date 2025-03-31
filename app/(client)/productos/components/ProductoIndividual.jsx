import React from 'react';
import './productoStyles.css';

function Producto({ imgSrc, altText, description, route }) {
  return (
    <a href={route} className="producto-link">
      <div className="producto">
        <img src={imgSrc} alt={altText} className="producto-img" />
        <div className="producto-description">
          <h3 className="producto-description__text text-xs md:text-base">{description}</h3>
        </div>
      </div>
    </a>
  );
}

export default Producto;

import React from 'react';
import Producto from './ProductoIndividual';

function FilaProductos({ productos }) {
  return (
    <div className="producto-row ">
      {productos.map((producto, index) => (
        <Producto
          key={index}
          imgSrc={producto.imgSrc}
          altText={producto.altText}
          description={producto.description}
          route={producto.route}
        />
      ))}
    </div>
  );
}

export default FilaProductos;

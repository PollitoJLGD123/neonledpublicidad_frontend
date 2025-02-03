import React from "react";
import "./productsStyle.css";
import "@/public/productosIndividuales/CarroLaptop.png"

export default function SquareRectangle() {
  return (
    <div className="square-info-container">
      {/* Cuadrado sin contenido */}
      <div className="custom-square"></div>

      {/* Imagen entre el cuadrado y el rectángulo */}
      <img
        src="/productosIndividuales/CarroLaptop.png"
        alt="LaptopImg"
        className="intermediate-image"
      />

      {/* Rectángulo con título y descripción */}
      <div className="info-rectangle">
        <h3 className="info-title">Neon LED</h3>
        <p className="info-description">
          La manguera Led neón es una solución de iluminación LED moderna y flexible, ideal para personalizar
          y embellecer cualquier espacio.
          Este producto combina tiras de luces LED decorativas encapsuladas en un tubo resistente, diseñado
          para brindar durabilidad y estilo.
        </p>
      </div>
    </div>
  );
}

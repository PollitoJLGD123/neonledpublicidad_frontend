import React from "react";
import FilaProductos from "./FilaProductos";
import LineaHorizontal from "./LineaHorizontal";

import "./productoStyles.css";

export default function Productos() {
  // Definimos los productos por fila como un arreglo de objetos
  const fila1 = [
    { imgSrc: "/productosPrincipal/1crocs.webp", altText: "Producto 1", description: "LETRAS DE ACRÍLICO" },
    { imgSrc: "/productosPrincipal/2yasin.jpg", altText: "Producto 2", description: "LETRAS DORADAS Y PLATEADAS" },
    { imgSrc: "/productosPrincipal/3crisol.webp", altText: "Producto 3", description: "LETREROS LUMINOSOS" },
    { imgSrc: "/productosPrincipal/1crocs.webp", altText: "Producto 4", description: "LETRAS DE NEON" },
  ];

  const fila2 = [
    { imgSrc: "/productosPrincipal/1crocs.webp", altText: "Producto 5", description: "NEÓN LED" },
    { imgSrc: "/productosPrincipal/6comida.webp", altText: "Producto 6", description: "IMPRESIÓN EN VINILO" },
    { imgSrc: "/productosPrincipal/7hamburguesa.webp", altText: "Producto 7", description: "MENÚ BOARD" },
    { imgSrc: "/productosPrincipal/8burnout.webp", altText: "Producto 8", description: "LETRAS PINTADAS E" },
  ];

  const fila3 = [
    { imgSrc: "/productosPrincipal/9chica.webp", altText: "Producto 9", description: "DISPLAYS" },
    { imgSrc: "/productosPrincipal/10tablet.webp", altText: "Producto 10", description: "PANTALLAS LED" },
    { imgSrc: "/productosPrincipal/11lampara.webp", altText: "Producto 11", description: "HOLOGRÁFICO" },
    { imgSrc: "/productosPrincipal/12tunel.webp", altText: "Producto 12", description: "PIXEL LED" },
  ];

  const fila4 = [
    { imgSrc: "/productosPrincipal/13cubos.webp", altText: "Producto 13", description: "SILLAS LUMINOSAS" },
    { imgSrc: "/productosPrincipal/14carro.webp", altText: "Producto 14", description: "TECHOS LED" },
  ];

  return (
    <div className="productos-container mt-12">
      {/* Fila 1 */}
      <FilaProductos productos={fila1} />
      <LineaHorizontal />

      {/* Fila 2 */}
      <FilaProductos productos={fila2} />
      <LineaHorizontal />

      {/* Fila 3 */}
      <FilaProductos productos={fila3} />
      <LineaHorizontal />

      {/* Fila 4 */}
      <FilaProductos productos={fila4} />
    </div>
  );
}

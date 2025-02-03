'use client';

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import FilaProductos from "./FilaProductos";
import LineaHorizontal from "./LineaHorizontal";

import "./productoStyles.css";

export default function Productos() {
  // Definimos los productos por fila como un arreglo de objetos
  const fila1 = [
    { imgSrc: "/productosPrincipal/1crocs.webp", altText: "Producto 1", description: "LETRAS DE ACRÍLICO", route: "/productos/letras-acrilico" },
    { imgSrc: "/productosPrincipal/2yasin.jpg", altText: "Producto 2", description: "LETRAS DORADAS Y PLATEADAS", route: "/productos/letras-doradas" },
    { imgSrc: "/productosPrincipal/3crisol.webp", altText: "Producto 3", description: "LETREROS LUMINOSOS", route: "/productos/letreros-luminosos" },
    { imgSrc: "/productosPrincipal/4hi.jpg", altText: "Producto 4", description: "LETRAS DE NEON", route: "/productos/letras-neon" },
  ];

  const fila2 = [
    { imgSrc: "/productosPrincipal/5palmera.jpg", altText: "Producto 5", description: "NEÓN LED", route: "/productos/neon-led" },
    { imgSrc: "/productosPrincipal/6comida.webp", altText: "Producto 6", description: "IMPRESIÓN EN VINILO", route: "/productos/impresion-vinilo" },
    { imgSrc: "/productosPrincipal/7hamburguesa.webp", altText: "Producto 7", description: "MENÚ BOARD", route: "/productos/menu-board" },
    { imgSrc: "/productosPrincipal/8burnout.webp", altText: "Producto 8", description: "LETRAS PINTADAS EN MDF", route: "/productos/letras-pintadas" },
  ];

  const fila3 = [
    { imgSrc: "/productosPrincipal/9chica.webp", altText: "Producto 9", description: "DISPLAYS", route: "/productos/displays" },
    { imgSrc: "/productosPrincipal/10tablet.webp", altText: "Producto 10", description: "PANTALLAS LED", route: "/productos/pantalla-led" },
    { imgSrc: "/productosPrincipal/11lampara.webp", altText: "Producto 11", description: "HOLOGRÁFICO", route: "/productos/holografico" },
    { imgSrc: "/productosPrincipal/12tunel.webp", altText: "Producto 12", description: "PIXEL LED", route: "/productos/pixel-led" },
  ];

  const fila4 = [
    { imgSrc: "/productosPrincipal/13cubos.webp", altText: "Producto 13", description: "SILLAS LUMINOSAS", route: "/productos/sillas-luminosas" },
    { imgSrc: "/productosPrincipal/14carro.webp", altText: "Producto 14", description: "TECHOS LED", route: "/productos/techos-led" },
  ];

  const [animacionActivadaFila1, setAnimacionActivadaFila1] = useState(false);
  const [animacionActivadaFila2, setAnimacionActivadaFila2] = useState(false);
  const [animacionActivadaFila3, setAnimacionActivadaFila3] = useState(false);
  const [animacionActivadaFila4, setAnimacionActivadaFila4] = useState(false);

  const fila1Ref = useRef(null);
  const fila2Ref = useRef(null);
  const fila3Ref = useRef(null);
  const fila4Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !animacionActivadaFila1) {
            setAnimacionActivadaFila1(true);
          }
          if (entry.isIntersecting && !animacionActivadaFila2) {
            setAnimacionActivadaFila2(true);
          }
          if (entry.isIntersecting && !animacionActivadaFila3) {
            setAnimacionActivadaFila3(true);
          }
          if (entry.isIntersecting && !animacionActivadaFila4) {
            setAnimacionActivadaFila4(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (fila1Ref.current) {
      observer.observe(fila1Ref.current);
    }
    if (fila2Ref.current) {
      observer.observe(fila2Ref.current);
    }
    if (fila3Ref.current) {
      observer.observe(fila3Ref.current);
    }
    if (fila4Ref.current) {
      observer.observe(fila4Ref.current);
    }

    return () => {
      if (fila1Ref.current) {
        observer.unobserve(fila1Ref.current);
      }
      if (fila2Ref.current) {
        observer.unobserve(fila2Ref.current);
      }
      if (fila3Ref.current) {
        observer.unobserve(fila3Ref.current);
      }
      if (fila4Ref.current) {
        observer.unobserve(fila4Ref.current);
      }
    };
  }, [animacionActivadaFila1, animacionActivadaFila2, animacionActivadaFila3, animacionActivadaFila4]);

  return (
    <div className="productos-container mt-12">
      {/* Fila 1 */}
      <motion.div
        ref={fila1Ref}
        className="fila-productos"
        initial={{ x: "100%" }}
        animate={animacionActivadaFila1 ? { x: 0 } : { x: "100%" }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <FilaProductos productos={fila1} />
      </motion.div>
      <LineaHorizontal />

      {/* Fila 2 */}
      <motion.div
        ref={fila2Ref}
        className="fila-productos"
        initial={{ x: "-100%" }}
        animate={animacionActivadaFila2 ? { x: 0 } : { x: "-100%" }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <FilaProductos productos={fila2} />
      </motion.div>
      <LineaHorizontal />

      {/* Fila 3 */}
      <motion.div
        ref={fila3Ref}
        className="fila-productos"
        initial={{ x: "100%" }}
        animate={animacionActivadaFila3 ? { x: 0 } : { x: "100%" }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <FilaProductos productos={fila3} />
      </motion.div>
      <LineaHorizontal />

      {/* Fila 4 */}
      <motion.div
        ref={fila4Ref}
        className="fila-productos"
        initial={{ x: "-100%" }}
        animate={animacionActivadaFila4 ? { x: 0 } : { x: "-100%" }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <FilaProductos productos={fila4} />
      </motion.div>
    </div>
  );
}

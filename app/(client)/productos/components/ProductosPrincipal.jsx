"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import FilaProductos from "./FilaProductos";
import LineaHorizontal from "./LineaHorizontal";

import "./productoStyles.css";

export default function Productos() {
  // Definimos los productos por fila como un arreglo de objetos
  const filas = [
    [
      {
        imgSrc: "/productosPrincipal/1crocs.webp",
        altText: "Producto 1",
        description: "LETRAS DE ACRÍLICO",
        route: "/productos/letras-acrilico",
      },
      {
        imgSrc: "/productosPrincipal/2yasin.jpg",
        altText: "Producto 2",
        description: "LETRAS DORADAS Y PLATEADAS",
        route: "/productos/letras-doradas",
      },
      {
        imgSrc: "/productosPrincipal/3crisol.webp",
        altText: "Producto 3",
        description: "LETREROS LUMINOSOS",
        route: "/productos/letreros-luminosos",
      },
      {
        imgSrc: "/productosPrincipal/4hi.jpg",
        altText: "Producto 4",
        description: "LETRAS DE NEON",
        route: "/productos/letras-neon",
      },
    ],
    [
      {
        imgSrc: "/productosPrincipal/5palmera.jpg",
        altText: "Producto 5",
        description: "NEÓN LED",
        route: "/productos/neon-led",
      },
      {
        imgSrc: "/productosPrincipal/6comida.webp",
        altText: "Producto 6",
        description: "IMPRESIÓN EN VINILO",
        route: "/productos/impresion-vinilo",
      },
      {
        imgSrc: "/productosPrincipal/7hamburguesa.webp",
        altText: "Producto 7",
        description: "MENÚ BOARD",
        route: "/productos/menu-board",
      },
      {
        imgSrc: "/productosPrincipal/8burnout.webp",
        altText: "Producto 8",
        description: "LETRAS PINTADAS EN MDF",
        route: "/productos/letras-pintadas",
      },
    ],
    [
      {
        imgSrc: "/productosPrincipal/9chica.webp",
        altText: "Producto 9",
        description: "DISPLAYS",
        route: "/productos/displays",
      },
      {
        imgSrc: "/productosPrincipal/10tablet.webp",
        altText: "Producto 10",
        description: "PANTALLAS LED",
        route: "/productos/pantalla-led",
      },
      {
        imgSrc: "/productosPrincipal/11lampara.webp",
        altText: "Producto 11",
        description: "HOLOGRÁFICO",
        route: "/productos/holografico",
      },
      {
        imgSrc: "/productosPrincipal/12tunel.webp",
        altText: "Producto 12",
        description: "PIXEL LED",
        route: "/productos/pixel-led",
      },
    ],
    [
      {
        imgSrc: "/productosPrincipal/13cubos.webp",
        altText: "Producto 13",
        description: "SILLAS LUMINOSAS",
        route: "/productos/sillas-luminosas",
      },
      {
        imgSrc: "/productosPrincipal/14carro.webp",
        altText: "Producto 14",
        description: "TECHOS LED",
        route: "/productos/techos-led",
      },
    ],
  ];

  const [isAnimations, setIsAnimations] = useState(
    Array(filas.length).fill(false)
  );

  const filasRefs = useRef([]);

  useEffect(() => {
    filasRefs.current = filasRefs.current.slice(0, filas.length);
  }, [filas]);

  const options = {
    rootMargin: "200px",
    threshold: 0.1,
  };

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      const index = filasRefs.current.indexOf(entry.target);
      if (index !== -1 && entry.isIntersecting && !isAnimations[index]) {
        setIsAnimations((prevState) => {
          const newState = [...prevState];
          newState[index] = true;
          return newState;
        });
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);

    filasRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      filasRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="productos-container mt-12">
      {filas.map((fila, index) => (
        <div key={index}>
          <motion.div
            ref={(el) => (filasRefs.current[index] = el)}
            className="fila-productos"
            initial={{ x: index % 2 === 0 ? "100%" : "-100%" }}
            animate={{
              x: isAnimations[index] ? 0 : index % 2 === 0 ? "100%" : "-100%",
            }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <FilaProductos productos={fila} />
          </motion.div>
          {index < filas.length - 1 && <LineaHorizontal />}
        </div>
      ))}
    </div>
  );
}

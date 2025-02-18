"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const cards = [
  { 
    title: "LETRAS DE ACRÍLICO", 
    description: "Te mostramos la implementación de las letras de acrílico en diversos espacios", 
    bgColor: "bg-black text-white", 
    glow: "text-blue-400" 
  },
  { 
    title: "Juguetería", 
    description: "Espacio interior", 
    image: "/Productos/ACRÍLICO1PRODUCTO.jpg" 
  },
  { 
    title: "Feria", 
    description: "Espacio interior", 
    image: "/Productos/ACRÍLICO2PRODUCTO.jpg" 
  }
];

function CardSlider() {
  const [offset, setOffset] = useState(-15);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev === -15 ? 0 : -15));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full flex justify-center items-center overflow-hidden bg-white py-20">
      <motion.div
        className="flex gap-6"
        animate={{ x: `${offset}%` }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        {cards.map((card, i) => (
          <div 
            key={i} 
            className={`w-[400px] h-[300px] relative flex-shrink-0 rounded-lg shadow-lg overflow-hidden ${
              i === 0 ? "w-[900px] bg-gray-900 text-white flex flex-col justify-center items-center p-4" : ""
            }`}
          >
            {card.image ? (
              <div className="relative w-full h-full">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover rounded-lg "
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4  text-white">
                  <h2 className="text-lg font-bold">{card.title}</h2>
                  <p className="text-sm drop-shadow-lg">{card.description}</p>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <h2 className={`text-xl font-bold ${card.glow || ""}`}>{card.title}</h2>
                <p className="text-sm mt-2">{card.description}</p>
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default CardSlider;

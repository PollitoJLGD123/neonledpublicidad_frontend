"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";



function CardSlider({cards}) {
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
            className={`relative flex-shrink-0 rounded-lg shadow-lg overflow-hidden ${
              i === 0 
             ?  "w-[780px] h-[300px] bg-gray-900 text-white flex flex-col justify-center items-center px-6 py-4"
             :  "w-[400px] h-[300px]"
  }`}
          >
            {card.image ? (
              <div className="relative w-full h-full group ">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover rounded-lg filter brightness-75 group-hover:brightness-100 transition duration-300 "
                />
                <div className="absolute inset-0 flex flex-col justify-end p-5  text-white ">
                  <h2 className="text-3xl font-bold">{card.title}</h2>
                  <p className="text-xl font-bold drop-shadow-lg  opacity-80  ">{card.description}</p>
                </div>
              </div>
            ) : (
              <div className={`text-center ${card.bgColor || ""}`}>
                <h2 className={`${card.glow || ""}`}>{card.title}</h2>
                <div className="w-20 h-1 bg-blue-400 mx-auto mt-[-2px] mb-2"></div>
                    <p className={`${card.textStyle || ""}`}>{card.description}</p>
             </div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default CardSlider;

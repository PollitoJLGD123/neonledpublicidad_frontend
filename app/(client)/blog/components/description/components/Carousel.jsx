import React, { useState } from "react";
import { items } from "../Descripcion";

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="relative flex flex-wrap items-center justify-center mt-6 w-full">
      <button
        onClick={prevSlide}
        className="w-12 h-12 flex items-center justify-center flex-shrink-0 bg-white border border-gray-300 rounded-full shadow-md"
      >
        <span className="text-[#00BFFF] text-4xl">&#10094;</span>
      </button>

      <div className="inline-flex items-center justify-center bg-gradient-to-r from-[#00BFFF] to-[#2257D2] text-white px-4 sm:px-6 py-3 rounded-full text-base sm:text-lg font-bold shadow-lg text-center whitespace-nowrap mx-2 sm:mx-4">
        {items[currentIndex]}
      </div>

      <button
        onClick={nextSlide}
        className="w-12 h-12 flex items-center justify-center flex-shrink-0 bg-white border border-gray-300 rounded-full shadow-md"
      >
        <span className="text-[#00BFFF] text-4xl">&#10095;</span>
      </button>
    </div>
  );
};

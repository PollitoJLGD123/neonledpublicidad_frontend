"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { SliderContent } from "./components/SliderContent";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh]">

    {/* Texto superpuesto - Ajustado para móviles */}
    <SliderContent />
    
      {/* Contenedor principal del slide */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.imgSrc}
              alt={slide.altText}
              fill
              className="object-cover object-center brightness-75"
              priority
            />
          </div>
        ))}

        {/* Botones de navegación - Ajustados para móviles */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 md:gap-4 z-10">
          <button
            onClick={prevSlide}
            className="bg-white/30 p-1.5 md:p-2 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors"
          >
            <span className="text-xl md:text-2xl font-bold text-[--azul_oscuro] block w-6 h-6 md:w-8 md:h-8">
              &#10094;
            </span>
          </button>

          <button
            onClick={nextSlide}
            className="bg-white/30 p-1.5 md:p-2 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors"
          >
            <span className="text-xl md:text-2xl font-bold text-[--azul_oscuro] block w-6 h-6 md:w-8 md:h-8">
              &#10095;
            </span>
          </button>
        </div>

        {/* Panel de previsualización - Responsive y oculto en móviles */}
        <div className="hidden md:flex absolute bottom-24 right-8 z-20 flex-row gap-4 lg:gap-8">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`relative h-32 w-24 lg:h-48 lg:w-32 transition-all duration-300 transform overflow-hidden ${
                index === current
                  ? "ring-4 ring-[--azul_brillante] scale-110 brightness-100"
                  : "opacity-70 hover:opacity-90 hover:scale-105 brightness-75"
              }`}
            >
              <Image
                src={slide.imgSrc}
                alt={slide.altText}
                fill
                className="object-cover rounded-xl shadow-2xl"
              />
            </button>
          ))}
        </div>

        {/* Indicadores de slide para móviles */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2 md:hidden z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === current ? "bg-white w-4" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;

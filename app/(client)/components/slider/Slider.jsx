"use client"

import { useState } from "react";
import Image from "next/image";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

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
    <div className="relative w-full h-[80vh]">

        {slides.map((slide, index) => (
        <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
            index === current ? 'opacity-100' : 'opacity-0'
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

        {/* Texto superpuesto */}
        <div className="absolute inset-0 flex flex-col justify-center text-left z-10 px-16">
            <div className="text-white">
                <hr className="w-24 border-2 border-white mb-6" />
                <h1 className="text-3xl lg:text-4xl font-semibold mb-4">Luces Neón Led</h1>
                <h2 className="text-5xl lg:text-7xl font-bold mb-6">PARA TU<br/>DORMITORIO</h2>
            </div>
            <p className="text-white text-xl lg:text-2xl max-w-2xl">
                Decora tu dormitorio a tu gusto con <br/> nuestras luces neón.
            </p>
        </div>

        {/* Botones modificados */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-10">
            <button
            onClick={prevSlide}
            className="bg-white/30 p-2 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors"
            >
            <span className="text-2xl font-bold text-[--azul_oscuro] block w-8 h-8">&#10094;</span>
            </button>
            
            <button
            onClick={nextSlide}
            className="bg-white/30 p-2 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors"
            >
            <span className="text-2xl font-bold text-[--azul_oscuro] block w-8 h-8">&#10095;</span>
            </button>
        </div>
    </div>
  );
};

export default Slider;
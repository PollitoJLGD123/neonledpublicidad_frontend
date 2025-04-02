"use client";

import React from "react";

export const SlideNavigation = ({ onPrev, onNext }) => {
  return (
    <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 md:gap-4 z-10">
      <button
        onClick={onPrev}
        className="bg-white/30 p-1.5 md:p-2 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors"
      >
        <span className="text-xl md:text-2xl font-bold text-[--azul_oscuro] block w-6 h-6 md:w-8 md:h-8">
          &#10094;
        </span>
      </button>

      <button
        onClick={onNext}
        className="bg-white/30 p-1.5 md:p-2 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors"
      >
        <span className="text-xl md:text-2xl font-bold text-[--azul_oscuro] block w-6 h-6 md:w-8 md:h-8">
          &#10095;
        </span>
      </button>
    </div>
  );
};

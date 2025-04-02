"use client";

import Image from "next/image";
import React from "react";

export const SlideItem = ({ slide, isActive }) => {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-500 ${
        isActive ? "opacity-100" : "opacity-0"
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
  );
};

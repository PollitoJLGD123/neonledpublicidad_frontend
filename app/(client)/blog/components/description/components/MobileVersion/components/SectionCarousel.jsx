"use client";

import React from "react";
import { Carousel } from "./Carousel";

export const SectionCarousel = () => {
  return (
    <div className="p-6 rounded-md flex flex-col items-center">
      <p className="font-bold text-[24px] text-[#2257D2] text-center">
        ¿Buscas ...?
      </p>
      <Carousel />
    </div>
  );
};

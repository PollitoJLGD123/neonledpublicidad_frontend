"use client";

import { ImageGallery, ItemGrid } from "./components";

export const LeftSection = () => (
  <div className="flex flex-col gap-4 w-[70em] ">
    <ImageGallery />
    <div className="p-6 rounded-md ">
      <p className="font-bold text-[36px] leading-[43.88px] text-[#2257D2] tracking-normal text-left font-montserrat">
        ¿Buscas algo en específico?
        <br />
        <span className="block">Da clic a una de las palabras claves...</span>
      </p>
      <ItemGrid />
    </div>
  </div>
);

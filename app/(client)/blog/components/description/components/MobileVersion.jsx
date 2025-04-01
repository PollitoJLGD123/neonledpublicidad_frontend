import React from "react";
import { Carousel } from "./Carousel";

export const MobileVersion = () => {
  return (
    <div className="md:hidden relative w-full mt-10">
      {/* {ImagenGallery} */}
      <div className="relative top-3 max-w-[90vw] flex flex-col items-center p-5 bg-[#0F1721] rounded-br-lg rounded-tr-lg shadow-lg">
        <p className="text-white font-bold italic text-[18px] text-center">
          "Del diseño a la instalación, así damos vida a nuestros productos
          destacables."
        </p>
        <div className="mt-4 border-[10px] border-[#0F1721] rounded-lg shadow-lg overflow-hidden">
          <img
            src="/blog/description/xd.png"
            alt="Imagen destacada"
            className="max-h-[23rem] object-cover rounded-lg"
          />
        </div>
      </div>
      {/* {RightSection} */}
      <div className="relative max-w-[90vw] flex flex-col items-center p-6 bg-[#0F1721] rounded-bl-lg rounded-tl-lg shadow-lg mt-10 ml-auto">
        <h2 className="text-white font-bold text-[24px] text-center">
          ¡Bienvenidos a nuestro blog!
        </h2>
        <img
          src="/blog/description/logonhl.png"
          alt="Logo"
          className="mx-auto mt-2"
        />
      </div>

      {/* {Carrousel} */}
      <div className="p-6 rounded-md flex flex-col items-center">
        <p className="font-bold text-[24px] text-[#2257D2] text-center">
          ¿Buscas ...?
        </p>

        <Carousel />
      </div>
    </div>
  );
};

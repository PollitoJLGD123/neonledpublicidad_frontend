"use client";
import Item from "./components/item";
import { useEffect, useState } from "react";
import { Carousel } from "./components/Carousel";
import { LeftSection } from "./components/LeftSection";
import { RightSection } from "./components/RightSection";

export const items = [
  "Letreros",
  "Carteles",
  "Impresiones",
  "Otros",
  "Consultas",
  "Tendencias",
  "Instalaciones",
  "Garantía",
];

export default function Descripcion() {
  const [isResponsive, setIsResponsive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full mt-10">
      <div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-r from-[--azul_brillante] to-[--azul_intenso]"></div>
      {!isResponsive ? (
        // {/* DESKTOP */}
        <div className="relative flex flex-col md:flex-row items-center justify-center  py-16 gap-8">
          <LeftSection />
          <RightSection />
        </div>
      ) : (
        <>
          {/* MOBILE */}
          {/* {ImagenMain} */}
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
          {/* {ImagenSidebar} */}
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

          {/* {TargetSliders} */}
          <div className="p-6 rounded-md flex flex-col items-center">
            <p className="font-bold text-[24px] text-[#2257D2] text-center">
              ¿Buscas ...?
            </p>

            <Carousel />
          </div>
        </>
      )}
    </div>
  );
}

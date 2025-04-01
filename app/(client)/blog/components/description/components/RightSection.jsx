import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const RightSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const flecha = document.getElementById("flechaAbajo");
      if (flecha) {
        const rect = flecha.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-[30em] p-6 bg-[#0F1721] rounded-bl-lg rounded-tl-lg  shadow-lg flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute top-[-35%] left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] bg-[radial-gradient(circle,_rgb(0,_94,_255)_0%,_transparent_100%)] filter blur-[80px] pointer-events-none"></div>

      <h2 className="font-montserrat text-white font-bold text-[36px] max-[1121px]:text-[30px] max-[830px]:text-[24px] leading-[43.88px] text-center z-10 mt-2">
        ¡Bienvenidos a nuestro blog!
      </h2>
      <div className="z-10">
        <img
          src="/blog/description/logonhl.png"
          alt="Logo de la empresa"
          className="mx-auto"
        />
      </div>
      <p className="font-montserrat text-white font-medium text-[25px] max-[1121px]:text-[19px] max-[997px]:text-[15px] leading-[30.48px] text-center mt-4 z-10">
        Aquí encontrarás inspiración, tendencias y soluciones para que tu marca
        brille. ¡Descubre el poder de la luz!
      </p>
      <div className="mt-6 z-10">
        <motion.img
          id="flechaAbajo"
          src="/blog/description/flechaabajo.png"
          alt="Flecha hacia abajo"
          className="mx-auto"
          initial={{ y: 0 }}
          animate={isVisible ? { y: [0, -10, 0] } : {}}
          transition={{ repeat: 5, duration: 0.5, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

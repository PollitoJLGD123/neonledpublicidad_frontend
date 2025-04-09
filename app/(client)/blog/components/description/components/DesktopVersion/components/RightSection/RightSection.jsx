"use client";

import React from "react";
import { WelcomeSection } from "../../../common/WelcomeSection";
import { AnimatedArrow } from "./components/AnimatedArrow";

export const RightSection = () => {
  return (
    <div className="relative w-[30em] p-6 bg-[#0F1721] rounded-bl-lg rounded-tl-lg  shadow-lg flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute top-[-35%] left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] bg-[radial-gradient(circle,_rgb(0,_94,_255)_0%,_transparent_100%)] filter blur-[80px] pointer-events-none"></div>

      <WelcomeSection />

      <p className="font-montserrat text-white font-medium text-[25px] max-[1121px]:text-[19px] max-[997px]:text-[15px] leading-[30.48px] text-center mt-4 z-10">
        Aquí encontrarás inspiración, tendencias y soluciones para que tu marca
        brille. ¡Descubre el poder de la luz!
      </p>
      <div className="mt-6 z-10">
        <AnimatedArrow />
      </div>
    </div>
  );
};

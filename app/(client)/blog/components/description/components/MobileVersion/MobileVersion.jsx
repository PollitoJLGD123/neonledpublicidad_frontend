import React from "react";
import { WelcomeSection } from "../common/WelcomeSection";
import { ImageSection, SectionCarousel } from "./components";

export const MobileVersion = () => {
  return (
    <div className="md:hidden relative w-full mt-10">
      <ImageSection />

      <div className="relative max-w-[90vw] flex flex-col items-center p-6 bg-[#0F1721] rounded-bl-lg rounded-tl-lg shadow-lg mt-10 ml-auto">
        <WelcomeSection />
      </div>

      <SectionCarousel />
    </div>
  );
};

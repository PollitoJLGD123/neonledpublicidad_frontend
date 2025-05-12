"use client";

import React from "react";
import { WelcomeSection } from "../common/WelcomeSection";

export const MobileVersion = () => {
  return (
    <div className="md:hidden relative w-full mt-10">
      <div className="relative max-w-[90vw] flex flex-col items-center p-6 bg-[#0F1721] rounded-bl-lg rounded-tl-lg shadow-lg mt-10 ml-auto">
        <WelcomeSection />
      </div>
    </div>
  );
};

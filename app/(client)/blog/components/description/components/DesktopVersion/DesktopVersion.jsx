"use client";

import React from "react";
import { LeftSection, RightSection } from "./components";

export const DesktopVersion = () => {
  return (
    <div className="hidden md:flex relative flex-col md:flex-row items-center justify-center  py-16 gap-8">
      <LeftSection />
      <RightSection />
    </div>
  );
};

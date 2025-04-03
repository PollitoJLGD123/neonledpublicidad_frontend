"use client";

import React from "react";
import { MissionVision } from "./components/MissionVision";
import { CompanyValues } from "./components/CompanyValues";
import { SectionBackground } from "./components/SectionBackground";

const AboutStatic = () => {
  return (
    <div className="text-center max-w-xl lg:max-w-2xl px-4 z-10 relative">
      <h2 className="text-xl md:text-2xl mb-2 md:mb-4 text-white">
        Conoce más sobre
      </h2>
      <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white neon-textov2">
        NOSOTROS
      </h1>
      <p className="text-base md:text-lg text-white">
        Somos Neon Led Store, una empresa dedicada a la creación de diseños
        personalizados de luces LED que transforman cualquier espacio en un
        reflejo único de estilo y personalidad.
      </p>
    </div>
  );
};

const Nosotros = () => {
  const companyValues = [
    {
      title: "Trabajo en",
      value: "EQUIPO",
      bgColor: "bg-blue-400",
      icon: (
        <svg
          className="w-6 h-6 md:w-8 md:h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "Compromiso con",
      value: "EL CLIENTE",
      bgColor: "bg-blue-600",
      icon: (
        <svg
          className="w-6 h-6 md:w-8 md:h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      title: "Somos",
      value: "RESPETUOSOS",
      bgColor: "bg-blue-700",
      icon: (
        <svg
          className="w-6 h-6 md:w-8 md:h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
    },
    {
      title: "Profecionalismo",
      value: "",
      bgColor: "bg-gray-800",
      icon: (
        <svg
          className="w-6 h-6 md:w-8 md:h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pb-8">
      {/* Hero Section - Mejorado para móviles con imagen de fondo */}
      <section className="relative min-h-[400px] md:h-[500px] flex items-center justify-center px-4 py-12 md:py-0 overflow-hidden">
        {/* Imagen de fondo semi-transparente */}
        <SectionBackground />
        <AboutStatic />
      </section>

      {/* Mission & Vision Section - Mejorado espaciado */}
      <MissionVision />

      {/* Values Section - Mejorado para móviles */}
      <CompanyValues companyValues={companyValues} />
    </div>
  );
};

export default Nosotros;

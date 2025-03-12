"use client";
import { use, useEffect, useState } from "react";

const SidebarMenu = () => {
  const [isFixed, setIsFixed] = useState(true);
  const [sidebarTop, setSidebarTop] = useState("30%"); // Posición inicial

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer"); 
      const sidebar = document.getElementById("sidebar-menu");

      if (footer && sidebar) {
        const footerTop = footer.getBoundingClientRect().top;
        const sidebarHeight = sidebar.offsetHeight;
        
        if (footerTop <= sidebarHeight + 50) {
          setIsFixed(false);
          setSidebarTop(`${window.scrollY + footerTop - sidebarHeight - 50}px`); // Lo fija antes del footer
        } else {
          setIsFixed(true);
          setSidebarTop("30%"); // Mantiene su posición inicial
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="sidebar-menu"
      className={`hidden lg:block fixed right-8 ${
        isFixed ? "top-[30%]" : "absolute"
      } bg-white p-4 rounded-l-lg shadow-lg w-64 z-10 transition-all duration-300`}
      style={!isFixed ? { top: sidebarTop } : {}}
    >
      <div className="mb-4">
        <h3 className="text-xl font-bold text-center mb-4">¡Descubre!</h3>
      </div>

      <div className="flex flex-col gap-2">
        <a href="#" className="text-white text-center py-2 px-4 rounded-full bg-[#03c4ff]">
          Letreros
        </a>

        {/* Links con degradado */}
        {[
          "Carteles",
          "Impresiones",
          "Otros",
          "Consultas",
          "Tendencias",
          "Instalaciones",
          "Garantía",
        ].map((item, index) => (
          <a
            key={index}
            href="#"
            className="text-white text-center py-2 px-4 rounded-full bg-gradient-to-r from-[#03c4ff] to-[#1056d2] hover:opacity-90 transition-opacity"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SidebarMenu;
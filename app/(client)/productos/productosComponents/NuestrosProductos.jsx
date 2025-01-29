import React from "react";
import "./productoStyles.css";

export default function NuestrosProductos() {
  return (
    <div className="flex items-center justify-center space-x-12 mt-[8%]">
      {/* Título */}
      <div className="text-4xl font-bold text-white">Nuestros Productos</div>
      
      {/* Línea vertical */}
      <div className="border-r-4 h-12 border-[#44b0f8] rounded-full"></div>
      
      {/* Texto */}
      <div className="text-xl text-white max-w-3xl text-left">
        Ofrecemos una gran variedad de productos en NEON LED para tu negocio tanto exterior como interior.
      </div>
    </div>
  );
}

import React from "react";
import "./productoStyles.css";

export default function Banner() {
  return (
    <div className="bg-black w-full h-[500px] flex items-center justify-center">
      {/* Contenedor de la imagen del aro */}
      <div className="circle-container z-0" /> 
      
      <div className="text-center space-y-1 z-10">
        <p className="text-sm text-color">¿Quieres</p>
        <h1 className="text-4xl neon-text">ILUMINAR</h1>
        <p className="text-4xl neon-text">TU VIDA?</p>

        <br />

        <button>
          Pide Ya!
          <div className="arrow-wrapper">
            <div className="arrow"></div>
          </div>
        </button>
      </div>
    </div>
  );
}

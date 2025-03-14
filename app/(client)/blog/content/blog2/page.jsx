"use client"
import React from 'react';
import Link from 'next/link'
import Image from "next/image";

export default function Blog2() {
  return (
    <div className="flex flex-col items-center justify-center ">
      {/* Sección superior (Cartel + Texto lateral) */}
 <div className="flex flex-col md:flex-row items-center  w-screen h-screen   rounded-lg shadow-lg">
  {/* Imagen iluminada */}
  <div className="w-full md:w-1/2 h-screen">
    <img className="w-full h-full object-cover" src="/Productos/display_1.jpg" alt="Publicidad iluminada" />
  </div>

  {/* Texto atractivo */}
  <div className="w-full md:w-1/2 text-white bg-gradient-to-r from-[#00C3FF] to-[#0050FF] " style={{ padding: '4rem' }}>
    <h2 className="text-6xl font-black mb-4">ATRAE  <br /> CLIENTES✨</h2>
    <p className="text-2xl">
      Destaca tu marca con <br /> carteles iluminados que <br /> captan miradas.<br />  Innovadores, atractivos y <br /> efectivos.
      ¡Haz que tu <br />  publicidad brille! 💡🚀
    </p>
  </div>
</div>
      {/* Sección inferior */}
      <div className="w-full max-w-5xl text-gray-900 mt-12 text-center px-6">
        <h2 className="text-2xl font-bold text-blue-600">¿QUÉ CONSEGUIRÁS?</h2>
        <p className="mt-2 text-lg text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>

        <h2 className="mt-6 text-2xl font-bold text-blue-600">¡TU PUBLICIDAD BRILLARÁ!</h2>
        <p className="mt-2 text-lg text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>

        <h2 className="mt-6 text-2xl font-bold text-blue-600">ASÍ IMPULSARÁ TU NEGOCIO:</h2>
        <p className="mt-2 text-lg text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
      </div>
    </div>
  );
}

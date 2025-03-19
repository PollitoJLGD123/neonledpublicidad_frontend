"use client"
import React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from "axios";


const Blogs = () => {
    const [datosBlog, setDatosBlog] = useState([]);
    
    useEffect(() => {
      axios
        .get("/data/datosblog.json")
        .then((res) => setDatosBlog(res.data))
        .catch((error) => console.error("Error cargando datos:", error));
    }, []);

  return (
    <>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {
          datosBlog.map((dato, index) => (
              <div key={dato.link} className="bg-[#0e1721] rounded-2xl shadow-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row lg:h-80">
                  <div className="relative h-56 lg:h-full lg:w-2/5">
                    <img 
                      src={dato.img} 
                      alt="Hipnotizalos" 
                      className="w-full h-full object-cover"
                    />
                    <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-r from-transparent to-[#0e1721]"></div>
                  </div>
                  <div className="w-full lg:w-3/5 p-8 flex flex-col justify-center">
                    <div className="text-center max-w-sm mx-auto space-y-4">
                      <h2 className="text-2xl font-bold text-white">{dato.titulo}</h2>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {dato.descripcion}
                      </p>
                      <div className="pt-8">
                      <Link href={dato.link}>
                        <button className="w-[200px] text-center px-6 py-2 rounded-full bg-gradient-to-r from-[--azul_cobalto] to-[--azul_cobalto] text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105">
                        Leer más ...
                        </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          ))
        }
      </div>
    </div>
    </>  
  );
};

export default Blogs;
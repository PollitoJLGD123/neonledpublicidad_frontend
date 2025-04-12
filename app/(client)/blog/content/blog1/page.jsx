"use client"
import React from 'react';
import Link from 'next/link';
import SidebarMenu from '../../components/SidebarMenu/SidebarMenu';
import { usePathname } from "next/navigation";
import { useState, useEffect } from 'react';
import axios from "axios";


export default function Blog1() {
  const [datoBlog, setDatoBlog] = useState({});

    

  return (
    <div>
      <div className="w-full h-screen md:h-[80vh] relative flex items-center justify-center text-center px-6 sm:px-12 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${datoBlog.bannerBlog?.img || ''})` }}>
        
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-2xl text-white">

          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            {datoBlog.bannerBlog?.titulo || "Cargando..."}
          </h1>   

          <h1 className="text-2xl md:text-xl font-bold mb-4">
            {datoBlog.bannerBlog?.subTitulo || "Cargando..."}
          </h1>

          <p className="text-lg text-gray-300 font-light">
            {datoBlog.bannerBlog?.frase || "Cargando..."}
          </p>

          <div className="w-20 h-1 bg-white mt-6 mx-auto"></div>
        </div>
      </div>
      
      {/* Integramos el sidebar menu independiente del contenido principal */}
      <SidebarMenu />
      
      {/* Contenido del blog con margen superior sobre fondo blanco y barra lateral celeste */}
      <div className="container mx-auto px-4 py-12 relative bg-gradient-to-r text-black min-h-screen w-full">
        {/* Barra lateral celeste con ancho adaptativo */}
        <div className="hidden lg:block w-20 xl:w-24 2xl:w-32 bg-[--azul_brillante] fixed left-0 top-0 h-full -z-10"></div>
        
        {/* Contenido del artículo - Ajustado con margen derecho adicional */}
        <div className="relative lg:ml-48 lg:mr-48 justify-center">
          <div className='flex flex-col xl:flex-row lg:gap-4 '>
            {/* Título del artículo con fecha */}
            <div className='w-full lg:w-3/2'>
              <div className="flex items-center mb-8 mt-5">
                <h2 className="text-4xl font-bold">{datoBlog.blog?.titulo || "Cargando..."}</h2>
                <p className="ml-4 text-sm text-gray-500">{datoBlog.blog?.fecha || "Cargando..."}</p>
              </div>             
              <p className="text-lg mb-6">
                {datoBlog.blog?.descripcion || "Cargando..."}
              </p>
            </div>
            <figure className='flex align-middle justify-center w-full xl:w-1/2'>
              <img src={datoBlog.blog?.img1} alt="Letrero de neón en un bar" className="w-[400px] lg:w-[320px]  max-w-2xl rounded-lg shadow-lg " />
            </figure>
            
          </div>
          
          
          
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10 mt-20'>
              {/* Sección 1 */}
            <div className="mb-5">
              <h3 className="text-2xl font-bold mb-3">1. El Factor Sorpresa y Distinción</h3>
              <p className="mb-4">
                Las letras de neón LED permiten personalizar la imagen de tu local, haciendo que el nombre de tu bar sea visible desde lejos. Un diseño llamativo puede convertirse en un sello distintivo y en un punto de referencia para los clientes.
              </p>
            </div>
            
            {/* Sección 2 */}
            <div className="mb-5">
              <h3 className="text-2xl font-bold mb-3">2. Ambiente y Experiencia Visual</h3>
              <p className="mb-4">
                La iluminación juega un papel crucial en la atmósfera de un bar. Los colores vibrantes y cálidos del neón LED pueden transformar un espacio ordinario en un entorno acogedor e instagrameable, incentivando a los clientes a compartir su experiencia en redes sociales.
              </p>
              
            </div>
            {/* Sección 3 */}
            <div className="mb-5">
              <h3 className="text-2xl font-bold mb-3">3. Eficiencia Energética y Durabilidad</h3>
              <p className="mb-4">
                A diferencia del neón tradicional, las luces LED son más eficientes, consumen menos energía y tienen una vida útil más prolongada. Esto no solo reduce costos operativos, sino que también contribuye a un enfoque más sostenible para tu negocio.
              </p>
            </div>
            
            {/* Sección 4 */}
            <div className="mb-5">
              <h3 className="text-2xl font-bold mb-3">4. Marketing y Atracción de Clientes</h3>
              <p className="mb-4">
                Un letrero de neón LED bien diseñado es una herramienta de marketing poderosa, capaz de captar la atención, diferenciarte de la competencia y aumentando la visibilidad de tu local.
              </p>
            </div>
            {/* Sección 5 */}
            <div className="mb-5">
              <h3 className="text-2xl font-bold mb-3">5. Consejos para Elegir el Letrero Perfecto</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Opta por colores que reflejen la personalidad de tu bar.</li>
                <li>Elige un diseño legible y atractivo.</li>
                <li>Considera el lugar de instalación para maximizar su impacto.</li>
              </ul>
              
            </div>

          </div>
          
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 m-5'>
            <img src="/blog/blog4/image.png" alt="Variedad de letreros neón LED" className="w-full max-w-2xl mb-4 rounded-lg shadow-lg" />
            <img src="/blog/blog4/hepner1.png" alt="Ambiente con neón en bar" className="w-full max-w-2xl mb-4 rounded-lg shadow-lg" />
          </div>
          
          
          
          
          {/* Conclusión */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold mb-3">Conclusión</h3>
            <p className="mb-4">
              Invertir en luces neón LED no solo mejora la estética de tu bar, sino que también influye en la percepción de los clientes y fortalece tu marca. ¡Haz que tu bar brille con luz propia!
            </p>
          </div>
          
          {/* Imágenes de ejemplos */}
          <div className="mb-10">
            <p className="text-sm text-white">
              A continuación, te presentamos unos ejemplos de nuestros productos:
            </p>
            <div className="flex flex-wrap gap-4 justify-center align-middle">
              <img 
                src="/blog/blog4/Frame7.png" 
                alt="Ejemplo 1" 
                className="w-full max-w-xs rounded-lg shadow-md"
              />
              <img 
                src="/blog/blog4/Frame8.png" 
                alt="Ejemplo 2" 
                className="w-full max-w-xs rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
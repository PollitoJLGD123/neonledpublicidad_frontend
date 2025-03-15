import React from 'react';
import Link from 'next/link';

export default function Blog3() {
  return (
    <div>
      {/* Contenedor de la imagen y el título */}
      <div className="w-full h-[1024px] relative overflow-hidden">
        {/* Imagen de fondo con zoom out y posición ajustada más arriba */}
        <img
          src="/blog/holografico.png"
          alt="Hologramas 3D en Publicidad"
          className="w-full h-full object-cover transform scale-110 transition-transform duration-300 object-[center_40%]" // Ajustado de object-top a object-[center_40%]
        />
        
        {/* Overlay oscuro para mejorar contraste */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Título superpuesto sobre la imagen - ajustado más arriba */}
        <div className="absolute top-[15%] left-0 right-0 flex flex-col items-center justify-center z-10"> {/* Cambiado de top-1/4 a top-[15%] */}
          <h1 className="text-5xl font-bold text-white text-center max-w-4xl px-4">
            Hologramas 3D: La Revolución Visual en la Publicidad
          </h1>
          <div className="w-24 h-1 bg-white mt-4"></div>
        </div>
      </div>
      
      {/* Contenido del blog con margen superior sobre fondo blanco */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-[#0e1721] mb-6 text-center max-w-4xl mx-auto">
          ¿Qué son los Hologramas 3D y Cómo Funcionan?
        </h2>
        <p className="text-gray-700 mb-6 max-w-4xl mx-auto text-justify px-4 leading-relaxed">
          Los hologramas 3D son imágenes tridimensionales proyectadas en el aire mediante
          dispositivos especiales, como ventiladores holográficos o pantallas de proyección
          avanzada. Estos dispositivos utilizan una combinación de luces LED y alta velocidad
          de rotación para crear una ilusión de objetos flotantes que parecen cobrar vida.
          Gracias a su realismo y atractivo visual, esta tecnología está revolucionando sectores
          como el marketing, el entretenimiento y la educación.
        </p>
        
        {/* Imagen de Coca-Cola holográfica */}
        <div className="flex justify-center my-10">
          <img 
            src="/blog/blog3/cocacola.png"
            alt="Holograma 3D de botella de Coca-Cola"
            className="max-w-full rounded-lg shadow-lg"
          />
        </div>
        
        <h2 className="text-3xl font-bold text-[#0e1721] mb-6 text-center max-w-4xl mx-auto">
          Aplicaciones de los Hologramas 3D en Marketing & Publicidad
        </h2>           
        <ul className="text-gray-700 mb-6 max-w-4xl mx-auto pl-12 pr-4">
          <li className="mb-2">
            <strong>Eventos y ferias comerciales:</strong> Los hologramas pueden mostrar productos de
            manera dinámica, captando la atención de los asistentes.
          </li>
          <li className="mb-2">
            <strong>Escaparates y tiendas:</strong> Proyectar productos en movimiento en una vitrina sin
            necesidad de tenerlos físicamente reduce costos y crea una experiencia única.
          </li>
          <li className="mb-2">
            <strong>Anuncios publicitarios en espacios abiertos:</strong> Los hologramas pueden proyectarse
            en exteriores, atrayendo grandes multitudes y potenciando la visibilidad de la
            marca.
          </li>
          <li className="mb-2">
            <strong>Presentaciones corporativas:</strong> Empresas innovadoras están utilizando hologramas
            para presentar datos, productos y estrategias de una forma revolucionaria.
          </li>
        </ul>

        <br />
        
        {/* Imagen del holograma de zapatillas con texto */}
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-[#0e1721] rounded-2xl shadow-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:h-[500px]">
              <div className="relative h-72 lg:h-full lg:w-2/5">
                <img 
                  src="/blog/blog3/image2.png"
                  alt="Holograma 3D de zapatillas"
                  className="w-full h-full object-cover"
                />
                <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-r from-transparent to-[#0e1721]"></div>
              </div>
              <div className="w-full lg:w-3/5 p-8 flex flex-col justify-center">
                <div className="text-center max-w-sm mx-auto space-y-4">
                  <h2 className="text-2xl font-bold text-white">El Futuro de la Publicidad</h2>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Los hologramas 3D representan una oportunidad única para las marcas que buscan diferenciarse y conectar con su audiencia de una manera innovadora. Si deseas impactar con una campaña publicitaria futurista, esta tecnología es la clave para hipnotizar a tu público y convertir su atención en ventas. ¡El futuro de la publicidad ya está aquí!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
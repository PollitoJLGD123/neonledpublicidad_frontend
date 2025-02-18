import React from 'react';

const Blogs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Blog Cards - El patrón se repite para todas las cards */}
        <div className="bg-[#0e1721] rounded-2xl shadow-lg overflow-hidden">
          {/* Contenedor flexible que cambia de dirección en responsive */}
          <div className="flex flex-col md:flex-row md:h-48">
            {/* Contenedor de imagen - ocupa todo el ancho en móvil, 1/3 en desktop */}
            <div className="relative h-48 md:h-full md:w-1/3">
              <img 
                src="/home/fondo1.webp" 
                alt="Brilla con Estilo" 
                className="w-full h-full object-cover"
              />
              {/* El degradado solo aparece en desktop */}
              <div className="hidden md:block absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-r from-transparent to-[#0e1721]"></div>
            </div>
            
            {/* Contenedor de texto - centrado en móvil, alineado a la izquierda en desktop */}
            <div className="w-full md:w-2/3 p-6 flex flex-col justify-center">
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2 text-white">Brilla con Estilo</h2>
                <p className="text-gray-300 mb-4">
                  Modernas y llamativas, las letras acrílicas luminosas destacan tu marca o decoran con elegancia. ¡Ilumina tu creatividad! ♥
                </p>
                <a href="#" className="inline-block text-blue-400 hover:text-blue-300">
                  Leer más
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Blog 2 */}
        <div className="bg-[#0e1721] rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row md:h-48">
            <div className="relative h-48 md:h-full md:w-1/3">
              <img 
                src="/home/fondo1.webp" 
                alt="Hipnotizalos" 
                className="w-full h-full object-cover"
              />
              <div className="hidden md:block absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-r from-transparent to-[#0e1721]"></div>
            </div>
            <div className="w-full md:w-2/3 p-6 flex flex-col justify-center">
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2 text-white">Hipnotizalos</h2>
                <p className="text-gray-300 mb-4">
                  Cautiva con visuales 3D futuristas. Tus anuncios cobrarán vida con hologramas que atraen, sorprenden y convierten. ✅
                </p>
                <a href="#" className="inline-block text-blue-400 hover:text-blue-300">
                  Leer más
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Los demás blogs siguen el mismo patrón... */}
        {/* Puedes copiar y pegar el mismo estructura cambiando el contenido */}
      </div>
    </div>
  );
};

export default Blogs;
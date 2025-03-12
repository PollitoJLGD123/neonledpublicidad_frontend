import React from 'react';

const SidebarMenu = () => {
  return (
    <div className="hidden lg:block fixed top-28 right-1 bg-white p-4 rounded-l-lg shadow-lg w-56 z-50 border border-black max-h-[80vh] overflow-y-auto">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-center mb-4">¡Descubre!</h3>
      </div>
      
      <div className="flex flex-col gap-2">
        <a href="#" className="text-white text-center py-2 px-4 rounded-full bg-[#03c4ff]">
          Letreros
        </a>
        
        {[ 'Carteles', 'Impresiones', 'Otros', 'Consultas', 'Tendencias', 'Instalaciones', 'Garantía' ].map((item, index) => (
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
import React from 'react';

const SidebarMenu = () => {
  return (
    <div className="hidden lg:block fixed right-8 top-[30%] bg-white p-4 rounded-l-lg shadow-lg w-64 z-10">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-center mb-4">¡Descubre!</h3>
      </div>
      
      <div className="flex flex-col gap-2">
        <a href="#" className="text-white text-center py-2 px-4 rounded-full bg-[#03c4ff]">
          Letreros
        </a>
        
        {/* Links con degradado */}
        {[
          'Carteles',
          'Impresiones',
          'Otros',
          'Consultas',
          'Tendencias',
          'Instalaciones',
          'Garantía'
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
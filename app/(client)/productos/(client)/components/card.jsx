import React from 'react';

const Card = ({ numero, title, descripcion }) => {
  return (
    <div
      className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl shadow-xl text-center 
                flex flex-col justify-between hover:shadow-2xl transform hover:scale-[1.02] 
                transition-all duration-300 max-w-xs mx-4 w-full flex-grow-0"
    >
      <div className="flex items-center justify-center mb-4">
        <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center 
                        justify-center font-bold text-sm">
          {numero}
        </div>
      </div>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-300 text-xs leading-relaxed">{descripcion}</p>
    </div>
  );
};

export default Card;

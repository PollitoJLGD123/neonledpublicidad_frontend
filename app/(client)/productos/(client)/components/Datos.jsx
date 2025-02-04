import NeonBackground from '../../components/Luz'; 
import React from "react";

const data = [
  {
    id: 1,
    title: "Característica",
    description:
      "Los objetos holográficos pueden adaptarse y cambiarse en tiempo real, lo que permite a los presentadores ajustar la imagen según la audiencia.",
  },
  {
    id: 2,
    title: "Ventaja",
    description:
      "Permiten la participación a distancia, superando barreras físicas y facilitando la comunicación.",
  },
  {
    id: 3,
    title: "Consumo Energético",
    description:
      "Entre 65-75W para dispositivos holográficos específicos, como ventiladores holográficos.",
  },
  {
    id: 4,
    title: "Iluminación",
    description:
      "Los hologramas presentan un efecto iridiscente, cambiando de color y brillo dependiendo de la posición del observador.",
  },
  {
    id: 5,
    title: "Durabilidad",
    description:
      "La durabilidad de los hologramas varía según su tipo y aplicación, pero en general, los hologramas de seguridad son conocidos por su alta resistencia.",
  },
];

export default function Datos() {
  return (
    <div className="relative min-h-screen">
      <NeonBackground className="absolute inset-0 z-0" />
      
      <div className="relative z-10 min-h-screen bg-gradient-to-b from-gray-900/80 to-black/80 text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Datos sobre: </h1>
        <h1 className="text-4xl font-bold mb-8 text-center text-cyan-400 neon-text">HOLOGRÁFICO</h1>
        
        {/* Cambiamos el grid por flexbox */}
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl w-full">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl shadow-xl text-center 
                         flex flex-col justify-between hover:shadow-2xl transform hover:scale-[1.02] 
                         transition-all duration-300 max-w-xs mx-4 w-full flex-grow-0" // Añadimos flex-grow-0
            >
              <div className="flex items-center justify-center mb-4">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center 
                              justify-center font-bold text-sm">
                  {item.id}
                </div>
              </div>
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-300 text-xs leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

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
    <>
      <NeonBackground />
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center justify-center p-6">
    
      <h1 className="text-4xl font-bold mb-8">Datos sobre: HOLOGRÁFICO</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 p-4 rounded-xl shadow-md text-center flex flex-col justify-between hover:shadow-lg transform hover:scale-105 transition-transform"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                {item.id}
              </div>
            </div>
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-300 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
    
  );
}

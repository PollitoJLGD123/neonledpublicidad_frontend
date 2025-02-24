import React from 'react'
import ArticuloLayout from './ArticuloLayout'

const BrillaConEstilo = () => {
  return (
    <ArticuloLayout 
      titulo="Brilla con Estilo" 
      imagen="/blog/ACRILICO.png"
    >
      <div className="space-y-6 text-gray-300">
        <p>
          Las letras acrílicas luminosas son más que simple señalización - son una 
          declaración de estilo y modernidad para tu marcaa.
        </p>
        

        <h2 className="text-2xl font-bold text-white mt-8">
          ¿Por qué elegir letras acrílicas?
        </h2>
        
        <ul className="list-disc pl-6 space-y-2">
          <li>Durabilidad y resistencia excepcional</li>
          <li>Diseños personalizables y modernos</li>
          <li>Iluminación LED eficiente</li>
          <li>Visibilidad perfecta día y noche</li>
        </ul>

        <div className="bg-[#1a2432] p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold text-white mb-4">
            Características destacadas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-2">
              <span className="text-cyan-400">✓</span>
              <p>Acabado profesional de alta calidad</p>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-cyan-400">✓</span>
              <p>Instalación sencilla y segura</p>
            </div>
          </div>
        </div>
      </div>
    </ArticuloLayout>
  )
}

export default BrillaConEstilo
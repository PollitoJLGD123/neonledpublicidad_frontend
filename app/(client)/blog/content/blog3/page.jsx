import React from 'react';
import Link from 'next/link';

export default function Blog3() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto bg-[#0e1721] rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-white mb-6">Brilla con Estilo</h1>
        
        <img 
          src="/blog/HOLOGRAFICO.png" 
          alt="Letras Acrílicas Luminosas" 
          className="w-full h-[400px] object-cover rounded-xl mb-8"
        />
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300">
            Las letras acrílicas luminosas representan la perfecta fusión entre elegancia y modernidad.
            {/* Aquí va el contenido del blog */}
          </p>
          
          <div className="mt-8">
            <Link href="/blog">
              <button className="px-6 py-2 rounded-full bg-gradient-to-r from-[--azul_cobalto] to-[--azul_cobalto] text-white hover:opacity-90 transition-all duration-300">
                Volver a Blogs
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
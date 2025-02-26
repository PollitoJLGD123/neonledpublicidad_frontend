import React from 'react';
import Link from 'next/link';

export default function Blog4() {
  return (
    <div>
      {/* Contenedor de la imagen y el título */}
      <div className="w-full h-[1024px] relative overflow-hidden">
        {/* Imagen de fondo con zoom out y posición ajustada más arriba */}
        <img
          src="/blog/LETRANEONLED.png"
          alt="Luces Neón LED para Bares"
          className="w-full h-full object-cover transform scale-110 transition-transform duration-300 object-[center_40%]"
        />
        
        {/* Overlay oscuro para mejorar contraste */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Título superpuesto sobre la imagen - ajustado más arriba */}
        <div className="absolute top-[15%] left-0 right-0 flex flex-col items-center justify-center z-10">
          <h1 className="text-5xl font-bold text-white text-center max-w-4xl px-4">
            Tu Bar, en la Mira
          </h1>
          <div className="w-24 h-1 bg-white mt-4"></div>
        </div>
      </div>
      
      {/* Contenido del blog con margen superior sobre fondo blanco y barra lateral celeste */}
      <div className="container mx-auto px-4 py-12 relative">
        {/* Barra lateral celeste con ancho aumentado */}
        <div className="w-20 bg-[#AADFFD] absolute -left-0 top-0 h-full"></div>
        
        {/* Contenido del artículo */}
        <div className="relative ml-24">
          {/* Título del artículo con fecha */}
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold">Tu Bar, en la Mira</h2>
            <p className="ml-4 text-sm text-gray-500">6 de marzo de 2023</p>
          </div>
          
          <p className="text-lg mb-6">
            Las luces neón LED se han convertido en un elemento diferenciador en el mundo de la hospitalidad. No solo son visualmente atractivos, sino que también refuerzan la identidad de tu negocio. En este artículo, exploraremos cómo las letras luminosas pueden marcar la diferencia en la experiencia de tus clientes.
          </p>
          
          {/* Sección 1 */}
          <div className="mb-10">
            <img src="/blog/blog4/LETRA_NEON.png" alt="Letrero de neón en un bar" className="w-full max-w-2xl mb-4 rounded-lg shadow-lg" />
            
            <h3 className="text-2xl font-bold mt-6 mb-3">1. El Factor Sorpresa y Distinción</h3>
            <p className="mb-4">
              Las letras de neón LED permiten personalizar la imagen de tu local, haciendo que el nombre de tu bar sea visible desde lejos. Un diseño llamativo puede convertirse en un sello distintivo y en un punto de referencia para los clientes.
            </p>
          </div>
          
          {/* Sección 2 */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-3">2. Ambiente y Experiencia Visual</h3>
            <p className="mb-4">
              La iluminación juega un papel crucial en la atmósfera de un bar. Los colores vibrantes y cálidos del neón LED pueden transformar un espacio ordinario en un entorno acogedor e instagrameable, incentivando a los clientes a compartir su experiencia en redes sociales.
            </p>
            <img src="/blog/blog4/hepner1.png" alt="Ambiente con neón en bar" className="w-full max-w-2xl mb-4 rounded-lg shadow-lg" />
          </div>
          
          {/* Sección 3 */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-3">3. Eficiencia Energética y Durabilidad</h3>
            <p className="mb-4">
              A diferencia del neón tradicional, las luces LED son más eficientes, consumen menos energía y tienen una vida útil más prolongada. Esto no solo reduce costos operativos, sino que también contribuye a un enfoque más sostenible para tu negocio.
            </p>
          </div>
          
          {/* Sección 4 */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-3">4. Marketing y Atracción de Clientes</h3>
            <p className="mb-4">
              Un letrero de neón LED bien diseñado es una herramienta de marketing poderosa, capaz de captar la atención, diferenciarte de la competencia y aumentando la visibilidad de tu local.
            </p>
          </div>
          
          {/* Sección 5 */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-3">5. Consejos para Elegir el Letrero Perfecto</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Opta por colores que reflejen la personalidad de tu bar.</li>
              <li>Elige un diseño legible y atractivo.</li>
              <li>Considera el lugar de instalación para maximizar su impacto.</li>
            </ul>
            <img src="/blog/blog4/image.png" alt="Variedad de letreros neón LED" className="w-full max-w-2xl mb-4 rounded-lg shadow-lg" />
          </div>
          
          {/* Conclusión */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-3">Conclusión</h3>
            <p className="mb-4">
              Invertir en luces neón LED no solo mejora la estética de tu bar, sino que también influye en la percepción de los clientes y fortalece tu marca. ¡Haz que tu bar brille con luz propia!
            </p>
          </div>
          
        {/* Imágenes de ejemplos */}
            <div className="mb-10">
                <p className="text-sm text-gray-600 mb-4">
                    A continuación, te presentamos unos ejemplos de nuestros productos:
                </p>
                <div className="flex flex-wrap gap-4">
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
import React from 'react';
import Link from 'next/link';
import SidebarMenu from '../../components/SidebarMenu/SidebarMenu';

export default function Blog4() {
  return (
    <div>
      {/* Contenedor de la imagen y el título - SIN CAMBIOS */}
      <div className="w-full h-screen md:h-[80vh] relative flex items-center justify-center text-center px-6 sm:px-12 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: "url('/blog/LETRANEONLED.png')" }}>
        
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-2xl text-white">

          <h1 className="text-red-200 text-5xl md:text-6xl font-extrabold mb-4 neon-textov4">
            TU BAR EN LA MIRA
          </h1>   

          <h1 className="text-2xl md:text-xl font-bold mb-4">
            Ilumina tu espacio, cautiva a tus clientes
          </h1>

          <p className="text-lg text-gray-300 font-light">
            Transforma la atmósfera de tu bar con luces neón LED vibrantes y llenas de estilo.
          </p>

          <div className="w-20 h-1 bg-white mt-6 mx-auto"></div>
        </div>
      </div>
      
      { /*Integramos el sidebar menu independiente del contenido principal*/ }
      <SidebarMenu />
  
      <div className="container mx-auto px-4 py-12 relative bg-gradient-to-r text-black min-h-screen w-full">

        <div className="hidden lg:block w-20 xl:w-24 2xl:w-32 bg-gradient-to-b from-red-500 via-white to-blue-500 fixed left-0 top-0 h-full -z-10"></div>
        
        <div className="relative lg:mx-48 p-6 bg-black/90 text-white rounded-lg shadow-xl">
          {/* Contenido principal */}
          <div className="flex flex-col xl:flex-row lg:gap-6">
            <div className='w-full xl:w-1/2'>
              <div className="flex items-center mb-6 mt-5">
                <h2 className="text-5xl font-extrabold text-red-500">Tu Bar, en la Mira</h2>
                <p className="ml-4 text-lg text-gray-400">6 de marzo de 2023</p>
              </div>
              <p className="text-lg leading-relaxed">
                Las luces neón LED se han convertido en un elemento diferenciador en el mundo de la hospitalidad. No solo son visualmente atractivos, sino que también refuerzan la identidad de tu negocio. En este artículo, exploraremos cómo las letras luminosas pueden marcar la diferencia en la experiencia de tus clientes.
              </p>
            </div>
            <figure className='flex justify-center w-full xl:w-1/2'>
              <img src="/blog/blog4/LETRA_NEON.png" alt="Letrero de neón en un bar" className="w-80 xl:w-96 rounded-lg shadow-lg border-2 border-red-500" />
            </figure>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16'>
            {[{
              title: "El Factor Sorpresa y Distinción",
              text: "Las letras de neón LED permiten personalizar la imagen de tu local, haciendo que el nombre de tu bar sea visible desde lejos. Un diseño llamativo puede convertirse en un sello distintivo y en un punto de referencia para los clientes."
            }, {
              title: "Ambiente y Experiencia Visual",
              text: "La iluminación juega un papel crucial en la atmósfera de un bar. Los colores vibrantes y cálidos del neón LED pueden transformar un espacio ordinario en un entorno acogedor e instagrameable."
            }, {
              title: "Eficiencia Energética y Durabilidad",
              text: "A diferencia del neón tradicional, las luces LED son más eficientes, consumen menos energía y tienen una vida útil más prolongada."
            }, {
              title: "Marketing y Atracción de Clientes",
              text: "Un letrero de neón LED bien diseñado es una herramienta de marketing poderosa, capaz de captar la atención y aumentar la visibilidad de tu local."
            }].map((section, index) => (
              <div key={index} className="p-4 bg-gray-900 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2 text-blue-400">{section.title}</h3>
                <p className="text-gray-300">{section.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-3 text-green-400">Consejos para Elegir el Letrero Perfecto</h3>
            <ul className="list-disc pl-6 text-gray-300">
              <li>Opta por colores que reflejen la personalidad de tu bar.</li>
              <li>Elige un diseño legible y atractivo.</li>
              <li>Considera el lugar de instalación para maximizar su impacto.</li>
            </ul>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10'>
            {["/blog/blog4/image.png", "/blog/blog4/hepner1.png"].map((src, index) => (
              <img key={index} src={src} alt="Ejemplo de letrero" className="w-full rounded-lg shadow-xl border-2 border-purple-400" />
            ))}
          </div>

          <div className="mt-10 p-6 bg-gray-900 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-3 text-yellow-400">Conclusión</h3>
            <p className="text-gray-300">
              Invertir en luces neón LED no solo mejora la estética de tu bar, sino que también influye en la percepción de los clientes y fortalece tu marca. ¡Haz que tu bar brille con luz propia!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
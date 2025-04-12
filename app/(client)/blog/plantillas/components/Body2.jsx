"use client"
import React, { useState, useEffect } from 'react'
export default function Body2() {

    const BlogSection = ({ title, content,index }) =>(
        <div className="mb-6 bg-gray-100 rounded-2xl shadow-md transition-transform hover:scale-[1.01] duration-300">
           <div className='bg-gradient-to-br from-blue-600 to-indigo-700 flex justify-start'>
                <h2 className='text-xl bg-white text-blue-600 font-bold align-middle h-full p-5'>{index}</h2>
                <h3 className="flex text-center text-xl font-semibold text-white justify-center align-middle">
                    <p>
                    {title}
                    </p>

                </h3>
           </div>
            
            <p className="bg-[#111827] text-white rounded-b-lg leading-relaxed p-6">{content}</p>
        </div>
      );

  return (
    <div className='flex justify-center m-5'>
        <div class="hidden lg:block w-20 xl:w-24 2xl:w-32 bg-gradient-to-br from-blue-600 to-indigo-700 fixed left-0 top-0 h-full -z-10"></div>
        <div className=" w-[1000px] relative bg-gradient-to-r text-black rounded-2xl shadow-[0px_10px_25px_rgba(0,0,0,0.1)] overflow-hidden font-sans">
        {/* Encabezado tipo blog */}
        <div className="relative h-[500px] overflow-hidden">
        <div class="bg-gradient-to-br from-blue-600 to-indigo-700 py-3 px-6 flex justify-between items-center"><div class="flex items-center text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar w-4 h-4 mr-2"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg><span class="text-sm font-medium"><p className="text-white mb-2 font-bold text-start">Publicado el 6 de marzo de 2023</p></span></div><div class="flex space-x-1"><div class="w-2 h-2 rounded-full bg-white/70"></div><div class="w-2 h-2 rounded-full bg-white/70"></div><div class="w-2 h-2 rounded-full bg-white/70"></div></div></div>
          <img
            src="/blog/blog4/LETRA_NEON.png" 
            alt="Letrero de neón en un bar" 
            className="absolute w-full h-full object-cover"
          />
          <div className="relative h-full flex flex-col justify-start bg-black/20 backdrop-blur-sm">
          <div className=' mt-[60px] bg-[#f0f0f0] opacity-80 p-8 w-[450]'>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4 drop-shadow-lg">Brilla con Estilo</h2>
          </div>
          </div>
        </div>
        <div className='m-50'>
            .
        </div>

        <div className="absolute top-[380px] left-1/2 transform -translate-x-1/2 w-[800px] bg-white p-10 rounded-lg shadow-md z-30">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500"></div>
        <p className="text-lg leading-relaxed text-gray-700">
            Las luces neón LED se han convertido en un elemento diferenciador en el mundo de la hospitalidad. No solo son visualmente atractivos, sino que también refuerzan la identidad de tu negocio. En este artículo, exploraremos cómo las letras luminosas pueden marcar la diferencia en la experiencia de tus clientes.
        </p>
        </div>


        

            <div className="px-6 lg:px-32 py-10 ">
                {/* Hero Section */}
                {/* Secciones del blog */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-16">
                <BlogSection
                    index={1} 
                    title="El Factor Sorpresa y Distinción"
                    content="Las letras de neón LED permiten personalizar la imagen de tu local, haciendo que el nombre de tu bar sea visible desde lejos. Un diseño llamativo puede convertirse en un sello distintivo y en un punto de referencia para los clientes."
                />
                <BlogSection
                    index={2}  
                    title="Ambiente y Experiencia Visual"
                    content="La iluminación juega un papel crucial en la atmósfera de un bar. Los colores vibrantes y cálidos del neón LED pueden transformar un espacio ordinario en un entorno acogedor e instagrameable, incentivando a los clientes a compartir su experiencia en redes sociales."
                />
                <BlogSection
                    index={3}  
                    title="Eficiencia Energética y Durabilidad"
                    content="A diferencia del neón tradicional, las luces LED son más eficientes, consumen menos energía y tienen una vida útil más prolongada. Esto no solo reduce costos operativos, sino que también contribuye a un enfoque más sostenible para tu negocio."
                />
                <BlogSection
                    index={4}  
                    title="Marketing y Atracción de Clientes"
                    content="Un letrero de neón LED bien diseñado es una herramienta de marketing poderosa, capaz de captar la atención, diferenciarte de la competencia y aumentando la visibilidad de tu local."
                />

                <BlogSection
                    index={5}  
                    title="Consejos para Elegir el Letrero Perfecto"
                    content="Opta por colores que reflejen la personalidad de tu bar.
                        Elige un diseño legible y atractivo.
                        Considera el lugar de instalación para maximizar su impacto.
                    "
                />
                </div>

                

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16 p-24 bg-gradient-to-br from-blue-600 to-indigo-700 ">
                <img src="/blog/blog4/image.png" alt="Variedad de letreros neón LED" className="rounded-xl shadow-md transition-transform duration-300 hover:scale-105" />
                <img src="/blog/blog4/hepner1.png" alt="Ambiente con neón en bar" className="rounded-xl shadow-md transition-transform duration-300 hover:scale-105" />
            </div>
        </div>

</div>


  )
}
import React from 'react';
import Image from 'next/image';

const Contacto = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[400px] md:h-[500px] bg-gradient-to-r from-blue-900 to-blue-800 flex items-center justify-center px-4 py-12 md:py-0">
        <div className="absolute right-0 w-32 h-32 md:w-64 md:h-64 mt-[-50px] md:mt-0">
          <div className="w-full h-full rounded-full bg-blue-400/20"></div>
        </div>
        <div className="text-center max-w-xl lg:max-w-2xl px-4 z-10">
          <h2 className="text-xl md:text-2xl mb-2 md:mb-4">Conoce nuestros medios de</h2>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">CONTACTO</h1>
        </div>
      </section>

      {/* Contact Info Section */}
      <div className="relative z-20 mx-4 md:mx-auto max-w-5xl -mt-16">
        <div className="bg-gray-900 rounded-xl shadow-2xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Celular */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Celular</h3>
              <p className="text-gray-300">+51 994 078 320</p>
            </div>

            {/* Dirección */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Dirección</h3>
              <p className="text-gray-300">Jr. Paruro 1401. S130, Lima</p>
            </div>

            {/* WhatsApp */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
              <p className="text-gray-300">994 078 320</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hello Section */}
      <div className="relative mt-16 bg-gradient-to-r from-blue-400 to-blue-600 py-32">
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-4">¡HOLA!</h2>
          <p className="text-xl">Déjanos tus datos y agenda una visita a nuestro local.</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 -mt-20 pb-24">
        <div className="bg-white rounded-lg p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Solicita información</h3>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Nombre*"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Apellido*"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="tel"
                placeholder="Teléfono*"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Distrito*"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <input
              type="email"
              placeholder="Email*"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500"
            >
              <option value="">Detalle de reclamación</option>
              <option value="consulta">Consulta</option>
              <option value="reclamo">Reclamo</option>
              <option value="sugerencia">Sugerencia</option>
            </select>

            <textarea
              placeholder="Mensaje*"
              rows={6}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <div className="text-center">
              <button
                type="submit"
                className="bg-gray-900 text-white px-12 py-3 rounded-md hover:bg-gray-800 transition-colors duration-300"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Redes Sociales */}
      <section className="relative bg-gray-900 py-16">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Síguenos en nuestras redes</h2>
          <div className="flex justify-center space-x-8">
            <a href="#" className="hover:opacity-75 transition-opacity">
              <Image 
                src="/facebook-icon.svg" 
                alt="Facebook"
                width={40}
                height={40}
              />
            </a>
            <a href="#" className="hover:opacity-75 transition-opacity">
              <Image 
                src="/instagram-icon.svg" 
                alt="Instagram"
                width={40}
                height={40}
              />
            </a>
            <a href="#" className="hover:opacity-75 transition-opacity">
              <Image 
                src="/whatsapp-icon.svg" 
                alt="WhatsApp"
                width={40}
                height={40}
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
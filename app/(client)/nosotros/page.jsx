import React from 'react';

const Nosotros = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section - Mejorado para móviles */}
      <section className="relative min-h-[400px] md:h-[500px] bg-gradient-to-r from-blue-900 to-blue-800 flex items-center justify-center px-4 py-12 md:py-0">
        <div className="absolute right-0 w-32 h-32 md:w-64 md:h-64 mt-[-50px] md:mt-0">
          {/* Placeholder redimensionado para móviles */}
          <div className="w-full h-full rounded-full bg-blue-400/20"></div>
        </div>
        <div className="text-center max-w-xl lg:max-w-2xl px-4 z-10">
          <h2 className="text-xl md:text-2xl mb-2 md:mb-4">Conoce más sobre</h2>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">NOSOTROS</h1>
          <p className="text-base md:text-lg">
            Somos Neon Led Store, una empresa dedicada a la creación de diseños personalizados de luces LED que transforman cualquier espacio en un reflejo único de estilo y personalidad.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section - Mejorado espaciado */}
      <section className="py-8 md:py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Mission */}
          <div className="text-center p-4 md:p-6">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">MISIÓN</h2>
            <p className="text-sm md:text-base text-gray-300">
              Somos una empresa importadora, fabricante de productos publicitarios, buscando hacer realidad las ideas de nuestros clientes, satisfaciendo sus necesidades al menor tiempo y al menor costo.
            </p>
          </div>

          {/* Vision */}
          <div className="text-center p-4 md:p-6">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">VISIÓN</h2>
            <p className="text-sm md:text-base text-gray-300">
              Ser la empresa que exprese innovación y creatividad en el mundo de la publicidad, buscando evolucionar en nuestros procesos, implementando la tecnología más eficiente.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section - Mejorado para móviles */}
      <section className="py-8 md:py-16 px-3 bg-[#B7E5FD] rounded-lg mx-4 md:mx-10 mb-8 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-black">VALORES</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Values cards con mejor espaciado móvil */}
          {[
            {
              title: "Somos un",
              value: "EQUIPO",
              bgColor: "bg-blue-400",
              icon: (
                <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              )
            },
            {
              title: "Velamos por",
              value: "EL CLIENTE",
              bgColor: "bg-blue-600",
              icon: (
                <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              )
            },
            {
              title: "Somos",
              value: "RESPETUOSOS",
              bgColor: "bg-blue-700",
              icon: (
                <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              )
            },
            {
              title: "Orientación",
              value: "AL CLIENTE",
              bgColor: "bg-gray-800",
              icon: (
                <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              )
            }
          ].map((item, index) => (
            <div key={index} className="text-center p-4">
              <div className={`w-12 h-12 md:w-16 md:h-16 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4`}>
                {item.icon}
              </div>
              <h3 className="font-bold text-black text-sm md:text-base">{item.title}</h3>
              <p className={`text-blue-400 font-bold ${item.value === "AL CLIENTE" ? "text-black" : ""}`}>{item.value}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
import React from "react";

export const MissionVision = () => {
  return (
    <section className="py-8 md:py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {/* Mission */}
        <div className="text-center p-4 md:p-6">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
            <svg
              className="w-6 h-6 md:w-8 md:h-8 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
            </svg>
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 neon-text">
            MISIÓN
          </h2>
          <p className="text-sm md:text-base text-gray-300">
            Somos una empresa importadora, fabricante de productos
            publicitarios, buscando hacer realidad las ideas de nuestros
            clientes, satisfaciendo sus necesidades al menor tiempo y al menor
            costo.
          </p>
        </div>

        {/* Vision */}
        <div className="text-center p-4 md:p-6">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
            <svg
              className="w-6 h-6 md:w-8 md:h-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 neon-text">
            VISIÓN
          </h2>
          <p className="text-sm md:text-base text-gray-300">
            Ser la empresa que exprese innovación y creatividad en el mundo de
            la publicidad, buscando evolucionar en nuestros procesos,
            implementando la tecnología más eficiente.
          </p>
        </div>
      </div>
    </section>
  );
};

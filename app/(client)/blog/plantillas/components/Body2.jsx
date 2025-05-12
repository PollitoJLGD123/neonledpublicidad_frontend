"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Loader2,
  CheckCircle,
  Clock,
  Bookmark,
  Share2,
  Eye,
} from "lucide-react";

export function Body2() {
  const [data, setDataResponse] = useState({
    tarjetas: [
      {
        titulo: "El Factor Sorpresa y Distinción",
        descripcion:
          "Las letras de neón LED permiten personalizar la imagen de tu local, haciendo que el nombre de tu bar sea visible desde lejos. Un diseño llamativo puede convertirse en un sello distintivo y en un punto de referencia para los clientes.",
      },
      {
        titulo: "Ambiente y Experiencia Visual",
        descripcion:
          "La iluminación juega un papel crucial en la atmósfera de un bar. Los colores vibrantes y cálidos del neón LED pueden transformar un espacio ordinario en un entorno acogedor e instagrameable, incentivando a los clientes a compartir su experiencia en redes sociales.",
      },
      {
        titulo: "Eficiencia Energética y Durabilidad",
        descripcion:
          "A diferencia del neón tradicional, las luces LED son más eficientes, consumen menos energía y tienen una vida útil más prolongada. Esto no solo reduce costos operativos, sino que también contribuye a un enfoque más sostenible para tu negocio.",
      },
      {
        titulo: "Marketing y Atracción de Clientes",
        descripcion:
          "Un letrero de neón LED bien diseñado es una herramienta de marketing poderosa, capaz de captar la atención, diferenciarte de la competencia y aumentando la visibilidad de tu local.",
      },
      {
        titulo: "Consejos para Elegir el Letrero Perfecto",
        descripcion:
          "Opta por colores que reflejen la personalidad de tu bar. Elige un diseño legible y atractivo.Considera el lugar de instalación para maximizar su impacto.",
      },
    ],
    commend_tarjeta: {
      texto1: "jasdpfjpsadfsdf",
      texto2: "dsfadsfnjsandlfj asndfsdf",
      texto3: "sfsadfjdsfilj bnsf sf",
      texto4: "sdfsadjf sd fis dfp asd fdsf",
      texto5: "asdf jsdoipf oasdpds f",
    },
    public_image2: "/blog/blog4/hepner1.png",
    public_image3: "/blog/blog4/image.png",
  });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("info");

  return (
    <div className="flex justify-center m-5">
      <div class="hidden lg:block w-20 xl:w-24 2xl:w-32 bg-gradient-to-br from-blue-600 to-indigo-700 fixed left-0 top-0 h-full -z-10"></div>
      <div className=" relative lg:mx-48 p-0 text-black rounded-lg shadow-[0px_10px_25px_rgba(0,0,0,0.25)] overflow-hidden">
        {/* Encabezado tipo blog */}
        <div className="relative h-[400px] overflow-hidden">
          <div className=" top-0 z-30 bg-gradient-to-br from-blue-600 to-indigo-700 border-b border-gray-200 px-6 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2 text-white  text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-clock w-4 h-4"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>2025-03-31</span>
            </div>
            <div className="flex space-x-3">
              <button className="p-2 rounded-fulltransition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-bookmark w-5 h-5 text-white"
                >
                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                </svg>
              </button>
              <button className="p-2 rounded-full transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-share2 w-5 h-5 text-white"
                >
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                </svg>
              </button>
            </div>
          </div>
          <img
            src="/blog/blog4/LETRA_NEON.png"
            alt="Letrero de neón en un bar"
            className="absolute w-full h-full object-cover"
          />
          <div className="relative h-full flex flex-col justify-start align-end bg-black/20 backdrop-blur-sm">
            <div className=" mt-[200px] p-8 w-[600]">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 leading-tight">
                Brilla con estilo
              </h2>
              <div className="w-16 h-1 bg-blue-500 mb-4"></div>
            </div>
          </div>
        </div>
        <div className="mx-10 m-5 text-lg text-gray-700 leading-relaxed">
          Las luces neón LED se han convertido en un elemento diferenciador en
          el mundo de la hospitalidad. No solo son visualmente atractivos, sino
          que también refuerzan la identidad de tu negocio. En este artículo,
          exploraremos cómo las letras luminosas pueden marcar la diferencia en
          la experiencia de tus clientes.
        </div>

        <div className="px-6 md:px-10 py-8">
          <div className="mb-10 text-lg text-gray-700 leading-relaxed">
            {data.descripcion}
          </div>

          <div className="flex border-b border-blue-200 mb-8">
            <button
              className={`px-4 py-2 font-medium text-sm ${
                activeTab === "info"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("info")}
            >
              Información
            </button>
            <button
              className={`px-4 py-2 font-medium text-sm ${
                activeTab === "tips"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("tips")}
            >
              Consejos
            </button>
            <button
              className={`px-4 py-2 font-medium text-sm ${
                activeTab === "gallery"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("gallery")}
            >
              Galería
            </button>
          </div>

          <div className="mb-10">
            {activeTab === "info" && (
              <div className="space-y-6">
                {data.tarjetas &&
                  data.tarjetas.map((section, index) => (
                    <div
                      key={`tarjeta-${index}`}
                      className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="p-1 bg-gradient-to-br from-blue-600 to-indigo-700"></div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-indigo-800">
                          {section.titulo}
                        </h3>
                        <p className="text-gray-700">{section.descripcion}</p>
                      </div>
                    </div>
                  ))}
              </div>
            )}

            {activeTab === "tips" && (
              <div className="bg-gradient-to-br from-teal-50 to-gray-50 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-6 text-teal-700 text-center">
                  {data.commend_tarjeta?.titulo || "Consejos"}
                </h3>
                <ul className="space-y-4">
                  {data.commend_tarjeta &&
                    [
                      data.commend_tarjeta.texto1,
                      data.commend_tarjeta.texto2,
                      data.commend_tarjeta.texto3,
                      data.commend_tarjeta.texto4,
                      data.commend_tarjeta.texto5,
                    ]
                      .filter((text) => text)
                      .map((text, index) => (
                        <li
                          key={`commend-${index}`}
                          className="flex items-start bg-white p-4 rounded-lg shadow-sm"
                        >
                          <div className="bg-teal-100 p-2 rounded-full mr-4">
                            <CheckCircle className="w-5 h-5 text-teal-600" />
                          </div>
                          <div>
                            <p className="text-gray-700">{text}</p>
                          </div>
                        </li>
                      ))}
                </ul>
              </div>
            )}

            {activeTab === "gallery" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  data.public_image2 || "/blog/blog-10.jpg",
                  data.public_image3 || "/blog/blog-1.jpg",
                ].map((src, index) => (
                  <div
                    key={index}
                    className="group relative rounded-xl overflow-hidden shadow-md"
                  >
                    <img
                      src={src.startsWith("http") ? src : `${src}`}
                      alt={`Imagen ${index + 1} del artículo`}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button className="bg-white/90 p-3 rounded-full">
                        <Eye className="w-6 h-6 text-teal-600" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-6 text-center">
          <p className="text-sm">© 2025 - Todos los derechos reservados</p>
        </div>
      </div>
    </div>
  );
}

export { Body2 };

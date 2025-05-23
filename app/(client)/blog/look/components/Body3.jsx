
"use client"

import { CheckCircle, Calendar, ArrowDownCircle, ExternalLink } from "lucide-react"

export default function Body3() {

    const tarjetas = [
        {
            titulo: "El Factor Sorpresa y Distinción",
            descripcion: "Las letras de neón LED permiten personalizar la imagen de tu local, haciendo que el nombre de tu bar sea visible desde lejos. Un diseño llamativo puede convertirse en un sello distintivo y en un punto de referencia para los clientes.",
        },

        {
            titulo: "Ambiente y Experiencia Visual",
            descripcion: "La iluminación juega un papel crucial en la atmósfera de un bar. Los colores vibrantes y cálidos del neón LED pueden transformar un espacio ordinario en un entorno acogedor e instagrameable.",
        },
        {
            titulo: "Eficiencia Energética y Durabilidad",
            descripcion: "A diferencia del neón tradicional, las luces LED son más eficientes, consumen menos energía y tienen una vida útil más prolongada.",
        },
        {
            titulo: "Marketing y Atracción de Clientes",
            descripcion: "Un letrero de neón LED bien diseñado es una herramienta de marketing poderosa, capaz de captar la atención y aumentar la visibilidad de tu local.",
        }
    ]

    return (
        <div className="relative lg:mx-48 bg-white text-black rounded-lg shadow-[0px_10px_25px_rgba(0,0,0,0.25)] overflow-hidden">
            <div className="bg-gradient-to-r from-blue-950 to-slate-900 py-3 px-6 flex justify-between items-center">
                <div className="flex items-center text-white">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">2025-03-31</span>
                </div>
                <div className="flex space-x-1">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-white/70"></div>
                    ))}
                </div>
            </div>

            <div className="relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-100 to-transparent"></div>
                <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                       <h1 className="text-4xl md:text-5xl font-black text-blue-950 leading-tight mb-6">TITULO DEL BLOG</h1>

                        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mb-6"></div>
                        <p className="text-lg text-gray-700 leading-relaxed">Las luces neón LED se han convertido en un elemento diferenciador en el mundo de la hospitalidad. No solo son visualmente atractivos, sino que también refuerzan la identidad de tu negocio. En este artículo, exploraremos cómo las letras luminosas pueden marcar la diferencia en la experiencia de tus clientes.</p>
                        <button
                            className="mt-6 inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
                        >
                            <span>Continuar leyendo</span>
                            <ArrowDownCircle className="ml-2 w-5 h-5" />
                        </button>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-800 to-blue-950 rounded-3xl blur"></div>
                            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                                <img
                                    src="/blog/blog-4.jpg"
                                        alt="Imagen principal"
                                   className="w-[22rem] h-[22rem] object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110 rounded-2xl shadow-lg relative z-10"
                                />
                            </div>
                            <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-blue-900 rounded-full z-0 opacity-60"></div>
                            <div className="absolute -top-3 -left-3 w-16 h-16 bg-blue-800 rounded-full z-0 opacity-60"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="content-details" className="p-8 md:p-12 bg-gradient-to-b from-white to-indigo-50">
                <div className="mb-16">
                    <div className="flex items-center mb-8">
                        <div className="w-8 h-8 rounded-full bg-indigo-900 flex items-center justify-center text-white font-bold mr-3">
                            G
                        </div>
                        <h2 className="text-2xl font-bold text-blue-950">Galería</h2>

                        <div className="h-px flex-grow bg-indigo-200 ml-4"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {["/blog/blog-2.jpg", "/blog/blog-2.jpg"].map((src, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
                                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-indigo-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <img
                                    src={src}
                                    alt={`Imagen ${index + 1} del artículo`}
                                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="bg-white/90 px-4 py-2 rounded-lg shadow-lg">
                                        <ExternalLink className="w-6 h-6 text-indigo-600" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

               <div className="mb-16">

  <div className="flex flex-col items-center mb-8">
    <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold mb-2">
      C
    </div>
    <h2 className="text-2xl font-bold text-blue-950 text-center">
      Consejos para un letrero efectivo
    </h2>
    <div className="w-24 h-1 bg-blue-200 mt-3"></div>
  </div>


  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-md">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        "Opta por colores que reflejen la personalidad de tu bar.",
        "Elige un diseño legible y atractivo.",
        "Considera el lugar de instalación para maximizar su impacto.",
        "Opta por colores que reflejen la personalidad de tu bar.",
        "Considera el lugar de instalación para maximizar su impacto.",
      ]
        .filter((text) => text)
        .map((text, index) => (
          <div
            key={`commend-${index}`}
            className="flex items-start p-4 bg-blue-100 rounded-lg shadow-sm border-l-4 border-blue-700 hover:shadow-md transition-shadow"
          >
            <CheckCircle className="w-6 h-6 text-blue-700 flex-shrink-0 mt-0.5 mr-3" />
            <p className="text-gray-800">{text}</p>
          </div>
        ))}
    </div>
  </div>
</div>


                <div>
                    <div className="flex items-center mb-8">
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-3">
                            I
                        </div>
                        <h2 className="text-2xl font-bold text-blue-600">Información Detallada</h2>
                        <div className="h-px flex-grow bg-blue-200 ml-4"></div>
                    </div>

                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-100 rounded-full opacity-70"></div>
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-100 rounded-full opacity-70"></div>

                        <div className="relative z-10">
                            {
                                tarjetas.map((section, index) => {
                                    const isEven = index % 2 === 0

                                    return (
                                        <div
                                            key={`tarjeta-${index}`}
                                            className={`mb-8 flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} bg-white rounded-xl overflow-hidden shadow-md`}
                                        >
                                            <div
                                                className={`md:w-1/3 bg-gradient-to-br ${isEven ? "from-yellow-600 to-indigo-700" : "from-indigo-700 to-yellow-800"} p-6 flex items-center justify-center`}
                                            >
                                                <h3 className="text-2xl font-bold text-white text-center">{section.titulo}</h3>
                                            </div>
                                            <div className="md:w-2/3 p-6">
                                                <p className="text-gray-700 leading-relaxed">{section.descripcion}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-3 bg-gradient-to-r from-blue-500 via-blue-500 to-indigo-500"></div>
        </div>
    )
}



"use client"

import { CheckCircle, Calendar, ArrowDownCircle, ExternalLink } from "lucide-react"

function Body3() {

    const tarjetas = [
        {
            titulo: "Estética moderna con letreros neonLED oscuros",
            descripcion: "Los letreros neonLED en tonos oscuros aportan una estética elegante y contemporánea, ideales para negocios que buscan destacar con un estilo único, sofisticado y llamativo en ambientes nocturnos.",
        },

        {
            titulo: "Diseño creativo con impacto visual ",
            descripcion: "Gracias a la tecnología LED y colores oscuros intensos, estos letreros permiten jugar con contrastes y formas que capturan la atención del público de forma inmediata y memorable.",
        },
        {
            titulo: "Ambiente envolvente y futurista",
            descripcion: "Los letreros neonLED oscuros transforman espacios comunes en entornos envolventes, ideales para bares, estudios creativos y eventos con temática moderna o vanguardista.",
        },
        {
            titulo: "Visibilidad y branding 24/7",
            descripcion: "La iluminación de bajo consumo en tonos oscuros ofrece una visibilidad permanente sin perder estilo, reforzando la identidad visual de tu marca tanto de día como de noche.",
        }
    ]

    return (
        <div className="relative lg:mx-48 bg-white text-black rounded-lg shadow-[0px_10px_25px_rgba(0,0,0,0.25)] overflow-hidden">
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-3 px-6 flex justify-between items-center">
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
                        <h1 className="text-4xl md:text-5xl font-black text-blue-900 leading-tight mb-6">Hipnotizalos</h1>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-700 to-blue-500 mb-6"></div>
                        <p className="text-lg text-gray-700 leading-relaxed">Los letreros ned son como una desplazamiento a la creatividad de efectos hipnotizar</p>
                        <button
                            className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                        >
                            <span>Continuar leyendo</span>
                            <ArrowDownCircle className="ml-2 w-5 h-5" />
                        </button>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur"></div>
                            <div className="relative">
                                <img
                                    src="/blog/led12345.jpg"
                                        alt="Imagen principal"
                                    className="w-[22rem] h-[22rem] rounded-2xl shadow-lg object-cover relative z-10"
                                />
                            </div>
                            <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-blue-100 rounded-full z-0"></div>
                            <div className="absolute -top-3 -left-3 w-16 h-16 bg-blue-100 rounded-full z-0"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="content-details" className="p-8 md:p-12 bg-gradient-to-b from-white to-indigo-50">
                <div className="mb-16">
                    <div className="flex items-center mb-8">
                        <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-white font-bold mr-3">
                            G
                        </div>
                        <h2 className="text-2xl font-bold text-indigo-900">Galería</h2>
                        <div className="h-px flex-grow bg-indigo-200 ml-4"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {["/blog/letrerosneon12.jpg", "/blog/letrerosneon1234.jpg"].map((src, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <img
                                    src={src}
                                    alt={`Imagen ${index + 1} del artículo`}
                                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="bg-white/90 px-4 py-2 rounded-lg shadow-lg">
                                        <ExternalLink className="w-6 h-6 text-blue-600" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-16">
                    <div className="flex items-center mb-8">
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-3">
                            C
                        </div>
                        <h2 className="text-2xl font-bold text-blue-600">Consejos para una compra de letrero</h2>
                        <div className="h-px flex-grow bg-blue-200 ml-4"></div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-6 shadow-md">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {
            [
                "Elige colores oscuros que generen alto contraste con la iluminación LED para una mejor visibilidad.",
                "Mide correctamente el espacio donde se instalará el letrero para asegurar un ajuste perfecto.",
                "Consulta con expertos sobre el tipo de fuente y diseño que mejor se adapta a tu marca.",
                "Verifica que el material sea resistente al clima si se instalará en exteriores.",
                "Asegúrate de que el sistema de instalación incluya soporte seguro y fácil mantenimiento.",
            ]
                .filter((text) => text)
                .map((text, index) => (
                    <div
                        key={`commend-${index}`}
                        className="flex items-start p-4 bg-blue-950 rounded-lg shadow-sm border-l-4 border-blue-400 hover:shadow-md transition-shadow"
                    >
                        <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5 mr-3" />
                        <p className="text-blue-100">{text}</p>
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
                                                className={`md:w-1/3 bg-gradient-to-br ${isEven ? "from-blue-600 to-indigo-700" : "from-indigo-700 to-purple-800"} p-6 flex items-center justify-center`}
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

            <div className="h-3 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700"></div>
        </div>
    )
}

export { Body3 };


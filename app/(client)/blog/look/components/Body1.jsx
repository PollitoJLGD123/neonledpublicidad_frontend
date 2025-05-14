
import { ArrowRight, CheckCircle} from "lucide-react"

export default function Body1() {

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
        <div className="relative lg:mx-48 p-0 text-black rounded-lg shadow-[0px_10px_25px_rgba(0,0,0,0.25)] overflow-hidden">
            
            <div className="relative h-[400px] overflow-hidden">
                <div className="absolute inset-0 z-10"></div>
                <img
                    src="/blog/fondo_plantilla1.jpg"
                    alt="Imagen principal"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>

            <div className="relative z-20 h-full flex flex-col justify-end items-center p-8 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4 bg-opacity-60 inline w-fit">TU BAR EN LA MIRA</h2>
                <p className="text-black mb-2 bg-opacity-60 inline w-fit">{'2025-03-31'}</p>
                <p className="text-lg py-5 px-5 leading-relaxed bg-black bg-opacity-60 w-fit text-white">
                    Las luces neón LED se han convertido en un elemento diferenciador en el mundo de la hospitalidad. No solo son visualmente atractivos, sino que también refuerzan la identidad de tu negocio. En este artículo, exploraremos cómo las letras luminosas pueden marcar la diferencia en la experiencia de tus clientes.
                </p>
            </div>

            

            <div className="bg-black/5 p-8">

                <div className="mb-16 p-6 bg-gradient-to-br from-green-900 to-gray-800 rounded-lg shadow-[0px_10px_25px_rgba(0,0,0,0.25)] text-center text-gray-100">
                    <div className="flex items-center justify-center mb-4">
                        <div className="h-0.5 w-12 bg-gray-400 mr-4"></div>
                        <h3 className="text-2xl font-bold text-green-400">Consejos para Elegir el Letrero Perfecto</h3>
                        <div className="h-0.5 w-12 bg-green-400 ml-4"></div>
                    </div>

                    <ul className="list-none text-black-600 space-y-3 max-w-2xl mx-auto">
                        {
                            [
                                "Opta por colores que reflejen la personalidad de tu bar.",
                                "Elige un diseño legible y atractivo.",
                                "Considera el lugar de instalación para maximizar su impacto.",
                                "Asegúrate de que la iluminación sea adecuada para resaltar el letrero.",
                                "Utiliza materiales de alta calidad para garantizar la durabilidad.",
                            ]
                                .filter((text) => text)
                                .map((text, index) => (
                                    <li key={`commend-${index}`} className="flex items-center gap-3 bg-green-600 p-3 rounded-lg">
                                        <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                                        <span className="text-left">{text}</span>
                                    </li>
                                ))}
                    </ul>
                </div>


                 {/*INFORMACION */}
                <div className="relative">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-center">
                        <div className="inline-block px-4 py-1 bg-blue-500 text-white text-sm font-medium rounded-full">
                            Información Importante
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
                        {
                            tarjetas.map((section, index) => {
                                const styles = [
                                    "bg-gradient-to-br from-purple-500 to-purple-900 border-l-4",
                                    "bg-gradient-to-br from-purple-500 to-purple-900 border-r-4",
                                    "bg-gradient-to-br from-purple-500 to-purple-900 border-l-4",
                                    "bg-gradient-to-br from-purple-500 to-purple-900 border-r-4",
                                ]

                                return (
                                    <div
                                        key={`tarjeta-${index}`}
                                        className={`p-5 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${styles[index % styles.length]}`}
                                    >
                                        <h3 className="text-xl font-bold mb-3 text-white">{section.titulo}</h3>
                                        <p className="text-gray-100">{section.descripcion}</p>
                                    </div>
                                )
                            })}
                    </div>
                </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-3 mt-8">
                    {["/blog/blog-10.jpg", "/blog/blog-1.jpg"].map((src, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-xl shadow-xl">
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                            <img
                                src={src}
                                alt={`Imagen ${index + 1} del artículo`}
                                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                                <div className="flex items-center justify-center">
                                    <span className="text-sm font-medium">Ver detalle</span>
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    )
}


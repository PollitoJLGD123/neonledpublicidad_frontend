"use client";
import Item from './components/item'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
export default function Descripcion() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const flecha = document.getElementById("flechaAbajo");
            if (flecha) {
                const rect = flecha.getBoundingClientRect();
                const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
                setIsVisible(isInView);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className="relative w-full mt-10">
            <div className="absolute top-0 left-0 w-full h-[18rem] bg-gradient-to-r from-[--azul_brillante] to-[--azul_intenso]"></div>
            <div className="relative flex flex-col md:flex-row items-center justify-center  py-16 gap-8">
                <div className="flex flex-col gap-4 w-[70em] ">
                    <div className="relative flex flex-col md:flex-row items-stretch pl-8 py-5 pr-8 max-[1119px]:pr-1 bg-[#0F1721] rounded-br-lg rounded-tr-lg shadow-lg overflow-hidden">
                        <div className='md:w-[40%]'></div>
                        <div className='ml-auto flex flex-col md:flex-row'>
                            <div className="md:w-[60%] relative z-10">
                                <img
                                    src="/blog/description/cafecreepe.png"
                                    alt="Imagen izquierda"
                                    className=" max-h-[35rem] object-cover"
                                />
                            </div>
                            <div className="md:w-[40%] flex flex-col justify-between items-center py-6 pl-6 max-[1119px]:pl-2 text-white z-10">
                                <p className="text-[22px] max-[1261px]:text-[18px] max-[1261px]:font-medium max-[997px]:text-[14.2px] italic text-center font-montserrat  font-extrabold">
                                    "Del diseño a la instalación, así damos vida a nuestros productos destacables."
                                </p>
                            </div>
                            <div className="absolute bottom-6 right-0 md:w-[50%]  z-20">
                                <div className="border-[10px] border-[#0F1721] rounded-[20px] shadow-lg overflow-hidden">
                                    <img
                                        src="/blog/description/xd.png"
                                        alt="Imagen derecha"
                                        className="max-h-[23rem] min-w-full object-cover rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 rounded-md ">
                        <p className="font-bold text-[36px] leading-[43.88px] text-[#2257D2] tracking-normal text-left font-montserrat">
                            ¿Buscas algo en específico?<br />
                            <span className="block">Da clic a una de las palabras claves...</span>
                        </p>
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                            <Item title="Letreros" />
                            <Item title="Carteles" />
                            <Item title="Impresiones" />
                            <Item title="Otros" />
                            <Item title="Consultas" />
                            <Item title="Tendencias" />
                            <Item title="Instalaciones" />
                            <Item title="Garantía" />
                        </div>
                    </div>
                </div>
                <div className="relative w-[30em] p-6 bg-[#0F1721] rounded-bl-lg rounded-tl-lg  shadow-lg flex flex-col items-center justify-center overflow-hidden">
                    <div className="absolute top-[-35%] left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] bg-[radial-gradient(circle,_rgb(0,_94,_255)_0%,_transparent_100%)] filter blur-[80px] pointer-events-none"></div>

                    <h2 className="font-montserrat text-white font-bold text-[36px] leading-[43.88px] text-center z-10 mt-2">
                        ¡Bienvenidos a nuestro blog!
                    </h2>
                    <div className="z-10">
                        <img
                            src="/blog/description/logonhl.png"
                            alt="Logo de la empresa"
                            className="mx-auto"
                        />
                    </div>
                    <p className="font-montserrat text-white font-medium text-[25px] leading-[30.48px] text-center mt-4 z-10">
                        Aquí encontrarás inspiración, tendencias y soluciones para que tu marca brille. ¡Descubre el poder de la luz!
                    </p>
                    <div className="mt-6 z-10">
                        <motion.img
                            id="flechaAbajo"
                            src="/blog/description/flechaabajo.png"
                            alt="Flecha hacia abajo"
                            className="mx-auto"
                            initial={{ y: 0 }}
                            animate={isVisible ? { y: [0, -10, 0] } : {}}
                            transition={{ repeat: 5, duration: 0.5, ease: "easeInOut" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

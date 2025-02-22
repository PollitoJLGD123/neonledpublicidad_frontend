"use client";
import Item from './components/item'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
export default function Descripcion() {
    const [isVisible, setIsVisible] = useState(false);
    const [isResponsive, setIsResponsive] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = [
        "Letreros",
        "Carteles",
        "Impresiones",
        "Otros",
        "Consultas",
        "Tendencias",
        "Instalaciones",
        "Garantía",
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsResponsive(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);



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
        !isResponsive ? (
            <>
                <div className="relative w-full mt-10">
                    <div className="absolute top-0 left-0 w-full h-[18rem] bg-gradient-to-r from-[--azul_brillante] to-[--azul_intenso]"></div>
                    <div className="relative flex flex-col md:flex-row items-center justify-center  py-16 gap-8">
                        <div className="flex flex-col gap-4 w-[70em] ">
                            <div className="relative flex flex-col md:flex-row items-stretch pl-8 py-5 pr-8 max-[1119px]:pr-1 bg-[#0F1721] rounded-br-lg rounded-tr-lg shadow-lg overflow-hidden">
                                <div className='md:w-[10%]'></div>
                                <div className='ml-auto flex flex-col md:flex-row'>
                                    <div className="md:w-[90%] relative z-10">
                                        <img
                                            src="/blog/description/cafecreepe.png"
                                            alt="Imagen izquierda"
                                            className="max-h-[40rem] min-w-[40rem] max-[1400px]:min-w-[30rem] max-[1200px]:min-w-[20rem] max-[900px]:min-w-[10rem] object-cover"

                                        />
                                    </div>
                                    <div className="md:w-[40%] flex flex-col justify-between items-center py-[3.5rem] pl-6 max-[1119px]:pl-2 text-white z-10">
                                        <p className="text-[22px] max-[1261px]:text-[18px] max-[997px]:text-[14.2px] max-[812px]:text-[13px] italic text-center font-montserrat  font-extrabold">
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

                            <h2 className="font-montserrat text-white font-bold text-[36px] max-[1121px]:text-[30px] max-[830px]:text-[24px] leading-[43.88px] text-center z-10 mt-2">
                                ¡Bienvenidos a nuestro blog!
                            </h2>
                            <div className="z-10">
                                <img
                                    src="/blog/description/logonhl.png"
                                    alt="Logo de la empresa"
                                    className="mx-auto"
                                />
                            </div>
                            <p className="font-montserrat text-white font-medium text-[25px] max-[1121px]:text-[19px] max-[997px]:text-[15px] leading-[30.48px] text-center mt-4 z-10">
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
            </>
        ) : (
            <>
                <div className="relative w-full mt-10">
                    <div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-r from-[--azul_brillante] to-[--azul_intenso]"></div>

                    <div className="relative top-3 max-w-[90vw] flex flex-col items-center p-5 bg-[#0F1721] rounded-br-lg rounded-tr-lg shadow-lg">
                        <p className="text-white font-bold italic text-[18px] text-center">
                            "Del diseño a la instalación, así damos vida a nuestros productos destacables."
                        </p>
                        <div className="mt-4 border-[10px] border-[#0F1721] rounded-lg shadow-lg overflow-hidden">
                            <img
                                src="/blog/description/xd.png"
                                alt="Imagen destacada"
                                className="max-h-[23rem] object-cover rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="relative max-w-[90vw] flex flex-col items-center p-6 bg-[#0F1721] rounded-bl-lg rounded-tl-lg shadow-lg mt-10 ml-auto">
                        <h2 className="text-white font-bold text-[24px] text-center">¡Bienvenidos a nuestro blog!</h2>
                        <img src="/blog/description/logonhl.png" alt="Logo" className="mx-auto mt-2" />
                    </div>


                    <div className="p-6 rounded-md flex flex-col items-center">
                        <p className="font-bold text-[24px] text-[#2257D2] text-center">
                            ¿Buscas ...?
                        </p>

                        <div className="relative flex items-center justify-center mt-6 w-full gap-4">
                            <button onClick={prevSlide} className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                                <span className="text-[#00BFFF] text-4xl">&#10094;</span>
                            </button>
                            <div className="inline-flex items-center justify-center bg-gradient-to-r from-[#00BFFF] to-[#2257D2] text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg text-center whitespace-nowrap">
                                {items[currentIndex]}
                            </div>
                            <button onClick={nextSlide} className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                                <span className="text-[#00BFFF] text-4xl">&#10095;</span>
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    );
}

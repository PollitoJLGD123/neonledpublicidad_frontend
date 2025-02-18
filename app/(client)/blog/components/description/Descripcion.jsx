import Item from './components/item'
export default function Descripcion() {
    return (
        <div className="relative w-full min-h-screen mt-10">
            <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-r from-[--azul_brillante] to-[--azul_intenso]"></div>
            <div className="relative flex flex-col md:flex-row items-center justify-center  py-16 gap-8">
                <div className="flex flex-col gap-4 flex-[70%]">
                    <div className="flex flex-col md:flex-row  pl-8 py-3 bg-[#0F1721] rounded-br-lg rounded-tr-lg shadow-lg overflow-hidden relative">
                        <div className=" md:w-1/2 min-h-[300px]">
                            <img
                                src="/blog/description/cafecreepe.png"
                                alt="Imagen izquierda"
                                className="w-full h-full object-cover object-left"
                            />
                        </div>

                        <div className="w-full md:w-1/2 flex flex-col justify-between p-6 text-white ">
                            <p className="text-[25px] font-medium italic leading-[30.48px] tracking-normal text-center font-montserrat">
                                "Del diseño a la instalación, así damos vida a nuestros productos destacables."
                            </p>
                            <div className="mt-4 overflow-visible border-[20px] border-[#0F1721] rounded-[20px] md:-translate-x-40">
                                <img
                                    src="/blog/description/xd.png"
                                    alt="Imagen derecha"
                                    className=" min-w-[520px] h-auto rounded-lg shadow-lg"
                                />
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
                <div className="relative flex-[30%] p-6 bg-[#0F1721] rounded-bl-lg rounded-tl-lg  shadow-lg flex flex-col items-center justify-center overflow-hidden">
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
                        <img
                            src="/blog/description/flechaabajo.png"
                            alt="Flecha hacia abajo"
                            className="mx-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

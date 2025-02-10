import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="overflow-hidden h-[850px] md:h-auto bg-gradient-to-r from-[--azul_brillante] to-[--azul_intenso] w-full pb-20">
                <div className="after:w-[200%] h-[750px] md:h-auto after:translate-x-[-25%] after:z-10 after:absolute after:inset-0 relative after:bg-[--azul_oscuro] pt-16 pb-72  after:rounded-b-[50%]">
                    <div className="rounded-full flex justify-center items-center p-7 bg-white overflow-hidden absolute w-[130px]  right-[calc(50%-65px)] bottom-[0] translate-y-[40%] z-30">
                        <img className="w-[80px]" src="/header_footer/logo_azul_letraNegra.png" alt="" />
                    </div>
                    <div className="absolute pt-10 inset-0 z-20 flex flex-col md:flex-row md:justify-between mx-32 gap-12 text-center md:text-left text-white font-semibold">
                        <ul>
                            <li className="flex flex-col">
                                <h2 className="text-[--azul_brillante]">Contáctanos</h2>
                                <span className="w-[30px] mx-auto md:mx-0 h-[6px] border-t-2 border-solid border-t-[--azul_brillante]"></span>
                            </li>
                            <li className="flex flex-col">
                                <p>Dirección:</p>
                                <p>Jr. Paruro 1404. S130, Lima,</p>
                                <p>Perú</p>
                            </li>
                            <li className="flex flex-col mt-4">
                                <p>Celular:</p>
                                <p>+51 994 078 320</p>
                            </li>
                        </ul>
                        <ul>
                            <li className="flex flex-col">
                                <h2 className="text-[--azul_brillante]">Horario</h2>
                                <span className="w-[30px] mx-auto md:mx-0 h-[6px] border-t-2 border-solid border-t-[--azul_brillante]"></span>
                            </li>
                            <li className="flex flex-col">
                                <p>Disponibilidad:</p>
                                <p>Lunes a Vietnes</p>
                                <p>8:00 a.m - 7:00 p.m</p>
                            </li>
                            <li className="flex flex-col mt-4">
                                <p>Redes sociales:</p>
                                <div className="flex gap-4 justify-between mt-2">
                                    <a className="h-10 w-10" href="#"><img className="w-full" src="/header_footer/tiktock.svg" alt="" /></a>
                                    <a className="h-10 w-10" href="#"><img className="w-full" src="/header_footer/youtube.svg" alt="" /></a>
                                    <a className="h-10 w-10" href="#"><img className="w-full" src="/header_footer/facebook.svg" alt="" /></a>
                                    <a className="h-10 w-10" href="#"><img className="w-full" src="/header_footer/instagram.svg" alt="" /></a>
                                </div>
                            </li>
                        </ul>
                        <div className="flex flex-col">
                            <h2 className="text-[--azul_brillante]">Reclamaciones</h2>
                            <span className="w-[30px] mx-auto md:mx-0 h-[6px] border-t-2 border-solid border-t-[--azul_brillante]"></span>
                            <Link className="w-[250px]" href={"/reclamaciones"}>
                                <img className="w-full" src="/reclamaciones/libro.png" alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default function Footer() {
    return (
        <>
            <footer className="bg-gradient-to-r from-[--azul_brillante] to-[--azul_intenso] w-full pb-16">
                <div className="w-full bg-[--azul_oscuro] py-16">
                    <div className="flex justify-between mx-20 gap-12 text-white">
                        <ul>
                            <li className="flex flex-col">
                                <h2 className="text-[--azul_brillante]">Contáctanos</h2>
                                <span className="w-[30px] h-[6px] border-t-2 border-solid border-t-[--azul_brillante]"></span>
                            </li>
                            <li className="flex flex-col">
                                <p>Dirección:</p>
                                <p>Jr. Paruro 1404. S130, Lima,</p>
                                <p>Perú</p>
                            </li>
                            <li className="flex flex-col">
                                <p>Celular:</p>
                                <p>+51 994 078 320</p>
                            </li>
                        </ul>
                        <ul>
                            <li className="flex flex-col">
                                <h2 className="text-[--azul_brillante]">Horario</h2>
                                <span className="w-[30px] h-[6px] border-t-2 border-solid border-t-[--azul_brillante]"></span>
                            </li>
                            <li className="flex flex-col">
                                <p>Disponibilidad:</p>
                                <p>Lunes a Vietnes</p>
                                <p>8:00 a.m - 7:00 p.m</p>
                            </li>
                            <li className="flex flex-col">
                                <p>Redes sociales:</p>
                                <div className="flex gap-4 justify-between">
                                    <p>T</p>
                                    <p>Y</p>
                                    <p>F</p>
                                    <p>I</p>
                                </div>
                            </li>
                        </ul>
                        <div className="flex flex-col">
                            <h2 className="text-[--azul_brillante]">Reclamaciones</h2>
                            <span className="w-[30px] h-[6px] border-t-2 border-solid border-t-[--azul_brillante]"></span>
                            <p>Libro</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
"use client"

import Link from "next/link";
import LinkNav from "./components/LinkNav";

export default function Header() {

    return (
        <>
            <header className="h-[100px] bg-[--azul_oscuro] flex items-center justify-center gap-6 ">

                <LinkNav text={"Inicio"} link={"/"} />
                <LinkNav text={"Productos"} link={"/productos"} />


                <div className="h-[50px] w-[50px] text-white mx-7 text-center">Neon Led</div>


                <LinkNav text={"Nosotros"} link={"/nosotros"} />
                <LinkNav text={"Contacto"} link={"/contacto"} />

            </header>
        </>
    );
}
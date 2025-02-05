"use client";

import { useState } from "react";
import Link from "next/link";
import DropdownLink from "./components/DropdownLink";
import LinkNav from "./components/LinkNav";
import "./header.css";

export default function Header() {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive); // Cambiar entre true y false
    };

    return (
        <>
            <header
                className={`header-container h-[100px] bg-[--azul_oscuro] flex items-center justify-center gap-6 ${
                    menuActive ? "menu-active" : ""
                }`}
            >
                <LinkNav text={"Inicio"} link={"/"} />
                <LinkNav text={"Productos"} link={"/productos"} />
                <div className="h-[50px] w-[50px] text-white mx-7 text-center logo">Neon Led</div>
                <LinkNav text={"Nosotros"} link={"/nosotros"} />
                <LinkNav text={"Contacto"} link={"/contacto"} />
                {/* Icono de menú para pantallas pequeñas */}
                <div className="menu-icon" onClick={toggleMenu}>
                    {/* Si el menú está activo, muestra "Cerrar X", si no muestra el ícono ≡ */}
                    <span className="menu-icon-text">
                        {menuActive ? "Cerrar X" : "\u2630"}
                    </span>
                </div>
            </header>

            {/* Menú desplegable cuando está activo */}
            {menuActive && (
                <div className="dropdown-menu">
                    <DropdownLink
                        text={"Inicio"}
                        link={"/"}
                        isInicio={true}
                        closeMenu={() => setMenuActive(false)} // Cierra el menú al hacer clic
                    />
                    <DropdownLink
                        text={"Productos"}
                        link={"/productos"}
                        isInicio={false}
                        closeMenu={() => setMenuActive(false)} // Cierra el menú al hacer clic
                    />
                    <DropdownLink
                        text={"Nosotros"}
                        link={"/nosotros"}
                        isInicio={false}
                        closeMenu={() => setMenuActive(false)} // Cierra el menú al hacer clic
                    />
                    <DropdownLink
                        text={"Contacto"}
                        link={"/contacto"}
                        isInicio={false}
                        closeMenu={() => setMenuActive(false)} // Cierra el menú al hacer clic
                    />
                </div>
            )}
        </>
    );
}

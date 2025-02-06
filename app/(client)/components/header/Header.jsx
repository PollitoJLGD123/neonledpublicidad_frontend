"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import DropdownLink from "./components/DropdownLink";
import LinkNav from "./components/LinkNav";
import "./header.css";

export default function Header() {
    const [menuActive, setMenuActive] = useState(false);
    const [containerFullHeight, setContainerFullHeight] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [menuInitialized, setMenuInitialized] = useState(false);

    useEffect(() => {
        const savedMenuState = localStorage.getItem("menuActive");
        if (savedMenuState !== null) {
            setMenuActive(JSON.parse(savedMenuState));
        }

        const handleResize = () => {
            if (window.innerWidth <= 580) {
                setIsSmallScreen(true);
                if (!menuInitialized) {
                    setMenuInitialized(true);
                    if (!savedMenuState) {
                        setMenuActive(true);
                    }
                    setContainerFullHeight(true);
                }
            } else {
                setIsSmallScreen(false);
                setMenuActive(false);
                setContainerFullHeight(false);
                setMenuInitialized(false);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [menuInitialized]);

    useEffect(() => {
        localStorage.setItem("menuActive", JSON.stringify(menuActive));
        if (menuActive) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [menuActive]);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
        if (!menuActive) {
            setContainerFullHeight(true);
        } else {
            setContainerFullHeight(false);
        }
    };

    return (
        <>
            <div className={`containerF ${menuActive ? "full-height" : ""}`}>
                <header
                    className={`header-container h-[100px] bg-[--azul_oscuro] flex items-center justify-center gap-6 ${menuActive ? "menu-active" : ""}`}
                >
                    <LinkNav text={"Inicio"} link={"/"} />
                    <LinkNav text={"Productos"} link={"/productos"} />
                    <div className="h-[50px] w-[50px] text-white mx-7 text-center logo">Neon Led</div>
                    <LinkNav text={"Nosotros"} link={"/nosotros"} />
                    <LinkNav text={"Contacto"} link={"/contacto"} />
                    {isSmallScreen && (
                        <div className="menu-icon" onClick={toggleMenu}>
                            <span className={`menu-icon-text ${menuActive ? "text-small" : "text-large"}`}>
                                {menuActive ? "Cerrar" : "\u2630"}
                            </span>
                            {menuActive && (
                                <div className="icon-box">
                                    <div className="inner-box">
                                        <div className="bar bar1"></div>
                                        <div className="bar bar2"></div>
                                    </div>
                                </div>
                            )}

                        </div>



                    )}
                </header>
                {menuActive && (
                    <div className="dropdown-menu bg-gradient-to-r from-[--azul_brillante] to-[--azul_intenso]">
                        <DropdownLink
                            text={"Inicio"}
                            link={"/"}
                            isInicio={true}
                            final={false}
                            closeMenu={() => {
                                setMenuActive(false);
                                setContainerFullHeight(false);
                            }}
                        />
                        <DropdownLink
                            text={"Productos"}
                            link={"/productos"}
                            isInicio={false}
                            final={false}
                            closeMenu={() => {
                                setMenuActive(false);
                                setContainerFullHeight(false);
                            }}
                        />
                        <DropdownLink
                            text={"Nosotros"}
                            link={"/nosotros"}
                            isInicio={false}
                            final={false}
                            closeMenu={() => {
                                setMenuActive(false);
                                setContainerFullHeight(false);
                            }}
                        />
                        <DropdownLink
                            text={"Contacto"}
                            link={"/contacto"}
                            isInicio={false}
                            final={true}
                            closeMenu={() => {
                                setMenuActive(false);
                                setContainerFullHeight(false);
                            }}
                        />
                        <div className="red-bg">
                            <img className="absolute w-[130px] right-[calc(50%-65px)] bottom-[0] translate-y-[40%] z-30" src="/header_footer/tiktock.svg" alt="" />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

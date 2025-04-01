"use client";

import { DesktopVersion } from "./components/DesktopVersion";
import { MobileVersion } from "./components/MobileVersion/MobileVersion";

export const items = [
  "Letreros",
  "Carteles",
  "Impresiones",
  "Otros",
  "Consultas",
  "Tendencias",
  "Instalaciones",
  "Garantía",
];

export default function Descripcion() {
  return (
    <div className="relative w-full mt-10">
      <div className="absolute top-0 left-0 w-full md:h-[18rem] h-[60%] bg-gradient-to-r from-[--azul_brillante] to-[--azul_intenso]"></div>
      <DesktopVersion />
      <MobileVersion />
    </div>
  );
}

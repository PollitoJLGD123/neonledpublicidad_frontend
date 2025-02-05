import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DropdownLink({ text, link, isInicio, closeMenu }) {
    const pathname = usePathname();

    return (
        <Link
            href={link}
            onClick={closeMenu} // Cerrar el menú al hacer clic
            className={`flex items-center justify-between gap-2 py-2 px-4 pt-4 pb-4 text-white font-bold
                ${pathname === link ? "" : "bg-transparent"} 
                border-t-2 border-t-[--celeste] hover:bg-[--azul_claro]`}
        >
            <span>{text}</span>

            {/* Ícono alineado a la derecha */}
            {!isInicio && (
                <span className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[12px] border-l-transparent border-r-transparent border-t-white -rotate-90"></span>
            )}
        </Link>
    );
}

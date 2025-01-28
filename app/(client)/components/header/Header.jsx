import Link from "next/link";

export default function Header() {
    return (
        <>
            <header className="h-[60px] bg-[--azul_oscuro] flex items-center justify-center gap-6 ">
                <Link href="/" className="text-white">Home</Link>
                <Link href="/contacto" className="text-white">Contacto</Link>
                <Link href="/nosotros" className="text-white">Nosotros</Link>
                <Link href="/productos" className="text-white">Productos</Link>
                <Link href="/reclamaciones" className="text-white">Reclamaciones</Link>
            </header>
        </>
    );
}
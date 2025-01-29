import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function LinkNav({text, link}) {

    const pathname = usePathname()

    return (
        <>
            <Link
                href={link}
                className={`flex text-lg justify-center gap-2 items-center font-bold bg-gradient-to-r bg-clip-text text-transparent 
                        ${pathname == `${link}` ? "from-[--azul_brillante] to-[--azul_cobalto]" : "from-white to-white"}`}
            >{text}
                <span
                    className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[12px] border-l-transparent border-r-transparent border-t-blue-500"
                ></span>
            </Link>
        </>
    )
}
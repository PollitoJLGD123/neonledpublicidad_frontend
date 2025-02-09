import Image from "next/image";
import NuestrosProductos from "./productos/components/NuestrosProductos";

import FilaProductos from "./productos/components/FilaProductos";


export default function Home() {
  const fila1 = [
    { imgSrc: "/productosPrincipal/1crocs.webp", altText: "Producto 1", description: "LETRAS DE ACRÍLICO" },
    { imgSrc: "/productosPrincipal/2yasin.jpg", altText: "Producto 2", description: "LETRAS DORADAS Y PLATEADAS" },
    { imgSrc: "/productosPrincipal/3crisol.webp", altText: "Producto 3", description: "LETREROS LUMINOSOS" },
    { imgSrc: "/productosPrincipal/1crocs.webp", altText: "Producto 4", description: "LETRAS DE NEON" },

  ];

  return (
    <>
       
    <div className=" bg-[--azul_oscuro]  ">
      <div >
       <NuestrosProductos/> 
      <FilaProductos productos={fila1}/>     
      </div>
      <div >
      <section className="flex flex-col justify-center items-center text-center bg-gradient-to-r from-[--azul_brillante] to-[--azul_cobalto] text-white p-8 w-4/5 max-w-4xl mx-auto rounded-2xl shadow-lg">
       <h2 className="text-lg font-semibold mb-3">Conoce más sobre</h2>
       <h1 className="text-4xl font-bold mb-3">NOSOTROS</h1>
        <hr className="w-16 border-2 border-white mb-3" />
        <p className="font-medium text-lg leading-relaxed max-w-xl text-justify">
        Somos Neon Led Store, una empresa dedicada a la creación de diseños personalizados de luces LED que transforman cualquier espacio en un reflejo único de estilo y personalidad.
        </p>
       </section>
    </div>
    </div>

    </>
  );
}

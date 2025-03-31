import Image from "next/image";
import NuestrosProductos from "./productos/components/NuestrosProductos";
import FilaProductos from "./productos/components/FilaProductos";
import Slider from "./components/slider/Slider";

export default function Home() {
  const fila1 = [
    {
      imgSrc: "/productosPrincipal/1crocs.webp",
      altText: "Producto 1",
      description: "LETRAS DE ACRÍLICO",
    },
    {
      imgSrc: "/productosPrincipal/2yasin.jpg",
      altText: "Producto 2",
      description: "LETRAS DORADAS Y PLATEADAS",
    },
    {
      imgSrc: "/productosPrincipal/3crisol.webp",
      altText: "Producto 3",
      description: "LETREROS LUMINOSOS",
    },
    {
      imgSrc: "/productosPrincipal/1crocs.webp",
      altText: "Producto 4",
      description: "LETRAS DE NEON",
    },
  ];

  const slidesData = [
    { imgSrc: "/home/fondo1.webp", altText: "Descripción 1" },
    { imgSrc: "/home/fondo2.webp", altText: "Descripción 2" },
    { imgSrc: "/home/fondo3.webp", altText: "Descripción 3" },
    { imgSrc: "/home/fondo4.webp", altText: "Descripción 4" },
  ];

  const AboutStatic = () => (
    <section className="flex flex-col justify-center items-center text-center bg-gradient-to-r from-[--azul_brillante] to-[--azul_cobalto] text-white p-8 w-4/5 max-w-4xl mx-auto rounded-2xl shadow-lg mb-12">
      <h2 className="text-sm md:text-lg font-semibold mb-3">
        Conoce más sobre
      </h2>
      <h1 className="text-sm md:text-4xl font-bold mb-3">NOSOTROS</h1>
      <hr className="w-16 border-2 border-white mb-3" />
      <p className="text-sm font-medium md:text-lg leading-relaxed max-w-xl text-justify">
        Somos Neon Led Store, una empresa dedicada a la creación de diseños
        personalizados de luces LED que transforman cualquier espacio en un
        reflejo único de estilo y personalidad.
      </p>
    </section>
  );

  return (
    <>
      <div className="bg-[--azul_oscuro] overflow-hidden">

        <Slider slides={slidesData} />
        
        <div className="px-4 lg:px-8 mt-20 mb-24">
          <NuestrosProductos />
          <div className="mt-8">
            <FilaProductos productos={fila1} />
          </div>
        </div>

        <AboutStatic />
      </div>
    </>
  );
}

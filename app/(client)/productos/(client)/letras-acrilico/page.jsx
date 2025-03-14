import Banner from '../components/Banner';
import CardSlider from '../components/CardSlider';
import Datos from '../components/Datos';

import Section2 from '../components/section2/Section2';

export default function Home() {
  const idProducto = 1;
  const cards = [
    { 
      title: "LETRAS DE ACRÍLICO", 
      description: "Te mostramos la implementación de las letras de acrílico en diversos espacios", 
      bgColor:"bg-gray-900 text-white px-4 py-6 rounded-lg flex flex-col justify-center items-center",
      glow: "text-white-400 text-3xl font-bold tracking-wide mb-4",
     textStyle: "text-white text-center max-w-[50%] leading-relaxed text-lg whitespace-pre-line"
    },
    { 
      title: "Juguetería", 
      description: "Espacio interior", 
      image: "/productos/acrilico_producto_1.jpg" 
    },
    { 
      title: "Feria", 
      description: "Espacio interior", 
      image: "/productos/acrilico_producto_2.jpg" 
    }
  ];
  return (
    <>
      <Banner
        titulo="LAS LETRAS DE ACRÍLICO"
        imagen="/productosIndividuales/banner/letras-acrilico.webp"
      />
      <Section2 idProducto={idProducto} />
      <Datos idProducto={idProducto}/>
      <CardSlider cards={cards}/>
    </>
  );
}

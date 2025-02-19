import Banner from '../components/Banner';
import Datos from '../components/Datos';
import CardSlider from '../components/CardSlider';
import Section2 from '../components/section2/Section2';

export default function Home() {
  const idProducto = 5;
  return (
    <>
      <Banner
        titulo="LAS LUCES EN NEÓN LED"
        imagen="/productosIndividuales/banner/neon-led.webp"
      />
      <Section2 idProducto={idProducto} />
      <Datos idProducto={idProducto}/>
      <CardSlider />
    </>
  );
}

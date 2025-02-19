import Banner from '../components/Banner';
import Datos from '../components/Datos';
import CardSlider from '../components/CardSlider';
import Section2 from '../components/section2/Section2';

export default function Home() {
  const idProducto = 10;
  return (
    <>
      <Banner
        titulo="PANTALLAS LEDS"
        imagen="/productosIndividuales/banner/pantalla-led.webp"
      />
      <Section2 idProducto={idProducto} />
      <Datos idProducto={idProducto}/>
      <CardSlider />
    </>
  );
}

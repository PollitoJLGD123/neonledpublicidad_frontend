import Banner from '../components/Banner';
import Datos from '../components/Datos';
import Ejemplos from '../components/Ejemplos';
import Section2 from '../components/section2/Section2';

export default function Home() {
  const idProducto = 6;
  return (
    <>
      <Banner
        titulo="IMPRESIÓN EN VINIL DECORATIVO"
        imagen="/productosIndividuales/banner/impresion-vinilo.webp"
      />
      <Section2 idProducto={idProducto} />
      <Datos idProducto={idProducto}/>
      <Ejemplos />
    </>
  );
}

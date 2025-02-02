import Banner from "../components/banner";
import Datos from "../components/datos";
import Ejemplos from "../components/Ejemplos";
import Resumen from "../components/resumen";

export default function Home() {
  return (
    <>
      <h1>letras-doradas</h1>
      <Banner />
      <Resumen />
      <Datos />
      <Ejemplos />
    </>
  );
}

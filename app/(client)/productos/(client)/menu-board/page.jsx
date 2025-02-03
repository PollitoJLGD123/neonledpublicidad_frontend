import Banner from "../components/banner";
import Datos from "../components/datos";
import Ejemplos from "../components/Ejemplos";
import Section2 from "../components/section2/Section2";

export default function Home() {
  return (
    <>
      <h1>menu-board</h1>
      <Banner />
      <Section2 />
      <Datos />
      <Ejemplos />
    </>
  );
}

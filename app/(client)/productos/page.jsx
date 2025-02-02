import Banner from "./components/Banner";
import NeonBackground from "./components/Luz";
import NuestrosProductos from "./components/NuestrosProductos";
import Productos from "./components/ProductosPrincipal";

export default function Home() {
  return (
    <div className="relative bg-[#0e1721] min-h-screen">
      {/* Luz colocada primero para quedar debajo */}
      <NeonBackground />
      <div className="relative z-10">
        <Banner />
        <NuestrosProductos />
        <Productos/>
      </div>
    </div>
  );
}

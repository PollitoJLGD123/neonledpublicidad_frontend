import Banner from "./productosComponents/Banner";
import NeonBackground from "./productosComponents/Luz";
import NuestrosProductos from "./productosComponents/NuestrosProductos";
import Productos from "./productosComponents/ProductosPrincipal";

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

import ThreeCardRow from "./components/3CardRow";
import SquareRectangle from "./components/CuadradoRectangulo";
import Section2BG from "./components/Section2BG";
import "./components/productosIndi.css"

export default function Section2() {
  return (
    <div className="home-container">
      <Section2BG />
      <div className="overlay-cards">
        <ThreeCardRow />
      </div>
      <div className="square-info-container">
        <SquareRectangle />
      </div>
    </div>
  );
}

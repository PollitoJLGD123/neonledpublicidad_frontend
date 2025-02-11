import NeonBackground from '../../components/Luz';
import React from "react";
import Card from './card';
const data = [
  {
    id: 5,
    producto: "NEÓN LED",
    caracteristica: "Perfectas para crear letreros de neón LED personalizados, estas luces son ideales tato para negocios como para el hogar.",
    ventaja: "El material con el que está contruido supera al vidrio en cuanto a ligereza.",
    consumo_energetico: "Los neones LED consumen hasta un 80% menos de energía que los neones tradicionales, aproximadamente 1,65W por metro.",
    iluminacion: "Su luz LED es flexible, ya que utiliza tiras LED SMD de alto brillo como fuente de luz interna.",
    durabilidad: "Este producto combina tiras de luces LED decorativas encapsuladas en un tubo resistente, diseñado para brindar durabilidad y estilo.",
  },
  {
    id: 1,
    producto: "LETRAS DE ACRÍLICO",
    caracteristica: "Su diseño tridimensional y acabado brillante las convierten en una opción estilizada y sofisticada para cualquier tipo de negocio.",
    ventaja: "La superficie del acrílico es fácil de limpiar y mantener en buen estado, lo que ayuda a conservar su apariencia a lo largo del tiempo.",
    consumo_energetico: "El consumo energético de los letreros de acrílico iluminados con tecnología LED es notablemente bajo en comparación con otras opciones de iluminación.",
    iluminacion: "Puede tener iluminación frontal o iluminación lateral dependiendo del tipo de efecto luminoso que se desea tener.",
    durabilidad: "El acrílico tiene una fuerte resistencia en la intemperie, lo que lo hace adecuado para su uso en el exterior.",
  },
  {
    id: 4,
    producto: "LETRAS DE NEÓN",
    caracteristica: "Su diseño permite combinar las letras de neón LED con otros elementos decorativos creando letreros llamativos y funcionales.",
    ventaja: "Son una herramienta de marketing que puede ayudar a los negocios o eventos a tener más presencia en redes sociales.",
    consumo_energetico: "Las letras en tubos de neón led utilizan tecnología LED que reduce el consumo energético y tiene una mayor durabilidad.",
    iluminacion: "El brillo depende del tipo de gas, diámetro del tubo y voltaje; ya que según eso el neón es más brillante.",
    durabilidad: "Se permite su instalación tanto para el exterior como para el interior, debido a su fuerte resistencia a la intemperie en cualquier estación del año.",
  },
  {
    id: 3,
    producto: "LETREROS LIMUNOSOS",
    caracteristica: "Los letreros luminosos tiene la capacidad de iluminar grandes áreas de manera efectiva.",
    ventaja: "Estos letreros publicitarios se adaptan completamente a la identidad corporativa, permitiendo personalizar colores, luces y diseños.",
    consumo_energetico: "Como ejemplo, una caja de luz de 2.00 x 2.50 metros puede tener un consumo de 320 W con 16 tubos LED.",
    iluminacion: "La mayoria de las cajas de luz utilizan LED como fuente de iluminación, lo que proporciona un efecto limunoso brillante y uniforme.",
    durabilidad: "Los letreros con bombillas LED son más atractivos y permiten ahorrar energía.",
  },
  {
    id: 2,
    producto: "LETRAS DORADAS Y PLATEADAS",
    caracteristica: "Las letras corpóreas pueden personalizarse en diferentes tamaños y estilos, adaptándose a la identidad visual de la empresa.",
    ventaja: "Las letras doradas y plateadas son visualmente llamativas, lo que ayuda a captar la atención de los clientes potenciales.",
    consumo_energetico: "Se utilizan LEDS incrustados que permiten una iluminación uniforme y de bajo consumo, lo que contribuye a una reducción significativa en el gasto energético.",
    iluminacion: "La iluminación de estas letras salen de manera difuminada por su contorno.",
    durabilidad: "Generalmente, las letras corpóreas están hechas de materiales resistentes, lo que asegura su longevidad en exteriores.",
  },
  {
    id: 6,
    producto: "IMPRESIÓN EN VINILES DECORATIVOS",
    caracteristica: "La impresión en vinilos es ua opción asequible, lo que permite a los negocios y hogares decorar sin incurrir en altos costos.",
    ventaja: "Existe un alta variedad de diseños y estilos disponibles, lo que permite personalizar los espacios al gusto del cliente.",
    consumo_energetico: "Los vinilos decorativos también pueden ser una herramienta eficar para mejorar la eficiencia energética en el hogar o en entornos comerciales.",
    iluminacion: "Los viniles que son retroiluminados son especialmente populares, ya que permiten que la luz pase a través de ellos, creando efectos visuales impactantes.",
    durabilidad: "Los vinilos decorativos son altamente duraderos y resistentes a la decoloración, incluso con exposición constante al sol al ser elaborados con materiales de alta calidad.",
  },
  {
    id: 7,
    producto: "MENÚ BOARD",
    caracteristica: "Se permite actualizar el menú en tiempo real, lo que es ideal para reflejar cambios en la disponibilidad de ingredientes o promociones especiales.",
    ventaja: "Aunque la inversión inicial puede ser alta, a largo plazo, los menús digitales pueden reducir costos en impresión.",
    consumo_energetico: "Los tableros de menú digitales suelen utilizar tecnología LED, que es energéticamente más eficiente en comparación con las fuentes de luz tradicionales.",
    iluminacion: "Un menú board con iluminación LED destaca por su capacidad de resaltar el contenido, garantizando una visualización clara y atractiva en cualquier ambiente.",
    durabilidad: "Elaborado con materiales resistentes, asegura durabilidad frente al desgaste diario y condiciones adversas, como humedad o cambios de temperatura.",
  },
  {
    id: 8,
    producto: "LETRAS PINTADAS EN MDF",
    caracteristica: "La superficie lisa del MDF permite aplicar pinturas y barnices con facilidad por su versatilidad logrando acabados impecables y personalizados.",
    ventaja: "A diferencia de la madera maciza, el MDF es notablemente más ligero, lo que genera que su diseño funcional asegura una instalación sencilla y eficiente.",
    consumo_energetico: "Los letreros en MDF pueden incluir iluminación LED, consume un 80% menos energía y tiene una mayor durabilidad.",
    iluminacion: "Las letras pueden ser iluminadas desde atrás o tener luces integradas en su diseño.",
    durabilidad: "Los letreros de MDF son resistentes y duraderos, lo que significa que pueden soportar condiciones variadas sin deteriorarse rápidamente.",
  },
  {
    id: 9,
    producto: "DISPLAYS",
    caracteristica: "Los formatos de los displays son altamente flexibles, permitiendo la inclusión de diversos tipos de contenido como imágenes, videos y texto.",
    ventaja: "En el caso de displays físicos, son fáciles montar y transportar, lo que los convierte en herramientas prácticas para eventos y puntos de venta.",
    consumo_energetico: "Los formatos de los displays son altamente flexibles, permitiendo la inclusión de diversos tipos de contenido como imágenes, videos y texto.",
    iluminacion: "Gracias a la incorporación de las luces led en un innovador diseño el póster destacará de manera elegante y llamativo.",
    durabilidad: "Como ejemplo, la vida útil promedio de una display de celular es de aproximadamente 2 a 3 años en condiciones normales.",
  },
  {
    id: 10,
    producto: "PANTALLAS LED",
    caracteristica: "Las pantallas LED de exterior se fabrican por módulos de diferentes medidas según la resolución, pudiendo así componer cada pantalla según las necesidades del cliente.",
    ventaja: "Están diseñadas para un montaje rápido y sencillo, lo que facilita se instalación y reubicación sin necesidad de herramientas complejas.",
    consumo_energetico: "Las pantallas LED consumen hasta un 85% menos electricidad que las luminarias tradicionales.",
    iluminacion: "El brillo de las pantalllas LED es cuatro o cinco veces mayor que el de los proyectores normales, lo que permite una visualización clara.",
    durabilidad: "Las pantallas LED exteriores ofrecen resistencia y un rendimiento excepcional logrando durar entre bastante dependiendo del uso y las condiciones.",
  },
  {
    id: 11,
    producto: "HOLOGRÁFICO",
    caracteristica: "Los objetos holográficos pueden adaptarse y cambiarse en tiempo real, lo que permite a los presentadores ajustar la imagen según la audiencia.",
    ventaja: "Permiten la participación a distancia, superando barreras físicas y facilitando la comunicación.",
    consumo_energetico: "Entre 65-75W para dispositivos holográficos específicos, como ventiladores holográficos.",
    iluminacion: "Los hologramas presentan un efecto iridiscente, cambiando de color y brillo dependiendo de la posición del observador.",
    durabilidad: "La durabilidad de los hologramas varía según su tipo y aplicación, pero en general, los hologramas de seguridad son conocidos por su alta resistencia.",
  },
  {
    id: 12,
    producto: "PIXEL LED",
    caracteristica: "Los túneles hexagonales permiten la personalización de colores y patrones.",
    ventaja: "Existe una alta variedad de colores disponibles, lo que permite personalizar la iluminación del túnel al gusto del cliente.",
    consumo_energetico: "El uso de LEDs de alta calidad asegura un bajo consumo de energía, reduciendo el impacto ambiental.",
    iluminacion: "Se utiliza tecnología de iluminación avanzada para crear un ambiente visualmente atractivo y dinámico.",
    durabilidad: "La durabilidad de los túneles hexagonales de luces de pixel LED puede variar según el tipo de lámpara LED utilizada.",
  },
  {
    id: 13,
    producto: "SILLAS LUMINOSAS",
    caracteristica: "Muchos modelos ofrecen al menos 16 colores RGB y múltiples modos de iluminación, como luz fija, parpadeante lenta y rápida, y secuencias de cambio de colores.",
    ventaja: "Son perfectas para eventos de todo tipo, ya que sea al aire libre o en espacios cerrados, como terrazas, bares, lounges y modernos ambientes interiores.",
    consumo_energetico: "Las sillas luminosas son recargables y utilizan tecnologías de bajo consumo.",
    iluminacion: "Gracias a su tecnología de iluminación LED integrada, que permite cambiar colores y efectos lumínicos.",
    durabilidad: "Las sillas luminosas ofrecen una excelente calidad, con materiales resistentes y translúcidos que garantizan durabilidad.",
  },
  {
    id: 14,
    producto: "TECHOS LED",
    caracteristica: "Puede incluir características personalizables como control de intensidad y regulación de la temperatura de color para ajustarse a tus necesidades.",
    ventaja: "Estas luces LED vienen con accesorios de instalación que facilitan su montaje en el techo o en la pared.",
    consumo_energetico: "La tecnología LED utilizada en estos sistemas asegura un ahorro energético significativo, ya que consumen menos electricidad.",
    iluminacion: "Su versatilidad permite adaptar la iluminación a diferentes momentos del día o actividades, mejorando tanto el confort como la eficiencia energética del espacio.",
    durabilidad: "La tecnología LED que se usa tiene una vida útil más prolongada que las opciones tradicionales.",
  },
];

export default function Datos({ idProducto }) {
  const item = data.find((item) => item.id === idProducto);
  return (
    <div className="relative min-h-screen">
      <NeonBackground className="absolute inset-0 z-0" />

      <div className="relative z-10 min-h-screen bg-gradient-to-b from-gray-900/80 to-black/80 text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Datos sobre: </h1>
        <h1 className="text-4xl font-bold mb-8 text-center text-cyan-400 neon-text">{item.producto}</h1>

        {/* Cambiamos el grid por flexbox */}
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl w-full">
          <Card numero={1} title="Característica" descripcion={item.caracteristica} />
          <Card numero={2} title="Ventaja" descripcion={item.ventaja} />
          <Card numero={3} title="Consumo Energético" descripcion={item.consumo_energetico} />
          <Card numero={4} title="Iluminación" descripcion={item.iluminacion} />
          <Card numero={5} title="Durabilidad" descripcion={item.durabilidad} />
        </div>
      </div>
    </div>
  );
}

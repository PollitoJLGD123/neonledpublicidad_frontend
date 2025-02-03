"use client";

import "./productosIndi.css";

export default function ThreeCardRow() {
  const cards = [
    {
      icon: "/icons/streaming-icon.png",
      title: "Material",
      description: "Manguera y por dentro está el circuito LED",
    },
    {
      icon: "/icons/security-icon.png",
      title: "Uso",
      description: "Interior",
    },
    {
      icon: "/icons/cloud-icon.png",
      title: "Diseño",
      description: "Un hilo y doble hilo",
    },
  ];

  return (
    <div className="three-card-row">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.icon} alt={card.title} className="card-icon" />
          <h2 className="card-title">{card.title}</h2>
          <p className="card-description">{card.description}</p>
        </div>
      ))}
    </div>
  );
}

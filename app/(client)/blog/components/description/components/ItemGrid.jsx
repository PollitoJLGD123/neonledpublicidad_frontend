import React from "react";
import Item from "./item";
import { items } from "../Descripcion";

export const ItemGrid = () => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <Item key={index} title={item} />
      ))}
    </div>
  );
};

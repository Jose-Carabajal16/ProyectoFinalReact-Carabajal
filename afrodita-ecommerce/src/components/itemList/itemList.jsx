import React from "react";
import Item from "../item/item"; 

const ItemList = ({ productos }) => {
  return (
    <div className="cards-container">
      {productos.map((produ) => (
        <Item producto={produ} key={produ.id} />
      ))}
    </div>
  );
};

export default ItemList;

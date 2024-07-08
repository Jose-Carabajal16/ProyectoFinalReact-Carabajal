import React from 'react';

const ItemCount = ({ sumarProducto, restarProducto, contador, agregarAlCarrito}) => {

  return (
    <div>
      <div className="item-count">
        <button onClick={restarProducto}>-</button>
        <p>{contador}</p>
        <button onClick={sumarProducto}>+</button>
      </div>
      <button className="agregarAlCarrito" onClick={agregarAlCarrito}>Agregar al Carrito</button>
    </div>
  );
};

export default ItemCount;
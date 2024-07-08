import React, { useContext, useState } from 'react';
import ItemCount from '../itemCount/itemCount';
import CartContext from '../../context/cartContext';

const ItemDetail = ({ item }) => {
  const { carrito, agregarAlCarrito } = useContext(CartContext);
  console.log(carrito);

  const [contador, setContador] = useState(1);
  
  const restarProducto = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };
  
  const sumarProducto = () => {
    if (contador < item.cantidad) {
      setContador(contador + 1);
    }
  };
  


  return (
    <div className="container-detalle">
      <div className="producto-detalle">
        <img src={item.img} alt={item.titulo} />
        <div className="detalle-info">
          <h3 className="titulo">{item.titulo}</h3>
          <p className="detalle-descripcion">{item.descripcion}</p>
          <p className="categoria">Categoria: {item.categoria}</p>
          <p className="precio">${item.precio}</p>
          <ItemCount 
            restarProducto={restarProducto} 
            sumarProducto={sumarProducto} 
            contador={contador} 
            agregarAlCarrito={() => {agregarAlCarrito(item, contador)}} 
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

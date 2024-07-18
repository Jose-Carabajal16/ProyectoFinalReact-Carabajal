import React, { useContext, useState } from 'react';
import CartContext from '../../context/cartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { baseDeDatos } from '../../fiberbase/config';


const Checkout = () => {
  const [pedidoId, setPedidoId] = useState("")
  
  const { carrito, totalCarrito, vaciarCarrito } = useContext(CartContext);
  const { register, handleSubmit } = useForm();
  
  const comprar = (data) => {
    const ordenDeCompra = {
      cliente: data,
      productos: carrito,
      total: totalCarrito()
    };
    
    console.log(ordenDeCompra);
    const pedidoCliente = collection(baseDeDatos, "pedidos");

    addDoc(pedidoCliente, ordenDeCompra)
      .then((doc) => {
        setPedidoId(doc.id)
        vaciarCarrito();

      })
  };
  if(pedidoId){
    return (
        <div className="container-compra">
            <h1>Muchas gracias por realizar una compra en Afrodita</h1>
            <p>Tu pedido es : {pedidoId}</p>
        </div>
    )
  }

  return (
    <div className='container-formulario'>
      <h1 className='titulo-formulario'>Finalizar Pedido</h1>
      <form className='formulario' onSubmit={handleSubmit(comprar)}>
        <input 
          type="text" 
          placeholder='Ingresa tu nombre' 
          {...register("nombre", { required: true })}
        />
        <input 
          type="email" 
          placeholder='Ingresa tu email' 
          {...register("email", { required: true })}
        />
        <input 
          type="phone" 
          placeholder='Ingresa tu celular' 
          {...register("celular", { required: true })}
        />
        <button className='enviar' type='submit'>Comprar</button>
      </form>
    </div>
  );
}

export default Checkout;

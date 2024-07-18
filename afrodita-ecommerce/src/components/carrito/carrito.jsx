import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; 
import CartContext from '../../context/cartContext';

const Carrito = () => {
    const { carrito, totalCarrito, vaciarCarrito } = useContext(CartContext);

    return (
        <div className='container'>
            <h1 className='titulo-carrito'>Mi carrito</h1>
            {
                carrito.map((producto) => (
                    <div key={producto.id} className='producto-carrito'>
                        <img src={producto.img} alt={producto.titulo} className='img-carrito' />
                        <div className='producto-info'>
                            <h3>{producto.titulo}</h3>
                            <div className='producto-detalles'>
                                <p>Precio Unitario: ${producto.precio}</p>
                                <p>Cantidad: {producto.cantidad}</p>
                                <p>Precio Total: ${producto.precio * producto.cantidad}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
            {
                carrito.length > 0 ?
                <>
                <h2>Precio Total: ${totalCarrito()}</h2>
                <button className='boton-vaciar' onClick={vaciarCarrito}>Vaciar Carrito</button>
                <Link to="/checkout">Finalizar Compra</Link>
                </> : 
                <h2>El carrito está vacío</h2>
            }
        </div>
    );
};

export default Carrito;


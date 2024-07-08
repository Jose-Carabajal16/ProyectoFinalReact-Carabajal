import { createContext, useEffect, useState } from "react";

const CartContext = createContext('CartContext');
export default CartContext;

const inicioCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState(inicioCarrito);

    const agregarAlCarrito = (item, cantidad) => {
        const productoAgregado = { ...item, cantidad };
        const nuevosProductos = [...carrito];
        const productoCarrito = carrito.find((producto) => producto.id === productoAgregado.id);

        if (productoCarrito) {
            productoCarrito.cantidad += productoAgregado.cantidad;
            setCarrito(nuevosProductos);
        } else {
            setCarrito([...carrito, productoAgregado]);
        }
    };

    const cantidadCarrito = () => {
        return carrito.reduce((accum, producto) => accum + producto.cantidad, 0);
    };

    const totalCarrito = () => {
        const total = carrito.reduce((accum, producto) => {
            const precio = parseFloat(producto.precio);
            const cantidad = parseInt(producto.cantidad, 10);
            if (!isNaN(precio) && !isNaN(cantidad)) {
                return accum + precio * cantidad;
            } else {
                console.error(`Producto inválido en el carrito:`, producto);
                return accum;
            }
        }, 0);
        console.log("Total del carrito: ", total);
        return total;
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito]);

    return (
        <CartContext.Provider value={{carrito, agregarAlCarrito, cantidadCarrito, totalCarrito, vaciarCarrito}}>
            {children}
        </CartContext.Provider>
    );
};

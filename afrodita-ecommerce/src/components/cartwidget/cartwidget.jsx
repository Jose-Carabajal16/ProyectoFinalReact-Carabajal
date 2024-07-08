import React, { useContext } from 'react';
import { Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContext from '../../context/cartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { cantidadCarrito } = useContext(CartContext);

    return (
        <div className="cart-widget">
            <Link to="/carrito" className="links">
                <FaShoppingCart />
                <Badge pill bg="primary" className="numerito ml-2">
                    {cantidadCarrito()}
                </Badge>
            </Link>
        </div>
    );
};

export default CartWidget;

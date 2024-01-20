import React from 'react';
import carritoLogo from '../img/browncart.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const CartWidget = () => {
    const { prodsCarrito } = useContext(CartContext)

    return (
        <Link to="/cart" className='carrito'>
            <img src={carritoLogo} alt="Carrito" width={30} className='carrito__logo' />
            <p className='carrito__cantidadProds'>{prodsCarrito()}</p>
        </Link>
    )
}

export default CartWidget
import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const agregarCarrito = (item) => {
        setCart([...cart, item])
    }

    const estaEnCarrito = (id) => {
        return cart.some(item => item.id === id)
    }

    const limpiarCarrito = () => {
        setCart([])
    }

    const prodsCarrito = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }

    const totalCarrito = () => {
        return cart.reduce((acc, item) => acc + (item.cantidad * item.price), 0)
    }

    const sacarProd = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    return (
        <CartContext.Provider value={{
            cart,
            estaEnCarrito,
            agregarCarrito,
            limpiarCarrito,
            prodsCarrito,
            totalCarrito,
            sacarProd
        }}>
            {children}
        </CartContext.Provider>
    )
}
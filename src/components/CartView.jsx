import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Boton from "./Boton";
import trashIcon from "../assets/iconoBasura.svg";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";

const CartView = () => {
    const { cart, totalCarrito, limpiarCarrito, sacarProd } = useContext(CartContext);

    let moneyFormat = new Intl.NumberFormat('en-eu', {
        style: 'currency',
        currency: 'EUR',
    });

    if (cart.length === 0) return <EmptyCart />

    return (
        <section className="container m-auto mt-8">
            <h2 className="text-4xl font-semibold">Your purchase</h2>
            <hr />

            <ul>
                {cart.map((item) => (
                    <li key={item.id} className="flex gap-3 border-b my-4">
                        <img src={item.img} alt="Imagen producto" />
                        <div>
                            <h3 className="text-2xl">{item.name}</h3>
                            <p className="text-2xl font-bold">
                                {moneyFormat.format(item.price * item.cantidad)}
                            </p>
                            <p>Quantity: {item.cantidad}</p>

                            <Boton onClick={() => sacarProd(item.id)}>
                                <img src={trashIcon} className="w-4 font-black" alt="Icono eliminar" />
                            </Boton>
                        </div>
                    </li>
                ))}
            </ul>

            <h4 className="text-4xl font-semibold">TOTAL: {moneyFormat.format(totalCarrito())}</h4>
            <Boton className="mt-20" onClick={limpiarCarrito}>Clear cart</Boton>
            <Boton className="mt-20"><Link to="/checkout">Complete my purchase</Link></Boton>
        </section>
    );
};

export default CartView;

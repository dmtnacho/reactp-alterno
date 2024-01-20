import { useContext, useState } from "react";
import Boton from "./Boton";
import FormattedPrice from "./FormattedPrice";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import QuantitySelector from "./QuantitySelector";

const ItemDetail = ({ item }) => {
    const navigate = useNavigate()
    const [cantidad, setCantidad] = useState(1)
    const { agregarCarrito, estaEnCarrito } = useContext(CartContext)

    const handleAgregar = () => {
        const itemToCart = {
            ...item,
            cantidad,
        }

        agregarCarrito(itemToCart)
    }

    const handleVolver = () => {
        navigate(-1)
    }

    return (
        <>
            <Boton onClick={handleVolver}>Volver</Boton>
            <div className="text-center detail">
                <div className="detail__img">
                    <img
                        src={`../${item.img}`}
                        alt={item.name}
                        className="rounded-lg mx-auto max-w-full h-auto"
                    />
                </div>

                <div className="detail__detalles">
                    <h3 className="fuente text-xl">{item.name}</h3>
                    <hr />



                    <div>
                        <p>{item.description}</p>
                        <p className="text-xl font-bold"><FormattedPrice numero={item} /></p>
                    </div>
                </div>

                {
                    estaEnCarrito(item.id)
                        ? <>
                            <p>El producto ya se encuentra en el carrito</p>
                            <Boton className="detail__terminar">
                                <Link to="/cart">Terminar mi compra</Link>
                            </Boton>
                        </>

                        : <>
                            <QuantitySelector cantidad={cantidad} stock={item.stock} setCantidad={setCantidad} className="detail__cantidad" />
                            <Boton className="detail__boton" onClick={handleAgregar} disabled={item.stock === 0}>Agregar al carrito</Boton>
                        </>
                }
            </div>
        </>
    );
};

export default ItemDetail;
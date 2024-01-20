import { Link } from "react-router-dom"
import Boton from "./Boton"

const EmptyCart = () => {

    return (
        <>
            <Boton>
                <Link to={"/"}>Volver</Link>
            </Boton>
            <section className="container m-auto mt-8">
                <h2 className="text-2xl font-semibold">El carrito se encuentra actualmente vacío</h2>
                <hr />
                <p>Agrega algún producto en el carrito para realizar una compra</p>
            </section>
        </>
    )
}

export default EmptyCart
import { Link } from "react-router-dom"
import Boton from "./Boton"

const EmptyCart = () => {

    return (
        <>
            <Boton>
                <Link to={"/"}>Return</Link>
            </Boton>
            <section className="container m-auto mt-8">
                <h2 className="text-2xl font-semibold">The cart is currently empty.</h2>
                <hr />
                <p>Add some products to the cart to make a purchase.</p>
            </section>
        </>
    )
}

export default EmptyCart
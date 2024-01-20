import { Link } from "react-router-dom";
import Boton from "./Boton";

const ItemCard = ({ item }) => {

    let moneyFormat = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
    });

    return (
        <article className="productos__tarjeta">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Precio: {moneyFormat.format(item.price)}</p>

            <Boton>
                <Link to={`/item/${item.id}`}>Detalles</Link>
            </Boton>
        </article>
    );
};

export default ItemCard;

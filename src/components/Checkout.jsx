import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../firebase/config";
import { collection, writeBatch, addDoc, getDocs, query, where, documentId } from "firebase/firestore";
import Swal from "sweetalert2";

const Checkout = () => {
    const { cart, totalCarrito, limpiarCarrito } = useContext(CartContext);
    const [values, setValues] = useState({
        nombre: "",
        direccion: "",
        email: "",
        confirmarEmail: "",
        telefono: "",
    });
    const [orderId, setOrderId] = useState(null);

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (values.email !== values.confirmarEmail) {
            Swal.fire("Los correos electrónicos no coinciden");
            return;
        }

        const orden = {
            cliente: values,
            items: cart.map(item => ({
                id: item.id,
                name: item.name,
                price: item.price,
                cantidad: item.cantidad,
            })),
            total: totalCarrito(),
            fecha: new Date(),
        };

        const batch = writeBatch(db);
        const ordersRef = collection(db, "orders");
        const productsRef = collection(db, 'productos')
        const itemsQuery = query(productsRef, where(documentId(), 'in', cart.map(prod => prod.id)))

        try {
            const querySnapshot = await getDocs(itemsQuery);

            const outOfStock = []

            querySnapshot.docs.forEach(doc => {
                const item = cart.find(prod => prod.id === doc.id)
                const stock = doc.data().stock

                if (stock >= item.cantidad) {
                    batch.update(doc.ref, {
                        stock: stock - item.cantidad,
                        vendidos: item.cantidad,
                    });
                } else {
                    outOfStock.push(item);
                }
            });

            if (outOfStock.length === 0) {
                await batch.commit();
                const orderDocRef = await addDoc(ordersRef, orden);
                setOrderId(orderDocRef.id);
                limpiarCarrito();
                Swal.fire({
                    title: '¡Purchase completed successfully!',
                    icon: 'success',
                    confirmButtonText: 'Close'
                });
            } else {
                Swal.fire("Out of stock items")
            }
        } catch (error) {
            console.error("Error processing the order:", error);
        }
    };

    if (orderId) {
        return (
            <div className="container m-auto mt-10">
                <h2 className="text-2xl font-semibold">Thank you very much for your purchase!</h2>
                <hr />
                <p>Your order number is: {orderId}</p>
                <p>You can receive your purchase within 72 business hours at the specified address.</p>
            </div>
        );
    }

    return (
        <div className="container m-auto mt-10">
            <h2 className="text-4xl font-semibold">Checkout</h2>
            <hr />

            <h4>Input your information:</h4>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 max-w-md mt-4"
            >
                <input
                    className="border p-2"
                    type="text"
                    placeholder="Full Name"
                    value={values.nombre}
                    onChange={handleInputChange}
                    name="nombre"
                />

                <input
                    className="border p-2"
                    type="text"
                    placeholder="Phone number"
                    value={values.telefono}
                    onChange={handleInputChange}
                    name="telefono"
                />

                <input
                    className="border p-2"
                    type="text"
                    placeholder="Shipping address"
                    value={values.direccion}
                    onChange={handleInputChange}
                    name="direccion"
                />

                <input
                    className="border p-2"
                    type="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleInputChange}
                    name="email"
                />

                <input
                    className="border p-2"
                    type="email"
                    placeholder="Confirm email"
                    value={values.confirmarEmail}
                    onChange={handleInputChange}
                    name="confirmarEmail"
                />

                <button type="submit" className="bg-blue-500 text-white py-2">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Checkout;
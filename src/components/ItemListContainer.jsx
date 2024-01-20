import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import Loading from "./Loading";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, 'productos')
        const docsRef = categoryId
            ? query(productosRef, where('cat', '==', categoryId))
            : productosRef

        getDocs(docsRef)
            .then((querySnapshot) => {
                const docs = querySnapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })

                console.log(docs)
                setProductos(docs)
            })
            .finally(() => setLoading(false))
    }, [categoryId])

    return (
        <>
            {
                loading
                    ? <Loading />
                    : <ItemList productos={productos} />
            }
        </>
    )
}

export default ItemListContainer
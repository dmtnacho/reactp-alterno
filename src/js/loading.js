import { productos_lista } from "./productos"

export const loadingTimer = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos_lista)
        }, 500)
    })
}
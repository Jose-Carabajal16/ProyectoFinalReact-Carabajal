import data from '../data/productos.json'

export const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 0)

    })
}

export const pedirItemId = (id) => {
    return new Promise((resolve, reject) => {
        const item = data.find((e) => e.id === id)
        if (item) {
            resolve(item)
        } else {
            reject({
                error: "No se encontro el producto"
            })
        }
    })
}
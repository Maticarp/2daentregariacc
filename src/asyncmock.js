const productos = [
    { id: "1", nombre: "Campera Carp", precio: 150000, img: "./img/campera.jpg", idCat: "2" },
    { id: "2", nombre: "Camiseta 2023", precio: 10000, img: "./img/camisetacarp.jpg", idCat: "2" },
    { id: "3", nombre: "Pantalón Bordo", precio: 90000, img: "./img/pantalon.jpg", idCat: "3" }

]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}


export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 100)
    })
}
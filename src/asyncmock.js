const productos = [
    { id: "1", nombre: "Camiseta", precio: 98000, img: "../img/camisetanegra.jpg", idCat: "2" },
    { id: "2", nombre: "Camiseta ", precio: 10000, img: "../img/camisetacarp.jpg", idCat: "2" },
    { id: "3", nombre: "Camiseta", precio: 95000, img: "../img/camisetapower.jpg", idCat: "2" },
    { id: "4", nombre: "Pantalon", precio: 97000, img: "../img/pantalonc.jpg", idCat: "3" },
    { id: "5", nombre: "Pantalon", precio: 92000, img: "../img/pantaloncarp.jpg", idCat: "3" },
    { id: "6", nombre: "Pantalón Bordo Carp", precio: 95000, img: "../img/pantalon.jpg", idCat: "3" },
    { id: "7", nombre: "Campera Bordó ", precio: 140000, img: "../img/bordo.jpg", idCat: "4" },
    { id: "8", nombre: "Campera", precio: 15000, img: "../img/camp.jpg", idCat: "4" },
    { id: "9", nombre: "Campera", precio: 165000, img: "../img/la roja.jpg", idCat: "4" }
];

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
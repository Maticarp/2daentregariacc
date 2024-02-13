import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2>No hay productos en el carrito</h2>
                <button><Link to="/"  className="mi-enlace" >Ver Productos</Link></button>
            </>
        );
    }

    return (
        <div>
            {carrito.map((prod, index) => (
                <CartItem key={index} {...prod} />
            ))}
            <h3>Total:$ {total}</h3>
            <button onClick={() => vaciarCarrito()} className="mi-enlace">Vaciar Carrito</button>
            <button><Link to="/checkout" className="mi-enlace">Finalizar Compra</Link></button>
        </div>
    );
};

export default Cart;


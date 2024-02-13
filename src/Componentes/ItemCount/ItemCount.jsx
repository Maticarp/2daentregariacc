import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ inicial, stock, funcionAgregar }) => {

    const [contador, setContador] = useState(1);


    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }


    return (
        <>
            <div className="button-container">
                <button onClick={decrementar}> - </button>
                <p> {contador} </p>
                <button onClick={incrementar} className="incrementar"> + </button>
            


            <button className="button-container" onClick={() => { decrementar(); funcionAgregar(contador); incrementar(); }}>
                Agregar al Carrito
            </button>
            </div>

        </>
    )
}

export default ItemCount
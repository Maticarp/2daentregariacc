import { useState, useEffect } from "react";
import { getProductos } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    const {idItem}= useParams ();

    useEffect(() => {
        getProductos(idItem)
            .then(res => setProducto(res));
    }, [idItem]);

    return (
        <div>
            {producto && <ItemDetail item={producto} />}
        </div>
    );
};

export default ItemDetailContainer;


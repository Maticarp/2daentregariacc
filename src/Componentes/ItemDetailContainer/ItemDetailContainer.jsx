import { useState, useEffect } from "react";
import { getUnProducto } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { idItem } = useParams();

    useEffect(() => {
        getUnProducto(idItem)
            .then(res => {
                setProducto(res);
                setLoading(false);
            })
            .catch(err => {
                setError("Error al cargar el producto");
                setLoading(false);
            });
    }, [idItem]);

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            {producto ? (
                <ItemDetail {...producto} />
            ) : (
                <p>No se encontró el producto</p>
            )}
        </div>
    );
};

export default ItemDetailContainer;



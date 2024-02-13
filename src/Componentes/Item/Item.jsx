import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, precio, img }) => {
    return (
        <div className='cardProducto'>
            <img src={img} alt={nombre} />
            <h3> {nombre}</h3>
            <p> { }</p>
            <p>Precio $ {precio}</p>
            <Link to={`/item/${id}`} className="verMasLink">
                <button className="miBoton">Ver Más</button>
            </Link>


        </div>
    );
}

export default Item;

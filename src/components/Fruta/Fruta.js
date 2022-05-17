import React, { useState } from "react";

const Fruta = ({ fruta, index, addCantidad }) => {

    const [cantidad, setCantidad] = useState(0)

    const agregar = () => {

        setCantidad(cantidad + 1);
        //addCantidad(index,cantidad);
    }

    const quitar = () => {

        if (cantidad > 0) {
            setCantidad(cantidad - 1);
          //  addCantidad(index, cantidad);
        }

    }

    const limpiar = () => {

        setCantidad(0);
        //addCantidad(index,cantidad);
    }

    return (
        <div>
            <h3>{fruta.nombre}</h3>
            <p>Precio: {fruta.precio}</p>
            <p>Cantidad: {cantidad} </p>
            <p><strong>Total:</strong> {fruta.precio * cantidad}</p>

            <button onClick={agregar}>+</button>
            <button onClick={quitar}>-</button>
            <button onClick={limpiar}>Limpiar</button>
            <hr />
        </div>
    )


}

export default Fruta
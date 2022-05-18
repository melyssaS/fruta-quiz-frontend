import React, { useState } from "react";

const Fruta = ({ fruta, index, addCantidad }) => {



    const agregar = () => {
        const total = fruta.cantidad + 1;
        addCantidad(index, total);
    }

    const quitar = () => {

        if (fruta.cantidad > 0) {
            const total = fruta.cantidad - 1;
            addCantidad(index, total);
        }

    }

    const limpiar = () => {

        addCantidad(index, 0);
    }

    return (
        <div>
            <h3>{fruta.nombre}</h3>
            <p>Precio: {fruta.precio}</p>
            <p>Cantidad: {fruta.cantidad} </p>
            <p><strong>Total:</strong> {fruta.precio * fruta.cantidad}</p>

            <button onClick={agregar}>+</button>
            <button onClick={quitar}>-</button>
            <button onClick={limpiar}>Limpiar</button>
            <hr />
        </div>
    )


}

export default Fruta
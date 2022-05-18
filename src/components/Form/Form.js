import React, { useState } from "react";

const Form = ({ addFruta }) => {
    const [fruta, setFruta] = useState({
        nombre: "",
        precio: "",
        cantidad: 0,
        total: 0
    }
    );

    const handleInputChange = (ev) => {
        setFruta({
            ...fruta,
            [ev.target.name]: ev.target.value
        })

    }


    const sendFruta = (ev) => {
        ev.preventDefault();
        addFruta(fruta);
        setFruta({
            nombre: "",
            precio: "",
            cantidad: 0,
            total: 0
        })
    }



    return (
        <div>
            <form>
                <fieldset>
                    <label>Nombre de la fruta </label>
                    <input type="text" onChange={handleInputChange} name="nombre"></input>
                </fieldset>
                <fieldset>
                    <label>Precio </label>
                    <input type="text" onChange={handleInputChange} name="precio"></input>
                </fieldset>
                <button onClick={sendFruta}>Agregar Fruta</button>
            </form>
        </div>
    )


}

export default Form
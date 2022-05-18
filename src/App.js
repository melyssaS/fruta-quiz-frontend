import { useState } from 'react';

import Form from "./components/Form/Form"
import Fruta from "./components/Fruta/Fruta"

function App() {

  const [frutas, setFrutas] = useState([]);
  const [total, setTotal] = useState(0)

  const addFruta = (fruta) => {
    frutas.push(fruta);
    setFrutas([...frutas]);
  }

  const addCantidad = (index, cantidad) => {
    frutas[index].cantidad = cantidad;
    frutas[index].total = cantidad * frutas[index].precio;
    setFrutas([...frutas]);
    sumaTotal()
  }


  const sumaTotal = () => {
    if (frutas.length <= 1) {
      setTotal(frutas[0].total)
    } else {
      const suma = frutas.reduce((sum, fruta) => sum + fruta.total, 0);
      setTotal(suma)
    }


  }

  return (
    <div className="App">
      <h1>El total a pagar es : {total}</h1>
      <Form addFruta={addFruta} />
      {frutas.map((fruta, index) => <Fruta key={index} fruta={fruta} index={index} addCantidad={addCantidad} />)}
    </div>
  );
}

export default App;

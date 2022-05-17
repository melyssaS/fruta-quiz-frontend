import { useState } from 'react';

import Form from "./components/Form/Form"
import Fruta from "./components/Fruta/Fruta"

function App() {

  const [frutas, setFrutas] = useState([]);

  const addFruta = (fruta) => {

    frutas.push(fruta);
    setFrutas([...frutas]);
  }

  const addCantidad = ({ index, cantidad }) => {
    frutas[index].cantidad = cantidad;
    console.log(frutas)
  }


  return (
    <div className="App">
      <Form addFruta={addFruta} />
      {frutas.map((fruta, index) => <Fruta  key={index } fruta={fruta} index={index} addCantidad={addCantidad} />)}
    </div>
  );
}

export default App;

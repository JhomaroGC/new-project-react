import React from "react";
import "./App.css";
import Saludo from "./Saludo";


const App = () => {
  const saludo = <h1>Hola Mundo</h1>;
  const parrafo = (
    <p>"Hola que tal como estas, este es mi primer componente"</p>
  );
  const otroparrafo = (
    <p>Este es otro párrafo que le estoy agregando al componente</p>
  );

  return (
    <>
      <div className="saludo">{saludo}</div>
      {parrafo}
      {otroparrafo}
      <Saludo nombre = "Jhoma"/>
    </>
  );
};

export default App;

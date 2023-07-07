import React from "react";
import "./App.css";

const Saludo = (props) => {
    console.log(props);
  return (
    <>
      <p>Bienvenido a React {props.nombre}</p>
    </>
  );
};

export default Saludo;

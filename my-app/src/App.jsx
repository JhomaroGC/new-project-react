import React from "react";
import "./App.css";
import Nav from "./Nav";
import Saludo from "./Saludo";
import Fecha from "./Fecha";
import Counter from "./Counter";

const App = () => {
  return (
    <>
      <Nav />
      <Fecha />
      <Saludo nombre = "JhomaGC" />
      <Counter count = {10}/>
    </>
  );
};

export default App;

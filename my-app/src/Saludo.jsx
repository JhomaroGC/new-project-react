import React from "react";
import PropTypes from 'prop-types';

const Saludo = ({nombre}) => {

  return (
    <>
      <h3>Bienvenido a Franco Kids {nombre}</h3>
    </>
  );
};

export default Saludo;

Saludo.protTypes ={
  nombre: PropTypes.string
}

Saludo.defaultProps = {
  nombre: "sin-nombre"
}
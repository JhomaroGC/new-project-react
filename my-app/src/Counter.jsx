import React, { useState } from "react";
import PropTypes from "prop-types";

const Counter = ({ value }) => {
  let [count, setCounter] = useState(0);

  const handleClickAdd = (e) => {
    e.preventDefault();
    setCounter((count += 1));
    document.getElementById("counter").innerHTML = count;
  };

  const title = <h1>ContadorApp</h1>;
  const countShow = <h3 id="counter">{count}</h3>;
  const countShow2 = <h3>{count}</h3>;
  const boton = (
    <button type="button" onClick={handleClickAdd}>
      +1
    </button>
  );

  return (
    <>
      {title}
      {countShow}
      {countShow2}
      {boton}
    </>
  );
};

export default Counter;

Counter.protTypes = {
  value: PropTypes.number,
};

Counter.defaultProps = {
  value: 11,
};

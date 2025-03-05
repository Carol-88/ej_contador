import PropTypes from "prop-types";
import React from "react";

export const Contador = ({
  contador = 0,
  handleClick,
  handleClickDecrement,
}) => {
  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={handleClick}>Incrementar</button>
      <button onClick={handleClickDecrement}>Decrementar</button>
    </div>
  );
};

Contador.propTypes = {
  contador: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleClickDecrement: PropTypes.func.isRequired,
};

import React, { useState } from "react";
import { Contador } from "./Contador";

export const ControllerContador = () => {
  const [contador, setContador] = useState(0);

  const handleClick = () => setContador((prev) => Math.min(prev + 1, 15));
  const handleClickDecrement = () =>
    setContador((prev) => Math.max(prev - 1, 0));

  return (
    <Contador
      contador={contador}
      handleClick={handleClick}
      handleClickDecrement={handleClickDecrement}
    />
  );
};

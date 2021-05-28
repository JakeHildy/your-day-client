import React, { useState } from "react";
import useInterval from "./../../utils/useInterval";
import "./PageOverlay.scss";

function PageOverlay({ message }) {
  const [counter, setCounter] = useState(2);
  const maxDots = 3;

  useInterval(() => {
    setCounter(counter >= maxDots ? 1 : counter + 1);
  }, 700);

  return (
    <div className="page-overlay">{`${message}${".".repeat(counter)}`}</div>
  );
}

export default PageOverlay;

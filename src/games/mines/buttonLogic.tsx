import React, { useState, useEffect } from "react";
import "../../styles.css";

export default function Button(value: boolean, index: number, index_2: number) {
  let state = "?";
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(true);
    state = "0";
    console.log({ value });
  };

  return (
    <button
      onClick={handleClick}
      disabled={isDisabled}
      className="gameMinesButton"
      key={"" + index + "." + index_2}
    >
      {state}
    </button>
  );
}

import React, { useState } from "react";
import "../../styles.css";

export default function Button(value: boolean, index: number, index_2: number) {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(true);
  };

  return (
    <button
      onClick={handleClick}
      disabled={isDisabled}
      className="gameMinesButton"
      key={"" + index + "." + index_2}
    >
      {isDisabled ? (value ? "X" : "") : "?"}
    </button>
  );
}

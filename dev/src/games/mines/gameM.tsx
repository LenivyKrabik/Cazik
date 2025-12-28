import React, { useState } from "react";
import "../../styles/Mines.css";

import arr_matrix from "./matrixButtons";
import ButtonMode from "./modeMines";
import endWindow from "./endWidnow";
import testWithAdd from "./buttonLogic";

let isOver = false;
function Button(value: boolean, index: number, index_2: number) {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(true);
    isOver = value;
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

export default function MinesGame() {
  return (
    <div className="minesPage">
      <ButtonMode />
      <div className="score">Score </div>
      <div className="box">
        {arr_matrix.map((line, index: number) => (
          <div key={"" + index}>
            {line.map((item: boolean, index_2: number) =>
              Button(item, index, index_2)
            )}
          </div>
        ))}
      </div>
      {isOver ? endWindow(404) : <></>}
    </div>
  );
}

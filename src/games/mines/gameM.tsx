import React from "react";
import "../../styles/Mines.css";

import arr_matrix from "./minesMatrix";
import Button from "./buttonLogic";
import ButtonMode from "./modeMines";

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
    </div>
  );
}

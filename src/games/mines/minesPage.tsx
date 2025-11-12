import React from "react";
import "../../styles/Mines.css";
import arr_matrix from "./minesGame";

import Button from "./buttonLogic";

function Mines() {
  return (
    <div className="minesPage">
      <button className="modeMines">Сomplexity of game</button>
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

export default Mines;

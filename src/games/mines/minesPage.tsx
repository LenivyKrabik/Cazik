import React from "react";
import "../../styles/Mines.css";
import arr_matrix from "./minesGame";

function Mines() {
  return (
    <div className="box">
      {arr_matrix.map((line, index) => (
        <div key={"" + index}>
          {line.map((item, index_2) => (
            <button
              key={"" + index + "." + index_2}
              className="game-2_button"
              onClick={() => console.log(item)}
            >
              {item}
            </button> // {...} робить спочатку список стовпців а далі список із кнопок в стовпцях
          ))}
        </div>
      ))}
    </div>
  );
}

export default Mines;

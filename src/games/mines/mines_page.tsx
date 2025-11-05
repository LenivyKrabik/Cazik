import React from "react";
import "./Mines.css";
import arr_matrix from "./mines_game";

function Mines() {
  return (
    <div className="box">
      {arr_matrix.map((line) => (
        <div>
          {line.map((item) => (
            <button className="game-2_button" onClick={console.log(item)}>
              {item}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Mines;

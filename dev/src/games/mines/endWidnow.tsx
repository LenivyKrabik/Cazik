import "../../styles/Mines.css";
import React from "react";

export default function endWindow(score: number) {
  return (
    <div className="endWindow">
      <div className="endText"> Game Over </div>
      <div className="endScore"> Score {score} </div>
      <button
        className="refreshButton"
        onClick={() => {
          window.location.reload();
        }}
      >
        restart the game
      </button>
    </div>
  );
}

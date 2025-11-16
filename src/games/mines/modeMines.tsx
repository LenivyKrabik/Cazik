import React, { useState } from "react";
import "../../styles/Mines.css";

export default function ButtonMode() {
  const [isUsed, setIsUsed] = useState(false);
  const unClickeble = () => {
    setIsUsed(true);
  };

  return (
    <button className="modeMines" onClick={unClickeble} disabled={isUsed}>
      complex
    </button>
  );
}

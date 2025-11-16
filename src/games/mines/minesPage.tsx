import React from "react";

import RulesPanel from "../rulesPannel";
import MinesGame from "./gameM";

function Mines() {
  return (
    <>
      <MinesGame />
      <RulesPanel
        title="How to play:"
        text="Avoid bombs. For every empty slot you increase your winnings."
        click={<div className="patternScreen"></div>}
        buttonText="Patterns"
      />
    </>
  );
}

export default Mines;

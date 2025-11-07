import "../../styles/slots.css";
import RulesPanel from "../rulesPannel";
import SlotsScreen from "./slotsScreen";

function Slots() {
  return (
    <>
      <SlotsScreen />
      <RulesPanel
        title="How to play:"
        text="Just spin the wheel lil bro"
        click={<div className="patternScreen"></div>}
        buttonText="Patterns"
      />
    </>
  );
}

export default Slots;

import "../../styles/games.css";
import RulesPanel from "../rulesPannel";
import SlotsGame from "./slotsGame";

function Slots() {
  return (
    <div className="gameWrapper">
      <SlotsGame />
      <RulesPanel
        title="How to play:"
        text="Just spin the wheel lil bro"
        click={/* TODO add function for showing menu with all posible combinations*/}
        buttonText=""
      />
    </div>
  );
}

export default Slots;

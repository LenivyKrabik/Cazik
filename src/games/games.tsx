import Slots from "./slots/slots";
import "../styles/games.css";
import Mines from "./mines/mines_page";

function Games() {
  return (
    <div>
      <div className="gameWrapper">{Mines()}</div>
    </div>
  );
}

export default Games;

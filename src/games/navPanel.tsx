import { Link } from "react-router-dom";
import "../styles/navPanel.css";

//80px for logog 50 for navpan

function NavPanel() {
  return (
    <div className="gameNavPanel">
      <Link to={"/game/Slots"} className="navButtonSlot">
        <button className="gameNavButton">Slots</button>
      </Link>
      <Link to={"/game/Mines"} className="navButtonSlot">
        <button className="gameNavButton">Mines</button>
      </Link>
    </div>
  );
}

export default NavPanel;

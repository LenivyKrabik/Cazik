import { Link } from "react-router-dom";
import "./styles/header.css";

//80px for logog 50 for navpan

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src="../public/vite.svg"></img>
      </div>
      <div className="navBar">
        <div className="buttonsPanel">
          <Link to={"/"}>
            <div className="navButton">Home</div>
          </Link>
          <Link to={"/profile"}>
            <div className="navButton">Profile</div>
          </Link>
          <Link to={"/game"}>
            <div className="navButton">PLAY</div>
          </Link>
        </div>
      </div>
    </div>
  );
} //Need to change image placeholder (vite.svg)

export default Header;

import { Link } from "react-router-dom";
import "./styles/header.css";

//80px for logog 50 for navpan

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <Link to={"/"}>
          <img src="../public/vite.svg"></img>
        </Link>
      </div>
      <div className="navBar">
        <div className="buttonsPanel">
          <Link to={"/"}>
            <button className="navButton">Home</button>
          </Link>
          <Link to={"/profile"}>
            <button className="navButton">Profile</button>
          </Link>
          <Link to={"/game"}>
            <button className="navButton">PLAY</button>
          </Link>
        </div>
      </div>
    </div>
  );
} //Need to change image placeholder (vite.svg)

export default Header;

import React from "react";
import "./profile.css";
import "../styles/Mines.css";
import testWithAdd from "../games/mines/buttonLogic";
import userInfo from "../profile/userInfo";

function test() {
  const user = userInfo;
  return (
    <button className="loggg" onClick={user()}>
      log
    </button>
  );
}

export default function Profile() {
  return <div className="ProfilePage"></div>;
}

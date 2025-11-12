import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Slots from "./slots/slots";
import Mines from "./mines/minesPage";
import "../styles/games.css";
import NavPanel from "./navPanel";

function NestedLayout() {
  return (
    <div className="nestedLayout">
      <NavPanel />
      <Outlet />
    </div>
  );
}

export default function NestedApp() {
  return (
    <div className="gamePage">
      <NestedLayout />
      <div className="gameWrapper">
        <Routes>
          <Route path="/" element={<Slots />} />
          <Route path="Mines" element={<Mines />} />
          <Route path="Slots" element={<Slots />} />
        </Routes>
      </div>
    </div>
  );
}

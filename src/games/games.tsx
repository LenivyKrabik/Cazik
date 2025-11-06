import React from "react";
import {
  Routes,
  Route,
  Link,
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Slots from "./slots/slots";
import Mines from "./mines/minesPage";
import navPanel from "./navPanel";
import "../styles/games.css";

function NestedLayout() {
  return (
    <div className="nested-layout">
      <main>
        {navPanel()}
        <Outlet />
      </main>
    </div>
  );
}

export default function NestedApp() {
  return (
    <div className="nested-root">
      element: <NestedLayout />
      <Routes>
        <Route path="/" element={<Slots />} />
        <Route path="Mines" element={<Mines />} />
        <Route path="Slots" element={<Slots />} />
      </Routes>
    </div>
  );
}

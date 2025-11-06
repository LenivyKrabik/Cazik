import { useEffect, useRef, useState } from "react";
import RatioPreservingMaxScale from "../../scripts/ratioPreservingMaxScale";
import SlotsColumn from "./slotsColumn";

function SlotsScreen() {
  const Screen = useRef(null);

  const [columns, setColumns] = useState([
    { state: 1 },
    { state: 1 },
    { state: 1 },
    { state: 1 },
    { state: 1 },
  ]);

  //Make screen remain rario and fit in div
  const ratioPreserve = () => {
    RatioPreservingMaxScale(Screen.current, "5 / 4");
  };
  useEffect(() => {
    RatioPreservingMaxScale(Screen.current, "5 / 4");
    window.addEventListener("resize", ratioPreserve);

    return () => window.removeEventListener("resize", ratioPreserve);
  }, []);

  return (
    <div className="slotsWraper">
      <div ref={Screen} className="slotsScreen">
        <div className="slotsGame">
          {columns.map((item, id) => (
            <SlotsColumn key={id} id={id} state={columns[id].state} />
          ))}
        </div>
        <div className="slotsUI"></div>
      </div>
    </div>
  );
}

export default SlotsScreen;

import { useEffect, useRef, useState } from "react";
import RatioPreservingMaxScale from "../../scripts/ratioPreservingMaxScale";
import SlotsColumn from "./slotsColumn";

function SlotsScreen() {
  const Screen = useRef(null);

  const [columns, setColumns] = useState([
    { state: 1, show: [0] },
    { state: 1, show: [0] },
    { state: 1, show: [0] },
    { state: 1, show: [0] },
    { state: 1, show: [0] },
  ]);

  //Make screen remain rario and fit in div
  const ratioPreserve = () => {
    RatioPreservingMaxScale(Screen.current, "5 / 4");
  };
  useEffect(() => {
    RatioPreservingMaxScale(Screen.current, "5 / 4");
    window.addEventListener("resize", ratioPreserve);

    //Quick check for change in state. Need to implement a proper way later
    setTimeout(() => {
      setColumns([
        { state: 2, show: [0, 1, 2] },
        { state: 2, show: [0, 1, 2] },
        { state: 2, show: [0, 1, 2] },
        { state: 2, show: [0, 1, 2] },
        { state: 2, show: [0, 1, 2] },
      ]);
    }, 2000);
    setTimeout(() => {
      setColumns([
        { state: 1, show: [0, 1, 2] },
        { state: 2, show: [0, 1, 2] },
        { state: 2, show: [0, 1, 2] },
        { state: 2, show: [0, 1, 2] },
        { state: 2, show: [0, 1, 2] },
      ]);
    }, 4000);

    return () => window.removeEventListener("resize", ratioPreserve);
  }, []);

  return (
    <div className="slotsWraper">
      <div ref={Screen} className="slotsScreen">
        <div className="slotsGame">
          {columns.map((item, id) => (
            <SlotsColumn key={id} id={id} state={item.state} show={item.show} />
          ))}
        </div>
        <div className="slotsUI"></div>
      </div>
    </div>
  );
}

export default SlotsScreen;


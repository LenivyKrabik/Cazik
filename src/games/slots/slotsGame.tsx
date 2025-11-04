import { useEffect, useRef } from "react";
import RatioPreservingMaxScale from "../../scripts/ratioPreservingMaxScale";

function SlotsScreen() {
  const Screen = useRef(null);
  const Wrapper = useRef(null);

  const ratioPreserve = () => {
    RatioPreservingMaxScale(Screen.current, "2 / 1");
  };

  useEffect(() => {
    RatioPreservingMaxScale(Screen.current, "2 / 1");
    window.addEventListener("resize", ratioPreserve);

    return () => window.removeEventListener("resize", ratioPreserve);
  }, []);

  return (
    <div ref={Wrapper} className="slotsWraper">
      <div ref={Screen} className="slotsScreen">
        <div className="slotsGame"></div>
        <div className="slotsUI"></div>
      </div>
    </div>
  );
}

export default SlotsScreen;

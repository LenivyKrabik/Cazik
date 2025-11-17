import { useEffect, useRef, useState } from "react";
import RatioPreservingMaxScale from "../../scripts/ratioPreservingMaxScale";
import SlotsColumn from "./slotsColumn";
import patternsChecker from "./patternsChecker";

function SlotsScreen() {
  const Screen = useRef(null);
  const wholeScreenState = useRef(0);

  const [columns, setColumns] = useState([
    { state: 0, show: [0] },
    { state: 0, show: [0] },
    { state: 0, show: [0] },
    { state: 0, show: [0] },
    { state: 0, show: [0] },
  ]);

  const [highlighted, setHighlighted] = useState<number[][]>([
    [],
    [],
    [],
    [],
    [],
  ]);

  //Make screen remain rario and fit in div
  const ratioPreserve = () => {
    RatioPreservingMaxScale(Screen.current, "5 / 4");
  };

  const spinTheWheel = () => {
    if (wholeScreenState.current === 0 || wholeScreenState.current === 2) {
      wholeScreenState.current = 1;
      setColumns(
        [0, 0, 0, 0, 0].map(() => {
          return { state: 1, show: [0] };
        })
      );
      //Spin all of the columns again

      setHighlighted([[], [], [], [], []]);
      //Get new result of a spin
      const newResult = [0, 0, 0, 0, 0].map(() =>
        [0, 0, 0].map(() => Math.floor(Math.random() * 3))
      );
      //Set new result of a spin
      setTimeout(() => {
        let waitTime = 0;
        for (const [i, result] of newResult.entries()) {
          //Timeout to stop columns not at the same time
          setTimeout(() => {
            setColumns((prev) =>
              prev.map((column, id) =>
                id === i ? { state: 2, show: result } : column
              )
            );
            //Runs when last column stops   //Would be better to properly wait for end of last column but this will do
            if (i === 4) {
              setTimeout(() => {
                const needToAnimate = patternsChecker(newResult);
                console.log(needToAnimate);
                let waitTime = 0;
                for (let patternToAnimate of needToAnimate) {
                  setTimeout(() => {
                    setHighlighted(patternToAnimate);
                  }, waitTime);
                  waitTime += 525;
                }
                //Allowing next spin
                setTimeout(() => {
                  wholeScreenState.current = 2;
                }, waitTime);
              }, 500);
            }
          }, waitTime);
          waitTime += Math.floor(Math.random() * 500);
        }
      }, 1000);
    }
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
            <SlotsColumn
              key={id}
              state={item.state}
              show={item.show}
              highlighted={highlighted[id]}
            />
          ))}
        </div>
        <div className="slotsUI">
          <button className="spinButton" onClick={spinTheWheel}>
            SPIN
          </button>
        </div>
      </div>
    </div>
  );
}

export default SlotsScreen;

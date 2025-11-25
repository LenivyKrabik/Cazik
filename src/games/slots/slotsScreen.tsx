import { useEffect, useRef, useState } from "react";
import RatioPreservingMaxScale from "../../scripts/ratioPreservingMaxScale";
import SlotsColumn from "./slotsColumn";
import patternsChecker from "./patternsChecker";

function SlotsScreen() {
  //Change when money system will be implemented
  if (localStorage.getItem("money") === null) {
    localStorage.setItem("money", JSON.stringify(1000));
  }
  const [money, setMoney] = useState(
    JSON.parse(localStorage.getItem("money")!)
  );

  const [betAmount, setBetAmount] = useState(5);
  const minBetStep = 5;

  const maskItemsToValue = [0, 0, 3, 4, 5, 0, 0, 8, 0, 10, 0, 0, 0, 0, 20];

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
    if (
      (wholeScreenState.current === 0 || wholeScreenState.current === 2) &&
      money >= betAmount
    ) {
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

      dealWithMoney(newResult);
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
    } else if (money < betAmount)
      console.log("Not enough money for spin, lower bet or dep more");
  };
  useEffect(() => {
    RatioPreservingMaxScale(Screen.current, "5 / 4");
    window.addEventListener("resize", ratioPreserve);
    return () => window.removeEventListener("resize", ratioPreserve);
  }, []);

  const betUp = () => {
    if (money >= betAmount + minBetStep) setBetAmount(betAmount + minBetStep);
  };

  const betDown = () => {
    if (money < betAmount) {
      setBetAmount(Math.max(money - (money % minBetStep), minBetStep));
    } else if (betAmount > minBetStep) setBetAmount(betAmount - minBetStep);
  };

  const dealWithMoney = (result: number[][]) => {
    let moneyUp = 0;
    for (let pattern of patternsChecker(result)) {
      let count = 0;
      for (const row of pattern) {
        for (const value of row) {
          if (value === 1) count++;
        }
      }
      moneyUp += (maskItemsToValue[count - 1] * betAmount) / 5;
    }
    const newMoneyAmount = money + moneyUp - betAmount;
    localStorage.setItem("money", JSON.stringify(newMoneyAmount));
    setMoney(newMoneyAmount);
  };

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
          <small>
            Money: {money} Bet amount:{betAmount}
          </small>
          <div className="betButtonsWrapper">
            <button onClick={betUp}>↑</button>
            <button onClick={betDown}>↓</button>
          </div>
          <button className="spinButton" onClick={spinTheWheel}>
            SPIN
          </button>
        </div>
      </div>
    </div>
  );
}

export default SlotsScreen;

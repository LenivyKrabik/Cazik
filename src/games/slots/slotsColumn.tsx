import { useEffect, useOptimistic, useRef } from "react";
import "../../styles/slots.css";
interface Props {
  id: number;
  state: number;
  show: number[] | null;
}

//States - 0 - stop, 1 - spinning, 2 - result  ; Can go 0 => 1; 1 => 2; 1 => 0
function SlotsColumn({ id, state, show = null }: Props) {
  const icons = ["/Lemon.png", "/Cherry.png", "/Six-Seven.png"];

  const pictures = [
    useRef<HTMLImageElement>(null),
    useRef<HTMLImageElement>(null),
    useRef<HTMLImageElement>(null),
    useRef<HTMLImageElement>(null),
  ];

  const listeners = useRef<((() => void) | null)[]>([]);
  const needToShow = useRef<number[] | undefined>(undefined);

  const picChanger = (pic: React.RefObject<HTMLImageElement | null>) => {
    pic.current!.src = icons[Math.floor(Math.random() * icons.length)];
  };

  let previousState = useRef<number | null>(null);

  const picByTempId = useRef<React.RefObject<HTMLImageElement | null>[]>([]);

  const startSpin = (
    listOfPicturesInOrder: React.RefObject<HTMLImageElement | null>[]
  ) => {
    let waitTime = 0;
    for (const [i, pic] of listOfPicturesInOrder.entries()) {
      if (pic.current) {
        const listener = () => picChanger(pic);
        listeners.current[i] = listener;
        pic.current.addEventListener("animationiteration", listener); //Try to put it inside timeout if this would help

        setTimeout(
          () => {
            pic.current!.className = "spinning";
            pic.current!.style = "";
            picChanger(pic);
          },
          waitTime,
          pic
        );
        waitTime += 128;
      }
    }
  };

  const stopSpin = () => {
    for (const [i, pic] of pictures.entries()) {
      if (pic.current && listeners.current[i]) {
        pic.current.removeEventListener(
          "animationiteration",
          listeners.current[i]
        );
        const listener = () => {
          pic.current?.classList.remove("spinning");
        };
        listeners.current[i] = listener;
        pic.current.addEventListener("animationiteration", listener, {
          once: true,
        });
      }
    }
  };

  const showResult = () => {
    for (const [i, pic] of pictures.entries()) {
      pic.current?.addEventListener(
        //When you are done spinning this cycle
        "animationiteration",
        () => {
          pic.current?.removeEventListener(
            //Remove picChanger so it wouldn't disturb new pic
            "animationiteration",
            listeners.current[i]!
          );
          pic.current?.classList.remove("spinning"); //Stop spinning animation
          let tempId = needToShow.current!.length; //Setting temp id for picture
          picByTempId.current![tempId] = pic; //Stash correct respin order
          if (needToShow.current?.length !== 0 && pic.current) {
            //If there is still unfilled spots left
            pic.current.src = icons[needToShow.current!.shift()!]; //Setting new pic

            pic.current.style.transition = `all linear ${tempId / 8}s`; //Setting animation
            pic.current.offsetHeight;
            pic.current.style.top = `${35 * tempId - 35}%`;
          }
        },
        {
          once: true,
        }
      );
    }
  };

  const Respinning = () => {
    const respinOrder = [0, 3, 2, 1].map((item) => picByTempId.current[item]);
    startSpin(respinOrder); //Start new animation timers
    respinOrder.forEach((pic, tempId) => {
      if (pic.current && tempId !== 0) {
        pic.current.style.transition = `all linear ${tempId / 8}s`; //Setting animation
        pic.current.offsetHeight;
        pic.current.style.top = `105%`;
      }
    });
    picByTempId.current = []; //Reset lookup table
  };

  //State machine
  useEffect(() => {
    if (state === 1 && previousState.current === null) {
      console.log("Spin started");
      previousState.current = 1;
      startSpin(pictures);
    } else if (state === 1 && previousState.current === 2) {
      console.log("Respinning...");
      previousState.current = 1;
      Respinning();
    } else if (
      state === 0 &&
      previousState.current !== null &&
      previousState.current !== 0
    ) {
      console.log("Stopping spinning");
      previousState.current = 0;
      stopSpin();
    } else if (state === 2) {
      needToShow.current = show?.slice();
      console.log("Showing jackpot");
      previousState.current = 2;
      showResult();
    }
  }, [state]);

  return (
    <div className="slotsColumn">
      <img src="Lemon.png" ref={pictures[0]}></img>
      <img src="Lemon.png" ref={pictures[1]}></img>
      <img src="Lemon.png" ref={pictures[2]}></img>
      <img src="Lemon.png" ref={pictures[3]}></img>
    </div>
  );
}

export default SlotsColumn;

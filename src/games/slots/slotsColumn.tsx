import { useEffect, useRef } from "react";
import "../../styles/slots.css";
interface Props {
  id: Number;
  state: Number;
}

//States - 1 - spinning
function SlotsColumn({ id, state }: Props) {
  const icons = [
    "/public/Lemon.png",
    "/public/Cherry.png",
    "/public/Six-Seven.png",
  ];

  const pictures = [
    useRef<HTMLImageElement>(null),
    useRef<HTMLImageElement>(null),
    useRef<HTMLImageElement>(null),
    useRef<HTMLImageElement>(null),
  ];

  const fruitChanger = (pic: React.RefObject<HTMLImageElement | null>) => {
    if (pic.current) pic.current.src = icons[Math.floor(Math.random() * 3)];
  };

  useEffect(() => {
    let waitTime = 0;
    for (const pic of pictures) {
      if (pic.current) {
        pic.current.addEventListener("animationiteration", () =>
          fruitChanger(pic)
        );
        fruitChanger(pic);
        setTimeout(
          (pic: React.RefObject<HTMLImageElement>) =>
            (pic.current.className = "spinning"),
          waitTime,
          pic
        );
        waitTime += 125;
      }
    }
  }, []);

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

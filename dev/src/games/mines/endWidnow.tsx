import "../../styles/Mines.css";

export default function endWindow(score: number) {
  return (
    <div className="endWindow">
      <div className="score">Score: {score}</div>
      <button className="refreshButton">refresh</button>
    </div>
  );
}

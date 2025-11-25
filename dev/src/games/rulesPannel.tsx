import { useState } from "react";
import "../styles/rulesPanel.css";

interface Props {
  title: string;
  text: string;
  click: React.ReactNode | null;
  buttonText: string;
}

/**
 *Side rules pannel. Need to be in flexbox
 * @param title {string} - Big title ontop
 * @param text {text} - Main small text
 * @param click {text} - div that appears when button is holded. Leave empty for no button
 * @param buttonText {text} - text on button
 */
function RulesPanel({
  title = "How to paly:",
  text = "Was that the bite of '87?",
  click = null,
  buttonText = "BingChiling",
}: Props) {
  const [showDiv, setShowDiv] = useState(false);
  return (
    <div className="rulesPanel">
      <div className="title">{title}</div>
      <div className="rules">
        <p>{text}</p>
      </div>
      {click ? (
        <button
          onMouseDown={() => setShowDiv(true)}
          onMouseUp={() => setShowDiv(false)}
        >
          {buttonText}
        </button>
      ) : null}
      {showDiv && click ? click : null}
    </div>
  );
}

export default RulesPanel;

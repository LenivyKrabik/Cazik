import "../styles/rulesPanel.css";

interface Props {
  title: string;
  text: string;
  click: (() => void) | null;
  buttonText: string;
}

/**
 *Side rules pannel. Need to be in flexbox
 * @param title {string} - Big title ontop
 * @param text {text} - Main small text
 * @param click {text} - function called when button clicked. Leave empty for no button
 * @param buttonText {text} - text on button
 */
function RulesPanel({
  title = "How to paly:",
  text = "Was that the bite of '87?",
  click = null,
  buttonText = "BingChiling",
}: Props) {
  return (
    <div className="rulesPanel">
      <div className="title">{title}</div>
      <div className="rules">
        <p>{text}</p>
      </div>
      {click ? <button onClick={click}>{buttonText}</button> : null}
    </div>
  );
}

export default RulesPanel;

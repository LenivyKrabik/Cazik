import React, { useState } from "react";
import "../../styles.css";
import userInfo from "../../profile/userInfo";

function Button(value: boolean, index: number, index_2: number) {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(true);
  };

  return (
    <button
      onClick={handleClick}
      disabled={isDisabled}
      className="gameMinesButton"
      key={"" + index + "." + index_2}
    >
      {isDisabled ? (value ? "X" : "") : "?"}
    </button>
  );
}
function testWithAdd() {
  const user = userInfo();
  return (
    <button className="counter" onClick={() => user.change("count", 1)}>
      +1
    </button>
  );
}

export default testWithAdd;

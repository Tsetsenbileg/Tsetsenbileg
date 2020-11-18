import React, { useState } from "react";
import Example from "../example/Example";
import States from "../states/States";
import "./Switch.css";
function Switch(props) {
  const [name, setName] = useState("Example");
  const [button, setButton] = useState("P2");
  const clickHandler = () => {
    if (name === "Example") {
      setName("States");
      setButton("P1");
    } else {
      setName("Example");
      setButton("P2");
    }
  };
  return (
    <div className={name === "Example" ? "container" : "con"}>
      <div className="btn" onClick={clickHandler}>
        {button}
      </div>
      {name === "Example" ? <Example /> : <States />}
    </div>
  );
}

export default Switch;

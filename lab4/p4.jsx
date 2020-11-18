import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header/Header";
import Switch from "./components/switch/Switch";
import "./components/example/Example.css";

ReactDOM.render(
  <div>
    <Header />
    <Switch />
  </div>,
  document.getElementById("reactapp")
);

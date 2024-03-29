import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

function App() {
  return (
    <div className="App">
      <h2>HOC Props Proxy</h2>
      <ClickCounter />
      <HoverCounter />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

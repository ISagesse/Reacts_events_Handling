import React, { useState } from "react";

function App() {
  let [isMouseOver, setMouseOver] = useState(false);

  function mouseEnter() {
    setMouseOver(true);
  }

  function mouseExit() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOver={mouseEnter}
        onMouseOut={mouseExit}
      >
        Submit
      </button>
    </div>
  );
}

export default App;

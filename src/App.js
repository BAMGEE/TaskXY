import React, { useState, useEffect, useRef } from "react";
import ScatterPlot from "./components/axis";
import Button from "./components/Button.tsx";

function App() {
  return (
    <div>
      <div
        style={{ width: "100%", height: "100%", position: "fixed" }}
      >
          <ScatterPlot />
      </div>

      <div style={{ position: "absolute", margin: "20px" }}>
        <Button
          width="50px"
          height="50px"
          fontSize="30px"
        >
          ➕
        </Button>
        <div style={{ margin: "5px" }}></div>
        <Button
          width="50px"
          height="50px"
          fontSize="30px"
        >
          📝
        </Button>
      </div>
    </div>
  );
}

export default App;

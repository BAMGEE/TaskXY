import React, { useState } from "react";
import Axis from "./components/axis";
import Button from "./components/Button";
import Modal from "./components/Modal"
import TaskView from "./components/TaskView"
import TaskInput from "./components/TaskInput"

function App() {
  const [isInputModalActive, setInputIsModalActive] = useState(false);
  const [isViewModalActive, setViewIsModalActive] = useState(false);
  const [canvasExitValue, setCanvasExitValue] = useState(true);

  return (
    <div>
      <div
        style={{ width: "100%", height: "100%", position: "fixed" }}>
          <Axis />
      </div>

      <div style={{ position: "absolute", margin: "20px" }}>
        <Button
          width="50px"
          height="50px"
          fontSize="30px"
          onClick={() => {
            setInputIsModalActive(true);
            setCanvasExitValue(false);
          }}
        >
          ➕
        </Button>
        {isInputModalActive && (
            <Modal 
              modal={isInputModalActive}
              setModal={setInputIsModalActive}
              canvasExit={canvasExitValue}
              width="500"
              height="500"
              element={
              <div style={{ width: "100%", height: "100%", position: "fixed" }}>
                <TaskInput />
              </div>}
              />
        )}
        <div style={{ margin: "5px" }}></div>
        <Button
          width="50px"
          height="50px"
          fontSize="30px"
          onClick={() => {
            setViewIsModalActive(true);
            setCanvasExitValue(true);
          }}
        >
          📝
        </Button>
        {isViewModalActive && (
          <Modal
              modal={isViewModalActive}
              setModal={setViewIsModalActive}
              canvasExit={canvasExitValue}
              width="500"
              height="500"
              element={
              <div style={{ width: "100%", height: "100%", position: "fixed" }}>
                <TaskView />
              </div>}
              />
        )}
      </div>
    </div>
  );
}

export default App;

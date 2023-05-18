import React, { useState, useEffect, useRef } from "react";
import Axis from "./components/axis";

function App() {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [axisSize, setAxisSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      const containerWidth = containerRef.current.clientWidth;
      const containerHeight = containerRef.current.clientHeight;
      const scaleWidth = window.innerWidth / containerWidth;
      const scaleHeight = window.innerHeight / containerHeight;
      const newScale = Math.min(scaleWidth, scaleHeight);

      setScale(newScale);
      setAxisSize({ width: containerWidth, height: containerHeight });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "100%", position: "fixed" }}
    >
      <Axis scale={scale} width={axisSize.width} height={axisSize.height} />
    </div>
  );
}

export default App;

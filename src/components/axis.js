import React, { useState, useEffect } from 'react';
import data from '../scatterPlot.json';

const ScatterPlot = () => {
  const [chartWidth, setChartWidth] = useState(window.innerWidth);
  const [chartHeight, setChartHeight] = useState(window.innerHeight);

  const margin = 50;
  const xMin = -100;
  const xMax = 100;
  const yMin = -100;
  const yMax = 100;

  useEffect(() => {
    const handleResize = () => {
      setChartWidth(window.innerWidth);
      setChartHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const centerX = chartWidth / 2;
  const centerY = chartHeight / 2;
  const scaleX = (chartWidth - (margin * 2)) / (xMax - xMin);
  const scaleY = (chartHeight - (margin * 2)) / (yMax - yMin);

  return (
    <svg width={chartWidth} height={chartHeight}>
        {/* Draw axis-X */}
          <line
              x1={margin}
              y1={centerY}
              x2={chartWidth - margin}
              y2={centerY}
              stroke="gray"
              strokeWidth={3}
          />
          <text
              x={centerX - 30}
              y={50}
              textAnchor="middle"
              fontSize={12}
          >
          난이도
        </text>
        {/* Draw axis-Y */}
          <line
              x1={centerX}
              y1={margin}
              x2={centerX}
              y2={chartHeight - margin}
              stroke="gray"
              strokeWidth={3}
          />
          <text
              x={chartWidth - margin}
              y={centerY + 30}
              textAnchor="middle"
              fontSize={12}
          >
          중요도
        </text>
        {/* Draw data nodes */}
        {data.map(node => (
            <circle
                key={node.id}
                cx={centerX + node.x * scaleX}
                cy={centerY - node.y * scaleY}
                r={5}
                fill="steelblue"
            />
        ))}
    </svg>
  );
};

export default ScatterPlot;

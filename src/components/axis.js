import React, { useState, useEffect } from 'react';

const Axis = ({ scale, width, height }) => {
    const [nodes, setNodes] = useState([
        { id: 1, x: -100, y: 50 },
        { id: 2, x: -200, y: 150 },
        { id: 3, x: 300, y: 250 },
    ]);

    useEffect(() => {
        setNodes(prevNodes =>
            prevNodes.map(node => ({
                ...node,
                x: node.x * scale,
                y: node.y * scale
            }))
        );
    }, [scale]);

    const scaledNodeRadius = 5 * scale;
    const scaledLineStrokeWidth = 1 * scale;
    const centerX = width / 2;
    const centerY = height / 2;

    return (
        <div>
            <svg width={width} height={height}>

                {/* Axis-X */}
                <line
                    x1="0" 
                    y1={centerY} 
                    x2={width} 
                    y2={centerY} 
                    stroke="black" 
                    strokeWidth={scaledLineStrokeWidth} 
                />

                {/* Axis-Y */}
                <line 
                    x1={centerX} 
                    y1="0" 
                    x2={centerX} 
                    y2={height} 
                    stroke="black" 
                    strokeWidth={scaledLineStrokeWidth} 
                />
                
                {/* node data */}
                {nodes.map(node => (
                    <circle
                        key={node.id}
                        cx={centerX + node.x}
                        cy={centerY - node.y}
                        r={scaledNodeRadius}
                        fill="blue"
                    />
                ))}
            </svg>
        </div>
    );
};

export default Axis;

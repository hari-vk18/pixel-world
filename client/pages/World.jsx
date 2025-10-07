import React, { useState } from 'react';

const World = () => {
  const [hoveredLocation, setHoveredLocation] = useState(null);
  
  // Hexagon dimensions
  const hexRadius = 3;
  const hexHeight = hexRadius * 2;
  const hexWidth = Math.sqrt(3) * hexRadius;
  const vertDist = hexHeight * 0.75;
  const horizDist = hexWidth;

  // Generate hexagon path
  const createHexPath = (cx, cy, r) => {
    const points = [];
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i - Math.PI / 6;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      points.push(`${x},${y}`);
    }
    return `M ${points.join(' L ')} Z`;
  };

  // World regions with hexagon coordinates
  const worldRegions = {
    // North America
    northAmerica: [
      { row: 8, col: 8 }, { row: 8, col: 9 }, { row: 8, col: 10 }, { row: 8, col: 11 },
      { row: 9, col: 7 }, { row: 9, col: 8 }, { row: 9, col: 9 }, { row: 9, col: 10 }, { row: 9, col: 11 }, { row: 9, col: 12 },
      { row: 10, col: 7 }, { row: 10, col: 8 }, { row: 10, col: 9 }, { row: 10, col: 10 }, { row: 10, col: 11 }, { row: 10, col: 12 }, { row: 10, col: 13 },
      { row: 11, col: 6 }, { row: 11, col: 7 }, { row: 11, col: 8 }, { row: 11, col: 9 }, { row: 11, col: 10 }, { row: 11, col: 11 }, { row: 11, col: 12 }, { row: 11, col: 13 },
      { row: 12, col: 6 }, { row: 12, col: 7 }, { row: 12, col: 8 }, { row: 12, col: 9 }, { row: 12, col: 10 }, { row: 12, col: 11 }, { row: 12, col: 12 },
      { row: 13, col: 7 }, { row: 13, col: 8 }, { row: 13, col: 9 }, { row: 13, col: 10 }, { row: 13, col: 11 },
      { row: 14, col: 8 }, { row: 14, col: 9 }, { row: 14, col: 10 },
    ],
    
    // South America
    southAmerica: [
      { row: 18, col: 11 }, { row: 18, col: 12 },
      { row: 19, col: 10 }, { row: 19, col: 11 }, { row: 19, col: 12 },
      { row: 20, col: 10 }, { row: 20, col: 11 }, { row: 20, col: 12 },
      { row: 21, col: 10 }, { row: 21, col: 11 }, { row: 21, col: 12 },
      { row: 22, col: 10 }, { row: 22, col: 11 },
      { row: 23, col: 10 }, { row: 23, col: 11 },
      { row: 24, col: 10 }, { row: 24, col: 11 },
      { row: 25, col: 10 },
    ],
    
    // Europe
    europe: [
      { row: 6, col: 21 }, { row: 6, col: 22 }, { row: 6, col: 23 },
      { row: 7, col: 20 }, { row: 7, col: 21 }, { row: 7, col: 22 }, { row: 7, col: 23 }, { row: 7, col: 24 },
      { row: 8, col: 20 }, { row: 8, col: 21 }, { row: 8, col: 22 }, { row: 8, col: 23 }, { row: 8, col: 24 },
      { row: 9, col: 20 }, { row: 9, col: 21 }, { row: 9, col: 22 }, { row: 9, col: 23 }, { row: 9, col: 24 },
      { row: 10, col: 21 }, { row: 10, col: 22 }, { row: 10, col: 23 },
    ],
    
    // Africa
    africa: [
      { row: 12, col: 21 }, { row: 12, col: 22 },
      { row: 13, col: 20 }, { row: 13, col: 21 }, { row: 13, col: 22 }, { row: 13, col: 23 },
      { row: 14, col: 20 }, { row: 14, col: 21 }, { row: 14, col: 22 }, { row: 14, col: 23 },
      { row: 15, col: 20 }, { row: 15, col: 21 }, { row: 15, col: 22 }, { row: 15, col: 23 },
      { row: 16, col: 20 }, { row: 16, col: 21 }, { row: 16, col: 22 }, { row: 16, col: 23 },
      { row: 17, col: 20 }, { row: 17, col: 21 }, { row: 17, col: 22 },
      { row: 18, col: 20 }, { row: 18, col: 21 }, { row: 18, col: 22 },
      { row: 19, col: 20 }, { row: 19, col: 21 }, { row: 19, col: 22 },
      { row: 20, col: 21 }, { row: 20, col: 22 },
      { row: 21, col: 21 },
    ],
    
    // Asia
    asia: [
      { row: 6, col: 25 }, { row: 6, col: 26 }, { row: 6, col: 27 }, { row: 6, col: 28 }, { row: 6, col: 29 }, { row: 6, col: 30 },
      { row: 7, col: 25 }, { row: 7, col: 26 }, { row: 7, col: 27 }, { row: 7, col: 28 }, { row: 7, col: 29 }, { row: 7, col: 30 }, { row: 7, col: 31 }, { row: 7, col: 32 },
      { row: 8, col: 25 }, { row: 8, col: 26 }, { row: 8, col: 27 }, { row: 8, col: 28 }, { row: 8, col: 29 }, { row: 8, col: 30 }, { row: 8, col: 31 }, { row: 8, col: 32 }, { row: 8, col: 33 },
      { row: 9, col: 25 }, { row: 9, col: 26 }, { row: 9, col: 27 }, { row: 9, col: 28 }, { row: 9, col: 29 }, { row: 9, col: 30 }, { row: 9, col: 31 }, { row: 9, col: 32 }, { row: 9, col: 33 }, { row: 9, col: 34 },
      { row: 10, col: 24 }, { row: 10, col: 25 }, { row: 10, col: 26 }, { row: 10, col: 27 }, { row: 10, col: 28 }, { row: 10, col: 29 }, { row: 10, col: 30 }, { row: 10, col: 31 }, { row: 10, col: 32 }, { row: 10, col: 33 },
      { row: 11, col: 24 }, { row: 11, col: 25 }, { row: 11, col: 26 }, { row: 11, col: 27 }, { row: 11, col: 28 }, { row: 11, col: 29 }, { row: 11, col: 30 }, { row: 11, col: 31 },
      { row: 12, col: 24 }, { row: 12, col: 25 }, { row: 12, col: 26 }, { row: 12, col: 27 }, { row: 12, col: 28 }, { row: 12, col: 29 }, { row: 12, col: 30 },
      { row: 13, col: 25 }, { row: 13, col: 26 }, { row: 13, col: 27 }, { row: 13, col: 28 }, { row: 13, col: 29 },
      { row: 14, col: 26 }, { row: 14, col: 27 }, { row: 14, col: 28 },
    ],
    
    // Australia
    australia: [
      { row: 21, col: 34 }, { row: 21, col: 35 },
      { row: 22, col: 33 }, { row: 22, col: 34 }, { row: 22, col: 35 },
      { row: 23, col: 33 }, { row: 23, col: 34 }, { row: 23, col: 35 },
      { row: 24, col: 34 },
    ],
  };

  // Highlighted locations (brown dots)
  const highlightedLocations = [
    { row: 9, col: 22, label: 'IOTC Real Asset B.V.', country: 'Netherlands' },
    { row: 11, col: 24, label: 'Location 2', country: 'Eastern Europe' },
    { row: 13, col: 27, label: 'Location 3', country: 'Middle East' },
    { row: 15, col: 29, label: 'Location 4', country: 'South Asia' },
    { row: 17, col: 32, label: 'Location 5', country: 'Southeast Asia' },
    { row: 20, col: 33, label: 'Location 6', country: 'Maritime Asia' },
  ];

  const getHexPosition = (row, col) => {
    const x = col * horizDist + (row % 2 === 1 ? horizDist / 2 : 0);
    const y = row * vertDist;
    return { x, y };
  };

  return (
    <div className="w-full h-screen bg-white flex items-center justify-center p-8">
      <div className="relative w-full max-w-6xl">
        <svg
          viewBox="0 0 450 300"
          className="w-full h-auto"
          style={{ maxHeight: '80vh' }}
        >
          {/* Background hexagons (light gray) */}
          {Object.values(worldRegions).flat().map((hex, idx) => {
            const pos = getHexPosition(hex.row, hex.col);
            return (
              <path
                key={`bg-${idx}`}
                d={createHexPath(pos.x, pos.y, hexRadius)}
                fill="#e5e5e5"
                opacity="0.4"
              />
            );
          })}

          {/* Highlighted locations (brown/gold) */}
          {highlightedLocations.map((loc, idx) => {
            const pos = getHexPosition(loc.row, loc.col);
            const isHovered = hoveredLocation === idx;
            return (
              <g key={`highlight-${idx}`}>
                <path
                  d={createHexPath(pos.x, pos.y, hexRadius * 1.2)}
                  fill={isHovered ? '#d4a574' : '#b8956a'}
                  className="cursor-pointer transition-all duration-200"
                  onMouseEnter={() => setHoveredLocation(idx)}
                  onMouseLeave={() => setHoveredLocation(null)}
                  opacity={isHovered ? 1 : 0.85}
                />
                {isHovered && (
                  <>
                    <rect
                      x={pos.x - 50}
                      y={pos.y - 35}
                      width="100"
                      height="30"
                      rx="4"
                      fill="white"
                      stroke="#333"
                      strokeWidth="0.5"
                      filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
                    />
                    <text
                      x={pos.x}
                      y={pos.y - 25}
                      textAnchor="middle"
                      fontSize="6"
                      fontWeight="600"
                      fill="#333"
                    >
                      {loc.label}
                    </text>
                    <text
                      x={pos.x}
                      y={pos.y - 17}
                      textAnchor="middle"
                      fontSize="5"
                      fill="#666"
                    >
                      {loc.country}
                    </text>
                  </>
                )}
              </g>
            );
          })}

          {/* Main label for Netherlands */}
          <g>
            <rect
              x="195"
              y="45"
              width="70"
              height="18"
              rx="3"
              fill="white"
              stroke="#e5e5e5"
              strokeWidth="0.5"
            />
            <text
              x="230"
              y="53"
              textAnchor="middle"
              fontSize="6"
              fontWeight="600"
              fill="#333"
            >
              IOTC Real Asset B.V.
            </text>
            <text
              x="230"
              y="60"
              textAnchor="middle"
              fontSize="5"
              fill="#666"
            >
              Netherlands
            </text>
            <line
              x1="230"
              y1="63"
              x2={getHexPosition(9, 22).x}
              y2={getHexPosition(9, 22).y - 5}
              stroke="#b8956a"
              strokeWidth="0.5"
              opacity="0.5"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default World;
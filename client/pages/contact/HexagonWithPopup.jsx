import React, { useState } from 'react';

/**
 * HexagonWithPopup (Responsive)
 * - Small rotated hexagon that shows a popup card on hover/focus
 * - Adjusts hexagon size based on screen width
 */

export default function HexagonWithPopup({
  title = 'Title',
  content = 'This is a small popup card.',// optional manual override
  size,
  cardPosition = 'top',
  className = ''
}) {
  const [open, setOpen] = useState(false);

  // Responsive size logic (if size prop not provided)
  const getResponsiveSize = () => {
    if (typeof window === 'undefined') return 40; // default for SSR safety
    const width = window.innerWidth;
    if (width < 640) return 5; // sm
    if (width < 1281) return 11; // md/lg
    if (width < 1445) return 15; // xl
    if (width < 1536) return 12; // xl
    return 28; // 2xl
  };

  const svgSize = size || getResponsiveSize();

  const posClasses = {
    top: 'bottom-full mb-2 left-1/2 transform -translate-x-1/2',
    bottom: 'top-full mt-2 left-1/2 transform -translate-x-1/2',
    left: 'right-full mr-2 top-1/2 transform -translate-y-1/2',
    right: 'left-full ml-2 top-1/2 transform -translate-y-1/2'
  };

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Hexagon SVG */}
      <button
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className="focus:outline-none"
        style={{ width: svgSize, height: svgSize, padding: 0 }}
      >
        <svg
          width={svgSize}
          height={svgSize}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transform rotate-90 transition-all duration-300 ease-in-out"
        >
          <polygon
            points="50,2 93,25 93,75 50,98 10,75 10,25"
            fill="#B89B7A"
            stroke="#B89B7A"
            strokeWidth="2"
          />
        </svg>
      </button>

      {/* Popup Card */}
      <div
        className={`absolute z-10 ${posClasses[cardPosition]} transition-all duration-300 ${
          open
            ? 'opacity-100 scale-100 pointer-events-auto'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="bg-white shadow-lg border border-gray-200 rounded-lg p-3 w-44 sm:w-52 text-left">
          <h3 className="font-semibold text-gray-900 text-sm mb-1">{title}</h3>
          <p className="text-gray-600 text-xs leading-snug">{content}</p>
        </div>
      </div>
    </div>
  );
}

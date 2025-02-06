import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function MenuButton({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null); // Ref to store the timeout ID

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // Clear any existing timeout
    }
    setIsOpen(true); // Open the dropdown immediately
  };

  const handleMouseLeave = () => {
    // Add a delay before closing the dropdown
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200); // Delay of 200ms
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main Button */}
      <button className="text-gray-700 font-medium hover:text-gray-900 focus:outline-none">
        {data.label}
      </button>

      {/* Dropdown Menu */}
      {data.type === "menu" && data.submenu && isOpen && (
        <div
          className="absolute left-0 mt-2 w-max bg-white border border-gray-200 rounded-md shadow-lg z-50"
        >
          {data.submenu.map((item, index) => (
            <Link
              key={index}
              to={item.url}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

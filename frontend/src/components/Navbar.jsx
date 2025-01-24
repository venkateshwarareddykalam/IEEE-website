import React from "react";
import { navbar } from "../constants";
import MenuButton from "./MenuButton";

const Navbar = () => {
  const buttons = navbar.filter((item) => item.type !== "icon");
  const icons = navbar.filter((item) => item.type === "icon");

  return (
    <nav className="h-16 bg-white shadow-md fixed top-0 w-full z-50">
      <div className="flex justify-between items-center px-6 h-full">
        {/* Left Side - Logos */}
        <div className="flex items-center space-x-6">
          <img
            src="https://s3-us-west-1.amazonaws.com/foscoshopify/graphics/uploads/2010/12/IEEE-logo.gif"
            alt="IEEE Logo"
            className="h-12 w-auto transition-transform duration-300 hover:scale-110"
          />
          <img
            src="https://www.cbit.ac.in/wp-content/uploads/2023/04/CBIT-LOGO-2023.png"
            alt="CBIT Logo"
            className="h-12 w-auto transition-transform duration-300 hover:scale-110"
          />
        </div>

        {/* Right Side - Menu Buttons */}
        <div className="flex space-x-6">
          {buttons.map((item, index) => (
            <MenuButton key={index} data={item} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

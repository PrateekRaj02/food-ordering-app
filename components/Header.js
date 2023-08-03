import React from "react";
import image from "../Assets/image.png";

function Header() {
  return (
    <div className="header">
      <img src={image} alt="logo" className="image" />
      <ul className="nav-items">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Header;

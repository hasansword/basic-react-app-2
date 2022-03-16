import React from "react";
import logo from "../images/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav>
      <img src={logo} alt="Airbnb Logo" className="logo" />
      <ul>
        <li>
          <h3>Basic React App 2</h3>
        </li>
      </ul>
    </nav>
  );
}

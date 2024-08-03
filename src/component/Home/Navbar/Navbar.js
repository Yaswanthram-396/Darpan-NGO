// src/Navbar.js
import React from "react";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isRotated, setIsRotated] = useState(false);

  // Function to toggle the rotation state
  const handleClick = () => {
    setIsRotated(!isRotated);
  };
  const Num = () => {
    return (
      <div class="navMobileOnclick">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">Our Projects</a>
        </li>
        <li>
          <a href="#about">Our Impact</a>
        </li>
        <li>
          <a href="#services">About Us</a>
        </li>
        <li className="navButtons-join">
          <button className="joinWithUs ">Join With Us</button>
        </li>
        <li className="navButtons-donate">
          <button className="donateStyling ">Donate</button>
        </li>
      </div>
    );
  };
  return (
    <>
      <nav>
        <div className="navbar-logo">
          <img className="logo" src="Darpan logo edit (1).svg" alt="reload" />
          <div>
            {/* <li>
            {" "}
            <p> Be the change-</p>
          </li>
          <li>
            {" "}
            <p>change the lies within You</p>
          </li> */}
          </div>
        </div>
        <ul className="navbar-links">
          <li className="listNav">
            <a href="/">Home</a>
          </li>
          <li className="listNav">
            <a href="#about">Our Projects</a>
          </li>
          <li className="listNav">
            <a href="#about">Our Impact</a>
          </li>
          <li className="listNav">
            <a href="#services">About Us</a>
          </li>
        </ul>
        <ul>
          <li className="navButtons-join">
            <button className="joinWithUs ">Join With Us</button>
          </li>
          <li className="navButtons-donate">
            <button className="donateStyling ">Donate</button>
          </li>
        </ul>
        <li
          onClick={handleClick}
          className={`navimgmobile ${isRotated ? "rotated" : ""}`}
        >
          <img class="navimg" src="Vector.svg" alt="reload" />
        </li>
      </nav>
      {isRotated ? <Num /> : ""}
    </>
  );
};

export default Navbar;

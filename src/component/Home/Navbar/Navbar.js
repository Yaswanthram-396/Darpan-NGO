import React from "react";
import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isRotated, setIsRotated] = useState(false);
  const [scrollTo, setScrollTo] = useState(null);

  useEffect(() => {
    if (scrollTo) {
      const section = document.getElementById(scrollTo.id);
      if (section) {
        console.log(`Scrolling to: ${scrollTo.id}`); // Debugging log
        const yOffset = scrollTo.offset || 0;
        const y =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      setScrollTo(null);
    }
  }, [scrollTo]);

  const handleScrollTo = (id, offset = 0) => {
    setScrollTo({ id, offset });
  };

  const handleAboutClick = () => {
    handleScrollTo("ContactUs", -142);
  };

  const handleProjectsClick = () => {
    handleScrollTo("ourProjects1", -50);
  };

  const handleImpactClick = () => {
    handleScrollTo("Our-Impact", -150); // Corrected the offset here
  };

  const handleClick = () => {
    setIsRotated(!isRotated);
  };

  const Num = () => {
    return (
      <div className="navMobileOnclick">
        <li>
          <a href="/">Home</a>
        </li>
        <li onClick={handleProjectsClick}>
          <p className="navbarLists">Our Projects</p>
        </li>
        <li onClick={handleImpactClick}>
          <p className="navbarLists">Our Impact</p>
        </li>
        <li onClick={handleAboutClick}>
          <p className="navbarLists"> Contact Us</p>
        </li>
        <li className="navButtons-join">
          <button className="joinWithUs">Join With Us</button>
        </li>
        <li className="navButtons-donate">
          <button className="donateStyling">Donate</button>
        </li>
      </div>
    );
  };

  return (
    <>
      <nav>
        <div className="navbar-logo">
          <img className="logo" src="Darpan logo edit (1).svg" alt="reload" />
        </div>
        <ul className="navbar-links">
          <li className="listNav">
            <a href="/">Home</a>
          </li>
          <li className="listNav" onClick={handleProjectsClick}>
            <p className="navbarLists">Our Projects</p>
          </li>
          <li className="listNav" onClick={handleImpactClick}>
            <p className="navbarLists">Our Impact</p>
          </li>
          <li className="listNav" onClick={handleAboutClick}>
            <p className="navbarLists"> Contact Us</p>
          </li>
        </ul>
        <ul>
          <li className="navButtons-join">
            <button className="joinWithUs">Join With Us</button>
          </li>
          <li className="navButtons-donate">
            <button className="donateStyling">Donate</button>
          </li>
        </ul>
        <li
          onClick={handleClick}
          className={`navimgmobile ${isRotated ? "rotated" : ""}`}
        >
          <img className="navimg" src="Vector.svg" alt="reload" />
        </li>
      </nav>
      {isRotated ? <Num /> : ""}
    </>
  );
};

export default Navbar;

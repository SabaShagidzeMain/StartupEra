import React, { useState } from "react";
import "./style.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="header">
        <div className="header-left">
          <img
            src="src/assets/logo/logoWhite.png"
            alt=""
            className="header-logo"
          />
        </div>
        <div className="header-right">
          <ul className={`header-list ${menuOpen ? "open" : ""}`}>
            <li className="header-list-item">
              <a href="#" className="list-link">
                მთავარი
              </a>
            </li>
            <li className="header-list-item">
              <a href="#" className="list-link">
                პროდუქტი
              </a>
            </li>
            <li className="header-list-item">
              <a href="#" className="list-link">
                კონტაქტი
              </a>
            </li>
            <li className="header-list-item">
              <a href="#" className="list-link">
                En
              </a>
            </li>
          </ul>

          <div
            className="hamburger-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

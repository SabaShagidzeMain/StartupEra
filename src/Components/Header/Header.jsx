import React, { useState } from "react";
import "./style.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="header" style={{ fontFamily: "GL Tatishvili Metal" }}>
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
                Main
              </a>
            </li>
            <li className="header-list-item">
              <a href="#" className="list-link">
                Product
              </a>
            </li>
            <li className="header-list-item">
              <a href="#" className="list-link">
                Contact
              </a>
            </li>
            <li className="header-list-item">
              <a href="#" className="list-link">
                ქარ
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

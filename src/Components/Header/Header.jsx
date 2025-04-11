import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./style.css";

import Logo from "/public/logo/logoWhite.png";

import i18next from "../../i18n";

const Header = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18next.language === "en" ? "ge" : "en";
    i18next.changeLanguage(newLang);
  };

  return (
    <div className="header">
      <div className="header-left">
        <img src={Logo} alt="logo" className="header-logo" />
      </div>
      <div className="header-right">
        <ul className={`header-list ${menuOpen ? "open" : ""}`}>
          <li className="header-list-item">
            <a href="#" className="list-link">
              {t("main")}
            </a>
          </li>
          <li className="header-list-item">
            <a href="#" className="list-link">
              {t("product")}
            </a>
          </li>
          <li className="header-list-item">
            <a href="#" className="list-link">
              {t("contact")}
            </a>
          </li>
          <li className="header-list-item">
            <a href="#" onClick={toggleLanguage} className="list-link">
              {i18next.language === "en" ? "ქარ" : "En"}{" "}
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
  );
};

export default Header;

import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="footer-wrapper">
        <p className="copyright">©2025 {t("footerTxt")}</p>
        <p className="email">Dummytext@gmail.com</p>
      </div>
    </>
  );
};

export default Footer;

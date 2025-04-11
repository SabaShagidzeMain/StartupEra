import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";

const AboutCards = () => {
  const { t } = useTranslation();
  return (
    <>
      <div id="About" className="about-wrapper">
        <div className="about-header">
          <h2>{t("aboutHeader")}</h2>
        </div>
        <div className="about-card-wrapper">
          <div className="about-card">
            <h3>{t("abt1hd")}</h3>
            <p>{t("abt1txt")}</p>
          </div>
          <div className="about-card">
            <h3>{t("abt2hd")}</h3>
            <p>{t("abt2txt")}</p>
          </div>
          <div className="about-card">
            <h3>{t("abt3hd")}</h3>
            <p>{t("abt3txt")}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCards;

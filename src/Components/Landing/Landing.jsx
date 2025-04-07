import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";

const Landing = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="landing-wrapper">
        <h1>{t("landingHeader")}</h1>
        <p>{t("landingText")}</p>
        <div className="email-input">
          <input
            type="text"
            placeholder={t("emailPlaceHolder")}
            className="input-form"
          />
          <button className="input-button">{t("landingButton")}</button>
        </div>
      </div>
    </>
  );
};

export default Landing;

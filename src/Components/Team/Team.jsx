import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";

const Team = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="team-wrapper">
        <h2 className="team-header">{t("teamHd")}</h2>
        <div className="team-card-wrapper">
          <div className="team-card">
            <div className="image-wrapper">
              <img
                className="team-card-image"
                src="src/assets/team/tornike.png"
                alt=""
              />
            </div>
            <div className="card-bot">
              <div className="card-left">
                <p>{t("team1")}</p>
                <p>CPO</p>
              </div>
              <div className="card-right">
                <img src="src/assets/team/linkedin.png" alt="" />
              </div>
            </div>
          </div>
          <div className="team-card">
            <div className="image-wrapper">
              <img
                className="team-card-image"
                src="src/assets/team/tornike.png"
                alt=""
              />
            </div>
            <div className="card-bot">
              <div className="card-left">
                <p>{t("team2")}</p>
                <p>CTO</p>
              </div>
              <div className="card-right">
                <img src="src/assets/team/linkedin.png" alt="" />
              </div>
            </div>
          </div>
          <div className="team-card">
            <div className="image-wrapper">
              <img
                className="team-card-image"
                src="src/assets/team/tornike.png"
                alt=""
              />
            </div>
            <div className="card-bot">
              <div className="card-left">
                <p>{t("team3")}</p>
                <p>CMO</p>
              </div>
              <div className="card-right">
                <img src="src/assets/team/linkedin.png" alt="" />
              </div>
            </div>
          </div>
          <div className="team-card">
            <div className="image-wrapper">
              <img
                className="team-card-image"
                src="src/assets/team/tornike.png"
                alt=""
              />
            </div>
            <div className="card-bot">
              <div className="card-left">
                <p>{t("team4")}</p>
                <p>COO</p>
              </div>
              <div className="card-right">
                <img src="src/assets/team/linkedin.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;

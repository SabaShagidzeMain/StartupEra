import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";

import Saba from "/public/team/Saba.png";
import Tika from "/public/team/Tika.png";
import Tornike from "/public/team/Tornike.png";
import Zura from "/public/team/Zura.png";
import Linkedin from "/public/team/linkedin.png";

const Team = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="team-wrapper">
        <h2 className="team-header">{t("teamHd")}</h2>
        <div className="team-card-wrapper">
          <div className="team-card">
            <div className="image-wrapper">
              <img className="team-card-image" src={Tika} alt="" />
            </div>
            <div className="card-bot">
              <div className="card-left">
                <p>{t("team1")}</p>
                <p>CPO</p>
              </div>
              <div className="card-right">
                <a
                  href="https://www.linkedin.com/in/tikamatsiashvili/"
                  target="_blank"
                >
                  <img src={Linkedin} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="team-card">
            <div className="image-wrapper">
              <img className="team-card-image" src={Saba} alt="" />
            </div>
            <div className="card-bot">
              <div className="card-left">
                <p>{t("team2")}</p>
                <p>CTO</p>
              </div>
              <div className="card-right">
                <a
                  href="https://www.linkedin.com/in/saba-shagidze/"
                  target="_blank"
                >
                  <img src={Linkedin} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="team-card">
            <div className="image-wrapper">
              <img className="team-card-image" src={Zura} alt="" />
            </div>
            <div className="card-bot">
              <div className="card-left">
                <p>{t("team3")}</p>
                <p>CMO</p>
              </div>
              <div className="card-right">
                <a
                  href="https://www.linkedin.com/in/zura-wiklauri-b2753a244/"
                  target="_blank"
                >
                  <img src={Linkedin} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="team-card">
            <div className="image-wrapper">
              <img className="team-card-image" src={Tornike} alt="" />
            </div>
            <div className="card-bot">
              <div className="card-left">
                <p>{t("team4")}</p>
                <p>COO</p>
              </div>
              <div className="card-right">
                <a
                  href="https://www.linkedin.com/in/tornikeramazashvili/"
                  target="_blank"
                >
                  <img src={Linkedin} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;

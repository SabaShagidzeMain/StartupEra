import React from "react";
import "./style.css";

const Team = () => {
  return (
    <>
      <div className="team-wrapper">
        <h2 className="team-header">ვინ ვართ ჩვენ</h2>
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
                <p>თიკა მაწიაშვილი</p>
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
                <p>საბა შაგიძე</p>
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
                <p>ზურა წიკლაური</p>
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
                <p>თორნიკე რამაზაშვილი</p>
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

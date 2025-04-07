import React from "react";
import "./style.css";

const Landing = () => {
  return (
    <>
      <div className="landing-wrapper">
        <h1>მთლიანი სტარტაპ ეკოსისტემა შენს ხელებში</h1>
        <p>
          სტარტაპერა არის ინოვაციური მობილური აპლიკაცია, რომელიც ქმნის ერთიან
          ციფრულ ეკოსისტემას სტარტაპების, მენტორების, აქსელერატორებისა და
          ინვესტორების დასაკავშირებლად
        </p>
        <div className="email-input">
          <input
            type="text"
            placeholder="ჩაწერე შენი ელ-ფოსტა..."
            className="input-form"
          />
          <button className="input-button">ადრეული წვდომის მიღება</button>
        </div>
      </div>
    </>
  );
};

export default Landing;
